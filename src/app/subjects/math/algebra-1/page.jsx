"use client";
import Image from "next/image";
import Link from "next/link";

export default function Algebra1Detail() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-xl mt-3 sm:mt-8">
      <div className="flex flex-col gap-8">
        {/* Hero section: text left, image right */}
        <section className="flex flex-col-reverse sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">
              Top Online Algebra 1 Tutor in USA for Private Learning
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Best online algebra tutors help you build a strong foundation in the topic. Experienced tutors simplify complex algebra concepts, making learning engaging and effective while boosting confidence in problem-solving. The sessions are personalized to suit your individual learning requirements.
            </p>
            <Link href="/book-demo">
              <button className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                Book Your Tutor
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Online algebra tutoring session"
              width={400}
              height={240}
              className="rounded-xl shadow-lg border-2 border-indigo-100 w-full h-auto max-w-[320px] sm:max-w-[400px]"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />
          </div>
        </section>

        {/* Why Choose Jaya's Algebra 1 Online Tutoring? */}
        <section>
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">
            Why Choose BDSJ Teaching’s Algebra 1 Online Tutoring?
          </h2>
          <p className="text-gray-700 mb-4">
            Algebra 1 is a crucial step in a student’s math journey. At BDSJ Teaching’s, we provide personalized tutoring that adapts to each student’s needs, ensuring they understand key concepts and develop essential problem-solving skills for academic success.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Certified tutors with years of experience</li>
            <li>Personalized learning plans</li>
            <li>Visual aids and interactive exercises</li>
            <li>Flexible, stress-free scheduling</li>
            <li>Curriculum aligned with state and national standards</li>
          </ul>
        </section>

        {/* Key Topics Covered */}
        <section>
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Key Topics Covered</h3>
          <table className="w-full border-collapse border border-indigo-200 bg-indigo-50 mb-6 text-base">
            <tbody className="text-gray-800">
              <tr><td className="p-2 border">Expressions & Equations</td><td className="p-2 border">Variables, coefficients, algebraic expressions</td></tr>
              <tr><td className="p-2 border">Linear Equations & Inequalities</td><td className="p-2 border">Solving, graphing, slope, inequalities</td></tr>
              <tr><td className="p-2 border">Functions & Graphs</td><td className="p-2 border">Recognizing, plotting, analyzing</td></tr>
              <tr><td className="p-2 border">Polynomials & Factoring</td><td className="p-2 border">Operations and factoring quadratic expressions</td></tr>
              <tr><td className="p-2 border">Quadratic Equations</td><td className="p-2 border">Factoring, completing the square, quadratic formula</td></tr>
              <tr><td className="p-2 border">Radicals & Exponents</td><td className="p-2 border">Simplifying radicals and exponential functions</td></tr>
              <tr><td className="p-2 border">Word Problems & Applications</td><td className="p-2 border">Apply algebraic concepts to solve real-world problems</td></tr>
            </tbody>
          </table>
        </section>

        {/* Beyond Academics */}
        <section>
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Beyond Academics – Developing a Love for Algebra</h3>
          <p className="text-gray-800 mb-4">
            Algebra 1 is about much more than numerals; it builds logical thinking and real-world problem-solving skills. Our tutors make math approachable and enjoyable, helping students build a positive attitude toward learning.
          </p>
          <p className="text-gray-800 mb-4">
            Many students struggle with algebra due to lack of confidence. Our step-by-step approach reduces anxiety, fosters a growth mindset, and strengthens critical thinking skills that benefit both math and life.
          </p>
          <p className="text-lg text-gray-900 font-semibold mt-6 text-center">
            Give your child the advantage of personalized 1-on-1 tutoring with expert guidance. Schedule a trial session today!
          </p>
          <Link href="/book-demo">
            <button className="mt-4 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition-all">
              Book Your Tutor
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
