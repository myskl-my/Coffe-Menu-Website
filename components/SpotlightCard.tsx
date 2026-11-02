"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { soft } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** hover lift */
  lift?: boolean;
  index?: number;
  animate?: boolean;
};

/** card surface with cursor spotlight */
export function SpotlightCard({
  children,
  className = "",
  lift = true,
  index = 0,
  animate = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hoverable, setHoverable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHoverable(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    if (!hoverable) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const base =
    "surface spotlight relative overflow-hidden rounded-[20px] " + className;
  const liftHover = lift && hoverable ? { y: -4 } : undefined;

  if (animate) {
    return (
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ ...soft, delay: Math.min(index * 0.06, 0.3) }}
        whileHover={liftHover}
        className={base}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      whileHover={liftHover}
      transition={soft}
      className={base}
    >
      {children}
    </motion.div>
  );
}
