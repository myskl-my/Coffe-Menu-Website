import { waLink } from "@/lib/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-[13px] font-semibold text-on-primary shadow-[var(--shadow-float)] transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Pesan</span>
    </a>
  );
}
