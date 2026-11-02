"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/data/site";
import { soft } from "@/lib/motion";

/** top bar */
export function Navbar() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={soft}
      className="fixed inset-x-0 top-0 z-50 h-14 border-b border-line"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-bg) 72%, transparent)",
        backdropFilter: "blur(22px) saturate(1.4)",
        WebkitBackdropFilter: "blur(22px) saturate(1.4)",
      }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary text-on-primary">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M5 9h11v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V9Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M8.5 6c0-1 1-1.4 1-2.5M12 6c0-1 1-1.4 1-2.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="truncate font-mono text-[13px] font-extrabold uppercase tracking-[0.1em] text-ink sm:text-[14px] sm:tracking-[0.14em]">
            {site.name}
          </span>
        </div>
      </div>
    </motion.header>
  );
}
