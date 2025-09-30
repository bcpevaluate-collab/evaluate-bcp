import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3A8C] to-[#1746A2] text-white pb-28">
      {/* Contenido */}
      <div className="container-max pt-10 relative z-10">
        <div className="grid grid-cols-12 items-start">
          {/* Texto */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="font-extrabold leading-[1.08] text-[38px] md:text-[44px]">
              Préstamo<br />100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Ilustración arriba-derecha (más pequeña) */}
          <div className="col-span-12 md:col-span-5 relative mt-8 md:mt-0">
            <Image
              src="/hero-illustration.svg"    // tu imagen en /public
              alt="Préstamo online"
              width={120}
              height={120}
              priority
              className="md:absolute md:top-0 md:right-4 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Onda inferior (gris visible como en el original) */}
      <svg
        viewBox="0 0 1440 140"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[120px]"
        aria-hidden
      >
        <path d="M0,80 C360,160 1080,0 1440,80 L1440,140 L0,140 Z" fill="#0B3A8C" />
        {/* banda gris del body para rematar la curva */}
        <rect x="0" y="104" width="1440" height="36" fill="#F2F4F7" />
      </svg>
    </section>
  );
}
