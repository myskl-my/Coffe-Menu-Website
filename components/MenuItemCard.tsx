"use client";

import { motion } from "framer-motion";
import { formatPrice, getBadges, type MenuProduct } from "@/lib/data/menu";
import { soft } from "@/lib/motion";
import { SpotlightCard } from "./SpotlightCard";
import { MenuImage } from "./MenuImage";

type Props = { item: MenuProduct; index: number; placement?: string };

export function MenuItemCard({ item, index, placement }: Props) {
  const isDrink = "priceSmall" in item;
  const badges = getBadges(item.id);

  return (
    <SpotlightCard animate index={index} className="group flex h-full flex-col">
      {/* product image */}
      <div className="relative m-2.5 mb-0 aspect-[4/3] overflow-hidden rounded-[14px] bg-surface-2">
        <MenuImage
          src={item.image}
          alt={item.name}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {badges.length > 0 && (
          <div className="pointer-events-none absolute left-2 top-2 z-10 flex flex-wrap gap-1">
            {badges.map((badge) => (
              <span
                key={badge}
                className={[
                  "rounded-full px-2 py-[3px] font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-on-primary shadow-sm",
                  badge === "best-seller" ? "bg-primary" : "bg-accent",
                ].join(" ")}
              >
                {badge === "best-seller" ? "Best Seller" : "Rekomendasi"}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h4 className="text-[15px] font-semibold leading-snug tracking-tight text-ink">
          {item.name}
        </h4>
        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted">
          {item.description}
        </p>

        {isDrink ? (
          <div className="mt-4 flex items-end gap-5 border-t border-line pt-3">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Small
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...soft, delay: 0.1 }}
                className="mt-0.5 font-mono text-[15px] font-semibold text-primary"
              >
                {formatPrice(item.priceSmall)}
              </motion.p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                Large
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...soft, delay: 0.16 }}
                className="mt-0.5 font-mono text-[15px] font-semibold text-ink-2"
              >
                {formatPrice(item.priceLarge)}
              </motion.p>
            </div>
          </div>
        ) : (
          <div className="mt-4 border-t border-line pt-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...soft, delay: 0.1 }}
              className="font-mono text-[15px] font-semibold text-primary"
            >
              {formatPrice(item.price)}
            </motion.p>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}
