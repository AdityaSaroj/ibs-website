import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/types", label: "Types of IBS" },
  { href: "/symptoms", label: "Symptoms" },
  { href: "/risk-factor", label: "Risk Factor" },
  { href: "/treatment", label: "Treatment & Lifestyle" },
  { href: "/awareness", label: "Awareness Activities" },
  { href: "/about", label: "About the Researcher" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md mb-8">
      <div className="container mx-auto px-4 py-4 flex flex-wrap gap-4 items-center justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-blue-700 font-semibold px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-100 hover:text-blue-900"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
