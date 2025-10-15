"use client";
import React from "react";

const mathTopics = [
  "Elementary Math",
  "Pre Algebra",
  "Algebra 1",
  "Algebra 2",
  "Algebra 2 and Trigonometry",
  "Trigonometry",
  "Geometry",
  "Precalculus",
  "Calculus",
  "Statistics",
];

const MathPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-600">Math Tutoring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mathTopics.map((topic) => (
          <div
            key={topic}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-md hover:shadow-xl transition flex items-center justify-center h-32 font-semibold text-center"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathPage;
