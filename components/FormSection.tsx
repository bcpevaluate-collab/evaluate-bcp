"use client";
import { useState } from "react";

export default function FormSection() {
  const [amount, setAmount] = useState(7000);
  const [payDay, setPayDay] = useState("02");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/simular", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, payDay }),
    }).catch(() => {});
    setLoading(false);
  }

  return (
    <section className="relative z-20 bg-[#F2F4F7]">
      {/* sube un poco más para tapar la curva */}
      <div className="container-max -mt-16 md:-mt-20 pb-6">
        <div className="mx-auto max-w-2xl rounded-[18px] border border-[#CAD2DE] bg-white
                        shadow-[0_14px_36px_rgba(0,27,71,.20)] p-5 md:p-6">
          <h2 className="text-[22px] font-bold text-[#0E1B2A]">Préstamo 100% online</h2>
          <p className="mt-1 text-slate-600">Ingresa tu monto y fecha de pago</p>

          <form onSubmit={submit} className="mt-4 space-y-4" aria-busy={loading}>
            <label htmlFor="amount" className="block">
              <span className="block text-sm mb-1">Ingresa tu monto</span>
              <input
                id="amount"
                className="w-full h-[52px] rounded-[12px] border border-[#CAD2DE] px-4
                           outline-none focus:ring-2 focus:ring-[#0B3A8C] focus:border-[#0B3A8C]
                           placeholder:text-slate-400 bg-white"
                type="number"
                inputMode="numeric"
                min={0}
                placeholder="Ingresa tu monto"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value || "0"))}
              />
            </label>

            <label htmlFor="payday" className="block">
              <span className="block text-sm mb-1">Fecha de pago</span>
              <div className="relative">
                <select
                  id="payday"
                  className="w-full h-[52px] appearance-none rounded-[12px] border border-[#CAD2DE] px-4
                             bg-white outline-none focus:ring-2 focus:ring-[#0B3A8C] focus:border-[#0B3A8C]"
                  value={payDay}
                  onChange={(e) => setPayDay(e.target.value)}
                >
                  {["02", "10", "15", "20", "25", "30"].map((d) => (
                    <option key={d} value={d}>{d} de cada mes</option>
                  ))}
                </select>

                {/* chevron */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  ▾
                </span>
              </div>
            </label>

            {/* botón ancho completo como en BCP */}
            <button
              className="w-full h-[54px] rounded-full bg-[#FF7A00] text-white font-semibold
                         shadow-[0_8px_16px_rgba(255,122,0,.35)] hover:opacity-90 transition"
              disabled={loading}
              aria-disabled={loading}
              type="submit"
            >
              {loading ? "Procesando…" : "Empezar"}
            </button>
          </form>
        </div>

        {/* badge de horario */}
        <div className="mt-3 inline-flex items-center gap-2 bg-white/60 border border-[#CAD2DE]
                        text-[#1C2B3A] px-3 py-2 rounded-md text-[13px]">
          <span className="text-[#0B3A8C]">⏰</span>
          <span>
            Horario de atención: <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
          </span>
        </div>
      </div>
    </section>
  );
}
