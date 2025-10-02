// components/Hero.tsx
import Image from "next/image";
import InlineLoanForm from "@/components/forms/InlineLoanForm";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-28 md:pb-40"
      // gradiente muy cercano al original, el salto fuerte está en desktop
      style={{
        background:
          "linear-gradient(180deg, #072C69 0%, #0B3A8C 58%, #0E4AA4 100%)",
      }}
    >
      <div className="container-max relative z-10 pt-6 md:pt-24">
        <div className="grid grid-cols-12 items-center">
          {/* Texto (móvil intacto; desktop más grande) */}
          <div className="col-span-12 md:col-span-6">
            <p className="text-[14px] md:text-[18px] mb-1 md:mb-3 opacity-95">
              Solicita tu
            </p>

            {/* En desktop el H1 va en 2 líneas y con tracking muy parecido */}
            <h1 className="leading-[1.15] md:leading-[1.12] tracking-tight">
              <span className="block text-[32px] md:text-[56px] font-[600]">
                Préstamo 100% online
              </span>
            </h1>

            <p className="mt-1 md:mt-3 text-[16px] md:text-[22px] opacity-95">
              y recíbelo al instante
            </p>
          </div>

          {/* Ilustración (móvil igual; en desktop grande y a la derecha) */}
          <div className="col-span-12 md:col-span-6 relative mt-6 md:mt-0">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={560}
              height={560}
              priority
              className="
                pointer-events-none mx-auto md:mx-0
                w-[180px] h-auto
                md:absolute md:right-[6%] md:top-1/2 md:-translate-y-1/2
                md:w-[520px]
              "
            />
          </div>
        </div>

        {/* ---------- Formulario SOLO desktop (móvil queda como está) ---------- */}
        <div className="hidden md:block mt-10">
          {/* cápsula blanca centrada */}
          <div className="mx-auto max-w-[1060px] rounded-[18px] bg-white shadow-[0_22px_44px_rgba(12,33,80,.24)] px-6 py-4">
            {/* usamos el mismo formulario que mobile para que envíe a Supabase/Resend */}
            <InlineLoanForm variant="hero" />
          </div>

          {/* Franja azul del reloj justo debajo */}
          <div className="mx-auto mt-3 max-w-[1060px] rounded-[12px] bg-[#EAF2FF] text-[#0B3A8C] px-5 py-3 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <circle cx="12" cy="12" r="9" fill="none" stroke="#0B3A8C" strokeWidth="2" />
              <path d="M12 7v6l4 2" fill="none" stroke="#0B3A8C" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-[15px]">
              Horario de atención: <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
            </span>
          </div>
        </div>
      </div>

      {/* Curva inferior */}
      <svg
        viewBox="0 0 1200 168"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[168px]"
        aria-hidden
      >
        <path
          d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
          fill="#F2F4F7"
          fillRule="evenodd"
        />
      </svg>
    </section>
  );
}
