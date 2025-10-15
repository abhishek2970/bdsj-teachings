"use client";
import React from "react";

const scienceTopics = [
  { name: "Elementary Science", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31" },
  { name: "Earth Science", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { name: "Life Science", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { name: "Physical Science", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c" },
  { name: "Physics", image: "https://images.unsplash.com/photo-1509228627159-6452e35b57b0" },
  { name: "Chemistry", image: "https://images.unsplash.com/photo-1581093588401-22f9b7d33c02" },
  { name: "Biology", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc" },
];

const SciencePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center text-green-600">Science Tutoring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {scienceTopics.map((topic) => (
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

export default SciencePage;
