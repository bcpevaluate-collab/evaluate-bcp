// app/prestamo/page.tsx
"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);


export default function PrestamoPage() {
const [amount, setAmount] = useState(7000);
const [payDay, setPayDay] = useState(2);
const [loading, setLoading] = useState(false);
const [ok, setOk] = useState(false);


const submit = async () => {
setLoading(true);
await fetch("/api/simular", { method: "POST", body: JSON.stringify({ amount, payDay }) });
setOk(true);
setLoading(false);
};


return (
<div className="mx-auto max-w-3xl px-4 py-12">
<div className="text-center mb-6 text-slate-500">1 de 6</div>
<div className="card p-6">
<h1 className="h2">Ingresa tu monto y fecha de pago</h1>
<div className="mt-6 grid md:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm font-medium">Ingresa tu monto</span>
<input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value||"0"))} />
</label>
<label className="block">
<span className="text-sm font-medium">Fecha de pago</span>
<select className="mt-1 w-full rounded-xl border px-3 py-2" value={payDay} onChange={(e)=>setPayDay(parseInt(e.target.value))}>
{Array.from({length:28},(_,i)=>i+1).map(d=> <option key={d} value={d}>{String(d).padStart(2,'0')} de cada mes</option>)}
</select>
</label>
</div>
<button onClick={submit} className="btn-cta mt-6" disabled={loading}>{loading?"Procesando…":"Empezar"}</button>
{ok && <p className="mt-3 text-green-600">Datos registrados. Continúa al siguiente paso (mock).</p>}
</div>
</div>
);
}