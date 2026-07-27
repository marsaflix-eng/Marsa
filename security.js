/**
 * Marsa Store — Security Core
 * Defense-in-depth for static storefront (XSS, storage, open redirects)
 */
(function (global) {
  "use strict";

  const MAX_CART_ITEMS = 50;
  const MAX_QTY = 99;
  const MAX_SEARCH_LEN = 80;
  const MAX_STORAGE_CHARS = 80_000;
  const ID_RE = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,79}$/;
  const PHONE_RE = /^\d{8,15}$/;
  const SAFE_SORT = new Set(["featured", "name", "price-asc", "price-desc"]);
  const SAFE_HOSTS = new Set(["wa.me", "api.whatsapp.com", "www.whatsapp.com"]);

  /** Allowed external image hosts for product logos */
  const SAFE_IMG_HOSTS = new Set([
    "logo.clearbit.com",
    "clearbit.com",
    "www.google.com",
    "icons.duckduckgo.com",
  ]);

  function isPlainObject(v) {
    return Object.prototype.toString.call(v) === "[object Object]";
  }

  function isSafeId(id) {
    return typeof id === "string" && ID_RE.test(id);
  }

  /**
   * Escape for HTML text/attributes — XSS prevention
   */
  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/`/g, "&#96;")
      .replace(/\//g, "&#x2F;");
  }

  /** Strip control chars & limit length (search, free text) */
  function sanitizeText(input, maxLen) {
    const limit = maxLen || MAX_SEARCH_LEN;
    let s = String(input == null ? "" : input);
    // remove null bytes & control characters except common whitespace
    s = s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
    s = s.replace(/\s+/g, " ").trim();
    if (s.length > limit) s = s.slice(0, limit);
    return s;
  }

  function sanitizePhone(phone) {
    const digits = String(phone == null ? "" : phone).replace(/\D/g, "");
    if (!PHONE_RE.test(digits)) return null;
    return digits;
  }

  /**
   * Build HTTPS WhatsApp URL only — blocks open redirects
   */
  function buildWhatsAppUrl(phone, message) {
    const p = sanitizePhone(phone);
    if (!p) return null;
    const text = sanitizeText(message, 3500);
    const urlStr =
      "https://wa.me/" + p + (text ? "?text=" + encodeURIComponent(text) : "");
    try {
      const u = new URL(urlStr);
      if (u.protocol !== "https:") return null;
      if (!SAFE_HOSTS.has(u.hostname)) return null;
      // no credentials / unexpected ports
      if (u.username || u.password) return null;
      if (u.port && u.port !== "443") return null;
      return u.toString();
    } catch {
      return null;
    }
  }

  function safeOpenUrl(url) {
    if (!url || typeof url !== "string") return false;
    try {
      const u = new URL(url);
      if (u.protocol !== "https:") return false;
      if (!SAFE_HOSTS.has(u.hostname)) return false;
      // noopener,noreferrer via feature string
      const win = window.open(u.toString(), "_blank", "noopener,noreferrer");
      if (win) win.opener = null;
      return true;
    } catch {
      return false;
    }
  }

  /** Only allow https images from known CDNs or relative self paths */
  function sanitizeImageUrl(url) {
    if (!url || typeof url !== "string") return null;
    const s = url.trim();
    if (s.length > 500) return null;
    // relative safe path
    if (/^assets\/[a-zA-Z0-9._\-\/]+$/.test(s)) return s;
    if (s.startsWith("./assets/") || s.startsWith("/assets/")) {
      // only allow assets path under site
      try {
        const u = new URL(s, window.location.origin);
        if (u.origin !== window.location.origin) return null;
        if (!u.pathname.includes("/assets/")) return null;
        return u.pathname.replace(/^\//, "") || s;
      } catch {
        return null;
      }
    }
    try {
      const u = new URL(s);
      if (u.protocol !== "https:") return null;
      if (u.username || u.password) return null;
      const host = u.hostname.toLowerCase();
      const ok =
        SAFE_IMG_HOSTS.has(host) ||
        host.endsWith(".clearbit.com");
      if (!ok) return null;
      return u.toString();
    } catch {
      return null;
    }
  }

  function clampQty(n) {
    const q = Number.parseInt(n, 10);
    if (!Number.isFinite(q)) return 1;
    return Math.min(MAX_QTY, Math.max(1, q));
  }

  function sanitizeSortMode(mode) {
    return SAFE_SORT.has(mode) ? mode : "featured";
  }

  function sanitizeCategoryId(id, allowed) {
    if (id === "all") return "all";
    if (!isSafeId(id)) return "all";
    if (Array.isArray(allowed) && allowed.length && !allowed.includes(id)) {
      return "all";
    }
    return id;
  }

  /**
   * Rebuild cart lines from catalog only — prevents price/name tampering in localStorage
   */
  function rebuildCartFromCatalog(rawCart, products) {
    if (!Array.isArray(rawCart) || !Array.isArray(products)) return [];
    const byId = new Map();
    for (const p of products) {
      if (p && isSafeId(p.id)) byId.set(p.id, p);
    }
    const out = [];
    const seen = new Set();

    for (const item of rawCart) {
      if (out.length >= MAX_CART_ITEMS) break;
      if (!isPlainObject(item)) continue;

      const productId = String(item.productId || "");
      const optionId = String(item.optionId || "");
      if (!isSafeId(productId) || !isSafeId(optionId)) continue;

      const product = byId.get(productId);
      if (!product || !Array.isArray(product.options)) continue;

      const option = product.options.find((o) => o && o.id === optionId);
      if (!option) continue;

      const price = Number(option.price);
      if (!Number.isFinite(price) || price < 0 || price > 10_000_000) continue;

      const lineId = productId + "__" + optionId;
      if (seen.has(lineId)) {
        // merge qty into existing
        const existing = out.find((x) => x.id === lineId);
        if (existing) {
          existing.qty = clampQty(existing.qty + clampQty(item.qty));
        }
        continue;
      }
      seen.add(lineId);

      out.push({
        id: lineId,
        productId: product.id,
        name: String(product.name || "").slice(0, 120),
        optionId: option.id,
        duration: String(option.duration || option.label || "").slice(0, 80),
        price: price,
        qty: clampQty(item.qty),
        image: sanitizeImageUrl(product.image) || null,
        icon: sanitizeIconClass(product.icon),
        color: sanitizeColor(product.color),
      });
    }
    return out;
  }

  function sanitizeIconClass(icon) {
    if (!icon || typeof icon !== "string") return "fa-solid fa-box";
    // only allow font-awesome-like class tokens
    if (!/^[a-z0-9\s\-]+$/i.test(icon)) return "fa-solid fa-box";
    if (icon.length > 60) return "fa-solid fa-box";
    return icon.trim();
  }

  function sanitizeColor(color) {
    if (!color || typeof color !== "string") return "#147BFE";
    if (/^#[0-9A-Fa-f]{3,8}$/.test(color)) return color;
    if (/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/.test(color)) return color;
    return "#147BFE";
  }

  function safeJsonParse(raw) {
    if (typeof raw !== "string" || raw.length > MAX_STORAGE_CHARS) return null;
    try {
      // reject prototype pollution patterns at top level
      if (/__proto__|constructor\s*\(|prototype/i.test(raw)) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      const s = JSON.stringify(value);
      if (s.length > MAX_STORAGE_CHARS) return false;
      localStorage.setItem(key, s);
      return true;
    } catch {
      // quota / private mode
      return false;
    }
  }

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  /** Simple client rate limit */
  function createRateLimiter(maxCalls, windowMs) {
    const hits = [];
    return function allow() {
      const now = Date.now();
      while (hits.length && now - hits[0] > windowMs) hits.shift();
      if (hits.length >= maxCalls) return false;
      hits.push(now);
      return true;
    };
  }

  /** Bind logo image errors without inline handlers (CSP-friendly) */
  function bindLogoErrorHandler(root) {
    const target = root || document;
    target.addEventListener(
      "error",
      function (e) {
        const el = e.target;
        if (!el || el.tagName !== "IMG") return;
        const wrap = el.closest(".brand-logo");
        if (!wrap) return;
        wrap.classList.add("is-fallback");
        el.removeAttribute("src");
        el.remove();
      },
      true
    );
  }

  /**
   * Prefer HTTPS if page was mixed (best-effort on hosts that allow it)
   */
  function enforceHttpsHint() {
    try {
      if (
        location.protocol === "http:" &&
        location.hostname !== "localhost" &&
        location.hostname !== "127.0.0.1" &&
        !location.hostname.endsWith(".local")
      ) {
        // do not force redirect automatically (can break some static previews);
        // mark document for awareness
        document.documentElement.setAttribute("data-insecure-http", "1");
      }
    } catch {
      /* ignore */
    }
  }

  global.MarsaSecurity = Object.freeze({
    MAX_CART_ITEMS,
    MAX_QTY,
    MAX_SEARCH_LEN,
    escapeHtml,
    sanitizeText,
    sanitizePhone,
    buildWhatsAppUrl,
    safeOpenUrl,
    sanitizeImageUrl,
    sanitizeIconClass,
    sanitizeColor,
    clampQty,
    sanitizeSortMode,
    sanitizeCategoryId,
    rebuildCartFromCatalog,
    safeJsonParse,
    safeStorageSet,
    safeStorageGet,
    createRateLimiter,
    bindLogoErrorHandler,
    enforceHttpsHint,
    isSafeId,
  });
})(typeof window !== "undefined" ? window : globalThis);
