"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/subjects", label: "Subjects" },
    { href: "/grades", label: "Grades" },
    { href: "/book-demo", label: "Book Demo" },
    { href: "/about", label: "About" },
    
    // 👇 Changed this line — contact now redirects to book-demo
    { href: "/book-demo", label: "Contact" },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-lg shadow-lg z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.07 }}
            className="text-2xl font-bold text-indigo-600 tracking-tight cursor-pointer"
          >
            BDSJ Teaching’s
          </motion.h1>
        </Link>
        <ul className="flex gap-5 text-sm font-semibold">
          {navLinks.map((link) => (
            <motion.li
              key={link.href + link.label}
              whileHover={{ scale: 1.18 }}
              className={`${
                pathname === link.href
                  ? "text-indigo-500 underline"
                  : "text-gray-800"
              } transition`}
            >
              <Link href={link.href}>{link.label}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
