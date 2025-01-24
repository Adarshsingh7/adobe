import { WeCareSection } from "@/components/weCareSection";
import { BusinessSolutions } from "@/components/bussinessSolution";
import Navbar from "@/components/ui/Navbar";
import { EnergySection } from "./components/energySection";
import { LowerCarbon } from "./components/lowerCarbon";
import Footer from "@/components/Footer";
import CriticalSection from "./components/CriticalSection";
import { HeroCarousel } from "./components/hero-carousel";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar imgSrc="/Logo White.svg" />

      <HeroCarousel />

      <CriticalSection />
      <WeCareSection />
      <BusinessSolutions />
      <LowerCarbon />
      <EnergySection />
      <Footer />
    </main>
  );
}
