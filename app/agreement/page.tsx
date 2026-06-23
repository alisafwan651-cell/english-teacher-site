"use client";

import { useEffect, useState } from "react";

const packages = {
  starter: {
    name: "Starter Package",
    lessons: "8 حصص",
    welcomePrice: "98 دولار",
    regularPrice: "140 دولار",
    schedule: "حصتان أسبوعياً",
  },
  progress: {
    name: "Progress Package",
    lessons: "14 حصة",
    welcomePrice: "182 دولار",
    regularPrice: "260 دولار",
    schedule: "3 - 4 حصص أسبوعياً",
  },
  intensive: {
    name: "Intensive Package",
    lessons: "18 حصة",
    welcomePrice: "250 دولار",
    regularPrice: "300 دولار",
    schedule: "4 - 5 حصص أسبوعياً",
  },
};

export default function AgreementPage() {
  const [selectedPackage, setSelectedPackage] = useState("starter");
  const [welcomeOffer, setWelcomeOffer] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const packageName = params.get("package");
    const offer = params.get("offer");

    if (
      packageName === "starter" ||
      packageName === "progress" ||
      packageName === "intensive"
    ) {
      setSelectedPackage(packageName);
    }

    if (offer === "welcome") {
      setWelcomeOffer(true);
    }
  }, []);

  const plan =
    packages[selectedPackage as keyof typeof packages] || packages.starter;

  const displayedPrice = welcomeOffer
    ? plan.welcomePrice
    : plan.regularPrice;

  const whatsappMessage = encodeURIComponent(
    `مرحبا، أريد تأكيد الاشتراك في ${plan.name} (${plan.lessons}) بقيمة ${displayedPrice}. لقد قرأت قواعد الدورة وأوافق عليها.`
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

        <p className="text-gray-600 text-center mb-8 leading-8">
          يرجى قراءة القواعد التالية بعناية قبل تأكيد الاشتراك. بالمتابعة،
          يؤكد الطالب أنه اطلع على الشروط ووافق عليها.
        </p>

        <div className="bg-[#f9f7f4] border rounded-xl p-5 mb-8 text-center">
          <h2 className="text-xl font-bold mb-2">{plan.name}</h2>

          <p className="text-gray-700">{plan.lessons}</p>

          {welcomeOffer && (
            <p className="text-sm font-semibold text-[#f97316] mt-4">
             عرض الشهر الأول — خصم بنسبة ثلاثين بالمئة
            </p>
          )}

          <p className="text-3xl font-bold text-[#f97316] my-2">
            {displayedPrice}
          </p>

          {welcomeOffer && (
            <p className="text-gray-500 text-sm">
              السعر المعتاد ابتداءً من الشهر التالي:{" "}
              <span className="line-through">{plan.regularPrice}</span>
            </p>
          )}

          <p className="text-gray-500 mt-3">{plan.schedule}</p>
        </div>

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
              لا يمكن أن تتجاوز مدة الدورة شهر وأسبوعين، ويجب الالتزام بهذه
              المدة لإنهاء الحصص.
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

        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-gray-600 mb-6 leading-8">
            بالضغط على الزر أدناه، يؤكد الطالب أنه قرأ قواعد الدورة ويوافق
            عليها قبل المتابعة بالدفع.
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