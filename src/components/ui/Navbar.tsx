import { Link } from "react-router-dom";

export default function Navbar({
  imgSrc,
  linkColor,
}: {
  imgSrc: string;
  linkColor?: "white" | "black";
}) {
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
            href="/"
            className={`hover:text-gray-500 transition-colors ${linkColor === "black" ? "text-black" : "text-white"}`}
          >
            Home
          </a>
          <Link
            to="/AboutUs"
            className={`hover:text-gray-500 transition-colors ${linkColor === "black" ? "text-black" : "text-white"}`}
          >
            About Us
          </Link>
          <Link
            key={"business"}
            to="/ourBusiness"
            className={`hover:text-gray-500 transition-colors ${linkColor === "black" ? "text-black" : "text-white"}`}
          >
            Our Business
          </Link>
          <a
            key={"contact"}
            href="/contact"
            className={`hover:text-gray-500 transition-colors ${linkColor === "black" ? "text-black" : "text-white"}`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
