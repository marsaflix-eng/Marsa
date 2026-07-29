# -*- coding: utf-8 -*-
"""
Apply real SEAGM gift-card product images to products.js.

Sources:
  - scripts/seagm_image_map.json (scraped SEAGM catalog)
  - brand-level fallbacks derived from that map
  - optional live resolve of missing titles (slow, rate-limited)

Usage:
  python scripts/apply_product_images.py
  python scripts/apply_product_images.py --resolve-missing
"""

from __future__ import annotations

import argparse
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PRODUCTS_JS = ROOT / "products.js"
MAP_PATH = Path(__file__).resolve().parent / "seagm_image_map.json"
IMG_HOST = "https://seagm-media.seagmcdn.com/item_480"
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)

IMG_BASE = "https://seagm-media.seagmcdn.com/item_480"

# Keyword groups → preferred SEAGM title substrings (lower) for brand image fallback
BRAND_KEYWORDS: list[tuple[tuple[str, ...], str]] = [
    (("itunes", "apple gift", "apple"), "itunes gift card (us)"),
    (("google play",), "google play gift card (us)"),
    (("steam",), "steam wallet code (usd)"),
    (("playstation", "psn"), "playstation network card (us)"),
    (("xbox",), "xbox live gift card (us)"),
    (("nintendo", "eshop"), "nintendo eshop"),
    (("netflix",), "netflix gift card (us)"),
    (("spotify",), "spotify"),
    (("roblox", "rbx"), "rbx credit gift card"),
    (("pubg",), "pubg mobile uc redeem code"),
    (("free fire max",), "free fire max diamonds pins (garena)"),
    (("free fire", "garena voucher"), "free fire diamonds pins (garena)"),
    (("mobile legends",), "mobile legends"),
    (("binance", "crypto"), "binance gift card"),
    (("shahid", "mbc"), "mbc shahid"),
    (("osn",), "osn+"),
    (("starz",), "starzplay"),
    (("discord",), "discord"),
    (("razer",), "razer"),
    (("amazon",), "amazon"),
    (("twitch",), "twitch"),
    (("hulu",), "hulu"),
    (("paramount",), "paramount"),
    (("bilibili", "bstation"), "bilibili"),
    (("honor of kings",), "honor of kings"),
    (("battle.net", "blizzard"), "battle.net"),
    (("unipin",), "unipin"),
    (("minecraft", "minecoin"), "minecraft"),
    (("fortnite", "epic games", "v-bucks", "vbucks"), "fortnite"),
    (("ea sports", "ea fc", "origin"), "ea sports"),
    (("riot", "valorant", "league of legends"), "riot"),
    (("genshin", "hoyoverse", "mihoyo"), "genshin"),
    (("snapchat",), "snapchat"),
    (("telegram",), "telegram"),
    (("tiktok",), "tiktok"),
    (("youtube",), "youtube"),
    (("eneba",), "eneba"),
    (("iqiyi",), "iqiyi"),
    (("viu",), "viu"),
    (("wetv",), "wetv"),
    (("sling",), "sling"),
    (("showtime",), "showtime"),
    (("astro", "njoi"), "astro"),
]

# Hardcoded SEAGM item IDs when title map misses a brand
CURATED_BRAND_IDS: list[tuple[tuple[str, ...], int]] = [
    (("free fire max",), 1397),
    (("free fire",), 999),
    (("itunes", "apple gift", "apple"), 191),
    (("google play",), 225),
    (("steam",), 196),
    (("playstation", "psn"), 189),
    (("xbox",), 194),
    (("netflix",), 595),
    (("roblox", "rbx"), 1674),
    (("pubg",), 843),
    (("binance",), 1616),
    (("shahid", "mbc"), 1478),
    (("osn",), 2138),
    (("starz",), 2133),
    (("ludo star",), 3123),
    (("garena voucher",), 3082),
    (("honor of kings",), 1918),
    (("eneba",), 2013),
    (("minecraft", "minecoin"), 1164),
    (("iqiyi",), 1927),
    (("viu",), 1673),
    (("wetv",), 2728),
    (("bilibili", "bstation"), 1441),
    (("rewarble",), 1834),
    (("showtime",), 1758),
    (("indieflix",), 3257),
    (("yango",), 2376),
    (("carrom gold",), 1481),
    (("game hollywood",), 3107),
    (("kinguin",), 2541),
    (("ludo club",), 1479),
    (("nida al harb",), 2422),
    (("funcard",), 1095),
    (("game club",), 1258),
    (("garena shells",), 56),
    (("gocash",), 885),
    (("gosu",), 1157),
    (("imvu",), 0),  # placeholder skipped below
]


def normalize(name: str) -> str:
    n = name.lower().strip()
    n = n.replace("&", " and ")
    n = re.sub(r"[\[\](){}]", " ", n)
    n = re.sub(r"[^a-z0-9\s+]", " ", n)
    n = re.sub(r"\s+", " ", n).strip()
    # unify region tokens
    n = re.sub(r"\bunited states\b", "us", n)
    n = re.sub(r"\bunited kingdom\b", "uk", n)
    n = re.sub(r"\bgift card\b", "giftcard", n)
    n = re.sub(r"\s+", "", n)
    return n


def load_map() -> dict:
    if not MAP_PATH.exists():
        return {"by_title": {}, "by_slug": {}, "by_id": {}}
    return json.loads(MAP_PATH.read_text(encoding="utf-8"))


def build_indexes(data: dict):
    by_title_img: dict[str, str] = {}
    by_norm: dict[str, str] = {}
    # by_title may already be title→url or title→obj
    raw_titles = data.get("by_title") or {}
    for title, val in raw_titles.items():
        img = val if isinstance(val, str) else (val or {}).get("image")
        if not img:
            continue
        t = title.lower().strip()
        by_title_img[t] = img
        by_norm[normalize(title)] = img

    # also from by_id objects
    for _id, obj in (data.get("by_id") or {}).items():
        if not isinstance(obj, dict):
            continue
        title = (obj.get("title") or "").lower().strip()
        img = obj.get("image") or f"{IMG_HOST}/{_id}.png"
        if title:
            by_title_img[title] = img
            by_norm[normalize(title)] = img

    return by_title_img, by_norm


def brand_fallbacks(by_title_img: dict[str, str]) -> dict[str, str]:
    """Map brand keyword → image url found in catalog or curated IDs."""
    out: dict[str, str] = {}
    titles = list(by_title_img.keys())

    def find_title(substr: str) -> str | None:
        s = substr.lower()
        for t in titles:
            if s in t:
                return by_title_img[t]
        return None

    for keys, prefer in BRAND_KEYWORDS:
        img = find_title(prefer)
        if not img:
            for k in keys:
                img = find_title(k)
                if img:
                    break
        if img:
            for k in keys:
                out[k] = img

    # curated IDs fill gaps (longer keys win later via sort in match)
    for keys, item_id in CURATED_BRAND_IDS:
        if not item_id:
            continue
        img = f"{IMG_BASE}/{item_id}.png"
        for k in keys:
            out.setdefault(k, img)
    return out


def match_image(
    name: str,
    by_title_img: dict[str, str],
    by_norm: dict[str, str],
    brand_fb: dict[str, str],
) -> tuple[str | None, str]:
    low = name.lower().strip()
    if low in by_title_img:
        return by_title_img[low], "exact"
    n = normalize(name)
    if n in by_norm:
        return by_norm[n], "norm"

    # soft: remove region tokens and match longest title containment
    best = None
    best_score = 0
    for t, img in by_title_img.items():
        tn = normalize(t)
        if not tn:
            continue
        if tn == n:
            return img, "norm2"
        # partial: both share significant core
        if len(tn) >= 8 and (tn in n or n in tn):
            score = min(len(tn), len(n))
            if score > best_score:
                best_score = score
                best = img
    if best and best_score >= 12:
        return best, "partial"

    # brand fallback
    for key, img in sorted(brand_fb.items(), key=lambda x: -len(x[0])):
        if key in low:
            return img, f"brand:{key}"

    return None, "none"


def fetch_html(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return r.read().decode("utf-8", "replace")


def resolve_live(name: str) -> str | None:
    """Try SEAGM search then extract first item_480 image."""
    q = urllib.parse.quote(name)
    url = f"https://www.seagm.com/search?keywords={q}"
    try:
        html = fetch_html(url)
    except Exception:
        return None
    m = re.search(r"seagm-media\.seagmcdn\.com/item_480/(\d+)\.png", html)
    if m:
        return f"{IMG_HOST}/{m.group(1)}.png"
    return None


def update_products_js(resolve_missing: bool = False) -> None:
    data = load_map()
    by_title_img, by_norm = build_indexes(data)
    brand_fb = brand_fallbacks(by_title_img)

    text = PRODUCTS_JS.read_text(encoding="utf-8")

    # Parse products array roughly via regex on image fields with nearby name
    # Safer: load as JS-ish JSON by extracting PRODUCTS = [...]
    m = re.search(r"const PRODUCTS = (\[[\s\S]*?\]);\s*\nconst STORE_CONFIG", text)
    if not m:
        raise SystemExit("Could not locate PRODUCTS array in products.js")

    products = json.loads(m.group(1))
    stats = {"exact": 0, "norm": 0, "norm2": 0, "partial": 0, "brand": 0, "live": 0, "none": 0}

    for p in products:
        name = p.get("name") or ""
        img, how = match_image(name, by_title_img, by_norm, brand_fb)
        if not img and resolve_missing:
            time.sleep(1.2)
            img = resolve_live(name)
            if img:
                how = "live"
                # cache into map
                by_title_img[name.lower()] = img
                by_norm[normalize(name)] = img

        if img:
            p["image"] = img
            if how.startswith("brand"):
                stats["brand"] += 1
            elif how in stats:
                stats[how] += 1
            else:
                stats["exact"] += 1
        else:
            stats["none"] += 1
            # Drop Clearbit logos when no real product art is available
            # so UI falls back to brand-colored icon tiles instead of logos
            if isinstance(p.get("image"), str) and "clearbit" in p["image"]:
                p["image"] = None

    new_products = json.dumps(products, ensure_ascii=False, indent=2)
    new_text = text[: m.start(1)] + new_products + text[m.end(1) :]
    # update comment about logos
    new_text = re.sub(
        r" \* Logos via Clearbit \(logo\.clearbit\.com\)",
        " * Product images via SEAGM CDN (seagm-media.seagmcdn.com/item_480)",
        new_text,
    )
    PRODUCTS_JS.write_text(new_text, encoding="utf-8")

    with_img = sum(1 for p in products if p.get("image"))
    seagm = sum(
        1
        for p in products
        if isinstance(p.get("image"), str) and "seagmcdn.com" in p["image"]
    )
    print(f"Updated {PRODUCTS_JS}")
    print(f"Products: {len(products)} | with image: {with_img} | seagm: {seagm}")
    print("Match stats:", stats)

    # persist expanded map
    data["by_title"] = by_title_img
    data["count"] = len(data.get("by_id") or by_title_img)
    MAP_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--resolve-missing",
        action="store_true",
        help="Hit SEAGM search for products without a matched image (slow)",
    )
    args = ap.parse_args()
    update_products_js(resolve_missing=args.resolve_missing)


if __name__ == "__main__":
    main()
