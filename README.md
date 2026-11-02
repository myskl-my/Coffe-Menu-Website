# Coffe-Menu-Website

Website menu kopi **My Story Coffee** — "Kopi yang menemani cerita harianmu." Built with Next.js 15, Tailwind CSS v4, TypeScript, and Framer Motion.

## Tentang Toko

- **Nama:** My Story Coffee
- **Tagline:** Kopi yang menemani cerita harianmu.
- **Alamat:** JL. Fiksiraya No.67, Story City
- **WhatsApp:** 6281234567890
- **Instagram:** @mystory.coffee

Jam buka:
- Minggu–Jumat: 08:00 – 22:00
- Sabtu: 08:00 – 23:00

*(Jam dapat berubah pada hari libur.)*

## Fitur

- Halaman menu kopi, non-kopi, dan makanan/ringanan
- Badge "best-seller" dan "recommended" pada pilihan curated
- Animasi halus dengan Framer Motion
- Layout responsif (mobile-friendly)
- Tombol pesan langsung via WhatsApp
- Tautan profil Instagram
- Desain modern dengan latar animasi dan spotlight kartu

## Stack Teknologi

| Teknologi | Versi |
|-----------|-------|
| Next.js | ^15.5.4 |
| React | ^19.1.1 |
| Tailwind CSS | ^4.1.13 |
| TypeScript | ^5.9.2 |
| Framer Motion | ^12.23.12 |

## Struktur Proyek

```
app/              # Next.js App Router (layout, page)
components/       # Komponen UI (Navbar, MenuSection, WhatsAppFab, dll.)
lib/data/         # Data menu dan profil toko (site.ts, menu.ts)
lib/              # Utilitas (motion.ts, smooth-scroll.ts)
public/           # Aset statis (gambar menu, favicon)
scripts/          # Skrip validasi menu
```

## Menu

### Coffee (Kopi)
Americano, Velvet Latte, Caramel Macchiato, Aren Latte, Mocha Cloud, Hazelnut Latte, Spanish Latte, Midnight Cold Brew.

### Non-Coffee
Strawberry Milk, Matcha Cloud, Chocolate Velvet, Mango Sunset, Blue Lagoon, Cookies & Cream, Lychee Blossom.

### Food & Snacks
Butter Croissant, Chocolate Danish, Crispy French Fries, Chicken Katsu Sandwich.

### Best Seller
Aren Latte, Spanish Latte, Midnight Cold Brew, Matcha Cloud, Chocolate Velvet, Chicken Katsu Sandwich.

### Recommended
Velvet Latte, Caramel Macchiato, Strawberry Milk, Butter Croissant, Crispy French Fries.

## Cara Menjalankan Secara Lokal

```bash
# Clone repo
git clone https://github.com/myskl-my/Coffe-Menu-Website.git
cd Coffe-Menu-Website

# Install dependensi
npm install

# Jalankan development server
npm run dev

# Build untuk produksi
npm run build

# Jalankan build hasil (via serve)
npm run start
```

Buka `http://localhost:3000` di browser.

## Kontribusi

Pull request dan saran sangat diterima. Silakan buka issue untuk diskusi fitur atau perbaikan.

## Lisensi

Private project — semua hak cipta dilindungi.

---

Dibuat oleh **myskl-my**.
