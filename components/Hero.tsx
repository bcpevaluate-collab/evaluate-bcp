// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #072C69 0%, #0B3A8C 58%, #0E4AA4 100%)",
      }}
    >
      {/* ===== MOBILE ===== */}
      <div className="container-max relative z-10 pt-6 pb-36 md:hidden">
        <p className="text-[14px] font-[400] mb-1">Solicita tu</p>

        <h1 className="text-[32px] font-[600] leading-[1.25] mb-2 max-w-[22rem]">
          <span>Préstamo</span>
          <br />
          <span>100% online</span>
        </h1>

        <p className="text-[16px] font-[400] mt-1">y recíbelo al instante</p>

        {/* Imagen flotante solo mobile */}
        <Image
          src="/hero-illustration.svg"
          alt="Préstamo online"
          width={180}
          height={180}
          priority
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 z-10 w-[140px] h-auto"
        />
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block container-max relative z-10 pt-12 pb-24">
        <div className="grid grid-cols-12 items-center gap-6">
          {/* Texto */}
          <div className="col-span-6">
            <p className="text-[16px] font-[400] mb-1">Solicita tu</p>
            <h1 className="text-[44px] font-[600] leading-[1.25] mb-4 max-w-lg">
              <span>Préstamo</span>
              <br />
              <span>100% online</span>
            </h1>
            <p className="text-[20px] font-[400]">y recíbelo al instante</p>
          </div>

          {/* Imagen + formulario */}
          <div className="col-span-6 flex flex-col items-end">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={420}
              height={420}
              priority
              className="w-[360px] lg:w-[420px] h-auto mb-6"
            />

            {/* Formulario solo desktop */}
            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-center w-full max-w-lg">
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
        </div>
      </div>

      {/* Curva */}
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
