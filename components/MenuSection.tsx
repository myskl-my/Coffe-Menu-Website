"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  bestSellers,
  menu,
  recommended,
  type MenuCategory,
} from "@/lib/data/menu";
import { useScrollTo } from "@/lib/smooth-scroll";
import { soft } from "@/lib/motion";
import { SpotlightCard } from "./SpotlightCard";
import { MenuImage } from "./MenuImage";
import { MenuItemCard } from "./MenuItemCard";

type Filter =
  | "all"
  | "best-seller"
  | "recommended"
  | "coffee"
  | "non-coffee"
  | "food-snacks";

const filterTabs: { id: Filter; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "best-seller", label: "Best Seller!" },
  { id: "recommended", label: "Rekomendasi" },
  { id: "coffee", label: "Coffee" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "food-snacks", label: "Food" },
];

const bestSellerCategory: MenuCategory = {
  id: "best-seller",
  eyebrow: "",
  name: "Best Seller!",
  description:
    "Menu yang paling sering dipesan pelanggan, pilihan aman kalau baru pertama mampir.",
  cover: "/images/menu/coffee-cover.png",
  kind: "drink",
  items: bestSellers,
};

const recommendedCategory: MenuCategory = {
  id: "recommended",
  eyebrow: "",
  name: "Rekomendasi",
  description:
    "Pilihan barista yang layak dicoba, dari yang klasik sampai yang manis.",
  cover: "/images/menu/non-coffee-cover.png",
  kind: "drink",
  items: recommended,
};

function CategoryHeading({ category }: { category: MenuCategory }) {
  return (
    <SpotlightCard animate index={0} lift={false} className="mb-8 sm:mb-10">
      <div className="group relative aspect-[16/10] w-full overflow-hidden sm:aspect-[2.3/1]">
        <MenuImage
          src={category.cover}
          alt={`Sampul kategori ${category.name}`}
          sizes="(max-width: 1024px) 100vw, 1100px"
          priority
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in srgb, var(--color-bg) 92%, transparent) 8%, color-mix(in srgb, var(--color-bg) 35%, transparent) 55%, transparent 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 max-w-2xl p-4 sm:p-7">
          <h3 id={`${category.id}-heading`} className="text-section text-ink">
            {category.name}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[13.5px]">
            {category.description}
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function MenuSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const scrollTo = useScrollTo();

  const pick = (f: Filter) => {
    setFilter(f);
    if (f !== "all") scrollTo(`#${f}`, { offset: 96 });
  };

  const categories =
    filter === "best-seller"
      ? [bestSellerCategory]
      : filter === "recommended"
        ? [recommendedCategory]
        : menu.filter((c) => filter === "all" || c.id === filter);

  return (
    <section id="menu" className="relative pb-24 pt-10 sm:pb-32 sm:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <h1 className="sr-only">Menu</h1>

        <div className="flex justify-center">
          <div className="surface flex w-full flex-col gap-1 rounded-xl p-1 sm:w-auto sm:flex-row sm:items-center sm:gap-2">
            <p className="px-2 pt-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:px-2 sm:py-0">
              Menu
            </p>
            <div
              role="tablist"
              aria-label="Filter kategori menu"
              className="grid grid-cols-3 gap-1 sm:flex sm:flex-wrap sm:justify-center"
            >
              {filterTabs.map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => pick(tab.id)}
                    className={[
                      "shrink-0 whitespace-nowrap rounded-lg px-1 py-2 text-center text-[clamp(9px,2.8vw,12.5px)] font-semibold uppercase leading-tight transition-colors sm:px-5 sm:text-[12.5px]",
                      active
                        ? "bg-primary text-on-primary"
                        : "text-muted hover:bg-surface-2 hover:text-ink",
                    ].join(" ")}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* categories */}
        <motion.div layout className="mt-10 space-y-16 sm:mt-12 sm:space-y-20">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              id={category.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={soft}
            >
              <CategoryHeading category={category} />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, i) => (
                  <MenuItemCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
