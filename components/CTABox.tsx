// components/CTABox.tsx
import Image from "next/image";

export default function CTABox() {
  return (
    <section className="mt-10 mb-12">
      <div className="container-max">
        <div
          className="rounded-[12px] bg-[#0B3A8C] text-white text-center
                     px-6 py-10 shadow-[0_8px_28px_rgba(0,0,0,.08)]"
        >
          {/* Imagen arriba */}
          <div className="flex justify-center mb-6">
            <Image
              src="/illustrations/ahora.svg"
              alt="Préstamo BCP"
              width={150}
              height={150}
              priority
            />
          </div>

          {/* Texto */}
          <p className="text-lg md:text-xl font-[600] leading-snug mb-6">
            ¡Que esperas! Adquiere tu préstamo BCP online y
            obtén tu dinero al instante
          </p>

          {/* Botón */}
          <button
            className="bg-[#FF7A00] hover:bg-[#e86a00] transition
                       text-white font-semibold px-8 py-3 rounded-full"
          >
            Solicita tu préstamo
          </button>
        </div>
      </div>
    </section>
  );
}
