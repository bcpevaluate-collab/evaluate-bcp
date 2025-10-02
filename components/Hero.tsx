// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-40"
      style={{
        background:
          "linear-gradient(180deg, #072C69 0%, #0B3A8C 58%, #0E4AA4 100%)",
      }}
    >
      <div className="container-max relative z-10 pt-8 md:pt-12">
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

            {/* Formulario */}
            <div className="bg-white rounded-xl shadow-md mt-6 p-4 flex flex-col md:flex-row gap-4 text-black max-w-lg">
              <input
                type="number"
                placeholder="Ingresa tu monto"
                className="flex-1 input-bcp"
              />
              <select className="flex-1 input-bcp">
                <option>Fecha de pago</option>
              </select>
              <button className="btn-bcp md:w-auto px-6">Empezar</button>
            </div>

            {/* Horario */}
            <p className="mt-4 text-xs md:text-sm text-[#cbd5e1]">
              ⏰ Horario de atención: Lun a Dom de 5:00am - 12:00am (medianoche)
            </p>
          </div>

          {/* Ilustración lado derecho */}
          <div className="hidden md:block col-span-5 text-center">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={320}
              height={320}
              priority
              className="mx-auto w-[220px] md:w-[300px] lg:w-[360px] h-auto"
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
