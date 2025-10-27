"use client";
import Image from "next/image";
import Link from "next/link";

export default function Algebra2TrigonometryDetail() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-xl mt-3 sm:mt-8">
      <div className="flex flex-col gap-8">
        {/* Hero section: text left, image right */}
        <section className="flex flex-col-reverse sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">
              Online Tutoring for Algebra 2 and Trigonometry
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Unlock your full potential in Algebra 2 and Trigonometry with personalized online tutoring designed to build confidence and mastery. Our expert tutors tailor each session to match your learning style and pace, helping you excel in courses and exams from the comfort of home.
            </p>
            <Link href="/book-demo">
              <button className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                Book Your Tutor
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80"
              alt="Algebra 2 and Trigonometry online tutoring session"
              width={400}
              height={240}
              className="rounded-xl shadow-lg border-2 border-indigo-100 w-full h-auto max-w-[320px] sm:max-w-[400px]"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">
            Why Choose 1-on-1 Algebra 2 and Trigonometry Online Classes from BDSJ Teaching’s?
          </h2>
          <p className="text-gray-700 mb-4">
            Our certified online math tutors specialize in Algebra 2 and Trigonometry. They provide clear explanations, step-by-step guidance, and customized lesson plans to help students master complex topics and build confidence.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Experienced and dedicated tutors available 24/7</li>
            <li>Visual aids, graphing tools, and real-world applications</li>
            <li>Flexible scheduling for busy students and families</li>
            <li>Comprehensive curriculum aligned with academic standards</li>
          </ul>
        </section>

        {/* Key Topics */}
        <section>
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Key Topics Covered in Algebra 2 & Trigonometry</h3>
          <table className="w-full border-collapse border border-indigo-200 bg-indigo-50 mb-6 text-base">
            <tbody className="text-gray-800">
              <tr><td className="p-2 border">Quadratic Equations</td><td className="p-2 border">Factoring, completing the square, quadratic formula</td></tr>
              <tr><td className="p-2 border">Trigonometric Functions</td><td className="p-2 border">Sine, cosine, tangent, secant, cosecant, cotangent</td></tr>
              <tr><td className="p-2 border">Polynomial Expressions</td><td className="p-2 border">Operations and factoring polynomials</td></tr>
              <tr><td className="p-2 border">Unit Circle & Radian Measure</td><td className="p-2 border">Angle measures and trig function evaluation</td></tr>
              <tr><td className="p-2 border">Graphing Functions</td><td className="p-2 border">Quadratic, exponential, logarithmic, trigonometric</td></tr>
              <tr><td className="p-2 border">Trigonometric Identities</td><td className="p-2 border">Pythagorean, co-function, double-angle formulas</td></tr>
              <tr><td className="p-2 border">Exponential & Logarithmic Functions</td><td className="p-2 border">Properties, equations, and applications</td></tr>
              <tr><td className="p-2 border">Systems of Equations</td><td className="p-2 border">Linear and nonlinear, solved algebraically and graphically</td></tr>
              <tr><td className="p-2 border">Laws of Sines and Cosines</td><td className="p-2 border">Solving triangle problems in geometry and real life</td></tr>
              <tr><td className="p-2 border">Radicals and Complex Numbers</td><td className="p-2 border">Simplification and operations, polar form</td></tr>
              <tr><td className="p-2 border">Trigonometric Equations</td><td className="p-2 border">Solving and verifying solutions using identities</td></tr>
              <tr><td className="p-2 border">Polar Coordinates & Complex Numbers</td><td className="p-2 border">Plotting and understanding Euler’s & De Moivre’s theorems</td></tr>
              <tr><td className="p-2 border">Sequences, Series & Probability</td><td className="p-2 border">Arithmetic/geometric sequences, sigma notation, probability</td></tr>
              <tr><td className="p-2 border">Applications of Trigonometry</td><td className="p-2 border">Solving problems in physics, engineering, and design</td></tr>
            </tbody>
          </table>
        </section>

        {/* Beyond Academics */}
        <section>
          <h3 className="text-xl font-bold text-indigo-700 mb-3">Beyond Academics – Mastering Trigonometry with Confidence</h3>
          <p className="text-gray-800 mb-4">
            Our 1-on-1 online math classes help students build problem-solving skills and confidence. We make learning an enjoyable experience and help build positive attitudes towards math.
          </p>
          <p className="text-gray-800 mb-4">
            We reduce math anxiety with patient instruction, build critical thinking, and teach strategic approaches to complex problems.
          </p>
          <p className="text-lg text-gray-900 font-semibold mt-6 text-center">
            Enroll today and give your child the best personalized online Algebra 2 and Trigonometry tutoring.
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
