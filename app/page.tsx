"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-[#f9f7f4] text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

          <h1 className="font-bold text-sm md:text-lg">
            Ms. Fatima Farhat
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-[#f97316]">Home</a>
            <a href="#about" className="hover:text-[#f97316]">About</a>
            <a href="#services" className="hover:text-[#f97316]">Services</a>
            <a href="#pricing" className="hover:text-[#f97316]">Pricing</a>
            <a href="#contact" className="hover:text-[#f97316]">Contact</a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#f97316] text-white px-3 md:px-4 py-2 rounded-lg text-sm md:text-base"
          >
            Book Trial
          </button>
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
          className="text-gray-600 mb-10 px-2 md:px-0"
        >
          Master English with 11 years of expert teaching experience.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
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

        <div className="flex justify-center gap-6 md:gap-14 text-center">
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

      {/* INTRO VIDEO */}
      <section className="bg-white py-16 md:py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <p className="text-[#f97316] font-semibold mb-2">
            MEET YOUR TEACHER
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            A Message from Ms. Fatima
          </h2>

          <p className="text-gray-600 mb-8">
            Watch this short introduction before booking your free trial session.
          </p>

          <video
            controls
            className="w-full rounded-2xl shadow-xl border"
          >
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#f97316] font-semibold mb-2">ABOUT ME</p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Path to English Mastery
          </h2>

          <p className="text-gray-600 mb-6">
            11 years helping students succeed with personalized lessons.
          </p>

          <ul className="space-y-2 text-sm md:text-base">
            <li>✓ Expert in Communication</li>
            <li>✓ Personalized Teaching</li>
            <li>✓ Flexible Scheduling</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="/fatima.jpg"
            className="rounded-2xl shadow-xl w-full max-w-[320px] mx-auto"
          />
        </motion.div>

      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-[#f97316] font-semibold mb-2">
            WHO IS THIS FOR?
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lessons Designed for Your Goal
          </h2>

          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you are a beginner, student, or professional, the lessons are personalized to help you improve step by step.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Beginners",
                text: "For learners who want to build a strong foundation in English from the beginning."
              },
              {
                title: "Speaking Confidence",
                text: "For students who understand English but struggle to speak naturally and confidently."
              },
              {
                title: "School, Work & Exams",
                text: "For learners preparing for school, university, work, interviews, or English exams."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-[#f9f7f4] p-6 rounded-2xl border shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-7">{item.text}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-16 md:py-20 px-6">

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
              className="p-6 rounded-xl border hover:shadow-lg transition"
            >
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                High-quality personalized lessons.
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-[#f9f7f4] py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-[#f97316] font-semibold mb-2">
            PRICING
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Choose the Package That Fits You
          </h2>

          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            All lessons are private, live on Zoom, and personalized based on the student’s level and goal.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Starter Package",
                lessons: "8 حصص",
                price: "140 دولار",
                schedule: "حصتان أسبوعياً",
                highlight: false
              },
              {
                title: "Progress Package",
                lessons: "14 حصة",
                price: "260 دولار",
                schedule: "3 - 4 حصص أسبوعياً",
                highlight: true
              },
              {
                title: "Intensive Package",
                lessons: "18 حصة",
                price: "300 دولار",
                schedule: "4 - 5 حصص أسبوعياً",
                highlight: false
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className={`relative p-6 rounded-2xl border shadow-sm transition bg-white ${
                  plan.highlight ? "border-[#f97316] shadow-lg" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-xs px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="font-bold text-xl mb-3">{plan.title}</h3>

                <p className="text-3xl font-bold text-[#f97316] mb-2">
                  {plan.price}
                </p>

                <p className="text-gray-700 mb-2">
                  {plan.lessons}
                </p>

                <p className="text-gray-500 text-sm mb-6">
                  {plan.schedule}
                </p>

                <button
                  onClick={() => setOpen(true)}
                  className="w-full bg-[#f97316] text-white py-3 rounded-xl hover:bg-[#ea580c] transition"
                >
                  Book Free Trial
                </button>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* IMPORTANT RULES */}
      <section className="bg-[#f9f7f4] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#f97316] font-semibold mb-2">
            IMPORTANT INFORMATION
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            قواعد الدورة والإلتزام
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-right">

            {[
              "يُرجى الالتزام بالوقت المتفق عليه وعدم إلغاء الحصة قبل وقت قصير. في الحالات الضرورية أو المرضية يجب إعلام الأستاذ مسبقاً.",

              "في حال تكرار إلغاء الحصص من قبل التلميذ، لا يتم تعويض الحصص وتُحتسب ضمن الدورة.",

              "في حال قام الأستاذ بإلغاء أي حصة، يتم تعويضها تلقائياً عبر تمديد مدة الدورة.",

              "يتم الدفع كاملاً قبل بدء الدورة عبر WHISH Money على رقم التواصل المعتمد.",

              "لا يمكن أن تتجاوز مدة الدورة شهر وأسبوعين، ويجب الالتزام بهذه المدة.",

              "يحق للتلميذ التواصل مع الأستاذ في أي وقت للاستفسار عن أي سؤال متعلق باللغة الإنجليزية حتى خارج وقت الحصة.",

              "يجب الالتزام بحل الواجبات والمتابعة لضمان أفضل النتائج والتطور.",

              "‼️ بعد تأكيد الاشتراك بالدورة لا يمكن استرداد المبلغ تحت أي ظرف، ويمكن تحويل الحصص لمشترك آخر."
            ].map((rule, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 leading-8">
                  {rule}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 px-6 text-center bg-[#fff]">

        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          What Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Amazing teacher, I improved fast!",
            "Very professional and clear explanations.",
            "Helped me pass my IELTS exam."
          ].map((text, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <p>"{text}"</p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#f97316] text-white py-16 md:py-20 px-6 text-center">

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

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="https://wa.me/17012912707"
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
  );
}