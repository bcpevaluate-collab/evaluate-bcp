// components/Benefits.tsx
import Image from "next/image";

const items = [
  { icon: "/beneficios/flexibilidad.svg",   label: "Flexibilidad de montos" },
  { icon: "/beneficios/ahorra-tiempo.svg",  label: "Ahorra tiempo" },
  { icon: "/beneficios/pago-automatico.svg",label: "Pago Automático" },
];

export default function Benefits() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container-max">
        {/* TÍTULO: peso, tamaño y salto en 2 líneas */}
        <h2 className="text-center text-[#0B3A8C] font-[600] leading-[1.2]
                       text-[30px] md:text-[34px] tracking-[-0.2px]
                       mt-2 mb-6 md:mb-7">
          Beneficios de tu
          <br />
          préstamo online
        </h2>

        {/* Tarjetas full-width visual con borde y radio exactos */}
        <ul className="space-y-3 md:space-y-4 mx-1 md:mx-0">
          {items.map((it) => (
            <li key={it.label}>
              <div className="benefit-card2">
                <div className="shrink-0 w-[56px] h-[56px] rounded-full grid place-items-center overflow-hidden">
                  <Image src={it.icon} alt="" width={56} height={56} priority />
                </div>
                <p className="m-0 text-[16px] md:text-[18px] font-[600] text-[#0B3A8C]">
                  {it.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
