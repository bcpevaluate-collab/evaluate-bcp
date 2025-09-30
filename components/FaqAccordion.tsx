// components/FaqAccordion.tsx
"use client";
import { useState } from "react";


export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
const [open, setOpen] = useState<number | null>(0);
return (
<div className="mx-auto max-w-3xl px-4 py-12">
<h1 className="h1 mb-6">Preguntas frecuentes</h1>
<div className="space-y-2">
{items.map((it, i) => (
<div key={i} className="card">
<button className="w-full text-left p-4 font-medium" onClick={()=>setOpen(open===i?null:i)}>
{it.q}
</button>
{open===i && <div className="px-4 pb-4 text-slate-600">{it.a}</div>}
</div>
))}
</div>
</div>
);
}