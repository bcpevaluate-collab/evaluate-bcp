"use client";
import { useState, useMemo } from "react";

export default function Prestamo() {
  const [amount, setAmount] = useState(7000);
  const [payDay, setPayDay] = useState("02");

  // Construimos el href como string simple
  const hrefValidacion = useMemo(() => {
    const params = new URLSearchParams({
      amount: String(amount ?? ""),
      payDay: String(payDay ?? ""),
    });
    return `/prestamo/validacion?${params.toString()}`;
  }, [amount, payDay]);

  return (
    <section className="bg-[#0B3A8C] py-10">
      <div className="container-max">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-[#0B3A8C]">
            Elige tu monto y fecha de pago
          </h1>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <label className="block">
              <span className="text-sm font-medium">Monto</span>
              <input
                type="number"
                min={100}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-1 w-full border rounded-lg p-2"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Día de pago</span>
              <select
                value={payDay}
                onChange={(e) => setPayDay(e.target.value)}
                className="mt-1 w-full border rounded-lg p-2"
              >
                {["02", "10", "15", "20", "25", "30"].map((d) => (
                  <option key={d} value={d}>
                    {d} de cada mes
                  </option>
                ))}
              </select>
            </label>

            {/* Enlace HTML puro: sin JS, debe navegar sí o sí */}
            <a
  href="..."
  className="btn-cta self-end text-center"
  style={{ position: "relative", zIndex: 50, pointerEvents: "auto" }}
>
  Empezar
</a>
          </div>
        </div>

        <div className="container-max pb-6 text-white/80 text-sm mt-4">
          Horario de atención: Lun a Dom de 5:00am – 12:00am (medianoche)
        </div>

        {/* Link de diagnóstico visible para que pruebes también */}
        <div className="mt-6 text-white text-sm">
          <div>Debug link:</div>
          <a href={hrefValidacion} style={{ textDecoration: "underline" }}>
            {hrefValidacion}
          </a>
        </div>
      </div>
    </section>
  );
}
