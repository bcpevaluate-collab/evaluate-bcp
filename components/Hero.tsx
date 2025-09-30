import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg,#0B3A8C 0%,#1746A2 100%)" }}
    >
      {/* Contenido */}
      <div className="container-max relative z-10">
        <div className="grid grid-cols-12 min-h-[340px] md:min-h-[360px] pt-8">
          {/* Texto */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="font-extrabold leading-[1.08] text-[38px] md:text-[44px]">
              Préstamo<br />100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Ilustración: derecha + centrada verticalmente */}
          <div className="col-span-12 md:col-span-5 relative">
            {/* alto para móvil, para poder centrar */}
            <div className="h-[160px] md:h-auto" />
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={140}            // ajusta 120–160 si quieres afinar
              height={140}
              priority
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 md:right-6"
            />
          </div>
        </div>
      </div>

      {/* Onda azul inferior visible */}
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[120px]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,58 C380,148 1020,0 1440,86 L1440,120 L0,120 Z"
          fill="#0B3A8C"
        />
      </svg>
    </section>
  );
}
