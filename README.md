# Marsa — متجر الخدمات الرقمية

متجر إلكتروني احترافي مبني بـ HTML و CSS و JavaScript فقط (بدون إطار عمل).  
جاهز للنشر على **GitHub Pages**.

## الملفات

```
store/
├── index.html      # الصفحة الرئيسية
├── style.css       # التصميم (داكن + لمسات زرقاء)
├── script.js       # المنطق: السلة، Toast، واتساب
├── products.js     # بيانات المنتجات وإعدادات المتجر
├── assets/         # صور اختيارية للمنتجات
└── README.md
```

## التخصيص السريع

### رقم واتساب

افتح `products.js` وعدّل:

```js
whatsappNumber: "222XXXXXXXX", // بدون + أو مسافات
```

### سعر الصرف

`1 USD = 46 MRU` معرّف في `products.js` كـ `USD_TO_MRU`.

### تحديث قوائم SEAGM

المصادر في `scripts/generate_products.py`:
- `SEAGM_Card_Products_List.xlsx` — بطاقات ألعاب وهدايا
- `SEAGM_Video_on_Demand_Prices_*.xlsx` — بث وفيديو (Netflix، Shahid، …)

```bash
python scripts/generate_products.py
```

- يُعاد توليد `products.js` مع الفئات والأسعار
- **لا تكرار:** أي منتج بنفس الاسم (بعد تطبيع الاسم) يُتخطى
- السعر: `القيمة بالدولار × 46` = الأوقية

### إضافة منتج يدويًا

أضف كائنًا داخل مصفوفة `PRODUCTS` في `products.js`:

```js
{
  id: "product-id",
  name: "اسم المنتج",
  description: "وصف قصير",
  icon: "fa-solid fa-box",
  badge: "جديد",
  category: "gift-cards",
  categoryName: "بطاقات الهدايا",
  region: "US",
  options: [
    { id: "usd10", label: "$10", duration: "$10 USD", price: 460, usd: 10 },
  ],
},
```

## النشر على GitHub Pages

1. ارفع المشروع إلى مستودع GitHub.
2. من **Settings → Pages** اختر Branch: `main` ومجلد: `/ (root)`.
3. افتح الرابط: `https://YOUR_USERNAME.github.io/REPO_NAME/`

لا حاجة لبناء أو تعديلات إضافية.

## الميزات

- واجهة عربية RTL
- أسعار بالأوقية الموريتانية (MRU)
- سلة محفوظة في LocalStorage
- عداد السلة + Toast عند الإضافة
- طلب عبر واتساب برسالة تلقائية
- تصميم متجاوب للهواتف والحواسيب
- خط Cairo + Font Awesome فقط كمكتبات خارجية

## الترخيص

© Marsa — جميع الحقوق محفوظة.
