export type DayHours = {
  label: string;
  open: string;
  close: string;
  closed?: boolean;
};

/* shop profile (replace placeholder values) */
export const site = {
  name: "My Story Coffee",
  tagline: "Kopi yang menemani cerita harianmu.",
  address: "JL. Fiksiraya No.67, Story City",
  mapsUrl: "https://maps.google.com/?q=JL.+Fiksiraya+No.67,+Story+City",
  whatsapp: "6281234567890",
  instagram: "mystory.coffee",
  hoursNote: "Jam dapat berubah pada hari libur.",
  /* 0 = Sun ... 6 = Sat (JS getDay) */
  hours: [
    { label: "Minggu", open: "08:00", close: "22:00" },
    { label: "Senin", open: "08:00", close: "22:00" },
    { label: "Selasa", open: "08:00", close: "22:00" },
    { label: "Rabu", open: "08:00", close: "22:00" },
    { label: "Kamis", open: "08:00", close: "22:00" },
    { label: "Jumat", open: "08:00", close: "22:00" },
    { label: "Sabtu", open: "08:00", close: "23:00" },
  ] as DayHours[],
};

export function waLink(message = "Halo My Story Coffee, saya mau pesan.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function instagramUrl() {
  return `https://instagram.com/${site.instagram}`;
}
