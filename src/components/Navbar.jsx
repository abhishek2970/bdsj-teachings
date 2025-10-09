"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/subjects", label: "Subjects" },
    { href: "/grades", label: "Grades" },
    { href: "/book-demo", label: "Book Demo" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-lg shadow-lg z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        <motion.h1 whileHover={{ scale: 1.07 }} className="text-2xl font-bold text-indigo-600 tracking-tight">
          BDSJ Teaching’s
        </motion.h1>
        <ul className="flex gap-5 text-sm font-semibold">
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.18 }}
              className={`${pathname === link.href ? 'text-indigo-500 underline' : 'text-gray-800'} transition`}
            >
              <Link href={link.href}>{link.label}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
