// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-36"
      style={{
        // gradiente muy parecido al real (ligeramente más oscuro)
        background:
          "linear-gradient(180deg, #072C69 0%, #0B3A8C 58%, #0E4AA4 100%)",
      }}
    >
      {/* Contenido a la izquierda */}
      <div className="container-max relative z-10 pt-6 md:pt-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[14px] md:text-[16px] font-[400] mb-1">
              Solicita tu
            </p>

            {/* Título en 2 líneas: 32/40, Demi (600), lh 1.25 */}
            <h1 className="text-[32px] md:text-[40px] font-[600] leading-[1.25] mb-2 max-w-[22rem]">
              <span>Préstamo</span>
              <br className="block" />
              <span>100% online</span>
            </h1>

            <p className="text-[16px] md:text-[18px] font-[400] mt-1">
              y recíbelo al instante
            </p>
          </div>
        </div>
      </div>

      {/* Ilustración: derecha + centrada vertical. Más pequeña. */}
      <Image
        src="/hero-illustration.svg"    // tu SVG en /public
        alt="Préstamo online"
        width={180}
        height={180}
        priority
        className="
          pointer-events-none absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10
          w-[140px] h-auto md:w-[160px]
        "
      />

      {/* Curva EXACTA pintando el color de la sección siguiente */}
      <svg
        viewBox="0 0 1200 168"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full h-[168px] z-0"
        aria-hidden
      >
        <path
          d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
          fill="#F2F4F7"
          fillRule="evenodd"
        />
      </svg>
    </section>
  );
}
