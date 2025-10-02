// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-36"
      style={{
        background:
          "linear-gradient(180deg, #072C69 0%, #0B3A8C 58%, #0E4AA4 100%)",
      }}
    >
      <div className="container-max relative z-10 pt-6 md:pt-12">
        <div className="grid grid-cols-12 items-center gap-6">
          {/* Texto lado izquierdo */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-[14px] md:text-[16px] font-[400] mb-1">
              Solicita tu
            </p>

            <h1 className="text-[32px] md:text-[44px] font-[600] leading-[1.25] mb-2 max-w-[22rem] md:max-w-full">
              <span>Préstamo</span>
              <br />
              <span>100% online</span>
            </h1>

            <p className="text-[16px] md:text-[20px] font-[400] mt-1">
              y recíbelo al instante
            </p>

            {/* Horario (solo texto, sin formulario aquí) */}
            <p className="mt-4 text-xs md:text-sm text-[#cbd5e1]">
              ⏰ Horario de atención: Lun a Dom de 5:00am - 12:00am (medianoche)
            </p>
          </div>

          {/* Ilustración lado derecho SOLO desktop */}
          <div className="hidden md:block col-span-5 text-center">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={360}
              height={360}
              priority
              className="mx-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Curva inferior */}
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
        />
      </svg>
    </section>
  );
}
