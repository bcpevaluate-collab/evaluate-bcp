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
      {/* ===== MOBILE ===== */}
      <div className="block md:hidden relative">
        <div className="container-max relative z-10 pt-5 pb-0">
          <p className="text-[14px] font-[400] mb-1">Solicita tu</p>
          <h1 className="leading-[1.15] mb-1">
            <span className="block text-[28px] font-[600]">Préstamo</span>
            <span className="block text-[28px] font-[600]">100% online</span>
          </h1>
          <p className="text-[16px] font-[400] mt-1">y recíbelo al instante</p>

          {/* Ilustración más arriba y centrada */}
          <div className="relative h-[48px] mt-1">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={120}
              height={120}
              priority
              className="pointer-events-none absolute -top-[40px] right-2 w-[110px] h-auto"
            />
          </div>
        </div>

        {/* Curva recortada */}
        <svg
          viewBox="0 0 1200 168"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none block w-full h-[60px]"
          aria-hidden
        >
          <path
            d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
            fill="#F2F4F7"
          />
        </svg>
      </div>

      {/* ===== DESKTOP ===== */}
<div className="hidden md:block pb-16">
  <div className="container-max relative z-10 pt-14">
    <div className="grid grid-cols-12 items-center">
      {/* Texto izquierda (desktop) */}
<div className="col-span-12 md:col-span-6">
  <p className="text-[18px] mb-3 opacity-90">Solicita tu</p>

  {/* 👇 Título en una sola línea */}
  <h1 className="font-[600] leading-[1.2] text-white">
    <span className="block text-[56px] whitespace-nowrap">
      Préstamo 100% online
    </span>
  </h1>

  {/* 👇 Subtítulo debajo */}
  <p className="mt-3 text-[24px] font-[400] text-white opacity-95">
    y recíbelo al instante
  </p>
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

    {/* Formulario inline */}
    <div className="mt-8">
      <InlineLoanForm variant="hero" />
      <div className="mt-4 rounded-[10px] bg-[#EAF2FF] text-[#0B3A8C] p-4 flex items-center gap-3">
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

  {/* Curva inferior */}
  <svg
    viewBox="0 0 1200 168"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className="block w-full h-[168px]"
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
