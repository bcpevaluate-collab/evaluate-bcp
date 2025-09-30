import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-36"
      style={{ background: "linear-gradient(180deg,#0B3A8C 0%,#1746A2 100%)" }}
    >
      <div className="container-max relative z-10 py-10 md:py-16">
        <p className="text-sm">Solicita tu</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Préstamo 100% online
        </h1>
        <p className="mt-2 text-lg md:text-xl">y recíbelo al instante</p>
      </div>

      {/* Imagen alineada derecha y centrada */}
      <Image
        src="/hero-illustration.png" // tu imagen
        alt="Préstamo online"
        width={180}
        height={180}
        priority
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 md:right-10"
      />

      {/* Curva exacta */}
      <svg
        viewBox="0 0 1200 168"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[168px] z-0"
        aria-hidden
      >
        <path
          d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
          fill="#F2F4F7" // gris claro del fondo siguiente
          fillRule="evenodd"
        />
      </svg>
    </section>
  );
}
