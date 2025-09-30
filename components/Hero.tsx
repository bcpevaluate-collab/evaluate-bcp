// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-deep)] text-white">
      {/* Contenido: texto izq + ilustración der */}
      <div className="container-max pt-10 pb-24 relative z-10">
        <div className="grid grid-cols-12 items-start">
          {/* Texto */}
          <div className="col-span-12 md:col-span-7 pt-2">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="text-[38px] md:text-[44px] font-extrabold leading-tight">
              Préstamo<br />100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Ilustración (más pequeña, arriba-derecha) */}
          <div className="col-span-12 md:col-span-5 relative mt-6 md:mt-0">
            <Image
              src="/hero-illustration.svg"     // pon aquí tu archivo (png/svg) en /public
              width={180}                       // ajusta 160–200 si necesitas afinar
              height={180}
              alt="Ilustración préstamo online"
              priority
              className="md:absolute md:top-2 md:right-2"
            />
          </div>
        </div>
      </div>

      {/* Onda inferior (curva marcada como BCP) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
        >
          <path
            fill="#0B3A8C"
            d="M0,80 C360,160 1080,0 1440,80 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  );
}
