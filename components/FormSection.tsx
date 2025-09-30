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
    <section className="bg-white">
      <div className="container-max -mt-16 md:-mt-20">
        <div className="rounded-[18px] border border-[#CAD2DE] bg-white shadow-[0_8px_28px_rgba(0,0,0,.08)] p-4 md:p-6 max-w-2xl">
          <h2 className="text-[22px] font-bold text-[color:var(--ink)]">Préstamo 100% online</h2>
          <p className="mt-1 text-slate-600">Ingresa tu monto y fecha de pago</p>

          <form onSubmit={submit} className="mt-4 space-y-4">
            <label className="block">
              <span className="block text-sm mb-1">Ingresa tu monto</span>
              <input
                className="input"
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value || "0"))}
              />
            </label>

            <label className="block">
              <span className="block text-sm mb-1">Fecha de pago</span>
              <select
                className="select"
                value={payDay}
                onChange={(e) => setPayDay(e.target.value)}
              >
                {["02", "10", "15", "20", "25", "30"].map((d) => (
                  <option key={d} value={d}>
                    {d} de cada mes
                  </option>
                ))}
              </select>
            </label>

            <button className="btn-cta" disabled={loading}>
              {loading ? "Procesando…" : "Empezar"}
            </button>
          </form>
        </div>

        <div className="text-[13px] text-slate-200/90 mt-3 mb-4 md:mb-2 bg-[color:var(--brand-deep)] px-3 py-2 rounded-md inline-flex items-center gap-2">
          <span>Horario de atención: <b className="text-white">Lun a Dom de 5:00am – 12:00am (medianoche)</b></span>
        </div>
      </div>
    </section>
  );
}
