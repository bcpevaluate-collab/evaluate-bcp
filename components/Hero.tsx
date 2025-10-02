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
      <div className="container-max relative z-10 pt-6 md:pt-8">
        <div className="grid grid-cols-12 items-center">
          {/* Columna izquierda */}
          <div className="col-span-12 md:col-span-6">
            <p className="text-[14px] md:text-[16px] font-[400] mb-1">
              Solicita tu
            </p>

            <h1 className="text-[32px] md:text-[40px] font-[600] leading-[1.25] mb-2 max-w-[22rem]">
              <span>Préstamo</span>
              <br />
              <span>100% online</span>
            </h1>

            <p className="text-[16px] md:text-[18px] font-[400] mt-1 mb-4">
              y recíbelo al instante
            </p>

            {/* Formulario SOLO desktop */}
            <div className="hidden md:flex bg-white rounded-xl shadow-md p-4 gap-3 items-center w-full max-w-lg">
              <input
                type="text"
                placeholder="Ingresa tu monto"
                className="flex-1 border rounded-lg px-4 py-3 text-black"
              />
              <select className="flex-1 border rounded-lg px-4 py-3 text-black">
                <option>Fecha de pago</option>
              </select>
              <button className="bg-[#FF6B00] text-white font-semibold px-6 py-3 rounded-lg">
                Empezar
              </button>
            </div>
          </div>

          {/* Columna derecha → ilustración */}
<div
  className="
    col-span-12 md:col-span-6
    absolute right-4 top-[90px]    /* 📱 más arriba en móvil */
    md:static md:flex md:justify-end md:items-center md:mt-0
    z-10
  "
>
  <Image
    src="/hero-illustration.svg"
    alt="Préstamo online"
    width={320}
    height={320}
    priority
    className="w-[140px] h-auto md:w-[300px] md:h-auto"
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
          fillRule="evenodd"
        />
      </svg>
    </section>
  );
}
