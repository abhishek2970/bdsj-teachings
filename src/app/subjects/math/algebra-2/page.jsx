"use client";
import Image from "next/image";
import Link from "next/link";

export default function Algebra2Detail() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-xl mt-3 sm:mt-8">
      <div className="flex flex-col gap-8">
        {/* Hero section: text left, image right */}
        <section className="flex flex-col-reverse sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">
              Master Algebra 2 with Expert Online Tutoring 
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Algebra 2 builds on the fundamentals of Algebra 1, introducing advanced concepts essential for higher-level math. Our 1-on-1 online tutoring provides personalized support to master key topics, improve problem-solving skills, and gain confidence.
            </p>
            <Link href="/book-demo">
              <button className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                Book Your Tutor
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
          <Image
              src="https://images.unsplash.com/photo-1446329360995-b4642a139973?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1077"
              alt="Algebra 2 and Trigonometry online tutoring session"
              width={400}
              height={240}
              className="rounded-xl shadow-lg border-2 border-indigo-100 w-full h-auto max-w-[320px] sm:max-w-[400px]"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />
          </div>
        </section>

        {/* Why Choose Our Algebra 2 Tutoring */}
        <section>
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">
            Why Choose BDSJ Teaching’s Online Algebra 2 Tutoring?
          </h2>
          <p className="text-gray-700 mb-4">
            Algebra 2 can be challenging, but the right guidance makes a huge difference. Our experienced tutors focus on clear explanations, step-by-step problem-solving, and customized lesson plans to help students master complex topics.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Experienced tutors specializing in Algebra 2 topics</li>
            <li>Visual explanations and real-life applications</li>
            <li>Flexible scheduling to accommodate your routine</li>
            <li>Curriculum aligned with school standards</li>
            <li>Personalized lesson plans tailored to your child’s needs</li>
          </ul>
        </section>

        {/* Key Algebra 2 Topics */}
        <section>
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Algebra 2 Online Topics We Cover</h3>
          <table className="w-full border-collapse border border-indigo-200 bg-indigo-50 mb-6 text-base">
            <tbody className="text-gray-800">
              <tr><td className="p-2 border">Functions & Transformations</td><td className="p-2 border">Polynomial, rational, exponential, logarithmic functions</td></tr>
              <tr><td className="p-2 border">Quadratic Equations & Complex Numbers</td><td className="p-2 border">Solving quadratics & working with imaginary numbers</td></tr>
              <tr><td className="p-2 border">Logarithms & Exponents</td><td className="p-2 border">Applying logarithmic rules and exponential functions</td></tr>
              <tr><td className="p-2 border">Trigonometry & Identities</td><td className="p-2 border">Sine, cosine, tangent, and trigonometric identities</td></tr>
              <tr><td className="p-2 border">Matrices & Systems of Equations</td><td className="p-2 border">Matrix operations and solving systems</td></tr>
              <tr><td className="p-2 border">Conic Sections</td><td className="p-2 border">Parabolas, ellipses, circles, hyperbolas</td></tr>
              <tr><td className="p-2 border">Probability & Statistics</td><td className="p-2 border">Permutations, combinations, data analysis</td></tr>
              <tr><td className="p-2 border">Sequences & Series</td><td className="p-2 border">Arithmetic and geometric sequences, summations</td></tr>
            </tbody>
          </table>
        </section>

        {/* Beyond Academics + CTA */}
        <section>
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Beyond Academics - Developing Problem-Solving Skills</h3>
          <p className="text-gray-800 mb-4">
            Algebra 2 develops analytical thinking and problem-solving skills useful in everyday life and future STEM careers.
          </p>
          <p className="text-gray-800 mb-4">
            Our patient, step-by-step guidance helps students overcome intimidation and build confidence for tackling tough problems.
          </p>
          <p className="text-lg text-gray-900 font-semibold mt-6 text-center">
            Enroll today for personalized 1-on-1 Algebra 2 tutoring and give your child the tools to succeed.
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
