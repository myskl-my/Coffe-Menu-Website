import { Navbar } from "@/components/Navbar";
import { InfoStrip } from "@/components/InfoStrip";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageBackground } from "@/components/PageBackground";

export default function HomePage() {
  return (
    <>
      <PageBackground />
      <Navbar />
      <main className="relative z-10">
        <InfoStrip />
        <MenuSection />
        <Footer />
      </main>
      <WhatsAppFab />
    </>
  );
}
