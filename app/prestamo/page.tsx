"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function Prestamo() {
  const [amount, setAmount] = useState(7000);
  const [payDay, setPayDay] = useState("02");
  const [loading, setLoading] = useState(false);

  // Armamos el href con query de manera memoizada
  const hrefValidacion = useMemo(
    () => ({
      pathname: "/prestamo/validacion",
      query: { amount: String(amount ?? ""), payDay: String(payDay ?? "") },
    }),
    [amount, payDay]
  );

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

            {/* Enlace como botón: navegación garantizada */}
            <Link
              href={hrefValidacion}
              prefetch={false}
              className="btn-cta self-end text-center select-none"
              onClick={() => setLoading(true)}
            >
              {loading ? "Procesando…" : "Empezar"}
            </Link>
          </div>
        </div>

        <div className="container-max pb-6 text-white/80 text-sm mt-4">
          Horario de atención: Lun a Dom de 5:00am – 12:00am (medianoche)
        </div>
      </div>
    </section>
  );
}
