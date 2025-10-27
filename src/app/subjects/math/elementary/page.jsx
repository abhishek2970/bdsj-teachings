"use client";
import Image from "next/image";
import Link from "next/link";

export default function ElementaryMathDetail() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-xl mt-3 sm:mt-8">
      <div className="flex flex-col gap-8">
        {/* Hero: Text left, image right */}
        <section className="flex flex-col-reverse sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">
              Online Elementary Math Tutoring with the Best Math Tutors
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Give your child the best start in math with <span className="font-semibold text-indigo-600">BDSJ Teaching’s</span> elementary math tutor program. Our engaging 1-on-1 sessions help students master math concepts, develop strong problem-solving skills, and build lasting confidence in a fun, interactive way.
            </p>
            <Link href="/book-demo">
              <button className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                Book Your Tutor
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80"
              alt="Elementary students learning math with a teacher"
              width={400}
              height={240}
              className="rounded-xl shadow-lg border-2 border-indigo-100 w-full h-auto max-w-[320px] sm:max-w-[400px]"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />
          </div>
        </section>

        {/* Benefits in color box */}
        <section className="bg-indigo-50 rounded-xl p-5 shadow">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Why Choose Us?</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Certified, experienced online math tutors</li>
            <li>Personalized 1-on-1 sessions for every student</li>
            <li>Gamified lessons and visual aids for engagement</li>
            <li>Flexible scheduling for busy families</li>
            <li>Aligned with Common Core and state curriculum standards</li>
          </ul>
        </section>

        {/* Key topics table */}
        <section>
          <h3 className="text-lg font-bold text-indigo-700 mb-1">Key Topics Covered</h3>
          <table className="w-full border-collapse border border-indigo-200 bg-indigo-50 mb-4 text-base">
            <tbody className="text-gray-800">
              <tr><td className="p-2 border">Number sense & Place value</td><td className="p-2 border">Counting, comparing, rounding, digit understanding</td></tr>
              <tr><td className="p-2 border">Addition & Subtraction</td><td className="p-2 border">Basic operations, regrouping, word problems</td></tr>
              <tr><td className="p-2 border">Multiplication & Division</td><td className="p-2 border">Times tables, equal groups, life applications</td></tr>
              <tr><td className="p-2 border">Fractions & Decimals</td><td className="p-2 border">Understanding, comparing, conversions</td></tr>
              <tr><td className="p-2 border">Geometry</td><td className="p-2 border">Shapes, measuring, area/perimeter, angles</td></tr>
              <tr><td className="p-2 border">Measurement & Data</td><td className="p-2 border">Clocks, money, graphs, lengths</td></tr>
              <tr><td className="p-2 border">Patterns & Early Algebra</td><td className="p-2 border">Patterns, equations, solving missing numbers</td></tr>
              <tr><td className="p-2 border">Problem-solving skills</td><td className="p-2 border">Real-world math, logical thinking</td></tr>
            </tbody>
          </table>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-6">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">Beyond Academics – Inspiring a Love for Math</h3>
          <p className="text-lg text-gray-900 font-semibold mt-2 mb-4">
            Our personalized approach transforms math from fear into achievement. Book a free demo and see how confidence grows!
          </p>
          <Link href="/book-demo">
            <button className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition-all">
              Book Your Tutor
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
