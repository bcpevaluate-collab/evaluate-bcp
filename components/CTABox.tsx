// components/CTABox.tsx
import Image from "next/image";
import Link from "next/link";

export default function CTABox() {
  return (
    <section className="mt-8 mb-12">
      <div className="container-max">
        <div
          className="rounded-[24px] md:rounded-[28px] overflow-hidden
                     bg-[#0B3A8C] text-white shadow-[0_10px_30px_rgba(0,0,0,.12)]
                     px-6 py-8 md:px-10 md:py-10"
        >
          <div className="flex items-center gap-6">
            <Image
              src="/ahora.svg"     // tu SVG
              alt=""
              width={140}
              height={140}
              className="shrink-0"
              priority
            />
            <div className="flex-1">
              <p className="font-[600] leading-tight
                            text-[20px] md:text-[24px]">
                ¡Que esperas! Adquiere tu préstamo BCP online y
                obtén tu dinero al instante
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#form" // si quieres que haga scroll al formulario
                  className="rounded-full bg-[#FF7A00] text-white font-semibold
                             h-[46px] px-6 flex items-center justify-center"
                >
                  Solicita tu préstamo
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-white/10 text-white font-semibold
                             h-[46px] px-6 flex items-center justify-center"
                >
                  Ver mi préstamo y cuotas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
