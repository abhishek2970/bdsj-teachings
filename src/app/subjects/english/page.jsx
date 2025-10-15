"use client";
import React from "react";

const englishTopics = [
  { name: "Creative Writing", image: "https://images.unsplash.com/photo-1522204501979-7e56e4a4afaf" },
  { name: "Writing and Grammar", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b" },
  { name: "Reading Comprehension", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
];

const EnglishPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center text-pink-600">English Tutoring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {englishTopics.map((topic) => (
          <div
            key={topic.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
          >
            <img
              src={topic.image}
              alt={topic.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="font-semibold text-gray-700">{topic.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnglishPage;
