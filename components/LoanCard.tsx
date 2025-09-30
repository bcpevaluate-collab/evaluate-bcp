"use client";
import { useState } from "react";

export default function LoanCard(){
  const [amount,setAmount] = useState(7000);
  const [payDay,setPayDay] = useState("02");
  const [loading,setLoading] = useState(false);

  async function submit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true);
    await fetch("/api/simular",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ amount, payDay })
    }).catch(()=>{});
    setLoading(false);
  }

  return (
    <div className="card p-6 bg-white text-[color:var(--ink)]">
      <h2 className="text-[22px] font-bold">Préstamo 100% online</h2>
      <p className="mt-2 text-slate-600">Ingresa tu monto y fecha de pago</p>

      <form onSubmit={submit} className="mt-5 space-y-4">
        <label className="block">
          <span className="block text-sm mb-1">Ingresa tu monto</span>
          <input className="input" type="number" value={amount}
                 onChange={(e)=>setAmount(parseInt(e.target.value || "0"))}/>
        </label>

        <label className="block">
          <span className="block text-sm mb-1">Fecha de pago</span>
          <select className="select" value={payDay} onChange={(e)=>setPayDay(e.target.value)}>
            {["02","10","15","20","25","30"].map(d=>(
              <option key={d} value={d}>{d} de cada mes</option>
            ))}
          </select>
        </label>

        <button className="btn-cta" disabled={loading}>
          {loading? "Procesando…" : "Empezar"}
        </button>
      </form>
    </div>
  );
}
