"use client";
import { motion } from "framer-motion";
import { BookOpen, Globe2, Code, Brain, Languages, FlaskRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const subjects = [
    { icon: <BookOpen />, name: "English", color: "from-pink-500 to-rose-500", link: "/subjects/english" },
    { icon: <Brain />, name: "Math", color: "from-blue-500 to-indigo-500", link: "/subjects/math" },
    { icon: <FlaskRound />, name: "Science", color: "from-green-500 to-emerald-500", link: "/subjects/science" },
    { icon: <Languages />, name: "Hindi", color: "from-yellow-500 to-amber-500", link: "/subjects/hindi" },
    { icon: <Code />, name: "Coding", color: "from-purple-500 to-fuchsia-500", link: "/subjects/coding" },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Learn Smart. Learn Global. With BDSJ Teaching’s.
        </motion.h1>
        <p className="mt-4 text-lg text-gray-100">
          Empowering students from Nursery to Class 10 across India, USA, Canada, and Europe.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} className="mt-8">
          <Link
            href="/book-demo"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            Book a Free Demo
          </Link>
        </motion.div>
      </section>

      {/* Subjects */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Our Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {subjects.map((subject, index) => (
            <Link key={index} href={subject.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl text-white shadow-lg bg-gradient-to-r ${subject.color} flex flex-col items-center gap-3 cursor-pointer`}
              >
                <div className="text-3xl">{subject.icon}</div>
                <h3 className="text-lg font-semibold">{subject.name}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Global Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Global Reach</h2>
        <p className="text-gray-600 mb-8">
          We proudly teach students across <strong>India 🇮🇳</strong>, <strong>USA 🇺🇸</strong>, <strong>Canada 🇨🇦</strong>, and <strong>Europe 🇪🇺</strong>.
        </p>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="flex justify-center"
        >
          <Globe2 className="text-indigo-600 w-16 h-16" />
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {["Amazing teachers!", "Fun way to learn!", "My grades improved!"].map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition"
            >
              <p className="italic text-gray-600">“{text}”</p>
              <p className="mt-3 font-semibold text-indigo-600">– Student #{i + 1}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
