// components/Benefits.tsx
import Image from "next/image";

const items = [
  { icon: "/beneficios/flexibilidad.svg", label: "Flexibilidad de montos" },
  { icon: "/beneficios/ahorra-tiempo.svg",  label: "Ahorra tiempo" },
  { icon: "/beneficios/pago-automatico.svg", label: "Pago Automático" },
];

export default function Benefits() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container-max">
        {/* Título EXACTO (dos líneas, centrado, azul marca) */}
        <h2 className="text-center leading-[1.25] text-[28px] md:text-[32px] font-[600] text-[#0B3A8C] mb-6 md:mb-8">
          Beneficios de tu
          <br />
          préstamo online
        </h2>

        {/* Tarjetas (solo icono + texto, sin descripción) */}
        <ul className="space-y-4">
          {items.map((it) => (
            <li key={it.label}>
              <div className="benefit-card">
                <div className="shrink-0 w-[56px] h-[56px] rounded-full grid place-items-center overflow-hidden">
                  <Image
                    src={it.icon}
                    alt=""
                    width={56}
                    height={56}
                    priority
                  />
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
