// components/StepsSlider.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Step = { src: string; alt: string; subtitle: string };

const PHONE_BORDER = "rgba(0,0,0,0.08)";

export default function StepsSlider() {
  const steps: Step[] = [
    { src: "/steps/1.svg", alt: "Paso 1", subtitle: "Ingresa tu monto y fecha de pago" },
    { src: "/steps/2.svg", alt: "Paso 2", subtitle: "Ingresa tus datos" },
    { src: "/steps/3.svg", alt: "Paso 3", subtitle: "Elige tu plan de pago" },
    { src: "/steps/4.svg", alt: "Paso 4", subtitle: "Elige la forma de pago" },
    { src: "/steps/5.svg", alt: "Paso 5", subtitle: "Confirma tu préstamo" },
    { src: "/steps/6.svg", alt: "Paso 6", subtitle: "Listo ya tienes tu préstamo online" },
  ];

  const [idx, setIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = steps.length;

  const go = (n: number) => setIdx((prev) => (n + total) % total);
  const prev = () => go(idx - 1);
  const next = () => go(idx + 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let x0 = 0;
    const start = (e: TouchEvent) => (x0 = e.touches[0].clientX);
    const move = (e: TouchEvent) => {
      if (!x0) return;
      const dx = e.touches[0].clientX - x0;
      if (Math.abs(dx) > 50) {
        dx < 0 ? next() : prev();
        x0 = 0;
      }
    };
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
    };
  }, [idx]);

  return (
    <section className="bg-[#F2F4F7] py-10 md:py-12">
      <div className="container-max">
        <h2 className="text-center text-[#0B3A8C] font-[600] text-[24px] md:text-[28px] mb-3">
          Obtén tu préstamo BCP online
        </h2>

        <p className="text-center text-[13px] text-[#0B3A8C]/80 mb-2">
          <span className="font-semibold">{idx + 1}</span> de {total}
        </p>
        <p className="text-center text-[16px] text-[#1C2B3A] mb-5">
          {steps[idx].subtitle}
        </p>

        <div ref={containerRef} className="relative mx-auto max-w-[380px]">
          {/* Flecha izquierda */}
<button
  aria-label="Anterior"
  onClick={prev}
  className="absolute -left-7 top-1/2 -translate-y-1/2 z-10 grid place-items-center 
             w-9 h-9 rounded-full bg-white shadow-md border border-[#FF7A00] 
             hover:bg-[#fff4eb] transition"
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 19l-7-7 7-7"
      stroke="#FF7A00"    // 👈 Naranja
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

{/* Flecha derecha */}
<button
  aria-label="Siguiente"
  onClick={next}
  className="absolute -right-7 top-1/2 -translate-y-1/2 z-10 grid place-items-center 
             w-9 h-9 rounded-full bg-white shadow-md border border-[#FF7A00] 
             hover:bg-[#fff4eb] transition"
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 5l7 7-7 7"
      stroke="#FF7A00"    // 👈 Naranja
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>


          <div
            className="rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,.08)] p-3 md:p-4"
            style={{ border: `1px solid rgba(0,0,0,0.08)` }}
          >
            <div
              className="rounded-[22px] bg-white p-2"
              style={{ border: `1px solid rgba(0,0,0,0.08)` }}
            >
              <div className="relative rounded-[20px] overflow-hidden bg-white">
                <Image
                  src={steps[idx].src}
                  alt={steps[idx].alt}
                  width={700}
                  height={1400}
                  className="w-full h-auto select-none"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al paso ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-6 bg-[#0B3A8C]" : "w-2 bg-[#CAD2DE]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
