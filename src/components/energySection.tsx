import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export function EnergySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Energy that fuels
              <br />
              the world
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We're working to deliver the energy needed today. To lower the
              carbon intensity of our operations. And to build the lower carbon
              energy system of tomorrow. We believe that humanity can solve any
              challenge. That our greatest resource is our people. And that
              responsibility, trust and integrity will help us drive a
              prosperous future.
            </p>
            <Button
              variant="secondary"
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Discover more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/energy.png"
                alt="Oil pump in desert"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Newsletter and Social Links */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter email address"
              className="rounded-r-none"
            />
            <Button className="rounded-l-none bg-black hover:bg-gray-900 text-white">
              Subscribe Newsletter
            </Button>
          </div>

          <div className="flex gap-4">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "Youtube" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
