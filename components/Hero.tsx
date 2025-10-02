// components/Hero.tsx
import Image from "next/image";
import InlineLoanForm from "@/components/forms/InlineLoanForm";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #0C3A85 0%, #083177 48%, #0A3D8B 100%)",
      }}
    >
      {/* ========== MOBILE (bloque completamente aislado) ========== */}
      <div className="block md:hidden">
        <div className="container-max relative z-10 pt-6 pb-6">
          {/* Títulos (mobile intacto) */}
          <p className="text-[14px] font-[400] mb-1">Solicita tu</p>
          <h1 className="leading-[1.15] mb-1">
            <span className="block text-[28px] font-[600]">Préstamo</span>
            <span className="block text-[28px] font-[600]">100% online</span>
          </h1>
          <p className="text-[16px] font-[400] mt-1">y recíbelo al instante</p>

          {/* Contenedor relativo SOLO para posicionar la ilustración mobile */}
          <div className="relative h-[170px] mt-2">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={140}
              height={140}
              priority
              // 👇 posición exacta pedida para mobile
              className="pointer-events-none absolute top-[35px] right-3 w-[120px] h-auto"
            />
          </div>
        </div>

        {/* Curva inferior (mobile) */}
        <svg
          viewBox="0 0 1200 168"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block md:hidden w-full h-[168px]"
          aria-hidden
        >
          <path
            d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
            fill="#F2F4F7"
          />
        </svg>
      </div>

      {/* ========== DESKTOP (totalmente separado de mobile) ========== */}
      <div className="hidden md:block pb-16">
        <div className="container-max relative z-10 pt-14">
          <div className="grid grid-cols-12 items-center">
            {/* Texto izquierda (tamaños calcados) */}
            <div className="col-span-12 md:col-span-6">
              <p className="text-[18px] mb-3 opacity-90">Solicita tu</p>
              <h1 className="font-[600] leading-[1.15] text-white">
                <span className="block text-[56px]">Préstamo</span>
                <span className="block text-[56px]">100% online</span>
              </h1>
              <p className="mt-3 text-[20px] opacity-95">y recíbelo al instante</p>
            </div>

            {/* Ilustración derecha */}
            <div className="col-span-12 md:col-span-6 relative h-[360px]">
              <Image
                src="/hero-illustration.svg"
                alt="Préstamo online"
                fill
                priority
                className="object-contain object-right pointer-events-none"
              />
            </div>
          </div>

          {/* Formulario inline (desktop) */}
          <div className="mt-8">
            <InlineLoanForm variant="hero" />

            {/* Barra de horario justo debajo */}
            <div className="mt-4 rounded-[10px] bg-[#EAF2FF] text-[#0B3A8C] p-4 flex items-center gap-3">
              {/* Reloj */}
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <circle cx="12" cy="12" r="9" fill="none" stroke="#0B3A8C" strokeWidth="2" />
                <path d="M12 7v5l4 2" fill="none" stroke="#0B3A8C" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-[15px]">
                Horario de atención: <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
              </span>
            </div>
          </div>
        </div>

        {/* Curva inferior (desktop) */}
        <svg
          viewBox="0 0 1200 168"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block w-full h-[168px]"
          aria-hidden
        >
          <path
            d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
            fill="#F2F4F7"
          />
        </svg>
      </div>
    </section>
  );
}
