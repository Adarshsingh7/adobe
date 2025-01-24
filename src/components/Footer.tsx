import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  Phone,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Core Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-blue-50 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/Logo.svg?height=400&width=600"
                alt="Infinite Energy"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Newsletter and Social Links */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-b py-8">
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter email address"
              className="input"
            />
            <Button
              variant="default"
              className="bg-black text-white hover:bg-black/90"
            >
              Subscribe Newsletter
            </Button>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <img
              src="/Logo.svg"
              alt="Infinite Energy"
              width={160}
              height={60}
              className="object-contain"
            />
            <p className="text-muted-foreground">
              Don't dwell on what went wrong. Instead, focus on what to do next.
              Spend your energies on moving forward toward finding the answer.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5" />
              <span>+971 4 3298847</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <span>info@infinite-energy.me</span>
            </div>
          </div>

          <div className="relative h-40 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=160&width=320"
              alt="Location Map"
              className="object-cover"
            />
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t">
          <nav className="flex gap-8">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              About Us
            </a>
            <a
              href="/business"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Our Business
            </a>
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact Us
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()} Infinite Energy
          </p>
        </div>
      </div>
    </footer>
  );
}
