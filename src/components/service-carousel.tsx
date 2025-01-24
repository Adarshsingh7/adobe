import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  { number: "1", title: "MINERALS" },
  { number: "2", title: "PETRO-CHEMICALS" },
  { number: "3", title: "METALS" },
  { number: "4", title: "SHIPPING & LOGISTICS" },
];

export function ServiceCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem
            key={service.number}
            className="md:basis-1/2 lg:basis-1/4"
          >
            <Card className="bg-transparent border-none">
              <CardContent className="flex flex-col items-start space-y-2 p-4">
                <span className="text-2xl font-light text-white">
                  {service.number}
                </span>
                <h2 className="text-sm tracking-wider text-white">
                  {service.title}
                </h2>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
