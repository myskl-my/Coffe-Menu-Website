"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Status = { open: boolean; text: string };

function toMinutes(value: string) {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

function computeStatus(): Status {
  const now = new Date();
  const today = site.hours[now.getDay()];

  if (!today || today.closed) {
    return { open: false, text: "Tutup hari ini" };
  }

  const current = now.getHours() * 60 + now.getMinutes();
  const open = toMinutes(today.open);
  const close = toMinutes(today.close);
  const isOpen =
    close > open
      ? current >= open && current < close
      : current >= open || current < close;

  if (isOpen) return { open: true, text: `Buka · sampai ${today.close}` };
  if (current < open) return { open: false, text: `Tutup · buka ${today.open}` };

  const next = site.hours[(now.getDay() + 1) % 7];
  return { open: false, text: `Tutup · buka besok ${next.open}` };
}

export function InfoStrip() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-5 sm:pt-24">
      <div
        className="flex flex-col gap-3 rounded-2xl border border-white/45 bg-surface/45 px-4 py-3 shadow-[0_24px_60px_-40px_rgba(27,19,16,0.6)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-3.5"
        style={{ WebkitBackdropFilter: "blur(20px) saturate(1.3)" }}
      >
        <div className="min-w-0">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-primary">
            Coffee · Non-Coffee · Food
          </p>
          <p className="mt-1 text-[13.5px] leading-snug text-muted sm:text-[14px]">
            {site.tagline}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-surface-2/80 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-2 backdrop-blur-sm">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                status?.open ? "bg-accent" : "bg-muted"
              }`}
            />
            {status ? status.text : "Jam operasional"}
          </span>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-[12.5px] font-semibold text-on-primary transition-colors hover:bg-primary-2"
          >
            <WhatsAppIcon />
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
