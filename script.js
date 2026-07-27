/**
 * Marsa Store — Main Application Logic (security-hardened)
 * Cart, logos, categories, search, WhatsApp, LocalStorage
 * Depends on: security.js → products.js → script.js
 */

(function () {
  "use strict";

  const Sec = window.MarsaSecurity;
  if (!Sec) {
    console.error("[Marsa] security.js missing — aborting app init");
    return;
  }

  if (typeof PRODUCTS === "undefined" || !Array.isArray(PRODUCTS)) {
    console.error("[Marsa] products.js missing or invalid");
    return;
  }

  const CART_KEY = "marsa_cart_v2";
  const PAGE_SIZE = 12;
  const currency =
    (typeof STORE_CONFIG !== "undefined" && STORE_CONFIG.currency) || "أوقية";
  const storePhone =
    (typeof STORE_CONFIG !== "undefined" && STORE_CONFIG.whatsappNumber) ||
    "22248650585";

  const allowAdd = Sec.createRateLimiter(30, 10_000);
  const allowCheckout = Sec.createRateLimiter(5, 15_000);

  // Prices & names always from catalog when loading storage
  let cart = Sec.rebuildCartFromCatalog(
    Sec.safeJsonParse(Sec.safeStorageGet(CART_KEY) || "[]") || [],
    PRODUCTS
  );

  let activeCategory = "all";
  let searchQuery = "";
  let currentPage = 1;
  let sortMode = "featured";

  const productsGrid = document.getElementById("productsGrid");
  const categoryFilters = document.getElementById("categoryFilters");
  const productSearch = document.getElementById("productSearch");
  const productsMeta = document.getElementById("productsMeta");
  const productsPagination = document.getElementById("productsPagination");
  const featuredTrack = document.getElementById("featuredTrack");
  const sortSelect = document.getElementById("sortSelect");
  const cartBtn = document.getElementById("cartBtn");
  const cartCount = document.getElementById("cartCount");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartClose = document.getElementById("cartClose");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const toastContainer = document.getElementById("toastContainer");
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  const yearEl = document.getElementById("year");
  const fabWhatsapp = document.getElementById("fabWhatsapp");

  const escapeHtml = Sec.escapeHtml;

  function init() {
    Sec.enforceHttpsHint();
    Sec.bindLogoErrorHandler(document);

    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    setupWhatsAppLinks();
    renderCategories();
    renderFeatured();
    renderProducts();
    renderCart();
    bindEvents();
    setupScrollAnimations();
    setupHeaderScroll();

    // persist cleaned cart
    saveCart();
  }

  function setupWhatsAppLinks() {
    const url = Sec.buildWhatsAppUrl(
      storePhone,
      "السلام عليكم\nأرغب في الاستفسار عن خدمات متجر Marsa"
    );
    if (fabWhatsapp && url) {
      fabWhatsapp.setAttribute("href", url);
      fabWhatsapp.setAttribute("rel", "noopener noreferrer nofollow");
      fabWhatsapp.setAttribute("target", "_blank");
    }
  }

  function saveCart() {
    // always re-validate against catalog before write
    cart = Sec.rebuildCartFromCatalog(cart, PRODUCTS);
    Sec.safeStorageSet(CART_KEY, cart);
  }

  function formatPrice(amount) {
    const n = Number(amount);
    const safe = Number.isFinite(n) ? n : 0;
    return `${safe.toLocaleString("en-US")} ${currency}`;
  }

  function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function findProduct(productId) {
    if (!Sec.isSafeId(productId)) return null;
    return PRODUCTS.find((p) => p && p.id === productId) || null;
  }

  function findOption(product, optionId) {
    if (!product || !Sec.isSafeId(optionId)) return null;
    return product.options?.find((o) => o && o.id === optionId) || null;
  }

  function cartLineId(productId, optionId) {
    return `${productId}__${optionId}`;
  }

  function optionFieldLabel(product) {
    if (product.category === "subscriptions") return "المدة";
    const firstId = product.options?.[0]?.id || "";
    if (
      product.category === "video-on-demand" &&
      !String(firstId).startsWith("usd")
    ) {
      return "المدة";
    }
    return "القيمة";
  }

  function productLogoHtml(product, sizeClass) {
    const color = Sec.sanitizeColor(product.color);
    const icon = Sec.sanitizeIconClass(product.icon);
    const name = escapeHtml(product.name);
    const img = Sec.sanitizeImageUrl(product.image);
    const size = sizeClass ? escapeHtml(sizeClass) : "";

    if (img) {
      return `
        <div class="brand-logo ${size}" style="--brand:${escapeHtml(color)}" data-has-img="1">
          <img
            src="${escapeHtml(img)}"
            alt="${name}"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
          />
          <i class="${escapeHtml(icon)} brand-logo__fallback" aria-hidden="true"></i>
        </div>
      `;
    }

    return `
      <div class="brand-logo brand-logo--icon ${size}" style="--brand:${escapeHtml(color)}">
        <i class="${escapeHtml(icon)}" aria-hidden="true"></i>
      </div>
    `;
  }

  function getFilteredProducts() {
    const q = searchQuery.toLowerCase();
    let list = PRODUCTS.filter((p) => {
      if (!p || !p.id) return false;
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (!q) return true;
      const hay = `${p.name || ""} ${p.description || ""} ${p.region || ""} ${p.categoryName || ""}`.toLowerCase();
      return hay.includes(q);
    });

    if (sortMode === "name") {
      list = list.slice().sort((a, b) =>
        String(a.name).localeCompare(String(b.name), "en")
      );
    } else if (sortMode === "price-asc") {
      list = list
        .slice()
        .sort(
          (a, b) => (Number(a.options?.[0]?.price) || 0) - (Number(b.options?.[0]?.price) || 0)
        );
    } else if (sortMode === "price-desc") {
      list = list
        .slice()
        .sort(
          (a, b) => (Number(b.options?.[0]?.price) || 0) - (Number(a.options?.[0]?.price) || 0)
        );
    }
    return list;
  }

  function allowedCategoryIds() {
    const ids = ["all"];
    if (typeof CATEGORIES !== "undefined" && Array.isArray(CATEGORIES)) {
      CATEGORIES.forEach((c) => {
        if (c && Sec.isSafeId(c.id)) ids.push(c.id);
      });
    }
    return ids;
  }

  function renderCategories() {
    if (!categoryFilters) return;
    const cats =
      typeof CATEGORIES !== "undefined" && Array.isArray(CATEGORIES)
        ? CATEGORIES.filter((c) => c && Sec.isSafeId(c.id))
        : [{ id: "all", name: "الكل", icon: "fa-solid fa-border-all" }];

    categoryFilters.innerHTML = cats
      .map((cat) => {
        const count =
          cat.id === "all"
            ? PRODUCTS.length
            : PRODUCTS.filter((p) => p.category === cat.id).length;
        const active = cat.id === activeCategory ? " is-active" : "";
        return `
          <button
            type="button"
            class="cat-chip${active}"
            data-category="${escapeHtml(cat.id)}"
            role="tab"
            aria-selected="${cat.id === activeCategory}"
          >
            <i class="${escapeHtml(Sec.sanitizeIconClass(cat.icon || "fa-solid fa-tag"))}"></i>
            <span>${escapeHtml(cat.name)}</span>
            <em>${Number(count) || 0}</em>
          </button>
        `;
      })
      .join("");
  }

  function renderFeatured() {
    if (!featuredTrack) return;
    const featured = PRODUCTS.filter((p) => p && p.featured).slice(0, 14);
    if (!featured.length) {
      featuredTrack.closest(".featured")?.setAttribute("hidden", "");
      return;
    }

    featuredTrack.innerHTML = featured
      .map(
        (p) => `
      <button type="button" class="featured-card" data-goto-product="${escapeHtml(p.id)}" title="${escapeHtml(p.name)}">
        ${productLogoHtml(p, "brand-logo--sm")}
        <span class="featured-card__name">${escapeHtml(p.name)}</span>
        <span class="featured-card__price">${formatPrice(p.options?.[0]?.price || 0)}</span>
      </button>
    `
      )
      .join("");
  }

  function renderProducts() {
    if (!productsGrid) return;

    const filtered = getFilteredProducts();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    if (productsMeta) {
      if (!filtered.length) {
        productsMeta.textContent = "لا توجد نتائج";
      } else {
        const from = start + 1;
        const to = start + pageItems.length;
        productsMeta.textContent = `عرض ${from}–${to} من ${filtered.length} منتج`;
      }
    }

    if (!filtered.length) {
      productsGrid.innerHTML = `
        <div class="products__empty" style="grid-column:1/-1">
          <i class="fa-solid fa-box-open"></i>
          <p>لا توجد منتجات مطابقة لبحثك</p>
          <button type="button" class="btn btn--ghost btn--sm" id="resetFiltersBtn">إعادة ضبط الفلاتر</button>
        </div>
      `;
      if (productsPagination) productsPagination.hidden = true;
      return;
    }

    productsGrid.innerHTML = pageItems
      .map((product, index) => {
        const defaultOption = product.options?.[0];
        if (!defaultOption) return "";
        const delay = Math.min(index * 0.04, 0.28);
        const fieldLabel = optionFieldLabel(product);

        const optionsHtml = (product.options || [])
          .filter((opt) => opt && Sec.isSafeId(opt.id))
          .map((opt) => {
            const price = Number(opt.price) || 0;
            const usdHint =
              opt.usd != null && Number.isFinite(Number(opt.usd))
                ? ` ($${Number(opt.usd)})`
                : "";
            return `<option value="${escapeHtml(opt.id)}" data-price="${price}" data-duration="${escapeHtml(opt.duration)}">${escapeHtml(opt.label)}${escapeHtml(usdHint)} — ${formatPrice(price)}</option>`;
          })
          .join("");

        const badgeHtml = product.badge
          ? `<span class="product-card__badge">${escapeHtml(product.badge)}</span>`
          : "";

        const catHtml = product.categoryName
          ? `<span class="product-card__cat">${escapeHtml(product.categoryName)}</span>`
          : "";

        const regionHtml = product.region
          ? `<span class="product-card__region"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(product.region)}</span>`
          : "";

        return `
        <article class="product-card" style="animation-delay: ${delay}s" data-product-id="${escapeHtml(product.id)}" data-category="${escapeHtml(product.category || "")}">
          <div class="product-card__shine" aria-hidden="true"></div>
          <div class="product-card__top">
            ${productLogoHtml(product)}
            <div class="product-card__info">
              ${badgeHtml}
              <h3 class="product-card__name">${escapeHtml(product.name)}</h3>
              <div class="product-card__tags">
                ${catHtml}
                ${regionHtml}
              </div>
            </div>
          </div>

          <div class="product-card__field">
            <label for="duration-${escapeHtml(product.id)}">${escapeHtml(fieldLabel)}</label>
            <select
              class="product-card__select"
              id="duration-${escapeHtml(product.id)}"
              data-product-id="${escapeHtml(product.id)}"
              aria-label="اختر ${escapeHtml(fieldLabel)} لـ ${escapeHtml(product.name)}"
            >
              ${optionsHtml}
            </select>
          </div>

          <div class="product-card__price">
            <span>السعر</span>
            <strong class="js-price" data-product-id="${escapeHtml(product.id)}">
              ${formatPrice(defaultOption.price)}
            </strong>
          </div>

          <button
            type="button"
            class="btn btn--add js-add-to-cart"
            data-product-id="${escapeHtml(product.id)}"
          >
            <i class="fa-solid fa-cart-plus"></i>
            إضافة إلى السلة
          </button>
        </article>
      `;
      })
      .join("");

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!productsPagination) return;
    if (totalPages <= 1) {
      productsPagination.hidden = true;
      productsPagination.innerHTML = "";
      return;
    }

    productsPagination.hidden = false;
    const buttons = [];
    const safePage = (p) => Math.max(1, Math.min(totalPages, Number(p) || 1));

    buttons.push(`
      <button type="button" class="page-btn" data-page="${safePage(currentPage - 1)}" ${currentPage <= 1 ? "disabled" : ""} aria-label="الصفحة السابقة">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    `);

    const windowSize = 5;
    let from = Math.max(1, currentPage - Math.floor(windowSize / 2));
    let to = Math.min(totalPages, from + windowSize - 1);
    from = Math.max(1, to - windowSize + 1);

    if (from > 1) {
      buttons.push(`<button type="button" class="page-btn" data-page="1">1</button>`);
      if (from > 2) buttons.push(`<span class="page-ellipsis">…</span>`);
    }

    for (let p = from; p <= to; p++) {
      buttons.push(`
        <button type="button" class="page-btn${p === currentPage ? " is-active" : ""}" data-page="${p}">
          ${p}
        </button>
      `);
    }

    if (to < totalPages) {
      if (to < totalPages - 1) buttons.push(`<span class="page-ellipsis">…</span>`);
      buttons.push(
        `<button type="button" class="page-btn" data-page="${totalPages}">${totalPages}</button>`
      );
    }

    buttons.push(`
      <button type="button" class="page-btn" data-page="${safePage(currentPage + 1)}" ${currentPage >= totalPages ? "disabled" : ""} aria-label="الصفحة التالية">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    `);

    productsPagination.innerHTML = buttons.join("");
  }

  function updateProductPrice(productId, selectEl) {
    if (!Sec.isSafeId(productId) || !selectEl) return;
    const product = findProduct(productId);
    if (!product) return;

    // price from catalog option, not only data-price attribute
    const optionId = selectEl.value;
    const option = findOption(product, optionId);
    const price = option ? Number(option.price) : 0;

    let priceEl = null;
    try {
      priceEl = document.querySelector(
        `.js-price[data-product-id="${CSS.escape(productId)}"]`
      );
    } catch {
      priceEl = null;
    }
    if (!priceEl) return;

    priceEl.textContent = formatPrice(price);
    priceEl.classList.remove("price-pulse");
    void priceEl.offsetWidth;
    priceEl.classList.add("price-pulse");
  }

  function goToProduct(productId) {
    const product = findProduct(productId);
    if (!product) return;
    activeCategory = "all";
    searchQuery = Sec.sanitizeText(product.name, 80);
    currentPage = 1;
    if (productSearch) productSearch.value = searchQuery;
    renderCategories();
    renderProducts();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  function addToCart(productId, optionId) {
    if (!allowAdd()) {
      showToast("طلبات كثيرة — حاول بعد لحظات", "error");
      return;
    }

    const product = findProduct(productId);
    if (!product) return;

    const option = findOption(product, optionId);
    if (!option) return;

    if (cart.length >= Sec.MAX_CART_ITEMS) {
      showToast("السلة ممتلئة", "error");
      return;
    }

    const id = cartLineId(product.id, option.id);
    const existing = cart.find((item) => item.id === id);

    if (existing) {
      existing.qty = Sec.clampQty(existing.qty + 1);
    } else {
      cart.push({
        id,
        productId: product.id,
        name: product.name,
        optionId: option.id,
        duration: option.duration,
        price: Number(option.price),
        qty: 1,
        image: product.image || null,
        icon: product.icon || null,
        color: product.color || null,
      });
    }

    // re-validate + save
    cart = Sec.rebuildCartFromCatalog(cart, PRODUCTS);
    saveCart();
    renderCart();
    showToast(`تمت إضافة ${product.name} إلى السلة`);
  }

  function changeQty(lineId, delta) {
    if (typeof lineId !== "string" || lineId.length > 160) return;
    const item = cart.find((i) => i.id === lineId);
    if (!item) return;

    const next = item.qty + (Number(delta) || 0);
    if (next <= 0) {
      cart = cart.filter((i) => i.id !== lineId);
    } else {
      item.qty = Sec.clampQty(next);
    }

    cart = Sec.rebuildCartFromCatalog(cart, PRODUCTS);
    saveCart();
    renderCart();
  }

  function removeFromCart(lineId) {
    if (typeof lineId !== "string") return;
    cart = cart.filter((i) => i.id !== lineId);
    saveCart();
    renderCart();
    showToast("تم حذف المنتج من السلة", "error");
  }

  function clearCart() {
    if (!cart.length) return;
    cart = [];
    saveCart();
    renderCart();
    showToast("تم تفريغ السلة");
  }

  function renderCart() {
    updateCartBadge();
    if (!cartItems) return;

    if (!cart.length) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>سلتك فارغة</p>
          <span style="font-size:0.85rem;color:var(--text-dim)">أضف منتجات لتبدأ الطلب</span>
        </div>
      `;
    } else {
      cartItems.innerHTML = cart
        .map((item) => {
          const p = findProduct(item.productId) || {};
          const logo = productLogoHtml(
            {
              name: item.name,
              image: item.image || p.image,
              icon: item.icon || p.icon,
              color: item.color || p.color,
            },
            "brand-logo--xs"
          );
          return `
        <div class="cart-item" data-line-id="${escapeHtml(item.id)}">
          <div class="cart-item__row">
            ${logo}
            <div class="cart-item__info">
              <h3>${escapeHtml(item.name)}</h3>
              <p class="cart-item__meta">${escapeHtml(item.duration)}</p>
            </div>
            <div class="cart-item__price">${formatPrice(item.price * item.qty)}</div>
          </div>
          <div class="cart-item__actions">
            <div class="qty-control">
              <button type="button" class="js-qty-minus" data-line-id="${escapeHtml(item.id)}" aria-label="تقليل الكمية">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span>${item.qty}</span>
              <button type="button" class="js-qty-plus" data-line-id="${escapeHtml(item.id)}" aria-label="زيادة الكمية">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button type="button" class="cart-item__remove js-remove" data-line-id="${escapeHtml(item.id)}">
              <i class="fa-solid fa-trash-can"></i>
              حذف
            </button>
          </div>
        </div>
      `;
        })
        .join("");
    }

    if (cartTotal) {
      cartTotal.textContent = formatPrice(getCartTotal());
    }
    if (whatsappBtn) {
      whatsappBtn.disabled = cart.length === 0;
    }
  }

  function updateCartBadge() {
    if (!cartCount) return;
    const count = getCartCount();
    if (count > 0) {
      cartCount.hidden = false;
      cartCount.textContent = String(count);
    } else {
      cartCount.hidden = true;
      cartCount.textContent = "0";
    }
  }

  function openCart() {
    cartDrawer?.classList.add("is-open");
    cartOverlay?.classList.add("is-open");
    cartOverlay?.removeAttribute("hidden");
    cartDrawer?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    cartDrawer?.classList.remove("is-open");
    cartOverlay?.classList.remove("is-open");
    cartDrawer?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (!cartDrawer?.classList.contains("is-open")) {
        cartOverlay?.setAttribute("hidden", "");
      }
    }, 300);
  }

  function buildWhatsAppMessage() {
    // rebuild cart from catalog for message integrity
    const safeCart = Sec.rebuildCartFromCatalog(cart, PRODUCTS);
    const lines = safeCart.map((item) => {
      const lineTotal = item.price * item.qty;
      const qtyPart = item.qty > 1 ? ` (×${item.qty})` : "";
      return `• ${item.name}${qtyPart}\n${item.duration}\nالسعر: ${formatPrice(lineTotal)}`;
    });
    const total = formatPrice(
      safeCart.reduce((s, i) => s + i.price * i.qty, 0)
    );
    return (
      `السلام عليكم\n\n` +
      `أرغب في طلب المنتجات التالية:\n\n` +
      `${lines.join("\n\n")}\n\n` +
      `-----------------------\n\n` +
      `الإجمالي:\n${total}\n\n` +
      `الاسم:\n...........................`
    );
  }

  function checkoutWhatsApp() {
    if (!cart.length) return;
    if (!allowCheckout()) {
      showToast("حاول مرة أخرى بعد قليل", "error");
      return;
    }

    cart = Sec.rebuildCartFromCatalog(cart, PRODUCTS);
    if (!cart.length) {
      showToast("السلة غير صالحة", "error");
      renderCart();
      return;
    }

    const message = buildWhatsAppMessage();
    const url = Sec.buildWhatsAppUrl(storePhone, message);
    if (!url) {
      showToast("رقم واتساب غير صالح", "error");
      return;
    }
    Sec.safeOpenUrl(url);
  }

  function showToast(message, type) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast${type === "error" ? " toast--error" : ""}`;
    const iconClass =
      type === "error" ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check";
    // safe: iconClass is fixed constant; message escaped
    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span></span>
    `;
    const span = toast.querySelector("span");
    if (span) span.textContent = Sec.sanitizeText(message, 200);
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  function setMenuIcon(open) {
    if (!menuBtn) return;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.replaceChildren();
    const i = document.createElement("i");
    i.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    i.setAttribute("aria-hidden", "true");
    menuBtn.appendChild(i);
  }

  function bindEvents() {
    categoryFilters?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-category]");
      if (!btn) return;
      activeCategory = Sec.sanitizeCategoryId(
        btn.dataset.category,
        allowedCategoryIds()
      );
      currentPage = 1;
      renderCategories();
      renderProducts();
    });

    let searchTimer;
    productSearch?.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        searchQuery = Sec.sanitizeText(productSearch.value || "", Sec.MAX_SEARCH_LEN);
        // reflect sanitized value if truncated/control chars removed
        if (productSearch.value !== searchQuery) {
          productSearch.value = searchQuery;
        }
        currentPage = 1;
        renderProducts();
      }, 200);
    });

    // block paste of oversized/malicious content
    productSearch?.addEventListener("paste", (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData)?.getData("text") || "";
      const clean = Sec.sanitizeText(text, Sec.MAX_SEARCH_LEN);
      productSearch.value = clean;
      searchQuery = clean;
      currentPage = 1;
      renderProducts();
    });

    sortSelect?.addEventListener("change", () => {
      sortMode = Sec.sanitizeSortMode(sortSelect.value);
      currentPage = 1;
      renderProducts();
    });

    featuredTrack?.addEventListener("click", (e) => {
      const card = e.target.closest("[data-goto-product]");
      if (!card) return;
      goToProduct(card.dataset.gotoProduct);
    });

    productsPagination?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-page]");
      if (!btn || btn.disabled) return;
      const page = Number(btn.dataset.page);
      if (!Number.isFinite(page) || page === currentPage) return;
      currentPage = Math.max(1, Math.floor(page));
      renderProducts();
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    productsGrid?.addEventListener("click", (e) => {
      if (e.target.closest("#resetFiltersBtn")) {
        activeCategory = "all";
        searchQuery = "";
        currentPage = 1;
        sortMode = "featured";
        if (productSearch) productSearch.value = "";
        if (sortSelect) sortSelect.value = "featured";
        renderCategories();
        renderProducts();
        return;
      }

      const addBtn = e.target.closest(".js-add-to-cart");
      if (addBtn) {
        const productId = addBtn.dataset.productId;
        if (!Sec.isSafeId(productId)) return;
        const select = document.getElementById(`duration-${productId}`);
        const optionId = select?.value;
        if (!optionId || !Sec.isSafeId(optionId)) return;
        addToCart(productId, optionId);
      }
    });

    productsGrid?.addEventListener("change", (e) => {
      const select = e.target.closest(".product-card__select");
      if (!select) return;
      updateProductPrice(select.dataset.productId, select);
    });

    cartBtn?.addEventListener("click", openCart);
    cartClose?.addEventListener("click", closeCart);
    cartOverlay?.addEventListener("click", closeCart);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCart();
        closeMobileNav();
      }
    });

    cartItems?.addEventListener("click", (e) => {
      const plus = e.target.closest(".js-qty-plus");
      const minus = e.target.closest(".js-qty-minus");
      const remove = e.target.closest(".js-remove");

      if (plus) changeQty(plus.dataset.lineId, 1);
      if (minus) changeQty(minus.dataset.lineId, -1);
      if (remove) removeFromCart(remove.dataset.lineId);
    });

    whatsappBtn?.addEventListener("click", checkoutWhatsApp);
    clearCartBtn?.addEventListener("click", clearCart);

    menuBtn?.addEventListener("click", () => {
      const open = nav?.classList.toggle("is-open");
      setMenuIcon(!!open);
    });

    nav?.addEventListener("click", (e) => {
      const link = e.target.closest(".nav__link");
      if (!link) return;
      // only allow same-page hash links
      const href = link.getAttribute("href") || "";
      if (href && !href.startsWith("#")) {
        e.preventDefault();
        return;
      }
      closeMobileNav();
    });
  }

  function closeMobileNav() {
    nav?.classList.remove("is-open");
    setMenuIcon(false);
  }

  function setupScrollAnimations() {
    const els = document.querySelectorAll(".animate-on-scroll");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
  }

  function setupHeaderScroll() {
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
