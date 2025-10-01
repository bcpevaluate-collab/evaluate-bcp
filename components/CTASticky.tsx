// components/CTASticky.tsx
"use client";

export default function CTASticky() {
  const scrollToForm = () => {
    const el = document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={scrollToForm}
      className="sticky-cta bg-[#FF7A00] hover:bg-[#e86a00] transition text-white font-semibold w-[92%] max-w-[560px] mx-auto"
    >
      Solicita tu préstamo
    </button>
  );
}
