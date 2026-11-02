import type { Transition, Variants } from "framer-motion";

/* spring presets */
export const snap: Transition = { type: "spring", stiffness: 400, damping: 30 };
export const soft: Transition = { type: "spring", stiffness: 200, damping: 26 };
export const bounce: Transition = { type: "spring", stiffness: 350, damping: 15 };

export const ease = [0.4, 0, 0.2, 1] as const;

/** entrance */
export const blurFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: soft,
  },
};

/** stagger container */
export function staggerChildren(stagger = 0.06, delay = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  } satisfies Variants;
}

/** staggered item */
export function blurFadeItem(index: number, step = 0.06, cap = 0.3): Variants {
  return {
    hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { ...soft, delay: Math.min(index * step, cap) },
    },
  };
}
