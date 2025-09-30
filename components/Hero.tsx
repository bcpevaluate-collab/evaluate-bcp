import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-deep)] text-white">
      {/* Contenido principal */}
      <div className="container-max pt-10 pb-20 md:pb-28 relative z-10">
        <div className="grid grid-cols-12 items-start">
          {/* Texto */}
          <div className="col-span-12 md:col-span-6 pt-2">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="text-[38px] leading-[1.1] md:text-[44px] font-extrabold">
              Préstamo<br/>100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Ilustración a la derecha */}
          <div className="col-span-12 md:col-span-6 relative mt-6 md:mt-0">
            <div className="relative md:absolute md:-top-6 md:right-4">
              <Image
                src="/hero-illustration.svg"   // ← pon aquí el nombre exacto del archivo
                width={220}
                height={220}
                alt="Ilustración préstamo online"
                priority
                className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Onda inferior (match con el BCP) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 140"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
        >
          <path
            d="M0 72C120 88 240 120 360 120C480 120 600 88 720 72C840 56 960 56 1080 72C1200 88 1320 120 1440 136V0H0V72Z"
            fill="#0B3A8C"
          />
        </svg>
      </div>
    </section>
  );
}
