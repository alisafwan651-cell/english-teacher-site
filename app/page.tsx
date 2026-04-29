"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Mount fix (for Calendly)
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🌗 THEME SYSTEM (FIXED)
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-all duration-500">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white dark:bg-black border-b z-50 shadow-sm transition">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

          <h1 className="font-bold text-lg">Ms. Fatima Farhat</h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </div>

          <div className="flex gap-3 items-center">

            {/* 🌗 Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="border px-3 py-2 rounded-lg hover:scale-110 transition"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* CTA */}
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Book Trial
            </button>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="text-center pt-32 pb-20 px-6 max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ms. Fatima Farhat
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-orange-500 mb-6"
        >
          Your English Guide
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Master English with 11 years of expert teaching experience.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setOpen(true)}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Book Free Trial
          </button>

          <a
            href="#contact"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-10 text-center">
          <div>
            <p className="text-2xl font-bold">11+</p>
            <p className="text-sm text-gray-500">Years</p>
          </div>
          <div>
            <p className="text-2xl font-bold">200+</p>
            <p className="text-sm text-gray-500">Students</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-500">Success</p>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Your Path to English Mastery</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            11 years helping students succeed with personalized lessons.
          </p>

          <ul className="space-y-2">
            <li>✓ Expert in Communication</li>
            <li>✓ Personalized Teaching</li>
            <li>✓ Flexible Scheduling</li>
          </ul>
        </motion.div>

        <motion.img
          src="/fatima.jpg"
          className="rounded-2xl shadow-xl w-full max-w-[350px] mx-auto"
        />

      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">English Lessons for Every Goal</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {["General English", "Business English", "Exam Preparation"].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border dark:border-gray-700 hover:shadow-xl transition"
            >
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                High-quality personalized lessons.
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="https://wa.me/9613917624"
            className="bg-green-500 text-white px-6 py-3 rounded-xl"
          >
            WhatsApp
          </a>

          <a
            href="mailto:Fatimafarhat779@gmail.com"
            className="bg-gray-800 text-white px-6 py-3 rounded-xl"
          >
            Email
          </a>

        </div>

      </section>

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-5 py-3 rounded-full shadow-lg"
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