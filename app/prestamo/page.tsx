"use client";
import { useMemo, useState } from "react";

export default function Prestamo() {
  const [amount, setAmount] = useState(7000);
  const [payDay, setPayDay] = useState("02");

  // URL del Paso 2 como string simple
  const hrefValidacion = useMemo(() => {
    const qs = new URLSearchParams({
      amount: String(amount ?? ""),
      payDay: String(payDay ?? ""),
    }).toString();
    return `/prestamo/validacion?${qs}`;
  }, [amount, payDay]);

  // Fallback duro: navegar con location (ignora Next/Router)
  const forceGo = () => {
    try {
      window.location.assign(hrefValidacion);
    } catch {
      window.location.href = hrefValidacion;
    }
  };

  return (
    <section className="bg-[#0B3A8C] py-10">
      {/* ⛔️ Kill switch para el overlay del sticky en esta página */}
      <style jsx global>{`
        .sticky-cta { display: none !important; }
      `}</style>

      <div className="container-max">
        <div className="card-frm p-6">
          <h1 className="text-2xl font-bold text-[color:var(--brand)]">
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
                className="input-bcp mt-1"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Día de pago</span>
              <select
                value={payDay}
                onChange={(e) => setPayDay(e.target.value)}
                className="select-bcp mt-1"
              >
                {["02", "10", "15", "20", "25", "30"].map((d) => (
                  <option key={d} value={d}>
                    {d} de cada mes
                  </option>
                ))}
              </select>
            </label>

            {/* Botón “a prueba de todo”: anchor + onClick forzado + z-index alto */}
            <a
              href={hrefValidacion}
              onClick={(e) => {
                e.preventDefault(); // evitamos cualquier intercept
                forceGo();
              }}
              className="btn-bcp text-center self-end flex items-center justify-center"
              data-testid="btn-empezar"
              style={{
                position: "relative",
                zIndex: 9999,
                pointerEvents: "auto",
              }}
            >
              Empezar
            </a>
          </div>

          {/* Link de diagnóstico extra (por si quieres probar) */}
          <div className="mt-3 text-sm">
            <a href={hrefValidacion} style={{ textDecoration: "underline" }}>
              Debug: {hrefValidacion}
            </a>
          </div>
        </div>

        <div className="container-max pb-6 text-white/80 text-sm mt-4">
          Horario de atención: Lun a Dom de 5:00am – 12:00am (medianoche)
        </div>
      </div>
    </section>
  );
}
