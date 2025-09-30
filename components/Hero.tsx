import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pb-36"
      style={{ background: "linear-gradient(180deg,#0B3A8C 0%,#1746A2 100%)" }}
    >
      <div className="text-white font-bcp max-w-[22rem] md:max-w-none">
  <p className="text-[14px] md:text-[16px] font-[400] mb-1">Solicita tu</p>

  <h1 className="text-[32px] md:text-[40px] font-[600] leading-[1.25] mb-2">
    <span>Préstamo</span>
    <br className="block" />
    <span>100% online</span>
  </h1>

  <p className="text-[16px] md:text-[18px] font-[400] mt-1">y recíbelo al instante</p>
</div>


      
<Image
  src="/hero-illustration.svg"
  alt="Préstamo online"
  width={150}              // si queda grande, prueba 140
  height={150}
  priority
  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 md:right-6 z-10"
/>


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
