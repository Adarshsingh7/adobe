import { Link } from "react-router";

export default function Navbar({ imgSrc }: { imgSrc: string }) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-white w-40">
          <img
            src={imgSrc}
            alt="Infinite Logo"
            width={160}
            height={60}
            className="w-full"
          />
        </div>
        <div className="hidden md:flex gap-8">
          <a
            key={"Home"}
            href="../home"
            className="text-white hover:text-gray-200 transition-colors"
          >
            home
          </a>
          <Link
            to="/AboutUs"
            className="text-white hover:text-gray-200 transition-colors"
          >
            About Us
          </Link>
          <a
            key={"bussiness"}
            href="../AboutUs"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Our Bussiness
          </a>
          <a
            key={"contact"}
            href="../AboutUs"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
