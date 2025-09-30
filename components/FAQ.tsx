"use client";
import { useState } from "react";

const items = [
  { q: "¿Cómo solicitar un préstamo online?", a: "Ingresa el monto, elige fecha de pago y completa tus datos." },
  { q: "¿Qué necesito para solicitar un préstamo?", a: "Documento vigente, mayoría de edad y evaluación crediticia." },
  { q: "¿Debo presentar algún documento?", a: "Todo el proceso es digital; podríamos validar identidad." },
  { q: "¿Puedo personalizar mi préstamo?", a: "Sí, podrás elegir montos y plazos disponibles." },
  { q: "¿En cuánto tiempo recibiré el préstamo?", a: "Depende de la evaluación; objetivo: al instante." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="card">
          <button className="w-full text-left p-4 font-medium" onClick={() => setOpen(open === i ? null : i)}>
            {it.q}
          </button>
          {open === i && <div className="px-4 pb-4 text-slate-600">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
