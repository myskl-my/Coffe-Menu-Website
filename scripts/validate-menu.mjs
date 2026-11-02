import { readFileSync, existsSync } from "node:fs";

const raw = readFileSync("lib/data/menu.ts", "utf8");
const src = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
const skip = new Set(["coffee", "non-coffee", "food-snacks"]);
const ids = [...src.matchAll(/id: "([a-z0-9-]+)"/g)]
  .map((x) => x[1])
  .filter((id) => !skip.has(id));
const smalls = (src.match(/priceSmall: \d+/g) || []).length;
const larges = (src.match(/priceLarge: \d+/g) || []).length;
const foodPrices = (src.match(/price: \d+/g) || []).length;
const dashes = src.match(/[\u2013\u2014]/g);
const imgs = [...src.matchAll(/img\("([a-z0-9-]+)"\)|"(\/images\/menu\/[^"]+)"/g)].map(
  (x) => (x[1] ? `${x[1]}.png` : x[2].split("/").pop()),
);
const missing = imgs.filter((f) => !existsSync(`public/images/menu/${f}`));

console.log("total products:", ids.length, "(expected 19)");
console.log("drink priceSmall:", smalls, "priceLarge:", larges, "(expected 15/15)");
console.log("food single price:", foodPrices, "(expected 4)");
console.log("em/en dashes in menu data:", dashes ? dashes.length : 0, "(expected 0)");
console.log("image refs:", imgs.length, "missing:", missing.length ? missing : "none");
console.log("unique product ids:", new Set(ids).size === ids.length ? "yes" : "NO");
