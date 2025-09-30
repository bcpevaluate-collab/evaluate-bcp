import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3A8C] text-white">
      {/* Contenido */}
      <div className="container-max pt-10 pb-24 relative z-10">
        <div className="grid grid-cols-12">
          {/* Texto izquierda */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="font-extrabold leading-[1.08] text-[38px] md:text-[44px]">
              Préstamo<br />100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Ilustración derecha (posición y tamaño como BCP) */}
          <div className="col-span-12 md:col-span-5 relative mt-8 md:mt-0">
            <Image
              src="/hero-illustration.svg"   // coloca tu imagen en /public con este nombre o cámbialo
              alt="Ilustración préstamo online"
              width={170}                     // afina 160–185 según tu captura
              height={170}
              priority
              className="md:absolute md:top-0 md:right-2 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Onda inferior (match diseño BCP) */}
      <svg
        viewBox="0 0 1440 140"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[120px]"
        aria-hidden
      >
        {/* Azul del bloque + remate gris del body */}
        <path d="M0,78 C360,158 1080,0 1440,78 L1440,140 L0,140 Z" fill="#0B3A8C" />
        <rect x="0" y="104" width="1440" height="36" fill="#F2F4F7" />
      </svg>
    </section>
  );
}
