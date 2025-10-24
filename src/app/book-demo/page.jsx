"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookFreeDemo() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Demo booked successfully! We’ll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
        // Redirect to home after 3 seconds
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        const data = await response.json();
        setStatus(data.error || "Failed to book demo. Please try again later.");
      }
    } catch (error) {
      setStatus("Server error occurred. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <main className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-2xl shadow-2xl ring-2 ring-indigo-100">
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-8">
        Book a Free Demo
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name <span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address <span className="text-pink-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">
            Preferred Demo Date <span className="text-pink-500">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Any specific topics you’d like to cover?"
            className="w-full px-4 py-3 border border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
          />
        </div>

        {status && (
          <p
            className={`text-center text-base font-semibold ${
              status.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}

        <div className="text-center pt-2">
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-bold shadow-lg hover:from-indigo-700 hover:to-pink-600 transition-all text-lg"
            disabled={status && status.includes("successfully")}
          >
            Book Demo
          </button>
        </div>
      </form>
      {status && status.includes("successfully") && (
        <p className="text-center text-gray-500 mt-4 text-sm">
          Redirecting to home page...
        </p>
      )}
    </main>
  );
}
