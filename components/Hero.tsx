// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3A8C] text-white">
      {/* Contenido */}
      <div className="container-max pt-10 pb-24 relative z-10">
        <div className="grid grid-cols-12 items-start">
          {/* Texto izquierda */}
          <div className="col-span-12 md:col-span-7 pt-1">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="text-[38px] md:text-[44px] leading-[1.1] font-extrabold">
              Préstamo<br/>100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Ilustración derecha (pequeña y pegada arriba-derecha) */}
          <div className="col-span-12 md:col-span-5">
            <Image
              src="/hero-illustration.svg"  // tu imagen en /public
              alt="Ilustración"
              width={160}                    // si aún se ve grande, baja a 150/140
              height={160}
              priority
              className="md:absolute md:top-3 md:right-4 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Onda inferior: SOLO una, gris del body */}
      <svg
        viewBox="0 0 1440 140"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[120px]"
      >
        {/* azul del bloque + recorte a gris claro del body */}
        <path d="M0,80 C360,160 1080,0 1440,80 L1440,140 L0,140 Z" fill="#0B3A8C" />
        <rect x="0" y="100" width="1440" height="40" fill="#F2F4F7" />
      </svg>
    </section>
  );
}
