import * as React from "react";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Slide {
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "SUPPLYING FUEL",
    subtitle: "TO EMPOWER GROWTH",
    category: "MINERALS",
    image: "/Video.png",
  },
  {
    title: "DELIVERING VALUE",
    subtitle: "THROUGH INNOVATION",
    category: "PETRO-CHEMICALS",
    image: "/Video2.png",
  },
  {
    title: "FORGING AHEAD",
    subtitle: "WITH STRENGTH",
    category: "METALS",
    image: "/Video.png",
  },
  {
    title: "CONNECTING WORLDS",
    subtitle: "THROUGH LOGISTICS",
    category: "SHIPPING & LOGISTICS",
    image: "/Video2.png",
  },
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative h-screen w-screen">
      <Carousel
        setApi={setApi}
        className="h-full w-full"
        // opts={{
        //   loop: true,
        // }}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-center px-16">
                  <div className="max-w-3xl space-y-4">
                    <p className="text-gray-200">
                      Our continued growth and product diversification define
                      our strength in sourcing from the best in class to
                      seamless logistics.
                    </p>
                    <h1 className="space-y-2 text-6xl font-light tracking-wider text-white">
                      <span className="block">{slide.title}</span>
                      <span className="block font-bold">{slide.subtitle}</span>
                    </h1>
                    <button className="mt-8 flex items-center gap-2 text-white">
                      Learn more about
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Arrows */}
        {/* <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 transition-opacity hover:opacity-100">
          <CarouselPrevious className="h-12 w-12 translate-x-0 border-2" />
          <CarouselNext className="h-12 w-12 translate-x-0 border-2" />
        </div> */}

        {/* Bottom Navigation */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="mx-auto flex max-w-md justify-between px-16">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "group flex flex-col items-center gap-2 transition-colors",
                  current === index ? "text-white" : "text-gray-400",
                )}
              >
                <span
                  className={cn(
                    "text-2xl font-bold",
                    current === index ? "text-white" : "text-gray-400",
                  )}
                >
                  {index + 1}
                </span>
                <span className="text-xs font-medium">{slide.category}</span>
                <div
                  className={cn(
                    "h-0.5 w-full transition-all",
                    current === index
                      ? "bg-white"
                      : "bg-gray-400 group-hover:bg-gray-300",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
}
