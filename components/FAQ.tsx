"use client";
import { useState } from "react";

const faqs = [
  { q: "¿Cómo solicitar un préstamo online?", a: "Puedes solicitarlo completando el formulario online en pocos pasos." },
  { q: "¿Qué necesito para solicitar un préstamo?", a: "Solo necesitas tu DNI vigente y una cuenta activa en el BCP." },
  { q: "¿Debo presentar algún documento?", a: "No, todo el proceso es 100% digital." },
  { q: "¿Puedo personalizar mi préstamo?", a: "Sí, puedes elegir el monto y la fecha de pago que mejor se adapten a ti." },
  { q: "¿Cuál es el monto mínimo o máximo?", a: "El monto mínimo es S/ 100 y el máximo depende de tu perfil crediticio." },
  { q: "¿En cuánto tiempo recibiré el préstamo?", a: "Una vez aprobado, el desembolso es inmediato en tu cuenta." },
  { q: "Términos y condiciones Koopa Days", a: "Consulta los términos en nuestra web oficial." },
  { q: "T&C Campaña PDH - Qore Landing", a: "Aplican restricciones según la campaña vigente." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="flex flex-col border rounded-md overflow-hidden transition bg-white"
          >
            <button
              className={`w-full flex justify-between items-center px-4 py-3 text-left text-[15px] font-medium
                border-l-4 border-l-[#0B3A8C] ${
                  isOpen ? "text-[#0B3A8C]" : "text-[#0E1B2A]"
                }`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  isOpen ? "rotate-180 text-[#0B3A8C]" : "text-gray-500"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-3 text-sm text-slate-600 bg-gray-50">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
