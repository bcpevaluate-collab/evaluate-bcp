// components/CTABox.tsx
import Image from "next/image";

export default function CTABox() {
  return (
    <section className="bg-[#0B3A8C] rounded-lg p-6 md:p-10 text-center text-white flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
      {/* Imagen SVG */}
      <div className="flex-shrink-0">
        <Image
          src="/illustrations/ahora.svg"
          alt="Préstamo BCP"
          width={160}
          height={160}
        />
      </div>

      {/* Texto + Botón */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        <p className="text-lg md:text-xl font-semibold leading-snug">
          ¡Que esperas! Adquiere tu préstamo BCP online y obtén tu dinero al instante
        </p>
        <button className="mt-5 bg-[#FF6200] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e65700] transition">
          Solicita tu préstamo
        </button>
      </div>
    </section>
  );
}
