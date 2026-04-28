"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export default function Home() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="bg-[#f9f7f4] text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">Ms. Fatima Farhat</h1>

          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-[#f97316]">Home</a>
            <a href="#about" className="hover:text-[#f97316]">About</a>
            <a href="#services" className="hover:text-[#f97316]">Services</a>
            <a href="#contact" className="hover:text-[#f97316]">Contact</a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#f97316] text-white px-4 py-2 rounded-lg hover:bg-[#ea580c]"
          >
            Book Trial
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="text-center px-6 pt-32 pb-20 max-w-4xl mx-auto fade-in">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Ms. Fatima Farhat
        </h1>

        <h2 className="text-xl text-[#f97316] mb-6">
          Your English Guide
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Master English with 11 years of expert teaching experience.
        </p>

        <div className="flex justify-center gap-4 mb-14">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#f97316] text-white px-6 py-3 rounded-xl hover:bg-[#ea580c] transition transform hover:scale-105"
          >
            Book Free Trial
          </button>

          <a
            href="#contact"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-14">
          <div>
            <p className="text-2xl font-bold">11+</p>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold">200+</p>
            <p className="text-gray-500 text-sm">Students</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-gray-500 text-sm">Success</p>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center fade-in">

        <div>
          <p className="text-[#f97316] font-semibold mb-2">ABOUT ME</p>

          <h2 className="text-3xl font-bold mb-4">
            Your Path to English Mastery
          </h2>

          <p className="text-gray-600 mb-6">
            11 years helping students succeed with personalized lessons.
          </p>

          <ul className="space-y-3">
            <li>✓ Expert in Communication</li>
            <li>✓ Personalized Teaching</li>
            <li>✓ Flexible Scheduling</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src="/fatima.jpg"
            className="rounded-2xl shadow-xl w-[350px] hover:scale-105 transition duration-500"
          />
        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20 px-6 fade-in">

        <div className="text-center mb-12">
          <p className="text-[#f97316] font-semibold mb-2">SERVICES</p>
          <h2 className="text-3xl font-bold">
            English Lessons for Every Goal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="p-6 rounded-xl border hover:shadow-md transition">
            <h3 className="font-bold mb-2">General English</h3>
            <p className="text-gray-600">Daily communication skills.</p>
          </div>

          <div className="p-6 rounded-xl border hover:shadow-md transition">
            <h3 className="font-bold mb-2">Business English</h3>
            <p className="text-gray-600">Professional communication.</p>
          </div>

          <div className="p-6 rounded-xl border hover:shadow-md transition">
            <h3 className="font-bold mb-2">Exam Preparation</h3>
            <p className="text-gray-600">IELTS, TOEFL, etc.</p>
          </div>

        </div>

      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#f97316] text-white py-20 px-6 text-center fade-in">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your English?
        </h2>

        <p className="mb-8">
          Start with a free trial session.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-[#f97316] px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition transform hover:scale-105"
        >
          Book Your Free Trial
        </button>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center fade-in">

        <h2 className="text-3xl font-bold mb-6">
          Get in Touch
        </h2>

        <p className="text-gray-600 mb-8">
          Have questions? Contact directly via WhatsApp or Email.
        </p>

        <div className="flex justify-center gap-6">

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

      {/* CALENDLY POPUP */}
      <PopupModal
        url="https://calendly.com/fatimafarhat779/30min"
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={typeof window !== "undefined" ? document.body : undefined}
      />

    </main>
  );
}