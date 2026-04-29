"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Detect system theme first time
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setDarkMode(saved === "dark");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(systemDark);
    }

    setMounted(true);
  }, []);

  // Apply theme + smooth transition
  useEffect(() => {
    const root = document.documentElement;

    root.style.transition = "background-color 0.4s ease, color 0.4s ease";

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="bg-white text-black dark:bg-[#0b0b0f] dark:text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black border-b z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

          <h1 className="font-bold text-sm md:text-lg">
            Ms. Fatima Farhat
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-[#f97316]">Home</a>
            <a href="#about" className="hover:text-[#f97316]">About</a>
            <a href="#services" className="hover:text-[#f97316]">Services</a>
            <a href="#contact" className="hover:text-[#f97316]">Contact</a>
          </div>

          <div className="flex items-center gap-3">

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border px-3 py-2 rounded-lg text-sm"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setOpen(true)}
              className="bg-[#f97316] text-white px-3 md:px-4 py-2 rounded-lg text-sm md:text-base"
            >
              Book Trial
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="text-center px-6 pt-28 md:pt-32 pb-20 max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold mb-6"
        >
          Ms. Fatima Farhat
        </motion.h1>

        <h2 className="text-lg md:text-xl text-[#f97316] mb-6">
          Your English Guide
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Master English with 11 years of expert teaching experience.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#f97316] text-white px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Book Free Trial
          </button>

          <a
            href="#contact"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-6 md:gap-14">
          <div>
            <p className="text-xl md:text-2xl font-bold">11+</p>
            <p className="text-gray-500 text-xs">Years</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold">200+</p>
            <p className="text-gray-500 text-xs">Students</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold">100%</p>
            <p className="text-gray-500 text-xs">Success</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-[#f97316] font-semibold mb-2">ABOUT ME</p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Path to English Mastery
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            11 years helping students succeed with personalized lessons.
          </p>

          <ul className="space-y-2">
            <li>✓ Expert in Communication</li>
            <li>✓ Personalized Teaching</li>
            <li>✓ Flexible Scheduling</li>
          </ul>
        </div>

        <img src="/fatima.jpg" className="rounded-2xl shadow-xl w-full max-w-[320px] mx-auto" />

      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white dark:bg-[#0b0b0f] py-16 px-6">

        <div className="text-center mb-12">
          <p className="text-[#f97316] font-semibold mb-2">SERVICES</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            English Lessons for Every Goal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["General English", "Business English", "Exam Preparation"].map((title, i) => (
            <div key={i} className="p-6 rounded-xl border dark:border-gray-700 hover:shadow-lg transition">
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                High-quality personalized lessons.
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#f97316] text-white py-16 px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your English?
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-[#f97316] px-6 py-3 rounded-xl font-semibold"
        >
          Book Your Free Trial
        </button>

      </section>

      {/* CONTACT (FIXED 🔥) */}
      <section id="contact" className="py-16 px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="https://wa.me/9613917624"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            WhatsApp
          </a>

          <a
            href="mailto:Fatimafarhat779@gmail.com"
            className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Email
          </a>

        </div>

      </section>

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#f97316] text-white px-5 py-3 rounded-full shadow-lg"
      >
        Book
      </button>

      {/* CALENDLY */}
      {mounted && (
        <PopupModal
          url="https://calendly.com/fatimafarhat779/30min"
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={document.body}
        />
      )}

    </main>
  );
}