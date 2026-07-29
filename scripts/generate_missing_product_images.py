# -*- coding: utf-8 -*-
"""
Generate accurate gift-card style product images (PNG, transparent corners)
for products that still lack images in products.js.

Output: assets/products/{product-id}.png
Then updates products.js image paths.
"""

from __future__ import annotations

import json
import re
import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PRODUCTS_JS = ROOT / "products.js"
OUT_DIR = ROOT / "assets" / "products"

W, H = 480, 640
RADIUS = 36


def hex_to_rgb(h: str) -> tuple[int, int, int]:
    h = (h or "#147BFE").lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    if len(h) != 6:
        return (20, 123, 254)
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def clamp(v, a=0, b=255):
    return max(a, min(b, int(v)))


def lighten(rgb, amount=0.22):
    return tuple(clamp(c + (255 - c) * amount) for c in rgb)


def darken(rgb, amount=0.28):
    return tuple(clamp(c * (1 - amount)) for c in rgb)


def luminance(rgb):
    r, g, b = [c / 255 for c in rgb]
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def rounded_mask(size, radius):
    m = Image.new("L", size, 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return m


def load_font(size: int, bold: bool = True):
    candidates = []
    if bold:
        candidates += [
            r"C:\Windows\Fonts\segoeuib.ttf",
            r"C:\Windows\Fonts\arialbd.ttf",
            r"C:\Windows\Fonts\calibrib.ttf",
            r"C:\Windows\Fonts\tahomabd.ttf",
        ]
    candidates += [
        r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\calibri.ttf",
        r"C:\Windows\Fonts\tahoma.ttf",
    ]
    for p in candidates:
        if Path(p).exists():
            try:
                return ImageFont.truetype(p, size)
            except OSError:
                pass
    return ImageFont.load_default()


def wrap_text(draw, text, font, max_width):
    words = text.split()
    if not words:
        return [""]
    lines, cur = [], words[0]
    for w in words[1:]:
        trial = cur + " " + w
        if draw.textlength(trial, font=font) <= max_width:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    lines.append(cur)
    return lines


def short_title(name: str) -> str:
    """Clean display title for card face."""
    t = re.sub(r"\s+", " ", name).strip()
    # separate trailing currency codes for nicer wrapping
    t = re.sub(r"\b(Gift Card)(USD|EUR|AUD|CAD|PLN|GBP)\b", r"\1 \2", t, flags=re.I)
    # keep region in parens but shorten very long names
    if len(t) > 42:
        m = re.match(r"^(.*?)(\s*\([^)]+\))\s*$", t)
        if m and len(m.group(1)) > 28:
            core = m.group(1).strip()
            if len(core) > 34:
                core = core[:31] + "…"
            t = core + m.group(2)
        elif len(t) > 48:
            t = t[:45] + "…"
    return t


def brand_style(name: str, color: str) -> dict:
    """Brand-specific palette / accent tweaks for accuracy."""
    n = name.lower()
    base = hex_to_rgb(color)
    style = {
        "base": base,
        "accent": lighten(base, 0.35),
        "deep": darken(base, 0.35),
        "pattern": "diagonal",
        "badge": "GIFT CARD",
    }

    if "snapchat" in n:
        style.update(base=(255, 252, 0), accent=(255, 255, 180), deep=(40, 40, 40), badge="PLUS", pattern="dots")
    elif "twitch" in n:
        style.update(base=(145, 70, 255), accent=(190, 140, 255), deep=(40, 10, 80), badge="GIFT CARD", pattern="waves")
    elif "paramount" in n:
        style.update(base=(0, 100, 255), accent=(80, 160, 255), deep=(0, 30, 90), badge="STREAMING")
    elif "ea sports" in n or "ea fc" in n:
        style.update(base=(10, 10, 10), accent=(0, 180, 90), deep=(0, 0, 0), badge="FC MOBILE", pattern="grid")
    elif "valorant" in n:
        style.update(base=(255, 70, 85), accent=(255, 140, 150), deep=(40, 0, 10), badge="VP")
    elif "riot" in n:
        style.update(base=(209, 54, 57), accent=(255, 120, 120), deep=(60, 10, 12), badge="RIOT POINTS")
    elif "meta quest" in n or "meta " in n:
        style.update(base=(6, 104, 225), accent=(100, 170, 255), deep=(0, 40, 100), badge="QUEST")
    elif "sling" in n:
        style.update(base=(255, 107, 0), accent=(255, 170, 80), deep=(90, 30, 0), badge="TV")
    elif "showtime" in n:
        style.update(base=(180, 0, 0), accent=(255, 80, 80), deep=(60, 0, 0), badge="SHOWTIME")
    elif "point blank" in n:
        style.update(base=(255, 69, 0), accent=(255, 150, 80), deep=(80, 20, 0), badge="PB CASH")
    elif "ongame" in n:
        style.update(base=(245, 166, 35), accent=(255, 210, 100), deep=(90, 55, 0), badge="CASH")
    elif "imvu" in n:
        style.update(base=(255, 51, 153), accent=(255, 140, 200), deep=(90, 0, 45), badge="CREDITS")
    elif "netease" in n:
        style.update(base=(230, 0, 18), accent=(255, 90, 90), deep=(70, 0, 5), badge="PAY")
    elif "huawei" in n:
        style.update(base=(207, 10, 44), accent=(255, 90, 110), deep=(70, 0, 15), badge="GIFT CARD")
    elif "almosafer" in n:
        style.update(base=(0, 153, 136), accent=(80, 210, 190), deep=(0, 60, 55), badge="TRAVEL")
    elif "astro" in n or "njoi" in n:
        style.update(base=(230, 0, 18), accent=(255, 90, 90), deep=(70, 0, 8), badge="NJOI")
    elif "rtl" in n:
        style.update(base=(222, 0, 0), accent=(255, 90, 90), deep=(70, 0, 0), badge="RTL+")
    elif "s sport" in n:
        style.update(base=(227, 6, 19), accent=(255, 90, 90), deep=(70, 0, 5), badge="SPORT")
    elif "tvb" in n:
        style.update(base=(230, 0, 18), accent=(255, 100, 100), deep=(60, 0, 5), badge="TVB+")
    elif "apex" in n:
        style.update(base=(218, 41, 28), accent=(255, 120, 100), deep=(50, 0, 0), badge="COINS")
    elif "bitcash" in n:
        style.update(base=(0, 140, 200), accent=(100, 200, 255), deep=(0, 40, 70), badge="BITCASH")
    elif "webmoney" in n:
        style.update(base=(0, 102, 179), accent=(80, 170, 230), deep=(0, 35, 70), badge="WEBMONEY")
    elif "gash" in n:
        style.update(base=(0, 120, 200), accent=(80, 180, 255), deep=(0, 40, 80), badge="GASH")
    elif "phonepe" in n:
        style.update(base=(90, 40, 180), accent=(160, 120, 255), deep=(30, 10, 70), badge="GIFT CARD")
    elif "azteco" in n or "bitcoin" in n:
        style.update(base=(247, 147, 26), accent=(255, 200, 80), deep=(90, 45, 0), badge="BTC")
    elif "grab" in n:
        style.update(base=(0, 176, 79), accent=(100, 230, 150), deep=(0, 70, 30), badge="VOUCHER")
    elif "yalla ludo" in n:
        style.update(base=(255, 140, 0), accent=(255, 200, 80), deep=(90, 45, 0), badge="YALLA")
    elif "teen patti" in n:
        style.update(base=(180, 30, 30), accent=(255, 120, 80), deep=(60, 0, 0), badge="GOLD")
    elif "u-next" in n or "u next" in n:
        style.update(base=(0, 50, 160), accent=(80, 130, 255), deep=(0, 15, 60), badge="U-NEXT")
    elif "dmm" in n:
        style.update(base=(0, 100, 180), accent=(80, 170, 255), deep=(0, 35, 70), badge="DMM")
    elif "au pay" in n:
        style.update(base=(235, 0, 40), accent=(255, 100, 120), deep=(80, 0, 15), badge="au PAY")
    elif "wizard101" in n:
        style.update(base=(70, 40, 140), accent=(150, 120, 230), deep=(25, 10, 55), badge="CROWNS")
    elif "rainbow six" in n:
        style.update(base=(30, 30, 30), accent=(200, 160, 60), deep=(0, 0, 0), badge="R6")
    elif "lifeafter" in n:
        style.update(base=(40, 80, 90), accent=(120, 180, 190), deep=(10, 25, 30), badge="PIN")
    elif "moba legends" in n:
        style.update(base=(20, 40, 120), accent=(80, 140, 255), deep=(5, 10, 50), badge="DIAMONDS")
    elif "mint prepaid" in n:
        style.update(base=(0, 170, 130), accent=(100, 230, 190), deep=(0, 60, 45), badge="PREPAID")
    elif "bigpoint" in n:
        style.update(base=(255, 100, 0), accent=(255, 170, 80), deep=(90, 35, 0), badge="EPIN")
    elif "kinguin" in n:
        style.update(base=(255, 80, 0), accent=(255, 160, 80), deep=(90, 25, 0), badge="GIFT CARD")
    elif "rewarble" in n:
        style.update(base=(0, 180, 120), accent=(100, 230, 180), deep=(0, 60, 40), badge="REWARBLE")
    elif "funcard" in n:
        style.update(base=(0, 120, 90), accent=(60, 200, 150), deep=(0, 40, 30), badge="FUNCARD")
    elif "garena shells" in n:
        style.update(base=(0, 160, 80), accent=(100, 220, 140), deep=(0, 50, 25), badge="SHELLS")

    return style


def draw_pattern(draw, style, box):
    x0, y0, x1, y1 = box
    base = style["base"]
    accent = style["accent"]
    pat = style.get("pattern", "diagonal")
    if pat == "dots":
        for y in range(y0 + 20, y1 - 20, 28):
            for x in range(x0 + 20, x1 - 20, 28):
                draw.ellipse((x, y, x + 6, y + 6), fill=(*accent, 50))
    elif pat == "grid":
        for x in range(x0 + 30, x1 - 10, 40):
            draw.line((x, y0 + 20, x, y1 - 20), fill=(*accent, 28), width=1)
        for y in range(y0 + 30, y1 - 10, 40):
            draw.line((x0 + 20, y, x1 - 20, y), fill=(*accent, 28), width=1)
    elif pat == "waves":
        for i, y in enumerate(range(y0 + 80, y1 - 40, 36)):
            pts = []
            for x in range(x0 + 10, x1 - 10, 12):
                yy = y + int(10 * math.sin((x + i * 20) / 28))
                pts.append((x, yy))
            if len(pts) > 1:
                draw.line(pts, fill=(*accent, 40), width=2)
    else:  # diagonal
        for i in range(-H, W + H, 28):
            draw.line((x0 + i, y0, x0 + i + H, y1), fill=(*accent, 22), width=2)


def create_card(product: dict) -> Image.Image:
    name = product.get("name") or "Product"
    region = product.get("region") or ""
    category = product.get("categoryName") or product.get("category") or ""
    color = product.get("color") or "#147BFE"
    style = brand_style(name, color)
    base, accent, deep = style["base"], style["accent"], style["deep"]
    light_text = luminance(base) < 0.55

    # Full transparent canvas
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    # Soft shadow layer
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((18, 22, W - 14, H - 12), radius=RADIUS, fill=(0, 0, 0, 55))
    shadow = shadow.filter(ImageFilter.GaussianBlur(10))
    img = Image.alpha_composite(img, shadow)

    # Card body with vertical gradient
    card = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    cd = ImageDraw.Draw(card)
    # paint gradient manually
    body = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    for y in range(H):
        t = y / max(H - 1, 1)
        # blend deep -> base -> accent
        if t < 0.55:
            u = t / 0.55
            r = clamp(deep[0] * (1 - u) + base[0] * u)
            g = clamp(deep[1] * (1 - u) + base[1] * u)
            b = clamp(deep[2] * (1 - u) + base[2] * u)
        else:
            u = (t - 0.55) / 0.45
            r = clamp(base[0] * (1 - u) + accent[0] * u)
            g = clamp(base[1] * (1 - u) + accent[1] * u)
            b = clamp(base[2] * (1 - u) + accent[2] * u)
        ImageDraw.Draw(body).line([(0, y), (W, y)], fill=(r, g, b, 255))

    mask = rounded_mask((W, H), RADIUS)
    body.putalpha(mask)
    card = Image.alpha_composite(card, body)

    # Inner padding box for patterns/text
    draw = ImageDraw.Draw(card)
    inset = 22
    box = (inset, inset, W - inset, H - inset)
    draw_pattern(draw, style, box)

    # Top shine
    shine = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shine)
    sd.ellipse((-80, -120, W + 40, 260), fill=(255, 255, 255, 38 if light_text else 55))
    shine.putalpha(Image.composite(shine.split()[-1], Image.new("L", (W, H), 0), mask))
    card = Image.alpha_composite(card, shine)
    draw = ImageDraw.Draw(card)

    # Border ring
    draw.rounded_rectangle(
        (10, 10, W - 11, H - 11),
        radius=RADIUS - 4,
        outline=(255, 255, 255, 55 if light_text else 90),
        width=2,
    )

    # Badge pill
    badge = style.get("badge") or "GIFT CARD"
    font_badge = load_font(18, True)
    bw = draw.textlength(badge, font=font_badge)
    bx0, by0 = 36, 40
    bx1, by1 = bx0 + bw + 28, by0 + 34
    pill_bg = (255, 255, 255, 40) if light_text else (0, 0, 0, 45)
    draw.rounded_rectangle((bx0, by0, bx1, by1), radius=18, fill=pill_bg)
    tcol = (255, 255, 255, 240) if light_text else (20, 20, 20, 240)
    # for yellow snapchat etc, force dark text if base is light
    if not light_text:
        tcol = (20, 20, 20, 240)
    else:
        tcol = (255, 255, 255, 245)
    draw.text((bx0 + 14, by0 + 6), badge, font=font_badge, fill=tcol)

    # Center monogram circle
    cx, cy, cr = W // 2, int(H * 0.42), 72
    circle_fill = (255, 255, 255, 28) if light_text else (0, 0, 0, 35)
    draw.ellipse((cx - cr, cy - cr, cx + cr, cy + cr), fill=circle_fill)
    draw.ellipse(
        (cx - cr + 6, cy - cr + 6, cx + cr - 6, cy + cr - 6),
        outline=(255, 255, 255, 70 if light_text else 100),
        width=3,
    )

    # Monogram letters from product name (prefer brand keywords)
    nlow = name.lower()
    mono_map = [
        (("snapchat",), "SC"),
        (("twitch",), "TTV"),
        (("paramount",), "P+"),
        (("ea sports", "ea fc"), "FC"),
        (("valorant",), "VAL"),
        (("riot",), "RP"),
        (("meta quest", "meta"), "MQ"),
        (("netease",), "NE"),
        (("point blank",), "PB"),
        (("apex",), "AL"),
        (("imvu",), "IM"),
        (("huawei",), "HW"),
        (("phonepe",), "PP"),
        (("almosafer",), "AM"),
        (("rainbow six",), "R6"),
        (("yalla ludo",), "YL"),
        (("teen patti",), "TP"),
        (("bitcash",), "BC"),
        (("webmoney",), "WM"),
    ]
    mono = None
    for keys, mval in mono_map:
        if any(k in nlow for k in keys):
            mono = mval
            break
    if not mono:
        core = re.sub(r"\s*\([^)]*\)\s*", " ", name)
        core = re.sub(
            r"\b(gift|card|code|pin|redeem|prepaid|voucher|subscription|mobile)\b",
            " ",
            core,
            flags=re.I,
        )
        core = re.sub(r"\s+", " ", core).strip()
        words = [w for w in re.split(r"\s+", core) if w]
        if not words:
            mono = "M"
        elif len(words) == 1:
            mono = words[0][:2].upper()
        else:
            mono = (words[0][0] + words[1][0]).upper()
    font_mono = load_font(52, True)
    mw = draw.textlength(mono, font=font_mono)
    draw.text((cx - mw / 2, cy - 30), mono, font=font_mono, fill=tcol)

    # Title
    title = short_title(name)
    font_title = load_font(28, True)
    max_w = W - 64
    lines = wrap_text(draw, title, font_title, max_w)
    lines = lines[:3]
    y = int(H * 0.62)
    for line in lines:
        tw = draw.textlength(line, font=font_title)
        draw.text(((W - tw) / 2, y), line, font=font_title, fill=tcol)
        y += 34

    # Region / category footer (Latin only — system fonts may not render Arabic)
    cat_en = {
        "subscriptions": "Subscription",
        "video-on-demand": "Streaming",
        "gift-cards": "Gift Card",
        "game-cards": "Game Card",
        "mobile-game-cards": "Mobile Game",
        "console-others": "Digital",
    }
    font_small = load_font(16, False)
    footer_bits = []
    if region:
        footer_bits.append(str(region))
    cat_key = product.get("category") or ""
    if cat_key in cat_en:
        footer_bits.append(cat_en[cat_key])
    elif category and not re.search(r"[\u0600-\u06FF]", str(category)):
        footer_bits.append(str(category))
    footer = " · ".join(footer_bits) if footer_bits else "Digital Card"
    if len(footer) > 42:
        footer = footer[:39] + "…"
    fw = draw.textlength(footer, font=font_small)
    foot_col = (255, 255, 255, 190) if light_text else (30, 30, 30, 200)
    draw.text(((W - fw) / 2, H - 70), footer, font=font_small, fill=foot_col)

    # Bottom accent bar
    draw.rounded_rectangle(
        (48, H - 36, W - 48, H - 28),
        radius=4,
        fill=(*accent, 160) if light_text else (*deep, 140),
    )

    img = Image.alpha_composite(img, card)
    return img


def load_products():
    text = PRODUCTS_JS.read_text(encoding="utf-8")
    m = re.search(r"const PRODUCTS = (\[[\s\S]*?\]);\s*\nconst STORE_CONFIG", text)
    if not m:
        raise SystemExit("PRODUCTS not found")
    return text, m, json.loads(m.group(1))


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    text, m, products = load_products()
    created = 0
    regenerated = 0

    for p in products:
        pid = p.get("id") or "product"
        safe = re.sub(r"[^a-zA-Z0-9_-]+", "-", pid).strip("-") or "product"
        local_path = f"assets/products/{safe}.png"
        img = p.get("image") or ""

        # Generate only for missing images OR existing local generated assets
        need = not img or img.startswith("assets/products/")
        if not need:
            continue

        out = OUT_DIR / f"{safe}.png"
        card = create_card(p)
        card.save(out, "PNG", optimize=True)
        if not img:
            created += 1
        else:
            regenerated += 1
        p["image"] = local_path

    new_products = json.dumps(products, ensure_ascii=False, indent=2)
    new_text = text[: m.start(1)] + new_products + text[m.end(1) :]
    PRODUCTS_JS.write_text(new_text, encoding="utf-8")

    with_img = sum(1 for p in products if p.get("image"))
    local = sum(1 for p in products if isinstance(p.get("image"), str) and p["image"].startswith("assets/"))
    seagm = sum(1 for p in products if isinstance(p.get("image"), str) and "seagmcdn" in p["image"])
    print(f"Generated {created} new + {regenerated} updated images in {OUT_DIR}")
    print(f"Products: {len(products)} | with image: {with_img} | local: {local} | seagm: {seagm}")


if __name__ == "__main__":
    main()
