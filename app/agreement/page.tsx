"use client";

import { useEffect, useState } from "react";

const packages = {
  monthly8: {
    name: "Starter Monthly Package",
    arabicName: "باقة 8 حصص",
    lessons: "8 حصص",
    price: "140 دولار",
    schedule: "حصتان أسبوعياً",
    duration: "شهر واحد",
    description: "مناسبة للطلاب الذين يريدون بداية ثابتة ومنظمة.",
  },
  monthly12: {
    name: "Progress Monthly Package",
    arabicName: "باقة 12 حصة",
    lessons: "12 حصة",
    price: "210 دولار",
    schedule: "3 حصص أسبوعياً",
    duration: "شهر واحد",
    description: "مناسبة للطلاب الذين يريدون تقدماً أسرع خلال الشهر.",
  },
  monthly16: {
    name: "Intensive Monthly Package",
    arabicName: "باقة 16 حصة",
    lessons: "16 حصة",
    price: "280 دولار",
    schedule: "4 حصص أسبوعياً",
    duration: "شهر واحد",
    description: "مناسبة للطلاب الذين يريدون متابعة مكثفة ونتائج أسرع.",
  },
  "full-level": {
    name: "Complete One Full Level",
    arabicName: "باقة إتمام مستوى كامل",
    lessons: "32 حصة",
    price: "500 دولار",
    schedule: "حوالي 3 حصص أسبوعياً",
    duration: "شهران ونصف",
    description: "مناسبة للطلاب الذين يريدون إتمام مستوى كامل بخطة واضحة.",
  },
  "two-levels": {
    name: "Complete Two Full Levels",
    arabicName: "باقة إتمام مستويين كاملين",
    lessons: "64 حصة",
    price: "1000 دولار",
    schedule: "حوالي 3 حصص أسبوعياً",
    duration: "5 أشهر",
    description: "مناسبة للطلاب الجادين الذين يريدون إتمام مستويين كاملين.",
  },
};

type PackageKey = keyof typeof packages;

export default function AgreementPage() {
  const [selectedPackage, setSelectedPackage] =
    useState<PackageKey>("monthly8");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const packageName = params.get("package");

    if (
      packageName === "monthly8" ||
      packageName === "monthly12" ||
      packageName === "monthly16" ||
      packageName === "full-level" ||
      packageName === "two-levels"
    ) {
      setSelectedPackage(packageName);
    }
  }, []);

  const plan = packages[selectedPackage];

  const whatsappMessage = encodeURIComponent(
    `مرحبا، أريد تأكيد الاشتراك في ${plan.arabicName} (${plan.lessons}) بقيمة ${plan.price}. لقد قرأت قواعد الدورة وأوافق عليها.`
  );

  return (
    <main className="min-h-screen bg-[#f9f7f4] text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <p className="text-[#f97316] font-semibold mb-2 text-center">
          COURSE AGREEMENT
        </p>

        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          اتفاقية الاشتراك بالدورة
        </h1>

        <p className="text-gray-600 text-center mb-8 leading-8" dir="rtl">
          يرجى قراءة القواعد التالية بعناية قبل تأكيد الاشتراك. بالمتابعة،
          يؤكد الطالب أنه اطلع على الشروط ووافق عليها.
        </p>

        {/* PACKAGE CARD */}
        <div className="bg-[#f9f7f4] border rounded-xl p-5 mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            {plan.name}
          </h2>

          <p className="text-gray-700 mb-2" dir="rtl">
            {plan.arabicName}
          </p>

          <p className="text-3xl font-bold text-[#f97316] my-3" dir="rtl">
            {plan.price}
          </p>

          <div className="space-y-2 text-gray-600" dir="rtl">
            <p>{plan.lessons}</p>
            <p>{plan.schedule}</p>
            <p>مدة الباقة: {plan.duration}</p>
          </div>

          <p className="text-gray-500 mt-5 leading-8" dir="rtl">
            {plan.description}
          </p>
        </div>

        {/* RULES */}
        <section dir="rtl" className="text-right leading-8">
          <h2 className="text-xl font-bold mb-6">
            قواعد الإلتزام بالدورة:
          </h2>

          <ol className="list-decimal list-inside space-y-5">
            <li>
              يجب الالتزام بالوقت المتفق عليه بين الطرفين، وعدم إلغاء الحصة
              قبل وقت قصير أو في اللحظة ذاتها. في الحالات المرضية أو الضرورية،
              يجب إعلام الأستاذ مسبقاً.
            </li>

            <li>
              في حال تكرار إلغاء الحصص من قبل التلميذ، لا يتم تعويض هذه الحصص
              وتُحتسب ضمن الدورة.
            </li>

            <li>
              في حال قام الأستاذ بإلغاء أي حصة، يتم تعويضها تلقائياً أو تمديد
              مدة الدورة بما يناسب الطرفين.
            </li>

            <li>
              يتم الدفع كاملاً قبل البدء بالدورة، ولا يمكن بدء الدورة قبل إتمام
              كامل المبلغ. يتم تحديد طريقة الدفع المعتمدة بعد الجلسة
              التجريبية.
            </li>

            <li>
              مدة كل باقة تختلف حسب عدد الحصص والهدف المطلوب. يجب الالتزام
              بالخطة المتفق عليها لإنهاء الحصص ضمن المدة المحددة للباقة.
            </li>

            <li>
              مدة الحصة الأساسية هي 40 دقيقة مباشرة عبر Zoom وليست مسجلة.
            </li>

            <li>
              يحق للتلميذ التواصل مع الأستاذ في أي وقت للاستفسار عن أي سؤال
              متعلق باللغة الإنجليزية، حتى خارج وقت الحصة.
            </li>

            <li>
              يجب على التلميذ الالتزام بحل الواجبات المطلوبة لضمان المتابعة
              وتحقيق نتائج مرضية للطرفين.
            </li>

            <li className="font-semibold text-red-600">
              بعد تأكيد الاشتراك بالدورة وإتمام الدفع، لا يمكن استرداد المبلغ
              تحت أي ظرف. يمكن تحويل الحصص لمشترك آخر في حال الحاجة.
            </li>
          </ol>
        </section>

        {/* CONFIRMATION */}
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-gray-600 mb-6 leading-8" dir="rtl">
            بالضغط على الزر أدناه، يؤكد الطالب أنه قرأ قواعد الدورة ويوافق
            عليها قبل تأكيد الاشتراك.
          </p>

          <a
            href={`https://wa.me/17012912707?text=${whatsappMessage}`}
            target="_blank"
            className="inline-block bg-[#f97316] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ea580c] transition"
          >
            أوافق وأريد تأكيد الاشتراك
          </a>

          <div className="mt-6">
            <a
              href="/"
              className="text-gray-500 hover:text-[#f97316] transition"
            >
              العودة إلى الصفحة الرئيسية
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}