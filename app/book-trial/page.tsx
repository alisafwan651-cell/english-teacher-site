"use client";

import { InlineWidget } from "react-calendly";

export default function BookTrialPage() {
  return (
    <main className="min-h-screen bg-[#f9f7f4] text-gray-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border p-6 md:p-10 text-center">
          <p className="text-[#f97316] font-semibold mb-2">
            PAYMENT CONFIRMED
          </p>

          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Choose Your Trial Session Time
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Thank you for your payment. Please choose the most suitable time
            for your 20-minute Zoom English trial and level-assessment session.
          </p>

          <div className="rounded-2xl overflow-hidden border">
            <InlineWidget
              url="https://calendly.com/fatimafarhat779/30min"
              styles={{ height: "760px" }}
            />
          </div>

          <a
            href="/"
            className="inline-block mt-8 text-gray-500 hover:text-[#f97316] transition"
          >
            العودة إلى الصفحة الرئيسية
          </a>
        </div>
      </div>
    </main>
  );
}