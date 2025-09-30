"use client";
import { useState } from "react";

export default function Prestamo() {
  const [amount, setAmount] = useState(7000);
  const [payDay, setPayDay] = useState("02");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    try {
      const res = await fetch("/api/simular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, payDay })
      });
      if (!res.ok) throw new Error("Error");
      setOk("¡Listo! Hemos registrado tu simulación.");
    } catch {
      setOk("Hubo un problema. Intenta otra vez.");
    } finally { setLoading(false); }
  }

  return (
    <section className="bg-[color:var(--brand)] text-white">
      <div className="container-max py-10">
        <div className="text-center text-white/80 mb-3">1 de 6</div>
        <div className="card p-6 bg-white text-slate-900 max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">Ingresa tu monto y fecha de pago</h1>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <label className="block">
              <span className="block text-sm mb-1">Ingresa tu monto</span>
              <input className="input" type="number" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value || "0"))} />
            </label>
            <label className="block">
              <span className="block text-sm mb-1">Fecha de pago</span>
              <select className="select" value={payDay} onChange={(e)=>setPayDay(e.target.value)}>
                {["02","10","15","20","25","30"].map(d => <option key={d} value={d}>{d} de cada mes</option>)}
              </select>
            </label>
            <button className="btn-cta" disabled={loading}>{loading ? "Procesando…" : "Empezar"}</button>
          </form>
          {ok && <p className="mt-3 text-green-600">{ok}</p>}
        </div>
        <div className="container-max pb-6 text-white/80 text-sm mt-4">
          Horario de atención: Lun a Dom de 5:00am – 12:00am (medianoche)
        </div>
      </div>
    </section>
  );
}
