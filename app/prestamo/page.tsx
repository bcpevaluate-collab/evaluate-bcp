"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Prestamo() {
const [amount, setAmount] = useState(7000);
const [payDay, setPayDay] = useState("02");
const [loading, setLoading] = useState(false);
const [ok, setOk] = useState<string | null>(null);
const router = useRouter();


async function submit(e: React.FormEvent) {
e.preventDefault();
setLoading(true);
setOk(null);
try {
// Si quieres mantener la simulación, descomenta esto y usa la respuesta
// const res = await fetch("/api/simular", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ amount, payDay })});
// const data = await res.json();
// if (!res.ok) throw new Error(data?.message || "Error en simulación");


// Navegar a Paso 2 con los parámetros del Paso 1
const params = new URLSearchParams({ amount: String(amount), payDay });
router.push(`/prestamo/validacion?${params.toString()}`);
} catch (err) {
console.error(err);
setOk("Ocurrió un problema. Inténtalo nuevamente.");
} finally {
setLoading(false);
}
}


return (
<section className="bg-[#0B3A8C] py-10">
<div className="container-max">
<div className="bg-white rounded-2xl p-6 shadow-sm">
<h1 className="text-2xl font-bold text-[#0B3A8C]">Elige tu monto y fecha de pago</h1>
<form onSubmit={submit} className="mt-4 grid md:grid-cols-3 gap-4">
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
{["02","10","15","20","25","30"].map(d => (
<option key={d} value={d}>{d} de cada mes</option>
))}
</select>
</label>
<button className="btn-cta self-end" disabled={loading}>
{loading ? "Procesando…" : "Empezar"}
</button>
</form>
{ok && <p className="mt-3 text-green-600">{ok}</p>}
</div>
<div className="container-max pb-6 text-white/80 text-sm mt-4">
}