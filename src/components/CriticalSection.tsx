import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function CriticalSection() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20" />
            <div className="relative">
              <img
                src="/About.png"
                alt="Industrial facility"
                width={1600}
                height={1200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium">WHO WE ARE</p>
              <h2 className="text-4xl font-light">
                CRITICAL THINKERS
                <br />
                <span className="font-normal">COLLABORATORS</span>
                <br />
                INNOVATORS
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                The company has been delivering excellence in the field of
                mining, metal trade, petrochemicals and more. We believe in
                transparency and strengthened by our company's values like
                teamwork, dedication and accountability.
              </p>
              <p className="text-gray-600">
                We have carved a niche for our company as one of the most
                diversified and dynamic commodity trader in this region.
              </p>
            </div>
            <Button variant="secondary" className="group">
              Know more about
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
