import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Story Coffee - Menu Coffee, Non-Coffee & Food",
  description:
    "Menu satu halaman kedai kopi: kategori Coffee, Non-Coffee, dan Food & Snacks, lengkap dengan foto, nama, dan harga tiap menu.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#efe5d3",
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var light=t?t==="light":true;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",light?"#efe5d3":"#0c0e0f");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${jbmono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
