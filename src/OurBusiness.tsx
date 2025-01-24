import HeroSection from "./components/businessHero";
import { BusinessSolutions } from "./components/bussinessSolution";
import Footer from "./components/Footer";
import Navbar from "./components/ui/Navbar";
import { WeCareSection } from "./components/weCareSection";

export default function OurBusiness() {
  return (
    <>
      <Navbar imgSrc="/Logo.svg" linkColor="black" />
      <HeroSection />
      <BusinessSolutions />
      <WeCareSection />
      <Footer />
    </>
  );
}
