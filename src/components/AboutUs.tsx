import Navbar from "@/components/ui/Navbar";
import { BusinessSolutions } from "@/components/bussinessSolution";
import CriticalSection from "./CriticalSection";
import BusinessOverview from "./BussinessOverview";
import Footer from "./Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar imgSrc="/Logo White.svg" />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/banner.png"
          alt="Industrial facility at sunset"
          // className="object-cover brightness-75 w-full h-full"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white font-bold text-5xl md:text-7xl mb-4">
              About Us
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl">
              Delivering sustainable energy solutions for a better tomorrow
            </p>
          </div>
        </div>
      </div>

      {/* First Content Section - Image Left, Text Right */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Industrial equipment"
                className="object-cover w-full h-full"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We are committed to providing reliable and sustainable energy
                solutions that power progress while protecting our planet. Our
                innovative approaches and cutting-edge technologies enable us to
                meet the growing energy demands of today while building a more
                sustainable future for tomorrow.
              </p>
              <p className="text-lg text-muted-foreground">
                With decades of experience in the energy sector, we have
                developed a deep understanding of the complex challenges facing
                our industry and the communities we serve. Our team of experts
                works tirelessly to develop and implement solutions that balance
                environmental responsibility with economic viability.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <CriticalSection />
      <BusinessOverview />

      {/* Second Content Section - Text Left, Image Right */}

      {/* Business Overview Section */}
      <BusinessSolutions />

      <Footer />
    </div>
  );
}
