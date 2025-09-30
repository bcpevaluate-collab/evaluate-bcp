import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #0B3A8C 0%, #1746A2 100%)"
      }}
    >
      {/* Contenido */}
      <div className="container-max pt-10 pb-24 relative z-10">
        <div className="grid grid-cols-12 items-start">
          {/* Texto izquierda */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="font-extrabold leading-[1.08] text-[38px] md:text-[44px]">
              Préstamo<br />100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Ilustración arriba-derecha (también en móvil) */}
          <div className="col-span-12 md:col-span-5 relative">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={120}
              height={120}
              priority
              className="absolute top-2 right-4"  // fuerza alineación arriba-derecha
            />
            {/* evita que el grid reserve altura extra en móvil */}
            <div className="h-[120px] md:h-[140px]" />
          </div>
        </div>
      </div>

      {/* Onda inferior: estira sin dejar línea recta */}
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[120px]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,68 C360,148 1080,-8 1440,68 L1440,120 L0,120 Z" fill="#0B3A8C" />
      </svg>

      {/* Fondo gris por detrás de la onda (cubre cualquier gap) */}
      <div className="absolute -bottom-1 left-0 right-0 h-[22px] bg-[#F2F4F7]" />
    </section>
  );
}
