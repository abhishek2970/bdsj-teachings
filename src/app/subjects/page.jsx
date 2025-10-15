"use client";
import React from "react";
import Link from "next/link";
import { FaFlask, FaBook, FaBrain, FaLanguage, FaCode } from "react-icons/fa";

const subjects = [
  {
    name: "English",
    color: "from-pink-500 to-red-500",
    icon: <FaBook size={40} />,
    link: "/subjects/english",
  },
  {
    name: "Math",
    color: "from-blue-500 to-indigo-500",
    icon: <FaBrain size={40} />,
    link: "/subjects/math",
  },
  {
    name: "Science",
    color: "from-green-500 to-emerald-500",
    icon: <FaFlask size={40} />,
    link: "/subjects/science",
  },
  {
    name: "Hindi",
    color: "from-yellow-500 to-orange-500",
    icon: <FaLanguage size={40} />,
    link: "#",
  },
  {
    name: "Coding",
    color: "from-purple-500 to-pink-500",
    icon: <FaCode size={40} />,
    link: "#",
  },
];

const SubjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Explore Our Subjects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {subjects.map((subject) => (
          <Link
            href={subject.link}
            key={subject.name}
            className={`bg-gradient-to-r ${subject.color} text-white font-semibold rounded-2xl shadow-md flex flex-col items-center justify-center p-6 transform transition hover:scale-105 hover:shadow-lg`}
          >
            {subject.icon}
            <span className="mt-3 text-lg">{subject.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectsPage;
