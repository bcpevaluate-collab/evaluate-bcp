// components/CTABox.tsx
"use client";

import Image from "next/image";

export default function CTABox() {
  const scrollToForm = () => {
    const el = document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="container-max py-8">
      <div className="rounded-[16px] bg-[#0B3A8C] text-white px-6 py-8 md:px-10 md:py-10 shadow-[0_8px_28px_rgba(0,0,0,.18)]">
        <div className="flex flex-col items-center text-center gap-6">
          <Image
            src="/illustrations/ahora.svg"
            alt="Ahora"
            width={140}
            height={140}
            priority
          />
          <p className="text-[22px] leading-tight md:text-[26px] font-[600] max-w-[28rem]">
            ¡Que esperas! Adquiere tu préstamo BCP online y obtén tu dinero al instante
          </p>
          <button
            onClick={scrollToForm}
            className="px-6 h-[44px] rounded-full bg-[#FF7A00] hover:bg-[#e86a00] text-white font-semibold"
          >
            Solicita tu préstamo
          </button>
        </div>
      </div>
    </section>
  );
}
