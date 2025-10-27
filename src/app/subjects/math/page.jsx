"use client";
import React from "react";
import Link from "next/link";
 // ✅ Make sure you have this component created

const mathTopics = [
  { name: "Elementary Math", link: "/subjects/math/elementary" },
  { name: "Pre Algebra", link: "/subjects/math/pre-algebra" },
  { name: "Algebra 1", link: "/subjects/math/algebra-1" },
  { name: "Algebra 2", link: "/subjects/math/algebra-2" },
  { name: "Algebra 2 and Trigonometry", link: "/subjects/math/algebra-2-trigonometry" },
  { name: "Trigonometry", link: "/subjects/math/trigonometry" },
  { name: "Geometry", link: "/subjects/math/geometry" },
  { name: "Precalculus", link: "/subjects/math/precalculus" },
  { name: "Calculus", link: "/subjects/math/calculus" },
  { name: "Statistics", link: "/subjects/math/statistics" },
];

const MathPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* ✅ Breadcrumb inserted here */}
    
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-600">Math Tutoring</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mathTopics.map((topic) => (
          <Link key={topic.name} href={topic.link}>
            <div
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-md hover:shadow-xl active:scale-95 transition flex items-center justify-center h-32 font-semibold text-center hover:bg-gradient-to-l hover:from-indigo-500 hover:to-pink-500"
            >
              {topic.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MathPage;
