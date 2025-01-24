import { CircleArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white my-20">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Business <span className="text-teal-600">Solutions</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Is powered by one of our visions to be an esteemed organization,
          driven by the right product and client-centric approach, and to be in
          a commanding position in the local oil industry while spreading our
          wings in the global arena.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-lg rounded-md shadow-lg">
          <span className="flex gap-2 align-middle my-auto">
            <span>Contact Us Now</span> <CircleArrowRight />{" "}
          </span>
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src="/maining.png" // Replace with actual image URL
            alt="Business Solutions"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
