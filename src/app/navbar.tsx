"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/types", label: "Types" },
  { href: "/symptoms", label: "Symptoms" },
  { href: "/risk-factor", label: "Risk Factor" },
  { href: "/treatment", label: "Treatment" },
  { href: "/awareness", label: "Awareness" },
  { href: "/about", label: "About the Researcher" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md mb-8 px-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-700">
            IBS Awareness
          </Link>

          {/* Hamburger button for mobile */}
          <button
            className="lg:hidden p-2 text-blue-700 hover:bg-blue-100 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-blue-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-700"></div>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex gap-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-700 font-semibold px-2 py-2 rounded transition-colors duration-200 hover:bg-blue-100 hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-700 font-semibold px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-100 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
