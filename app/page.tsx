"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");

    if (saved === "dark") setDark(true);
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }, [dark, mounted]);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="relative bg-gradient-to-br from-[#f9f7f4] to-white dark:from-black dark:to-gray-900 text-gray-900 dark:text-white transition duration-500">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-orange-300 blur-[120px] opacity-30 rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-[300px] h-[300px] bg-purple-300 blur-[120px] opacity-30 rounded-full bottom-[-100px] right-[-100px]" />
        </div>

        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/60 backdrop-blur border-b z-50 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

            <h1 className="font-bold text-sm md:text-lg">
              Ms. Fatima Farhat
            </h1>

            <div className="hidden md:flex gap-6 text-sm">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              {/* DARK MODE */}
              <button
                onClick={() => setDark(!dark)}
                className="px-3 py-2 border rounded-lg text-sm"
              >
                {dark ? "☀️" : "🌙"}
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

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#f97316] mb-6"
          >
            Your English Guide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 dark:text-gray-300 mb-10"
          >
            Master English with 11 years of expert teaching experience.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">

            <button
              onClick={() => setOpen(true)}
              className="relative bg-[#f97316] text-white px-6 py-3 rounded-xl group overflow-hidden"
            >
              <span className="relative z-10">Book Free Trial</span>
              <span className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 blur-lg transition" />
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
              <p className="text-gray-500 text-xs md:text-sm">Years</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold">200+</p>
              <p className="text-gray-500 text-xs md:text-sm">Students</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold">100%</p>
              <p className="text-gray-500 text-xs md:text-sm">Success</p>
            </div>
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <p className="text-[#f97316] font-semibold mb-2">ABOUT ME</p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Your Path to English Mastery
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              11 years helping students succeed with personalized lessons.
            </p>

            <ul className="space-y-2">
              <li>✓ Expert in Communication</li>
              <li>✓ Personalized Teaching</li>
              <li>✓ Flexible Scheduling</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <img
              src="/fatima.jpg"
              className="rounded-2xl shadow-xl w-full max-w-[320px] mx-auto hover:scale-105 transition"
            />
          </motion.div>

        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 md:py-20 px-6">

          <div className="text-center mb-12">
            <p className="text-[#f97316] font-semibold mb-2">SERVICES</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              English Lessons for Every Goal
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {["General English", "Business English", "Exam Preparation"].map((title, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl backdrop-blur bg-white/70 dark:bg-white/10 border border-white/20 shadow-lg"
              >
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  High-quality personalized lessons.
                </p>
              </motion.div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="bg-[#f97316] text-white py-16 md:py-20 text-center">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your English?
          </h2>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-[#f97316] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Book Your Free Trial
          </button>

        </section>

        {/* FLOATING BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-[#f97316] text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
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
    </div>
  );
}