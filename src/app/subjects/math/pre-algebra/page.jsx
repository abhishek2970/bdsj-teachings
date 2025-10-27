"use client";
import Image from "next/image";
import Link from "next/link";

export default function PreAlgebraDetail() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-xl mt-3 sm:mt-8">
      <div className="flex flex-col gap-8">
        {/* Hero: Text left, image right */}
        <section className="flex flex-col-reverse sm:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4">
              Online Pre-Algebra Tutoring by Skilled Algebra Tutors
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Prepare your child for future success with our 1-on-1 online
              pre-algebra tutoring.{" "}
              <span className="font-semibold text-indigo-600">
                BDSJ Teaching’s
              </span>{" "}
              expert tutors focus on fundamental algebra concepts, ensuring your
              child gains the skills and confidence to tackle future
              advancements in mathematics.
            </p>
            <Link href="/book-demo">
              <button className="mt-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-bold rounded-xl shadow-md hover:scale-105 transition-all">
                Book Your Tutor
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
          <Image
              src="https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
              alt="Teenage schoolgirl thinking while solving math problem on blackboard"
              width={400}
              height={240}
              className="rounded-xl shadow-lg border-2 border-indigo-100 w-full h-auto max-w-[320px] sm:max-w-[400px]"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />

          </div>
        </section>

        {/* Benefits list */}
        <section className="bg-indigo-50 rounded-xl p-5 shadow">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">
            Why Choose Our 1-on-1 Pre-Algebra Tutoring?
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              Personalized pre-algebra instruction matching your child's
              learning style
            </li>
            <li>
              Expert tutors committed to building understanding and confidence
            </li>
            <li>Interactive virtual whiteboards and engaging exercises</li>
            <li>Flexible scheduling for busy families</li>
            <li>Comprehensive curriculum aligned with educational standards</li>
          </ul>
        </section>

        {/* Key Topics table */}
        <section>
          <h3 className="text-lg font-bold text-indigo-700 mb-1">
            Key Topics Covered
          </h3>
          <table className="w-full border-collapse border border-indigo-200 bg-indigo-50 mb-4 text-base">
            <tbody className="text-gray-800">
              <tr>
                <td className="p-2 border">Integers & Rational Numbers</td>
                <td className="p-2 border">
                  Understanding positives, negatives, absolute value, integer
                  operations
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Fractions, Decimals, Percents</td>
                <td className="p-2 border">
                  Conversions, comparisons, and operations
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Expressions & Equations</td>
                <td className="p-2 border">
                  Simplifying, solving, variables, linear equations
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Ratios & Proportions</td>
                <td className="p-2 border">
                  Solving ratios, rates, proportional relationships
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Basic Geometry Concepts</td>
                <td className="p-2 border">
                  Shapes, area, volume, Pythagorean theorem
                </td>
              </tr>
              <tr>
                <td className="p-2 border">Functions</td>
                <td className="p-2 border">
                  Using function notation, concept of functions
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Final benefits and call-to-action */}
        <section className="text-center mt-6">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">
            Building Confidence and a Love for Pre-Algebra
          </h3>
          <p className="text-lg text-gray-900 font-semibold mt-2 mb-4">
            Our patient, step-by-step approach helps students overcome anxiety
            and enjoy math. We foster critical thinking, logical reasoning, and
            provide personalized support every session.
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
