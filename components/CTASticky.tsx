// components/CTASticky.tsx
"use client";

import { usePathname } from "next/navigation";

export default function CTASticky() {
  const pathname = usePathname();

  // 🔒 NO mostrar el sticky en el flujo de préstamo
  if (pathname?.startsWith("/prestamo")) return null;

  const scrollToForm = () => {
    const el = document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={scrollToForm}
      className="sticky-cta bg-[#FF7A00] hover:bg-[#e86a00] transition text-white font-semibold w-[92%] max-w-[560px] mx-auto"
      aria-label="Solicita tu préstamo"
    >
      Solicita tu préstamo
    </button>
  );
}
