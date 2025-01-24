import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCarousel } from "@/components/service-carousel";
import { WeCareSection } from "@/components/weCareSection";
import { BusinessSolutions } from "@/components/bussinessSolution";
import Navbar from "@/components/ui/Navbar";
import { EnergySection } from "./components/energySection";
import { LowerCarbon } from "./components/lowerCarbon";
import Footer from "@/components/Footer";
import CriticalSection from "./components/CriticalSection";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}

      <Navbar imgSrc="/Logo White.svg" />

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={`/Video.png`}
          alt="Industrial Facility"
          className="object-cover w-full h-full"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-white/90 max-w-2xl mb-4">
            We create more than just an extensive range of polymers, polyesters,
            elastomers, and advanced materials.
          </p>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white max-w-4xl">
              <span className="block">MOST</span>
              <span className="block font-normal">ACCOMPLISHED</span>
              <span className="block">TRADERS</span>
              <span className="block font-normal">WORLDWIDE</span>
            </h1>

            <Button variant="link" className="text-white group pl-0 text-lg">
              Learn more about
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Service Categories Carousel */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto px-4 py-8">
            <ServiceCarousel />
          </div>
        </div>
      </section>

      <CriticalSection />
      <WeCareSection />
      <BusinessSolutions />
      <LowerCarbon />
      <EnergySection />
      <Footer />
    </main>
  );
}
