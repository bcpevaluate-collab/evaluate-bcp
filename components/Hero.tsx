// components/Hero.tsx
import Image from "next/image";
import InlineLoanForm from "@/components/forms/InlineLoanForm";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-28 md:pb-36"
      style={{
        background:
          "linear-gradient(180deg, #0C3A85 0%, #083177 48%, #0A3D8B 100%)",
      }}
    >
      {/* CONTENIDO (texto + ilustración desktop) */}
      <div className="container-max relative z-10 pt-6 md:pt-16">
        <div className="grid grid-cols-12 items-center">
          {/* Texto izquierda */}
          <div className="col-span-12 md:col-span-6">
            <p className="text-[14px] md:text-[18px] font-[400] mb-1 md:mb-3">
              Solicita tu
            </p>

            <h1 className="leading-[1.15] mb-1">
              <span className="block text-[32px] md:text-[56px] font-[600]">
                Préstamo
              </span>
              <span className="block text-[32px] md:text-[56px] font-[600]">
                100% online
              </span>
            </h1>

            <p className="text-[16px] md:text-[28px] font-[400] mt-1 md:mt-3">
              y recíbelo al instante
            </p>
          </div>

          {/* Ilustración SOLO DESKTOP (fija a la derecha, centrada verticalmente) */}
          <div className="hidden md:block col-span-6 relative">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={560}
              height={560}
              priority
              className="
                pointer-events-none
                absolute right-2 top-1/2 -translate-y-1/2
                w-[520px] h-auto
              "
            />
          </div>
        </div>

        {/* Formulario + franja (SOLO DESKTOP) */}
        <div className="hidden md:block mt-8">
          <InlineLoanForm variant="hero" />
          <div className="mt-4 rounded-[10px] bg-[#EAF2FF] text-[#0B3A8C] p-4 flex items-center gap-3">
            <span className="text-lg">🕒</span>
            <span className="text-[15px]">
              Horario de atención:{" "}
              <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
            </span>
          </div>
        </div>
      </div>

      {/* Ilustración SOLO MÓVIL (posición estable) */}
      <Image
        src="/hero-illustration.svg"
        alt=""
        width={180}
        height={180}
        priority
        className="
          md:hidden pointer-events-none
          absolute right-3 top-[108px]
          w-[150px] h-auto
        "
      />

      {/* Curva inferior */}
      <svg
        viewBox="0 0 1200 168"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[168px] z-0"
        aria-hidden
      >
        <path
          d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
          fill="#F2F4F7"
        />
      </svg>
    </section>
  );
}
