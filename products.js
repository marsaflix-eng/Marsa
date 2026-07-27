/**
 * Marsa Store - Product Data
 * Sources:
 *  - SEAGM Card Products List
 *  - SEAGM Video on Demand Prices
 * Exchange rate: 1 USD = 46 MRU
 * Logos via Clearbit (logo.clearbit.com)
 * All prices in Mauritanian Ouguiya (MRU)
 * Duplicates removed by normalized product name
 *
 * أعد تشغيل: python scripts/generate_products.py
 */

const USD_TO_MRU = 46;

const CATEGORIES = [
  {
    "id": "all",
    "name": "الكل",
    "icon": "fa-solid fa-border-all"
  },
  {
    "id": "subscriptions",
    "name": "الاشتراكات",
    "icon": "fa-solid fa-star"
  },
  {
    "id": "video-on-demand",
    "name": "بث وفيديو",
    "icon": "fa-solid fa-clapperboard"
  },
  {
    "id": "gift-cards",
    "name": "بطاقات الهدايا",
    "icon": "fa-solid fa-gift"
  },
  {
    "id": "game-cards",
    "name": "بطاقات الألعاب",
    "icon": "fa-solid fa-gamepad"
  },
  {
    "id": "mobile-game-cards",
    "name": "ألعاب الموبايل",
    "icon": "fa-solid fa-mobile-screen"
  },
  {
    "id": "console-others",
    "name": "كونسول وغيرها",
    "icon": "fa-solid fa-tv"
  }
];

const PRODUCTS = [
  {
    "id": "snapchat-plus",
    "name": "Snapchat Plus",
    "description": "اشتراك Snapchat Plus الرسمي — مميزات حصرية وتجربة محسّنة",
    "icon": "fa-brands fa-snapchat",
    "image": "https://logo.clearbit.com/snapchat.com",
    "color": "#FFFC00",
    "badge": "الأكثر طلبًا",
    "category": "subscriptions",
    "categoryName": "الاشتراكات",
    "region": "Global",
    "featured": true,
    "popularity": 10000000,
    "options": [
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 190,
        "usd": null
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 370,
        "usd": null
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 730,
        "usd": null
      }
    ]
  },
  {
    "id": "netflix-gift-card-us",
    "name": "Netflix Gift Card (US)",
    "description": "بث وفيديو · United States",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": "تقييم ممتاز",
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United States",
    "featured": true,
    "popularity": 9000.0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "hulu-plus-gift-card-us",
    "name": "Hulu Plus Gift Card (US)",
    "description": "بث وفيديو · United States",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/hulu.com",
    "color": "#1CE783",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United States",
    "featured": true,
    "popularity": 665.0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "twitch-gift-card-usd",
    "name": "Twitch Gift Card USD",
    "description": "بث وفيديو · United States",
    "icon": "fa-brands fa-twitch",
    "image": "https://logo.clearbit.com/twitch.tv",
    "color": "#9146FF",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United States",
    "featured": true,
    "popularity": 298.0,
    "options": [
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      },
      {
        "id": "usd200",
        "label": "$200",
        "duration": "$200 USD",
        "price": 9200,
        "usd": 200
      }
    ]
  },
  {
    "id": "paramount-gift-card-us",
    "name": "Paramount+ Gift Card (US)",
    "description": "بث وفيديو · United States",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/paramountplus.com",
    "color": "#0064FF",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United States",
    "featured": true,
    "popularity": 284.0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-cn",
    "name": "iTunes Gift Card (CN)",
    "description": "بطاقات الهدايا · China",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": "الأكثر مبيعًا",
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "China",
    "featured": true,
    "popularity": 334000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-us",
    "name": "iTunes Gift Card (US)",
    "description": "بطاقات الهدايا · United States",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": "الأكثر مبيعًا",
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United States",
    "featured": true,
    "popularity": 320000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-tr",
    "name": "iTunes Gift Card (TR)",
    "description": "بطاقات الهدايا · Turkey",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": "الأكثر مبيعًا",
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Turkey",
    "featured": true,
    "popularity": 248000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-us",
    "name": "Apple Gift Card (US)",
    "description": "بطاقات الهدايا · United States",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": "الأكثر مبيعًا",
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United States",
    "featured": true,
    "popularity": 128000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "rewarble-gift-card-usd",
    "name": "Rewarble Gift Card USD",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": "الأكثر مبيعًا",
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": true,
    "popularity": 80000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-us",
    "name": "Google Play Gift Card (US)",
    "description": "بطاقات الهدايا · United States",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": "الأكثر مبيعًا",
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United States",
    "featured": true,
    "popularity": 63000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-us",
    "name": "Eneba Gift Card (US)",
    "description": "بطاقات الهدايا · United States",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": "تقييم ممتاز",
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United States",
    "featured": true,
    "popularity": 5000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "free-fire-diamonds-pins-garena",
    "name": "Free Fire Diamonds Pins (Garena)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": "الأكثر مبيعًا",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": true,
    "popularity": 1000000.0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "japan-bitcash-jpy",
    "name": "Japan BitCash (JPY)",
    "description": "بطاقات الألعاب · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": "الأكثر مبيعًا",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Japan",
    "featured": true,
    "popularity": 128000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "unipin-voucher-br",
    "name": "UniPin Voucher BR",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-wallet",
    "image": "https://logo.clearbit.com/unipin.com",
    "color": "#FF6A00",
    "badge": "تقييم ممتاز",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": true,
    "popularity": 41000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "steam-wallet-code-brl",
    "name": "Steam Wallet Code (BRL)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": "تقييم ممتاز",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": true,
    "popularity": 9000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "ongame-cash-br",
    "name": "Ongame Cash (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-coins",
    "image": "https://logo.clearbit.com/ongame.net",
    "color": "#F5A623",
    "badge": "تقييم ممتاز",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": true,
    "popularity": 6000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "point-blank-br",
    "name": "Point Blank (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-crosshairs",
    "image": "https://logo.clearbit.com/pointblank.id",
    "color": "#FF4500",
    "badge": "تقييم ممتاز",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": true,
    "popularity": 2000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "battle-net-balance-card-br",
    "name": "Battle.net Balance Card (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-brands fa-battle-net",
    "image": "https://logo.clearbit.com/battle.net",
    "color": "#00AEFF",
    "badge": "تقييم ممتاز",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": true,
    "popularity": 1000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "rbx-gift-card-br",
    "name": "Rbx Gift Card (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/roblox.com",
    "color": "#E2231A",
    "badge": "تقييم ممتاز",
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": true,
    "popularity": 1000.0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "mobile-legends-diamonds-pin",
    "name": "Mobile Legends Diamonds Pin",
    "description": "ألعاب الموبايل · Global",
    "icon": "fa-solid fa-shield-halved",
    "image": "https://logo.clearbit.com/mobilelegends.com",
    "color": "#1E3A8A",
    "badge": "الأكثر مبيعًا",
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Global",
    "featured": true,
    "popularity": 59000.0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "free-fire-max-diamonds-pins-garena",
    "name": "Free Fire Max Diamonds Pins (Garena)",
    "description": "ألعاب الموبايل · Global",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": "تقييم ممتاز",
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Global",
    "featured": true,
    "popularity": 36000.0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "free-fire-diamonds-pins-eu-tr",
    "name": "Free Fire Diamonds Pins EU + TR",
    "description": "ألعاب الموبايل · EU + TR",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": "شائع",
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "EU + TR",
    "featured": true,
    "popularity": 24000.0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "honor-of-kings-token-redeem-code-global",
    "name": "Honor of Kings Token Redeem Code (Global)",
    "description": "ألعاب الموبايل · Global",
    "icon": "fa-solid fa-crown",
    "image": "https://logo.clearbit.com/honorofkings.com",
    "color": "#C9A227",
    "badge": "شائع",
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Global",
    "featured": true,
    "popularity": 20000.0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-bd",
    "name": "EA Sports FC Mobile (BD)",
    "description": "ألعاب الموبايل · Bangladesh",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": "تقييم ممتاز",
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Bangladesh",
    "featured": true,
    "popularity": 4000.0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "sling-tv-gift-card-us",
    "name": "Sling TV Gift Card (US)",
    "description": "بث وفيديو · United States",
    "icon": "fa-solid fa-satellite",
    "image": "https://logo.clearbit.com/sling.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United States",
    "featured": false,
    "popularity": 16.0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "showtime-gift-card-us",
    "name": "Showtime Gift Card (US)",
    "description": "بث وفيديو · United States",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/showtime.com",
    "color": "#FF0000",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United States",
    "featured": false,
    "popularity": 1.0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "bilibili-premium-membership-my",
    "name": "Bilibili Premium Membership (MY)",
    "description": "بث وفيديو · Malaysia",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/bilibili.com",
    "color": "#00A1D6",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "bilibili-premium-membership-ph",
    "name": "Bilibili Premium Membership (PH)",
    "description": "بث وفيديو · Philippines",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/bilibili.com",
    "color": "#00A1D6",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "bilibili-premium-membership-sg",
    "name": "Bilibili Premium Membership (SG)",
    "description": "بث وفيديو · Singapore",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/bilibili.com",
    "color": "#00A1D6",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "bilibili-premium-membership-th",
    "name": "Bilibili Premium Membership (TH)",
    "description": "بث وفيديو · Thailand",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/bilibili.com",
    "color": "#00A1D6",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "bilibili-premium-membership-vn",
    "name": "Bilibili Premium Membership (VN)",
    "description": "بث وفيديو · Vietnam",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/bilibili.com",
    "color": "#00A1D6",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "bstation-premium-membership-id",
    "name": "Bstation Premium Membership (ID)",
    "description": "بث وفيديو · Indonesia",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/bstation.com",
    "color": "#00A1D6",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "hulu-gift-card-jp",
    "name": "Hulu Gift Card (JP)",
    "description": "بث وفيديو · Japan",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/hulu.com",
    "color": "#1CE783",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "indieflix-subscription-us",
    "name": "IndieFlix Subscription (US)",
    "description": "بث وفيديو · United States",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/indieflix.com",
    "color": "#6C63FF",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "iqiyi-vip-voucher-code-id",
    "name": "iQiyi VIP Voucher Code (ID)",
    "description": "بث وفيديو · Indonesia",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/iqiyi.com",
    "color": "#00CC36",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "iqiyi-vip-voucher-code-mena",
    "name": "iQiyi VIP Voucher Code (MENA)",
    "description": "بث وفيديو · MENA",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/iqiyi.com",
    "color": "#00CC36",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "MENA",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "iqiyi-vip-voucher-code-my",
    "name": "iQiyi VIP Voucher Code (MY)",
    "description": "بث وفيديو · Malaysia",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/iqiyi.com",
    "color": "#00CC36",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "iqiyi-vip-voucher-code-sg",
    "name": "iQiyi VIP Voucher Code (SG)",
    "description": "بث وفيديو · Singapore",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/iqiyi.com",
    "color": "#00CC36",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "iqiyi-vip-voucher-code-th",
    "name": "iQiyi VIP Voucher Code (TH)",
    "description": "بث وفيديو · Thailand",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/iqiyi.com",
    "color": "#00CC36",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "iqiyi-vip-voucher-code-vn",
    "name": "iQiyi VIP Voucher Code (VN)",
    "description": "بث وفيديو · Vietnam",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/iqiyi.com",
    "color": "#00CC36",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "mbc-shahid-dz",
    "name": "MBC Shahid (DZ)",
    "description": "بث وفيديو · Algeria",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/shahid.mbc.net",
    "color": "#E31C23",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Algeria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "mbc-shahid-eg",
    "name": "MBC Shahid (EG)",
    "description": "بث وفيديو · Egypt",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/shahid.mbc.net",
    "color": "#E31C23",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Egypt",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "mbc-shahid-global",
    "name": "MBC Shahid (Global)",
    "description": "بث وفيديو · Global",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/shahid.mbc.net",
    "color": "#E31C23",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "mbc-shahid-lb",
    "name": "MBC Shahid (LB)",
    "description": "بث وفيديو · Lebanon",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/shahid.mbc.net",
    "color": "#E31C23",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Lebanon",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "mbc-shahid-sa",
    "name": "MBC Shahid (SA)",
    "description": "بث وفيديو · Saudi Arabia",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/shahid.mbc.net",
    "color": "#E31C23",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Saudi Arabia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "mbc-shahid-tu",
    "name": "MBC Shahid (TU)",
    "description": "بث وفيديو · Tunisia",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/shahid.mbc.net",
    "color": "#E31C23",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Tunisia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "netflix-gift-card-ae",
    "name": "Netflix Gift Card (AE)",
    "description": "بث وفيديو · UAE",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "UAE",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-au",
    "name": "Netflix Gift Card (AU)",
    "description": "بث وفيديو · Australia",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-br",
    "name": "Netflix Gift Card (BR)",
    "description": "بث وفيديو · Brazil",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-co",
    "name": "Netflix Gift Card (CO)",
    "description": "بث وفيديو · Colombia",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Colombia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-eu",
    "name": "Netflix Gift Card (EU)",
    "description": "بث وفيديو · Europe",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-hk",
    "name": "Netflix Gift Card (HK)",
    "description": "بث وفيديو · Hong Kong",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-jp",
    "name": "Netflix Gift Card (JP)",
    "description": "بث وفيديو · Japan",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-ksa",
    "name": "Netflix Gift Card (KSA)",
    "description": "بث وفيديو · Saudi Arabia",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Saudi Arabia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-mx",
    "name": "Netflix Gift Card (MX)",
    "description": "بث وفيديو · Mexico",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Mexico",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-pl",
    "name": "Netflix Gift Card (PL)",
    "description": "بث وفيديو · Poland",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Poland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-th",
    "name": "Netflix Gift Card (TH)",
    "description": "بث وفيديو · Thailand",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netflix-gift-card-uk",
    "name": "Netflix Gift Card (UK)",
    "description": "بث وفيديو · United Kingdom",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/netflix.com",
    "color": "#E50914",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "njoi-prepaid-reload-astro-my",
    "name": "NJOI Prepaid Reload - Astro (MY)",
    "description": "بث وفيديو · Malaysia",
    "icon": "fa-solid fa-satellite-dish",
    "image": "https://logo.clearbit.com/astro.com.my",
    "color": "#E60012",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "osn-subscription-dz",
    "name": "OSN+ Subscription (DZ)",
    "description": "بث وفيديو · Algeria",
    "icon": "fa-solid fa-satellite-dish",
    "image": "https://logo.clearbit.com/osn.com",
    "color": "#6B2D8B",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Algeria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "osn-subscription-ma",
    "name": "OSN+ Subscription (MA)",
    "description": "بث وفيديو · Morocco",
    "icon": "fa-solid fa-satellite-dish",
    "image": "https://logo.clearbit.com/osn.com",
    "color": "#6B2D8B",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Morocco",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "rtl-gift-card-de",
    "name": "RTL+ Gift Card (DE)",
    "description": "بث وفيديو · Germany",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/rtlplus.de",
    "color": "#DE0000",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Germany",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "s-sport-plus-subscriptions-tr",
    "name": "S Sport Plus Subscriptions (TR)",
    "description": "بث وفيديو · Turkey",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ssportplus.com",
    "color": "#E30613",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "starzplay-subscription-dz",
    "name": "StarzPlay Subscription (DZ)",
    "description": "بث وفيديو · Algeria",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/starzplay.com",
    "color": "#000000",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Algeria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "starzplay-subscription-ma",
    "name": "StarzPlay Subscription (MA)",
    "description": "بث وفيديو · Morocco",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/starzplay.com",
    "color": "#000000",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Morocco",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "tvbanywhere-my",
    "name": "TVBAnywhere+ (MY)",
    "description": "بث وفيديو · Malaysia",
    "icon": "fa-solid fa-tv",
    "image": "https://logo.clearbit.com/tvb.com",
    "color": "#E60012",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "twitch-gift-card-aud",
    "name": "Twitch Gift Card AUD",
    "description": "بث وفيديو · Australia",
    "icon": "fa-brands fa-twitch",
    "image": "https://logo.clearbit.com/twitch.tv",
    "color": "#9146FF",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      },
      {
        "id": "usd200",
        "label": "$200",
        "duration": "$200 USD",
        "price": 9200,
        "usd": 200
      }
    ]
  },
  {
    "id": "twitch-gift-card-cad",
    "name": "Twitch Gift Card CAD",
    "description": "بث وفيديو · Canada",
    "icon": "fa-brands fa-twitch",
    "image": "https://logo.clearbit.com/twitch.tv",
    "color": "#9146FF",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Canada",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      },
      {
        "id": "usd200",
        "label": "$200",
        "duration": "$200 USD",
        "price": 9200,
        "usd": 200
      }
    ]
  },
  {
    "id": "twitch-gift-card-eur",
    "name": "Twitch Gift Card EUR",
    "description": "بث وفيديو · Europe",
    "icon": "fa-brands fa-twitch",
    "image": "https://logo.clearbit.com/twitch.tv",
    "color": "#9146FF",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      },
      {
        "id": "usd200",
        "label": "$200",
        "duration": "$200 USD",
        "price": 9200,
        "usd": 200
      }
    ]
  },
  {
    "id": "viu-premium-subscription-code-my",
    "name": "Viu Premium Subscription Code (MY)",
    "description": "بث وفيديو · Malaysia",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/viu.com",
    "color": "#FF6A00",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "wetv-id",
    "name": "WeTV (ID)",
    "description": "بث وفيديو · Indonesia",
    "icon": "fa-solid fa-film",
    "image": "https://logo.clearbit.com/wetv.vip",
    "color": "#FF6600",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 138,
        "usd": 3
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 368,
        "usd": 8
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 644,
        "usd": 14
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1150,
        "usd": 25
      }
    ]
  },
  {
    "id": "yango-play-subscription-uae-ksa",
    "name": "Yango Play Subscription (UAE/KSA)",
    "description": "بث وفيديو · UAE / KSA",
    "icon": "fa-solid fa-play",
    "image": "https://logo.clearbit.com/play.yango.com",
    "color": "#FC3F1D",
    "badge": null,
    "category": "video-on-demand",
    "categoryName": "بث وفيديو",
    "region": "UAE / KSA",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "1m",
        "label": "شهر",
        "duration": "شهر",
        "price": 230,
        "usd": 5
      },
      {
        "id": "3m",
        "label": "3 أشهر",
        "duration": "3 أشهر",
        "price": 552,
        "usd": 12
      },
      {
        "id": "6m",
        "label": "6 أشهر",
        "duration": "6 أشهر",
        "price": 1012,
        "usd": 22
      },
      {
        "id": "1y",
        "label": "سنة",
        "duration": "سنة",
        "price": 1840,
        "usd": 40
      }
    ]
  },
  {
    "id": "meta-quest-gift-card-us",
    "name": "META Quest Gift Card (US)",
    "description": "بطاقات الهدايا · United States",
    "icon": "fa-brands fa-meta",
    "image": "https://logo.clearbit.com/meta.com",
    "color": "#0668E1",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United States",
    "featured": false,
    "popularity": 1000.0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "almosafer-gift-card-bh",
    "name": "Almosafer Gift Card (BH)",
    "description": "بطاقات الهدايا · Bahrain",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Bahrain",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "almosafer-gift-card-eg",
    "name": "Almosafer Gift Card (EG)",
    "description": "بطاقات الهدايا · Egypt",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Egypt",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "almosafer-gift-card-kw",
    "name": "Almosafer Gift Card (KW)",
    "description": "بطاقات الهدايا · Kuwait",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Kuwait",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "almosafer-gift-card-om",
    "name": "Almosafer Gift Card (OM)",
    "description": "بطاقات الهدايا · Oman",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Oman",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "almosafer-gift-card-qa",
    "name": "Almosafer Gift Card (QA)",
    "description": "بطاقات الهدايا · Qatar",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Qatar",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "almosafer-gift-card-sa",
    "name": "Almosafer Gift Card (SA)",
    "description": "بطاقات الهدايا · Saudi Arabia",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Saudi Arabia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "amazon-gift-card-in",
    "name": "Amazon Gift Card (IN)",
    "description": "بطاقات الهدايا · India",
    "icon": "fa-brands fa-amazon",
    "image": "https://logo.clearbit.com/amazon.com",
    "color": "#FF9900",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "India",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "amazon-gift-card-jp",
    "name": "Amazon Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-brands fa-amazon",
    "image": "https://logo.clearbit.com/amazon.com",
    "color": "#FF9900",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "amazon-gift-card-us",
    "name": "Amazon Gift Card (US)",
    "description": "بطاقات الهدايا · United States",
    "icon": "fa-brands fa-amazon",
    "image": "https://logo.clearbit.com/amazon.com",
    "color": "#FF9900",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "amazon-gift-card-za",
    "name": "Amazon Gift Card (ZA)",
    "description": "بطاقات الهدايا · South Africa",
    "icon": "fa-brands fa-amazon",
    "image": "https://logo.clearbit.com/amazon.com",
    "color": "#FF9900",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "South Africa",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-at",
    "name": "Apple Gift Card (AT)",
    "description": "بطاقات الهدايا · Austria",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Austria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-au",
    "name": "Apple Gift Card (AU)",
    "description": "بطاقات الهدايا · Australia",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-be",
    "name": "Apple Gift Card (BE)",
    "description": "بطاقات الهدايا · Belgium",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Belgium",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-ca",
    "name": "Apple Gift Card (CA)",
    "description": "بطاقات الهدايا · Canada",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Canada",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-ch",
    "name": "Apple Gift Card (CH)",
    "description": "بطاقات الهدايا · Switzerland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Switzerland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-de",
    "name": "Apple Gift Card (DE)",
    "description": "بطاقات الهدايا · Germany",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Germany",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-dk",
    "name": "Apple Gift Card (DK)",
    "description": "بطاقات الهدايا · Denmark",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Denmark",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-es",
    "name": "Apple Gift Card (ES)",
    "description": "بطاقات الهدايا · Spain",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Spain",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-fi",
    "name": "Apple Gift Card (FI)",
    "description": "بطاقات الهدايا · Finland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Finland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-fr",
    "name": "Apple Gift Card (FR)",
    "description": "بطاقات الهدايا · France",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "France",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-ie",
    "name": "Apple Gift Card (IE)",
    "description": "بطاقات الهدايا · Ireland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Ireland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-it",
    "name": "Apple Gift Card (IT)",
    "description": "بطاقات الهدايا · Italy",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Italy",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-nl",
    "name": "Apple Gift Card (NL)",
    "description": "بطاقات الهدايا · Netherlands",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Netherlands",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-no",
    "name": "Apple Gift Card (NO)",
    "description": "بطاقات الهدايا · Norway",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Norway",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-pl",
    "name": "Apple Gift Card (PL)",
    "description": "بطاقات الهدايا · Poland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Poland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-pt",
    "name": "Apple Gift Card (PT)",
    "description": "بطاقات الهدايا · Portugal",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Portugal",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-se",
    "name": "Apple Gift Card (SE)",
    "description": "بطاقات الهدايا · Sweden",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Sweden",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apple-gift-card-uk",
    "name": "Apple Gift Card (UK)",
    "description": "بطاقات الهدايا · United Kingdom",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "au-pay-gift-card-jp",
    "name": "au PAY Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "blu-voucher-zar",
    "name": "Blu Voucher (ZAR)",
    "description": "بطاقات الهدايا · South Africa",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "South Africa",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "booklive-gift-card-jp",
    "name": "Booklive Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "carrom-gold-gift-card",
    "name": "Carrom Gold Gift Card",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "dmm-gift-card-jp",
    "name": "DMM Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "dream-dubai-wallet-gift-card-ae",
    "name": "Dream Dubai Wallet Gift Card (AE)",
    "description": "بطاقات الهدايا · United Arab Emirates",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Arab Emirates",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-ar",
    "name": "Eneba Gift Card (AR)",
    "description": "بطاقات الهدايا · Argentina",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Argentina",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-au",
    "name": "Eneba Gift Card (AU)",
    "description": "بطاقات الهدايا · Australia",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-br",
    "name": "Eneba Gift Card (BR)",
    "description": "بطاقات الهدايا · Brazil",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-ca",
    "name": "Eneba Gift Card (CA)",
    "description": "بطاقات الهدايا · Canada",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Canada",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-eu",
    "name": "Eneba Gift Card (EU)",
    "description": "بطاقات الهدايا · Europe",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-pl",
    "name": "Eneba Gift Card (PL)",
    "description": "بطاقات الهدايا · Poland",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Poland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eneba-gift-card-uk",
    "name": "Eneba Gift Card (UK)",
    "description": "بطاقات الهدايا · United Kingdom",
    "icon": "fa-solid fa-tag",
    "image": "https://logo.clearbit.com/eneba.com",
    "color": "#7B2CBF",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "game-hollywood-gift-card-global",
    "name": "Game Hollywood Gift Card (Global)",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-ae",
    "name": "Google Play Gift Card (AE)",
    "description": "بطاقات الهدايا · United Arab Emirates",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Arab Emirates",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-at",
    "name": "Google Play Gift Card (AT)",
    "description": "بطاقات الهدايا · Austria",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Austria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-au",
    "name": "Google Play Gift Card (AU)",
    "description": "بطاقات الهدايا · Australia",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-be",
    "name": "Google Play Gift Card (BE)",
    "description": "بطاقات الهدايا · Belgium",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Belgium",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-br",
    "name": "Google Play Gift Card (BR)",
    "description": "بطاقات الهدايا · Brazil",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-ca",
    "name": "Google Play Gift Card (CA)",
    "description": "بطاقات الهدايا · Canada",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Canada",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-ch",
    "name": "Google Play Gift Card (CH)",
    "description": "بطاقات الهدايا · Switzerland",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Switzerland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-de",
    "name": "Google Play Gift Card (DE)",
    "description": "بطاقات الهدايا · Germany",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Germany",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-eu",
    "name": "Google Play Gift Card (EU)",
    "description": "بطاقات الهدايا · Europe",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-fr",
    "name": "Google Play Gift Card (FR)",
    "description": "بطاقات الهدايا · France",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "France",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-hk",
    "name": "Google Play Gift Card (HK)",
    "description": "بطاقات الهدايا · Hong Kong",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-in",
    "name": "Google Play Gift Card (IN)",
    "description": "بطاقات الهدايا · India",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "India",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-iq",
    "name": "Google Play Gift Card (IQ)",
    "description": "بطاقات الهدايا · Iraq",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Iraq",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-it",
    "name": "Google Play Gift Card (IT)",
    "description": "بطاقات الهدايا · Italy",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Italy",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-jp",
    "name": "Google Play Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-kr",
    "name": "Google Play Gift Card (KR)",
    "description": "بطاقات الهدايا · South Korea",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-mx",
    "name": "Google Play Gift Card (MX)",
    "description": "بطاقات الهدايا · Mexico",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Mexico",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-pl",
    "name": "Google Play Gift Card (PL)",
    "description": "بطاقات الهدايا · Poland",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Poland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-sa",
    "name": "Google Play Gift Card (SA)",
    "description": "بطاقات الهدايا · Saudi Arabia",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Saudi Arabia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-tr",
    "name": "Google Play Gift Card (TR)",
    "description": "بطاقات الهدايا · Turkey",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "google-play-gift-card-uk",
    "name": "Google Play Gift Card (UK)",
    "description": "بطاقات الهدايا · United Kingdom",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "huawei-gift-card-ae",
    "name": "HUAWEI Gift Card (AE)",
    "description": "بطاقات الهدايا · United Arab Emirates",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Arab Emirates",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "huawei-gift-card-sa",
    "name": "HUAWEI Gift Card (SA)",
    "description": "بطاقات الهدايا · Saudi Arabia",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Saudi Arabia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-ae",
    "name": "iTunes Gift Card (AE)",
    "description": "بطاقات الهدايا · United Arab Emirates",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Arab Emirates",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-at",
    "name": "iTunes Gift Card (AT)",
    "description": "بطاقات الهدايا · Austria",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Austria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-au",
    "name": "iTunes Gift Card (AU)",
    "description": "بطاقات الهدايا · Australia",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-be",
    "name": "iTunes Gift Card (BE)",
    "description": "بطاقات الهدايا · Belgium",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Belgium",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-br",
    "name": "iTunes Gift Card (BR)",
    "description": "بطاقات الهدايا · Brazil",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-ca",
    "name": "iTunes Gift Card (CA)",
    "description": "بطاقات الهدايا · Canada",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Canada",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-ch",
    "name": "iTunes Gift Card (CH)",
    "description": "بطاقات الهدايا · Switzerland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Switzerland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-de",
    "name": "iTunes Gift Card (DE)",
    "description": "بطاقات الهدايا · Germany",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Germany",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-dk",
    "name": "iTunes Gift Card (DK)",
    "description": "بطاقات الهدايا · Denmark",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Denmark",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-es",
    "name": "iTunes Gift Card (ES)",
    "description": "بطاقات الهدايا · Spain",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Spain",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-fi",
    "name": "iTunes Gift Card (FI)",
    "description": "بطاقات الهدايا · Finland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Finland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-fr",
    "name": "iTunes Gift Card (FR)",
    "description": "بطاقات الهدايا · France",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "France",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-hk",
    "name": "iTunes Gift Card (HK)",
    "description": "بطاقات الهدايا · Hong Kong",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-id",
    "name": "iTunes Gift Card (ID)",
    "description": "بطاقات الهدايا · Indonesia",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-ie",
    "name": "iTunes Gift Card (IE)",
    "description": "بطاقات الهدايا · Ireland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Ireland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-in",
    "name": "iTunes Gift Card (IN)",
    "description": "بطاقات الهدايا · India",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "India",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-it",
    "name": "iTunes Gift Card (IT)",
    "description": "بطاقات الهدايا · Italy",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Italy",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-jp",
    "name": "iTunes Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-mx",
    "name": "iTunes Gift Card (MX)",
    "description": "بطاقات الهدايا · Mexico",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Mexico",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-ng",
    "name": "iTunes Gift Card (NG)",
    "description": "بطاقات الهدايا · Nigeria",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Nigeria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-nl",
    "name": "iTunes Gift Card (NL)",
    "description": "بطاقات الهدايا · Netherlands",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Netherlands",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-no",
    "name": "iTunes Gift Card (NO)",
    "description": "بطاقات الهدايا · Norway",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Norway",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-nz",
    "name": "iTunes Gift Card (NZ)",
    "description": "بطاقات الهدايا · New Zealand",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "New Zealand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-pl",
    "name": "iTunes Gift Card (PL)",
    "description": "بطاقات الهدايا · Poland",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Poland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-pt",
    "name": "iTunes Gift Card (PT)",
    "description": "بطاقات الهدايا · Portugal",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Portugal",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-sa",
    "name": "iTunes Gift Card (SA)",
    "description": "بطاقات الهدايا · Saudi Arabia",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Saudi Arabia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-se",
    "name": "iTunes Gift Card (SE)",
    "description": "بطاقات الهدايا · Sweden",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Sweden",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-tw",
    "name": "iTunes Gift Card (TW)",
    "description": "بطاقات الهدايا · Taiwan",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Taiwan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "itunes-gift-card-uk",
    "name": "iTunes Gift Card (UK)",
    "description": "بطاقات الهدايا · United Kingdom",
    "icon": "fa-brands fa-apple",
    "image": "https://logo.clearbit.com/apple.com",
    "color": "#A2AAAD",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "jd-com-gift-card-cn",
    "name": "JD.com Gift Card (CN)",
    "description": "بطاقات الهدايا · China",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "China",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "kigso-gift-card-uk",
    "name": "Kigso Gift Card (UK)",
    "description": "بطاقات الهدايا · United Kingdom",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "kinguin-gift-card-eur",
    "name": "Kinguin Gift Card EUR",
    "description": "بطاقات الهدايا · Europe",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "kinguin-gift-card-pln",
    "name": "Kinguin Gift Card PLN",
    "description": "بطاقات الهدايا · Poland",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Poland",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "kinguin-gift-card-usd",
    "name": "Kinguin Gift Card USD",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "kode-voucher-google-play-id",
    "name": "Kode Voucher Google Play (ID)",
    "description": "بطاقات الهدايا · Indonesia",
    "icon": "fa-brands fa-google-play",
    "image": "https://logo.clearbit.com/play.google.com",
    "color": "#34A853",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "ludo-club-gift-card-global",
    "name": "Ludo Club Gift Card (Global)",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "meta-quest-gift-card-ca",
    "name": "META Quest Gift Card (CA)",
    "description": "بطاقات الهدايا · Canada",
    "icon": "fa-brands fa-meta",
    "image": "https://logo.clearbit.com/meta.com",
    "color": "#0668E1",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Canada",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "meta-quest-gift-card-de",
    "name": "META Quest Gift Card (DE)",
    "description": "بطاقات الهدايا · Germany",
    "icon": "fa-brands fa-meta",
    "image": "https://logo.clearbit.com/meta.com",
    "color": "#0668E1",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Germany",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "meta-quest-gift-card-fr",
    "name": "META Quest Gift Card (FR)",
    "description": "بطاقات الهدايا · France",
    "icon": "fa-brands fa-meta",
    "image": "https://logo.clearbit.com/meta.com",
    "color": "#0668E1",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "France",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "meta-quest-gift-card-jp",
    "name": "META Quest Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-brands fa-meta",
    "image": "https://logo.clearbit.com/meta.com",
    "color": "#0668E1",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "meta-quest-gift-card-uk",
    "name": "META Quest Gift Card (UK)",
    "description": "بطاقات الهدايا · United Kingdom",
    "icon": "fa-brands fa-meta",
    "image": "https://logo.clearbit.com/meta.com",
    "color": "#0668E1",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "nida-al-harb-gift-card",
    "name": "Nida Al Harb Gift Card",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "oisix-gift-card-jp",
    "name": "Oisix Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "rbx-credit-gift-card-global",
    "name": "Rbx Credit Gift Card (Global)",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/roblox.com",
    "color": "#E2231A",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "rewarble-gift-card-eur",
    "name": "Rewarble Gift Card EUR",
    "description": "بطاقات الهدايا · Europe",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "seagm-gift-card-global",
    "name": "SEAGM Gift Card (Global)",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "spotify-us",
    "name": "Spotify (US)",
    "description": "بطاقات الهدايا · United States",
    "icon": "fa-brands fa-spotify",
    "image": "https://logo.clearbit.com/spotify.com",
    "color": "#1DB954",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd15",
        "label": "$15",
        "duration": "$15 USD",
        "price": 690,
        "usd": 15
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "teen-patti-gold-gift-card",
    "name": "Teen Patti Gold Gift Card",
    "description": "بطاقات الهدايا · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "u-next-gift-card-jp",
    "name": "U-NEXT Gift Card (JP)",
    "description": "بطاقات الهدايا · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "gift-cards",
    "categoryName": "بطاقات الهدايا",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "9-card-980x",
    "name": "9 Card 980x",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "a-cash-sg",
    "name": "A-Cash (SG)",
    "description": "بطاقات الألعاب · Singapore",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "apex-legends-coins-ea-app",
    "name": "Apex Legends Coins (EA App)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "battle-net-balance-card-us",
    "name": "Battle.net Balance Card (US)",
    "description": "بطاقات الألعاب · United States",
    "icon": "fa-brands fa-battle-net",
    "image": "https://logo.clearbit.com/battle.net",
    "color": "#00AEFF",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "binance-gift-card-global",
    "name": "Binance Gift Card (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-brands fa-bitcoin",
    "image": "https://logo.clearbit.com/binance.com",
    "color": "#F3BA2F",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "booknlife-kr",
    "name": "Booknlife (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "cherry-credits-cc",
    "name": "Cherry Credits CC",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "cib-point-my",
    "name": "CIB Point (MY)",
    "description": "بطاقات الألعاب · Malaysia",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "conquer-point-card-global",
    "name": "Conquer Point Card (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "cookie-card-th",
    "name": "Cookie Card (TH)",
    "description": "بطاقات الألعاب · Thailand",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "culture-cash-kr",
    "name": "Culture Cash (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "duo-duo-card-cn",
    "name": "Duo Duo Card 百田网多多卡 (CN)",
    "description": "بطاقات الألعاب · China",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "China",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eggmoney-kr",
    "name": "EggMoney (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "eudemons-point-card-global",
    "name": "Eudemons Point Card (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "fortnite-v-bucks-card",
    "name": "Fortnite V-Bucks Card",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/epicgames.com",
    "color": "#2F2F2F",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "funcard-vn",
    "name": "Funcard (VN)",
    "description": "بطاقات الألعاب · Vietnam",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "game-club-gift-card-ph",
    "name": "Game Club Gift Card (PH)",
    "description": "بطاقات الألعاب · Philippines",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "garena-shells-id",
    "name": "Garena Shells (ID)",
    "description": "بطاقات الألعاب · Indonesia",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "garena-shells-my",
    "name": "Garena Shells (MY)",
    "description": "بطاقات الألعاب · Malaysia",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "garena-shells-ph",
    "name": "Garena Shells (PH)",
    "description": "بطاقات الألعاب · Philippines",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "garena-shells-sg",
    "name": "Garena Shells (SG)",
    "description": "بطاقات الألعاب · Singapore",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "garena-shells-th",
    "name": "Garena Shells (TH)",
    "description": "بطاقات الألعاب · Thailand",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "garena-shells-vn",
    "name": "Garena Shells (VN)",
    "description": "بطاقات الألعاب · Vietnam",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "garena-shells-gg-tw",
    "name": "Garena Shells GG貝殼幣 (TW)",
    "description": "بطاقات الألعاب · Taiwan",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Taiwan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "gash-card-hk",
    "name": "GASH Card (HK)",
    "description": "بطاقات الألعاب · Hong Kong",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gash-card-tw",
    "name": "GASH Card (TW)",
    "description": "بطاقات الألعاب · Taiwan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Taiwan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gift-me-crypto-voucher-br",
    "name": "Gift Me Crypto Voucher (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-brands fa-bitcoin",
    "image": "https://logo.clearbit.com/binance.com",
    "color": "#F3BA2F",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gift-me-crypto-voucher-eu",
    "name": "Gift Me Crypto Voucher (EU)",
    "description": "بطاقات الألعاب · Europe",
    "icon": "fa-brands fa-bitcoin",
    "image": "https://logo.clearbit.com/binance.com",
    "color": "#F3BA2F",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gift-me-crypto-voucher-us",
    "name": "Gift Me Crypto Voucher (US)",
    "description": "بطاقات الألعاب · United States",
    "icon": "fa-brands fa-bitcoin",
    "image": "https://logo.clearbit.com/binance.com",
    "color": "#F3BA2F",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gocash-global",
    "name": "GoCash (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gocash-game-card-br",
    "name": "GoCash Game Card (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gocash-game-card-mx",
    "name": "GoCash Game Card (MX)",
    "description": "بطاقات الألعاب · Mexico",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Mexico",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "gosu-vn",
    "name": "Gosu (VN)",
    "description": "بطاقات الألعاب · Vietnam",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "happy-money-gift-card-kr",
    "name": "Happy Money Gift Card (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "hitpoints-usd",
    "name": "HitPoints USD",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "imvu-prepaid-br",
    "name": "IMVU Prepaid (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-user",
    "image": "https://logo.clearbit.com/imvu.com",
    "color": "#FF3399",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "imvu-prepaid-nz",
    "name": "IMVU Prepaid (NZ)",
    "description": "بطاقات الألعاب · New Zealand",
    "icon": "fa-solid fa-user",
    "image": "https://logo.clearbit.com/imvu.com",
    "color": "#FF3399",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "New Zealand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "japan-webmoney-jpy",
    "name": "Japan WebMoney (JPY)",
    "description": "بطاقات الألعاب · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "jawaker-voucher-global",
    "name": "Jawaker Voucher (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "megaxus-mi-cash-voucher-id",
    "name": "Megaxus MI-CASH Voucher (ID)",
    "description": "بطاقات الألعاب · Indonesia",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "minecraft-minecoins-global",
    "name": "Minecraft Minecoins (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/minecraft.net",
    "color": "#62B47A",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "mobage-mobacoin-card-jp",
    "name": "Mobage MobaCoin Card (JP)",
    "description": "بطاقات الألعاب · Japan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "mobile-legends-adventure-m-cash-pin",
    "name": "Mobile Legends: Adventure M-Cash Pin",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-shield-halved",
    "image": "https://logo.clearbit.com/mobilelegends.com",
    "color": "#1E3A8A",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "mycard-my",
    "name": "MyCard (MY)",
    "description": "بطاقات الألعاب · Malaysia",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "mycard-tw",
    "name": "MyCard (TW)",
    "description": "بطاقات الألعاب · Taiwan",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Taiwan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "ncsoft-ncoin-global",
    "name": "NCsoft NCoin (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "ncsoft-ncoin-kr",
    "name": "NCsoft NCoin (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netease-pay-gift-card-brl",
    "name": "NetEase Pay Gift Card (BRL)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/neteasegames.com",
    "color": "#E60012",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netease-pay-gift-card-jpy",
    "name": "NetEase Pay Gift Card (JPY)",
    "description": "بطاقات الألعاب · Japan",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/neteasegames.com",
    "color": "#E60012",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netease-pay-gift-card-php",
    "name": "NetEase Pay Gift Card (PHP)",
    "description": "بطاقات الألعاب · Philippines",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/neteasegames.com",
    "color": "#E60012",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netease-pay-gift-card-usd",
    "name": "NetEase Pay Gift Card (USD)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/neteasegames.com",
    "color": "#E60012",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "nexon-cash-card-kr",
    "name": "Nexon Cash Card (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "nexon-game-card-karma-koin",
    "name": "Nexon Game Card (Karma Koin)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "pubg-mobile-uc-redeem-code-global",
    "name": "PUBG Mobile UC Redeem Code (Global)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-gun",
    "image": "https://logo.clearbit.com/pubg.com",
    "color": "#F2A900",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "qq-coin-q-cn",
    "name": "QQ Coin 腾讯Q币 (CN)",
    "description": "بطاقات الألعاب · China",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "China",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "razer-gold-thailand-thb",
    "name": "Razer Gold Thailand (THB)",
    "description": "بطاقات الألعاب · Thailand",
    "icon": "fa-solid fa-mouse",
    "image": "https://logo.clearbit.com/razer.com",
    "color": "#44D62C",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "razer-gold-usd-global-pin",
    "name": "Razer Gold USD (Global Pin)",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-mouse",
    "image": "https://logo.clearbit.com/razer.com",
    "color": "#44D62C",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "razer-gold-usd-us-wallet",
    "name": "Razer Gold USD (US Wallet)",
    "description": "بطاقات الألعاب · United States",
    "icon": "fa-solid fa-mouse",
    "image": "https://logo.clearbit.com/razer.com",
    "color": "#44D62C",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "rbx-gift-card-au",
    "name": "Rbx Gift Card (AU)",
    "description": "بطاقات الألعاب · Australia",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/roblox.com",
    "color": "#E2231A",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "rbx-gift-card-id",
    "name": "Rbx Gift Card (ID)",
    "description": "بطاقات الألعاب · Indonesia",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/roblox.com",
    "color": "#E2231A",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "riot-pin-myr",
    "name": "Riot Pin (MYR)",
    "description": "بطاقات الألعاب · Malaysia",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "riot-pin-php",
    "name": "Riot Pin (PHP)",
    "description": "بطاقات الألعاب · Philippines",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "riot-points-gift-card-au",
    "name": "Riot Points Gift Card (AU)",
    "description": "بطاقات الألعاب · Australia",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "riot-points-gift-card-br",
    "name": "Riot Points Gift Card (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "riot-points-gift-card-eu",
    "name": "Riot Points Gift Card (EU)",
    "description": "بطاقات الألعاب · Europe",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "riot-points-gift-card-na",
    "name": "Riot Points Gift Card (NA)",
    "description": "بطاقات الألعاب · North America",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "North America",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "riot-points-gift-card-tr",
    "name": "Riot Points Gift Card (TR)",
    "description": "بطاقات الألعاب · Turkey",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "roblox-digital-gift-card-my",
    "name": "Roblox Digital Gift Card (MY)",
    "description": "بطاقات الألعاب · Malaysia",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/roblox.com",
    "color": "#E2231A",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "roblox-gift-card-sg",
    "name": "Roblox Gift Card (SG)",
    "description": "بطاقات الألعاب · Singapore",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/roblox.com",
    "color": "#E2231A",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "roblox-gift-card-us",
    "name": "Roblox Gift Card (US)",
    "description": "بطاقات الألعاب · United States",
    "icon": "fa-solid fa-cube",
    "image": "https://logo.clearbit.com/roblox.com",
    "color": "#E2231A",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "scoin-vn",
    "name": "Scoin (VN)",
    "description": "بطاقات الألعاب · Vietnam",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "smart-cultureland-gamecard-kr",
    "name": "Smart Cultureland Gamecard (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-cop",
    "name": "Steam Wallet Code (COP)",
    "description": "بطاقات الألعاب · Colombia",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Colombia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-eur",
    "name": "Steam Wallet Code (EUR)",
    "description": "بطاقات الألعاب · Europe",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-gbp",
    "name": "Steam Wallet Code (GBP)",
    "description": "بطاقات الألعاب · United Kingdom",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "United Kingdom",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-hkd",
    "name": "Steam Wallet Code (HKD)",
    "description": "بطاقات الألعاب · Hong Kong",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-idr",
    "name": "Steam Wallet Code (IDR)",
    "description": "بطاقات الألعاب · Indonesia",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-inr",
    "name": "Steam Wallet Code (INR)",
    "description": "بطاقات الألعاب · India",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "India",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-jpy",
    "name": "Steam Wallet Code (JPY)",
    "description": "بطاقات الألعاب · Japan",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-krw",
    "name": "Steam Wallet Code (KRW)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-myr",
    "name": "Steam Wallet Code (MYR)",
    "description": "بطاقات الألعاب · Malaysia",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-php",
    "name": "Steam Wallet Code (PHP)",
    "description": "بطاقات الألعاب · Philippines",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-sgd",
    "name": "Steam Wallet Code (SGD)",
    "description": "بطاقات الألعاب · Singapore",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-thb",
    "name": "Steam Wallet Code (THB)",
    "description": "بطاقات الألعاب · Thailand",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-twd",
    "name": "Steam Wallet Code (TWD)",
    "description": "بطاقات الألعاب · Taiwan",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Taiwan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-usd",
    "name": "Steam Wallet Code (USD)",
    "description": "بطاقات الألعاب · Global / USD",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global / USD",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-vnd",
    "name": "Steam Wallet Code (VND)",
    "description": "بطاقات الألعاب · Vietnam",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-argentina-usd",
    "name": "Steam Wallet Code Argentina (USD)",
    "description": "بطاقات الألعاب · Argentina",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Argentina",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "steam-wallet-code-turkey-usd",
    "name": "Steam Wallet Code Turkey (USD)",
    "description": "بطاقات الألعاب · Turkey",
    "icon": "fa-brands fa-steam",
    "image": "https://logo.clearbit.com/store.steampowered.com",
    "color": "#1B2838",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "tango-prepaid-card",
    "name": "Tango Prepaid Card",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "teencash-kr",
    "name": "Teencash (KR)",
    "description": "بطاقات الألعاب · South Korea",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "South Korea",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "unipin-voucher-id",
    "name": "UniPin Voucher ID",
    "description": "بطاقات الألعاب · Indonesia",
    "icon": "fa-solid fa-wallet",
    "image": "https://logo.clearbit.com/unipin.com",
    "color": "#FF6A00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "unipin-voucher-my",
    "name": "UniPin Voucher MY",
    "description": "بطاقات الألعاب · Malaysia",
    "icon": "fa-solid fa-wallet",
    "image": "https://logo.clearbit.com/unipin.com",
    "color": "#FF6A00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "unipin-voucher-ph",
    "name": "UniPin Voucher PH",
    "description": "بطاقات الألعاب · Philippines",
    "icon": "fa-solid fa-wallet",
    "image": "https://logo.clearbit.com/unipin.com",
    "color": "#FF6A00",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "valorant-gift-card-br",
    "name": "Valorant Gift Card (BR)",
    "description": "بطاقات الألعاب · Brazil",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "valorant-gift-card-eu",
    "name": "Valorant Gift Card (EU)",
    "description": "بطاقات الألعاب · Europe",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Europe",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "valorant-gift-card-hk",
    "name": "Valorant Gift Card (HK)",
    "description": "بطاقات الألعاب · Hong Kong",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "valorant-gift-card-tr",
    "name": "Valorant Gift Card (TR)",
    "description": "بطاقات الألعاب · Turkey",
    "icon": "fa-solid fa-trophy",
    "image": "https://logo.clearbit.com/riotgames.com",
    "color": "#D13639",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "vcoin-vtc-vn",
    "name": "VCoin VTC (VN)",
    "description": "بطاقات الألعاب · Vietnam",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "wavegame-voucher-id",
    "name": "WaveGame Voucher (ID)",
    "description": "بطاقات الألعاب · Indonesia",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "wizard101-prepaid-game-cards",
    "name": "Wizard101 Prepaid Game Cards",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "yalla-ludo-gift-card",
    "name": "Yalla Ludo Gift Card",
    "description": "بطاقات الألعاب · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "zing-card-vn",
    "name": "Zing Card (VN)",
    "description": "بطاقات الألعاب · Vietnam",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "game-cards",
    "categoryName": "بطاقات الألعاب",
    "region": "Vietnam",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "cricket-gangsta-redeem-code-in",
    "name": "Cricket Gangsta Redeem Code (IN)",
    "description": "ألعاب الموبايل · India",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "India",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-ae",
    "name": "EA Sports FC Mobile (AE)",
    "description": "ألعاب الموبايل · United Arab Emirates",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "United Arab Emirates",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-ar",
    "name": "EA Sports FC Mobile (AR)",
    "description": "ألعاب الموبايل · Argentina",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Argentina",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-au",
    "name": "EA Sports FC Mobile (AU)",
    "description": "ألعاب الموبايل · Australia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Australia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-bo",
    "name": "EA Sports FC Mobile (BO)",
    "description": "ألعاب الموبايل · Bolivia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Bolivia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-br",
    "name": "EA Sports FC Mobile (BR)",
    "description": "ألعاب الموبايل · Brazil",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-cl",
    "name": "EA Sports FC Mobile (CL)",
    "description": "ألعاب الموبايل · Chile",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Chile",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-co",
    "name": "EA Sports FC Mobile (CO)",
    "description": "ألعاب الموبايل · Colombia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Colombia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-ec",
    "name": "EA Sports FC Mobile (EC)",
    "description": "ألعاب الموبايل · Ecuador",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Ecuador",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-eg",
    "name": "EA Sports FC Mobile (EG)",
    "description": "ألعاب الموبايل · Egypt",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Egypt",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-hk",
    "name": "EA Sports FC Mobile (HK)",
    "description": "ألعاب الموبايل · Hong Kong",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-id",
    "name": "EA Sports FC Mobile (ID)",
    "description": "ألعاب الموبايل · Indonesia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Indonesia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-in",
    "name": "EA Sports FC Mobile (IN)",
    "description": "ألعاب الموبايل · India",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "India",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-kh",
    "name": "EA Sports FC Mobile (KH)",
    "description": "ألعاب الموبايل · Cambodia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Cambodia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-kw",
    "name": "EA Sports FC Mobile (KW)",
    "description": "ألعاب الموبايل · Kuwait",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Kuwait",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-la",
    "name": "EA Sports FC Mobile (LA)",
    "description": "ألعاب الموبايل · Laos",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Laos",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-ma",
    "name": "EA Sports FC Mobile (MA)",
    "description": "ألعاب الموبايل · Morocco",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Morocco",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-mn",
    "name": "EA Sports FC Mobile (MN)",
    "description": "ألعاب الموبايل · Mongolia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Mongolia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-mx",
    "name": "EA Sports FC Mobile (MX)",
    "description": "ألعاب الموبايل · Mexico",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Mexico",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-my",
    "name": "EA Sports FC Mobile (MY)",
    "description": "ألعاب الموبايل · Malaysia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-np",
    "name": "EA Sports FC Mobile (NP)",
    "description": "ألعاب الموبايل · Nepal",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Nepal",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-nz",
    "name": "EA Sports FC Mobile (NZ)",
    "description": "ألعاب الموبايل · New Zealand",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "New Zealand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-pe",
    "name": "EA Sports FC Mobile (PE)",
    "description": "ألعاب الموبايل · Peru",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Peru",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-ph",
    "name": "EA Sports FC Mobile (PH)",
    "description": "ألعاب الموبايل · Philippines",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Philippines",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-pk",
    "name": "EA Sports FC Mobile (PK)",
    "description": "ألعاب الموبايل · Pakistan",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Pakistan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-py",
    "name": "EA Sports FC Mobile (PY)",
    "description": "ألعاب الموبايل · Paraguay",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Paraguay",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-qa",
    "name": "EA Sports FC Mobile (QA)",
    "description": "ألعاب الموبايل · Qatar",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Qatar",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-sa",
    "name": "EA Sports FC Mobile (SA)",
    "description": "ألعاب الموبايل · Saudi Arabia",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Saudi Arabia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-sg",
    "name": "EA Sports FC Mobile (SG)",
    "description": "ألعاب الموبايل · Singapore",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-th",
    "name": "EA Sports FC Mobile (TH)",
    "description": "ألعاب الموبايل · Thailand",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-tw",
    "name": "EA Sports FC Mobile (TW)",
    "description": "ألعاب الموبايل · Taiwan",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Taiwan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-uy",
    "name": "EA Sports FC Mobile (UY)",
    "description": "ألعاب الموبايل · Uruguay",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Uruguay",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "ea-sports-fc-mobile-za",
    "name": "EA Sports FC Mobile (ZA)",
    "description": "ألعاب الموبايل · South Africa",
    "icon": "fa-solid fa-futbol",
    "image": "https://logo.clearbit.com/ea.com",
    "color": "#000000",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "South Africa",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "free-fire-diamonds-pins-br",
    "name": "Free Fire Diamonds Pins (BR)",
    "description": "ألعاب الموبايل · Brazil",
    "icon": "fa-solid fa-fire",
    "image": "https://logo.clearbit.com/ff.garena.com",
    "color": "#FF6B00",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Brazil",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "jinjinjin-gift-pack-redeem-code-my",
    "name": "JinJinJin Gift Pack Redeem Code (MY)",
    "description": "ألعاب الموبايل · Malaysia",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "jinjinjin-gift-pack-redeem-code-sg",
    "name": "JinJinJin Gift Pack Redeem Code (SG)",
    "description": "ألعاب الموبايل · Singapore",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "lifeafter-pin",
    "name": "LifeAfter PIN",
    "description": "ألعاب الموبايل · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "moba-legends-5v5-diamonds-pin",
    "name": "Moba Legends: 5v5 Diamonds pin",
    "description": "ألعاب الموبايل · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "mobile-legends-diamonds-pin-mdirect",
    "name": "Mobile Legends Diamonds Pin (Mdirect)",
    "description": "ألعاب الموبايل · Mdirect",
    "icon": "fa-solid fa-shield-halved",
    "image": "https://logo.clearbit.com/mobilelegends.com",
    "color": "#1E3A8A",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Mdirect",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd1",
        "label": "$1",
        "duration": "$1 USD",
        "price": 46,
        "usd": 1
      },
      {
        "id": "usd2",
        "label": "$2",
        "duration": "$2 USD",
        "price": 92,
        "usd": 2
      },
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      }
    ]
  },
  {
    "id": "pasha-fencer-tr",
    "name": "Pasha Fencer (TR)",
    "description": "ألعاب الموبايل · Turkey",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "rainbow-six-mobile-redeem-code-global",
    "name": "Rainbow Six Mobile Redeem Code (Global)",
    "description": "ألعاب الموبايل · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "slots-golden-hoyeah-gift-pack-code",
    "name": "Slots Golden HoYeah Gift Pack Code",
    "description": "ألعاب الموبايل · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "mobile-game-cards",
    "categoryName": "ألعاب الموبايل",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "azteco-bitcoin-voucher",
    "name": "Azteco Bitcoin Voucher",
    "description": "كونسول وغيرها · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "bigpoint-epin-tr",
    "name": "Bigpoint Epin (TR)",
    "description": "كونسول وغيرها · Turkey",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "cashtocode-evoucher-usd",
    "name": "CashtoCode Evoucher (USD)",
    "description": "كونسول وغيرها · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "grabgifts-cash-voucher-th",
    "name": "GrabGifts Cash Voucher (TH)",
    "description": "كونسول وغيرها · Thailand",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "mint-prepaid-card-global",
    "name": "Mint Prepaid Card (Global)",
    "description": "كونسول وغيرها · Global",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Global",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "netease-pay-gift-card-ngn",
    "name": "NetEase Pay Gift Card (NGN)",
    "description": "كونسول وغيرها · Nigeria",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/neteasegames.com",
    "color": "#E60012",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Nigeria",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "nintendo-eshop-gift-card-hk",
    "name": "Nintendo eShop Gift Card (HK)",
    "description": "كونسول وغيرها · Hong Kong",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/nintendo.com",
    "color": "#E60012",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "nintendo-eshop-gift-card-jp",
    "name": "Nintendo eShop Gift Card (JP)",
    "description": "كونسول وغيرها · Japan",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/nintendo.com",
    "color": "#E60012",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Japan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "nintendo-eshop-gift-card-us",
    "name": "Nintendo eShop Gift Card (US)",
    "description": "كونسول وغيرها · United States",
    "icon": "fa-solid fa-gamepad",
    "image": "https://logo.clearbit.com/nintendo.com",
    "color": "#E60012",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "phonepe-gift-card-in",
    "name": "PhonePe Gift Card (IN)",
    "description": "كونسول وغيرها · India",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "India",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "playstation-network-card-hk",
    "name": "PlayStation Network Card (HK)",
    "description": "كونسول وغيرها · Hong Kong",
    "icon": "fa-brands fa-playstation",
    "image": "https://logo.clearbit.com/playstation.com",
    "color": "#003087",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Hong Kong",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "playstation-network-card-sg",
    "name": "PlayStation Network Card (SG)",
    "description": "كونسول وغيرها · Singapore",
    "icon": "fa-brands fa-playstation",
    "image": "https://logo.clearbit.com/playstation.com",
    "color": "#003087",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Singapore",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "playstation-network-card-tr",
    "name": "PlayStation Network Card (TR)",
    "description": "كونسول وغيرها · Turkey",
    "icon": "fa-brands fa-playstation",
    "image": "https://logo.clearbit.com/playstation.com",
    "color": "#003087",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "playstation-network-card-us",
    "name": "PlayStation Network Card (US)",
    "description": "كونسول وغيرها · United States",
    "icon": "fa-brands fa-playstation",
    "image": "https://logo.clearbit.com/playstation.com",
    "color": "#003087",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "United States",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "tng-reload-pin-my",
    "name": "TNG Reload Pin (MY)",
    "description": "كونسول وغيرها · Malaysia",
    "icon": "fa-solid fa-wallet",
    "image": "https://logo.clearbit.com/tngdigital.com.my",
    "color": "#0066B3",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Malaysia",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "truemoney-e-pins-th",
    "name": "TrueMoney e-Pins (TH)",
    "description": "كونسول وغيرها · Thailand",
    "icon": "fa-solid fa-credit-card",
    "image": null,
    "color": "#147BFE",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Thailand",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd25",
        "label": "$25",
        "duration": "$25 USD",
        "price": 1150,
        "usd": 25
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "xbox-live-gift-card-tr",
    "name": "Xbox Live Gift Card (TR)",
    "description": "كونسول وغيرها · Turkey",
    "icon": "fa-brands fa-xbox",
    "image": "https://logo.clearbit.com/xbox.com",
    "color": "#107C10",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Turkey",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  },
  {
    "id": "xbox-live-gift-card-tw",
    "name": "Xbox Live Gift Card (TW)",
    "description": "كونسول وغيرها · Taiwan",
    "icon": "fa-brands fa-xbox",
    "image": "https://logo.clearbit.com/xbox.com",
    "color": "#107C10",
    "badge": null,
    "category": "console-others",
    "categoryName": "كونسول وغيرها",
    "region": "Taiwan",
    "featured": false,
    "popularity": 0,
    "options": [
      {
        "id": "usd5",
        "label": "$5",
        "duration": "$5 USD",
        "price": 230,
        "usd": 5
      },
      {
        "id": "usd10",
        "label": "$10",
        "duration": "$10 USD",
        "price": 460,
        "usd": 10
      },
      {
        "id": "usd20",
        "label": "$20",
        "duration": "$20 USD",
        "price": 920,
        "usd": 20
      },
      {
        "id": "usd50",
        "label": "$50",
        "duration": "$50 USD",
        "price": 2300,
        "usd": 50
      },
      {
        "id": "usd100",
        "label": "$100",
        "duration": "$100 USD",
        "price": 4600,
        "usd": 100
      }
    ]
  }
];

const STORE_CONFIG = {
  name: "Marsa",
  currency: "أوقية",
  currencyCode: "MRU",
  whatsappNumber: "22248650585",
  tagline: "متجرك الموثوق للخدمات الرقمية",
  usdToMru: 46,
};
