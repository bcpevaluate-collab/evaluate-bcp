"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";


export default function Paso3Datos() {
const params = useSearchParams();
const router = useRouter();


const amount = params.get("amount") || "";
const payDay = params.get("payDay") || "";
const docType = params.get("docType") || "";
const docNumber = params.get("docNumber") || "";


const [nombres, setNombres] = useState("");
const [apellidos, setApellidos] = useState("");
const [celular, setCelular] = useState("");
const [correo, setCorreo] = useState("");


return (
<section className="bg-[#0B3A8C] py-10 min-h-screen">
<div className="container-max">
<div className="bg-white rounded-2xl p-6 shadow-sm max-w-2xl mx-auto">
<button onClick={() => router.back()} className="text-[#0B3A8C] text-sm mb-4">← Volver</button>
<h1 className="text-2xl font-bold text-[#0B3A8C]">Tus datos</h1>


<div className="mt-4 text-sm text-slate-700 bg-slate-50 border rounded-xl p-3 flex flex-wrap gap-6">
<div><span className="text-slate-500">Monto:</span> <span className="font-semibold">S/ {amount}</span></div>
<div><span className="text-slate-500">Día:</span> <span className="font-semibold">{payDay}</span></div>
<div><span className="text-slate-500">Doc:</span> <span className="font-semibold">{docType} {docNumber}</span></div>
</div>


<div className="grid md:grid-cols-2 gap-4 mt-6">
<input className="border rounded-lg p-2" placeholder="Nombres" value={nombres} onChange={(e)=>setNombres(e.target.value)} />
<input className="border rounded-lg p-2" placeholder="Apellidos" value={apellidos} onChange={(e)=>setApellidos(e.target.value)} />
<input className="border rounded-lg p-2" placeholder="Celular" value={celular} onChange={(e)=>setCelular(e.target.value)} />
<input className="border rounded-lg p-2" placeholder="Correo" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
</div>


<button className="mt-6 w-full btn-cta" onClick={()=>alert("Continuará…")}>Continuar</button>
</div>
</div>
</section>
);
}