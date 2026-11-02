import { instagramUrl, site, waLink } from "@/lib/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { InstagramIcon } from "./InstagramIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="relative mt-16 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-on-primary">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden>
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
              <span className="font-mono text-[13px] font-extrabold uppercase tracking-[0.12em] text-ink">
                {site.name}
              </span>
            </div>

            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-muted">
              {site.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-3 py-2 text-[12.5px] font-semibold text-ink transition-colors hover:border-line-2 hover:bg-primary-soft"
              >
                <WhatsAppIcon className="h-4 w-4 text-accent" />
                WhatsApp
              </a>
              <a
                href={instagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-3 py-2 text-[12.5px] font-semibold text-ink transition-colors hover:border-line-2 hover:bg-primary-soft"
              >
                <InstagramIcon className="h-4 w-4 text-accent" />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
              Kontak
            </h3>
            <ul className="mt-3 space-y-2 text-[13.5px] text-muted">
              <li>{site.address}</li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  +{site.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  @{site.instagram}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary transition-colors hover:text-primary-2"
                >
                  Lihat di Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
              Jam Buka
            </h3>
            <ul className="mt-3 space-y-1 text-[12.5px]">
              {site.hours.map((h) => (
                <li key={h.label} className="flex justify-between gap-3 text-muted">
                  <span>{h.label}</span>
                  <span className="font-mono text-ink-2">
                    {h.closed ? "Tutup" : `${h.open}–${h.close}`}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11.5px] text-muted">{site.hoursNote}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-[11.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Semua hak dilindungi.
          </p>
          <p className="font-mono uppercase tracking-[0.12em]">
            Dibuat dengan kopi &amp; cerita
          </p>
        </div>
      </div>
    </footer>
  );
}
