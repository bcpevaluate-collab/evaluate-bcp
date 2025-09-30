import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3A8C] text-white pb-28">
      <div className="container-max pt-10 relative z-10">
        <div className="grid grid-cols-12 items-center">
          {/* Texto */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-white/90 mb-1">Solicita tu</p>
            <h1 className="font-extrabold leading-tight text-[36px] md:text-[42px]">
              Préstamo<br />100% online
            </h1>
            <p className="mt-2 text-white/90">y recíbelo al instante</p>
          </div>

          {/* Imagen */}
          <div className="col-span-12 md:col-span-5 relative mt-8 md:mt-0">
            <Image
              src="/hero-illustration.png"
              alt="Préstamo online"
              width={140}
              height={140}
              priority
              className="md:absolute md:top-[-10px] md:right-0 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Curva inferior */}
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 right-0 w-full"
        aria-hidden
      >
        <path
          d="M0,64 C480,160 960,0 1440,64 L1440,120 L0,120 Z"
          fill="#0B3A8C"
        />
        <rect x="0" y="100" width="1440" height="20" fill="#F2F4F7" />
      </svg>
    </section>
  );
}
