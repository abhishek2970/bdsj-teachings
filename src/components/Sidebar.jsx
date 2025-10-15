"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-64 bg-white shadow-md p-5 space-y-4">
      <Link href="/">
        <h2 className="text-xl font-bold text-purple-600 mb-4 cursor-pointer">BDSJ Teaching’s</h2>
      </Link>

      {/* Home */}
      <div>
        <Link href="/">
          <p className="font-semibold cursor-pointer hover:text-purple-600">Home</p>
        </Link>
      </div>

      {/* Math Tutoring */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-semibold"
          onClick={() => toggleSection("math")}
        >
          <span>Math Tutoring</span>
          {openSection === "math" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "math" && (
          <ul className="ml-4 mt-2 space-y-1 text-sm">
            {[
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
            ].map((item) => (
              <li key={item} className="hover:text-purple-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* English Tutoring */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-semibold"
          onClick={() => toggleSection("english")}
        >
          <span>English Tutoring</span>
          {openSection === "english" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "english" && (
          <ul className="ml-4 mt-2 space-y-1 text-sm">
            {["Creative Writing", "Writing and Grammar", "Reading Comprehension"].map((item) => (
              <li key={item} className="hover:text-purple-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Science Tutoring */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-semibold"
          onClick={() => toggleSection("science")}
        >
          <span>Science Tutoring</span>
          {openSection === "science" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "science" && (
          <ul className="ml-4 mt-2 space-y-1 text-sm">
            {["Elementary Science", "Earth Science", "Life Science", "Physical Science", "Physics", "Chemistry", "Biology"].map((item) => (
              <li key={item} className="hover:text-purple-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Regions */}
      <div>
        <p className="font-semibold mb-2">Regions</p>
        <ul className="space-y-2 text-sm">
          {[{ name: "United States", flag: "🇺🇸" }, { name: "Canada", flag: "🇨🇦" }, { name: "India", flag: "🇮🇳" }, { name: "Europe", flag: "🇪🇺" }].map((region) => (
            <li key={region.name} className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
              <span className="text-lg">{region.flag}</span>
              {region.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
