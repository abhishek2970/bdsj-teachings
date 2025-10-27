"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/subjects", label: "Subjects" },
    { href: "/book-demo", label: "Book Demo" },
    { href: "/about", label: "About" },

    // Contact redirects to Book Demo as before
    { href: "/book-demo", label: "Contact" },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-lg shadow-md z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.07 }}
            className="text-3xl font-extrabold text-indigo-600 tracking-tight cursor-pointer"
          >
            BDSJ Teaching’s
          </motion.h1>
        </Link>
        <ul className="flex gap-8 text-base font-semibold">
          {navLinks.map((link) => (
            <motion.li
              key={link.href + link.label}
              whileHover={{ scale: 1.15 }}
              className={`cursor-pointer ${
                pathname === link.href
                  ? "text-indigo-600 underline underline-offset-4 decoration-2 decoration-indigo-400"
                  : "text-gray-700 hover:text-indigo-500 hover:underline hover:decoration-indigo-300 transition"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
