import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutions = [
  { id: "minerals", title: "Minerals", isActive: true },
  { id: "petro-chemicals", title: "Petro-chemicals", isActive: false },
  { id: "metals", title: "Metals", isActive: false },
  { id: "shipping", title: "Shipping & Logistics", isActive: false },
];

export function BusinessSolutions() {
  const [activeSolution, setActiveSolution] = useState("minerals");

  return (
    <section className="relative min-h-[50vh]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
        <img
          src="/group.png?height=1080&width=1920"
          alt="Industrial facility"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 mb-2">Our Business Solutions</p>
              <h2 className="text-5xl font-light text-white">Minerals</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We have strong capabilities to supply minerals like Coal, Gypsum,
              Limestone, Chromite used in various industries like Steel and
              Cement Industries. For more details please write to us. We have
              recently commenced mineral trading and mining business through its
              subsidiary with vision to expand our businesses and to met our
              customers' various requirements. We mainly trade in Coal and
              Nickle through reputed mining owners and traders ensuring right
              quality.
            </p>
            <Button
              variant="secondary"
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Know more about
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Navigation */}
          <div className="space-y-4">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution.id)}
                className={cn(
                  "w-full text-left p-4 border-b text-lg transition-colors",
                  activeSolution === solution.id
                    ? "text-yellow-500 border-yellow-500"
                    : "text-gray-300 border-gray-600 hover:text-gray-100",
                )}
              >
                {solution.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
