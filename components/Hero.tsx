// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-28 md:pb-36"
      style={{
        // Gradiente de fondo (desktop idéntico)
        background:
          "linear-gradient(180deg, #0C3A85 0%, #083177 48%, #0A3D8B 100%)",
      }}
    >
      {/* --- CONTENIDO (TEXTO + ILUSTRACIÓN) --- */}
      <div className="container-max relative z-10 pt-6 md:pt-16">
        <div className="grid grid-cols-12 items-center">
          {/* Texto izquierda */}
          <div className="col-span-12 md:col-span-6">
            {/* Mobile intacto */}
            <p className="text-[14px] font-[400] mb-1 md:text-[18px] md:mb-3">
              Solicita tu
            </p>

            {/* Título 1: tamaños desktop para clavar el diseño */}
            <h1 className="leading-[1.15] mb-1">
              <span className="block text-[32px] font-[600] md:text-[56px]">
                Préstamo 100% online
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-[16px] font-[400] mt-1 md:text-[28px] md:mt-3">
              y recíbelo al instante
            </p>
          </div>

          {/* Ilustración derecha (desktop grande) */}
          <div className="col-span-12 md:col-span-6 relative mt-6 md:mt-0">
            <Image
              src="/hero-illustration.svg"
              alt="Préstamo online"
              width={560}
              height={560}
              priority
              className="
                pointer-events-none mx-auto md:mx-0
                w-[180px] h-auto
                md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2
                md:w-[520px]
              "
            />
          </div>
        </div>
      </div>

      {/* --- FORMULARIO INLINE SOLO DESKTOP --- */}
      <div className="hidden md:block">
        {/* Contenedor centrado y anclado visualmente al final de la curva */}
        <div className="container-max relative z-10">
          {/* PÍLDORA blanca */}
          <div
            className="
              mx-auto mt-10 max-w-[980px]
              rounded-[18px] bg-white shadow-[0_22px_44px_rgba(12,33,80,.25)]
              px-5 py-4
            "
          >
            <form
              // TODO: si quieres que envíe igual que tu mobile, conecta aquí tu onSubmit
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                placeholder="Ingresa tu monto"
                className="
                  h-[52px] flex-1 rounded-[12px] border border-[#E6EEF8]
                  px-5 text-[#0B3A8C] placeholder-[#8AA0B6] outline-none
                  focus:border-[#A3C4FF]
                "
              />

              <div
                className="
                  h-[52px] w-[340px] rounded-[12px] border border-[#E6EEF8]
                  px-4 text-[#0B3A8C] flex items-center justify-between
                "
              >
                <select
                  className="
                    w-full bg-transparent outline-none appearance-none
                    text-[#0B3A8C]
                  "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Fecha de pago
                  </option>
                  <option value="02">02</option>
                  <option value="15">15</option>
                  <option value="28">28</option>
                </select>

                {/* caret */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 10l5 5 5-5" stroke="#0B3A8C" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <button
                type="submit"
                className="
                  h-[52px] min-w-[140px] rounded-[12px]
                  bg-[#FF7A00] text-white font-semibold px-6
                  hover:brightness-110 transition
                "
              >
                Empezar
              </button>
            </form>
          </div>

          {/* FRANJA AZUL CON RELOJ (debajo del formulario) */}
          <div
            className="
              mx-auto mt-3 max-w-[980px]
              rounded-[14px] bg-[#E8F1FF] text-[#0B3A8C]
              px-5 py-3 flex items-center gap-3
            "
          >
            {/* Icono reloj */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke="#0B3A8C" strokeWidth="2" />
              <path d="M12 7v6l4 2" stroke="#0B3A8C" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <span className="text-[14px]">
              Horario de atención:&nbsp;
              <strong>Lun a Dom de 5:00am - 12:00am ( medianoche )</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Curva inferior (misma apariencia) */}
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
