/* menu data; prices stored in IDR, rendered in thousands */

export type DrinkItem = {
  id: string;
  name: string;
  description: string;
  priceSmall: number;
  priceLarge: number;
  image: string;
};

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type MenuProduct = DrinkItem | FoodItem;

export type MenuCategory = {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  cover: string;
  kind: "drink" | "food";
  items: MenuProduct[];
};

/** 18000 -> "18" */
export function formatPrice(value: number): string {
  return String(Math.round(value / 1000));
}

export type MenuBadge = "best-seller" | "recommended";

/* curated picks */
export const BEST_SELLER_IDS = [
  "aren-latte",
  "spanish-latte",
  "midnight-cold-brew",
  "matcha-cloud",
  "chocolate-velvet",
  "chicken-katsu-sandwich",
] as const;

export const RECOMMENDED_IDS = [
  "velvet-latte",
  "caramel-macchiato",
  "strawberry-milk",
  "butter-croissant",
  "crispy-french-fries",
] as const;

const bestSellerSet = new Set<string>(BEST_SELLER_IDS);
const recommendedSet = new Set<string>(RECOMMENDED_IDS);

export function getBadges(id: string): MenuBadge[] {
  const badges: MenuBadge[] = [];
  if (bestSellerSet.has(id)) badges.push("best-seller");
  if (recommendedSet.has(id)) badges.push("recommended");
  return badges;
}

const img = (slug: string) => `/images/menu/${slug}.png`;

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    eyebrow: "Kategori 01 · Coffee",
    name: "Coffee",
    description:
      "Menu utama kedai. Espresso-based dan seduh dingin, dari yang clean sampai yang creamy.",
    cover: "/images/menu/coffee-cover.png",
    kind: "drink",
    items: [
      {
        id: "americano",
        name: "Americano",
        description:
          "Espresso dengan air, menghasilkan rasa kopi yang clean dan bold.",
        priceSmall: 18000,
        priceLarge: 23000,
        image: img("americano"),
      },
      {
        id: "velvet-latte",
        name: "Velvet Latte",
        description: "Espresso dengan susu creamy dan tekstur lembut.",
        priceSmall: 25000,
        priceLarge: 30000,
        image: img("velvet-latte"),
      },
      {
        id: "caramel-macchiato",
        name: "Caramel Macchiato",
        description: "Espresso, susu, dan sentuhan manis karamel.",
        priceSmall: 28000,
        priceLarge: 33000,
        image: img("caramel-macchiato"),
      },
      {
        id: "aren-latte",
        name: "Aren Latte",
        description:
          "Espresso dengan gula aren khas Indonesia dan susu creamy.",
        priceSmall: 25000,
        priceLarge: 30000,
        image: img("aren-latte"),
      },
      {
        id: "mocha-cloud",
        name: "Mocha Cloud",
        description: "Perpaduan espresso, cokelat, dan susu yang rich.",
        priceSmall: 27000,
        priceLarge: 32000,
        image: img("mocha-cloud"),
      },
      {
        id: "hazelnut-latte",
        name: "Hazelnut Latte",
        description: "Latte lembut dengan aroma kacang hazelnut.",
        priceSmall: 27000,
        priceLarge: 32000,
        image: img("hazelnut-latte"),
      },
      {
        id: "spanish-latte",
        name: "Spanish Latte",
        description:
          "Espresso dengan susu dan sentuhan rasa manis yang creamy.",
        priceSmall: 27000,
        priceLarge: 32000,
        image: img("spanish-latte"),
      },
      {
        id: "midnight-cold-brew",
        name: "Midnight Cold Brew",
        description:
          "Kopi seduh dingin dengan karakter rasa smooth dan menyegarkan.",
        priceSmall: 24000,
        priceLarge: 29000,
        image: img("midnight-cold-brew"),
      },
    ],
  },
  {
    id: "non-coffee",
    eyebrow: "Kategori 02 · Non-Coffee",
    name: "Non-Coffee",
    description:
      "Pilihan tanpa kopi yang tetap digarap serius: susu, matcha, cokelat, buah, dan soda.",
    cover: "/images/menu/non-coffee-cover.png",
    kind: "drink",
    items: [
      {
        id: "strawberry-milk",
        name: "Strawberry Milk",
        description:
          "Susu creamy dengan rasa stroberi yang manis dan fruity.",
        priceSmall: 22000,
        priceLarge: 27000,
        image: img("strawberry-milk"),
      },
      {
        id: "matcha-cloud",
        name: "Matcha Cloud",
        description: "Matcha dengan susu lembut dan lapisan creamy.",
        priceSmall: 26000,
        priceLarge: 31000,
        image: img("matcha-cloud"),
      },
      {
        id: "chocolate-velvet",
        name: "Chocolate Velvet",
        description: "Cokelat pekat dengan susu creamy.",
        priceSmall: 24000,
        priceLarge: 29000,
        image: img("chocolate-velvet"),
      },
      {
        id: "mango-sunset",
        name: "Mango Sunset",
        description:
          "Minuman mangga manis dengan sensasi tropis yang menyegarkan.",
        priceSmall: 22000,
        priceLarge: 27000,
        image: img("mango-sunset"),
      },
      {
        id: "blue-lagoon",
        name: "Blue Lagoon",
        description:
          "Minuman soda berwarna biru dengan sensasi citrus yang segar.",
        priceSmall: 20000,
        priceLarge: 25000,
        image: img("blue-lagoon"),
      },
      {
        id: "cookies-cream",
        name: "Cookies & Cream",
        description:
          "Perpaduan susu, krim, dan remahan biskuit cokelat.",
        priceSmall: 26000,
        priceLarge: 31000,
        image: img("cookies-and-cream"),
      },
      {
        id: "lychee-blossom",
        name: "Lychee Blossom",
        description:
          "Minuman leci dengan aroma floral dan sensasi menyegarkan.",
        priceSmall: 22000,
        priceLarge: 27000,
        image: img("lychee-blossom"),
      },
    ],
  },
  {
    id: "food-snacks",
    eyebrow: "Kategori 03 · Food & Snacks",
    name: "Food & Snacks",
    description:
      "Pastry, sandwich, dan cemilan untuk menemani cangkir kamu.",
    cover: "/images/menu/food-cover.png",
    kind: "food",
    items: [
      {
        id: "butter-croissant",
        name: "Butter Croissant",
        description:
          "Croissant renyah di luar dengan lapisan pastry yang lembut di dalam.",
        price: 18000,
        image: img("butter-croissant"),
      },
      {
        id: "chocolate-danish",
        name: "Chocolate Danish",
        description: "Pastry berlapis dengan isian cokelat manis.",
        price: 22000,
        image: img("chocolate-danish"),
      },
      {
        id: "crispy-french-fries",
        name: "Crispy French Fries",
        description: "Kentang goreng renyah dengan taburan bumbu pilihan.",
        price: 18000,
        image: img("crispy-french-fries"),
      },
      {
        id: "chicken-katsu-sandwich",
        name: "Chicken Katsu Sandwich",
        description:
          "Sandwich dengan ayam katsu renyah, sayuran, dan saus spesial.",
        price: 30000,
        image: img("chicken-katsu-sandwich"),
      },
    ],
  },
];

export const allItems = menu.flatMap((category) => category.items);
export const bestSellers = allItems.filter((item) => bestSellerSet.has(item.id));
export const recommended = allItems.filter((item) => recommendedSet.has(item.id));

export const menuStats = {
  total: menu.reduce((n, c) => n + c.items.length, 0),
  drinks: menu
    .filter((c) => c.kind === "drink")
    .reduce((n, c) => n + c.items.length, 0),
  food: menu
    .filter((c) => c.kind === "food")
    .reduce((n, c) => n + c.items.length, 0),
};
