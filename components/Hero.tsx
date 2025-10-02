// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #0C3A85 0%, #083177 48%, #0A3D8B 100%)",
      }}
    >
      {/* ===== MOBILE (NO TOCAR) ===== */}
      <div className="block md:hidden relative">
        <div className="container-max relative z-10 pt-5 pb-0">
          <p className="text-[14px] font-[400] mb-1">Solicita tu</p>
          <h1 className="leading-[1.15] mb-1">
            <span className="block text-[28px] font-[600]">Préstamo</span>
            <span className="block text-[28px] font-[600]">100% online</span>
          </h1>
          <p className="text-[16px] font-[400] mt-1">y recíbelo al instante</p>

          {/* Ilustración más arriba y centrada */}
          <div className="relative h-[48px] mt-1">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={120}
              height={120}
              priority
              className="pointer-events-none absolute -top-[40px] right-2 w-[110px] h-auto"
            />
          </div>
        </div>

        {/* Curva recortada */}
        <svg
          viewBox="0 0 1200 168"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none block w-full h-[60px]"
          aria-hidden
        >
          <path
            d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
            fill="#F2F4F7"
          />
        </svg>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block pb-16">
        <div className="container-max relative z-10 pt-14">
          <div className="grid grid-cols-12 items-center">
            {/* Texto izquierda (desktop) */}
            <div className="col-span-12 md:col-span-6">
              <p className="text-white font-normal mb-2 text-[18px]">
                Solicita tu
              </p>

              <h1 className="text-white font-[600] leading-[1.1]">
                <span className="block text-[56px] tracking-[-0.01em] whitespace-nowrap">
                  Préstamo 100% online
                </span>
              </h1>

              <p className="mt-2 text-white font-normal text-[40px] tracking-[-0.01em]">
                y recíbelo al instante
              </p>
            </div>

            {/* Ilustración derecha */}
            <div className="col-span-12 md:col-span-6 relative h-[360px]">
              <Image
                src="/hero-illustration.svg"
                alt="Préstamo online"
                fill
                priority
                className="object-contain object-right pointer-events-none"
              />
            </div>
          </div>

          {/* ===== Formulario inline SOLO DESKTOP ===== */}
          <div className="mt-8">
            {/* Píldora blanca */}
            <form
              action="/prestamo/validacion"
              method="GET"
              className="mx-auto max-w-[980px] bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,.08)]
                         px-6 py-4 flex items-center gap-4"
            >
              {/* Monto */}
              <input
                name="amount"
                type="text"
                placeholder="Ingresa tu monto"
                className="flex-1 h-[48px] rounded-lg border border-[#E4ECF5] px-4 text-[16px] text-[#0B3A8C]
                           placeholder-[#9BB0C7] outline-none focus:ring-2 focus:ring-[#0B3A8C]/40"
              />

              {/* Fecha de pago */}
              <div className="flex-1 h-[48px] rounded-lg border border-[#E4ECF5] px-4 flex items-center">
                <select
                  name="payDay"
                  defaultValue=""
                  className="w-full bg-transparent outline-none text-[16px] text-[#0B3A8C]"
                >
                  <option value="" disabled>
                    Fecha de pago
                  </option>
                  <option value="02">02 de cada mes</option>
                  <option value="15">15 de cada mes</option>
                  <option value="28">28 de cada mes</option>
                </select>
                {/* caret */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-ml-6">
                  <path d="M7 10l5 5 5-5" stroke="#0B3A8C" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="h-[48px] min-w-[140px] rounded-full bg-[#FF6B00] px-6 text-white font-semibold
                           hover:brightness-110 transition"
              >
                Empezar
              </button>
            </form>

            {/* Franja azul — horario */}
            <div
              className="mx-auto mt-3 max-w-[980px] rounded-xl bg-[#EAF2FF] text-[#0B3A8C]
                         px-5 py-3 flex items-center gap-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="#0B3A8C" strokeWidth="2" />
                <path d="M12 7v6l4 2" stroke="#0B3A8C" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-[13px]">
                Horario de atención: <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
              </span>
            </div>
          </div>
        </div>

        {/* Curva inferior */}
        <svg
          viewBox="0 0 1200 168"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-[168px]"
          aria-hidden
        >
          <path
            d="M1200 0v168H0v-54.708c118.333 28.97 304 42.722 557 41.26C810 153.087 1024.333 101.57 1200 0z"
            fill="#F2F4F7"
          />
        </svg>
      </div>
    </section>
  );
}
