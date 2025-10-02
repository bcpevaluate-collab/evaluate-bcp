"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function Paso2Validacion() {
  const params = useSearchParams();
  const router = useRouter();

  // Trae datos del paso 1
  const amount = params.get("amount") || "";
  const payDay = params.get("payDay") || "";

  // Estado paso 2
  const [docType, setDocType] = useState<"DNI" | "CE">("DNI");
  const [docNumber, setDocNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  // Captcha placeholder
  const code = useMemo(() => randomCode(6), []);

  function validar() {
    const e: Record<string, string> = {};
    if (!docNumber || (docType === "DNI" && docNumber.length !== 8)) {
      e.docNumber = "Número de documento inválido";
    }
    if (!captcha || captcha.length < 4) {
      e.captcha = "Ingresa el código de verificación";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function continuar() {
    if (!validar()) return;
    setLoading(true);
    try {
      const q = new URLSearchParams({ amount, payDay, docType, docNumber });
      router.push(`/prestamo/datos?${q.toString()}`);
    } finally {
      setLoading(false);
    }
  }

  function volver() {
    const q = new URLSearchParams({ amount, payDay });
    router.push(`/prestamo?${q.toString()}`);
  }

  return (
    <section className="bg-[#0B3A8C] py-10 min-h-screen">
      <div className="container-max">
        <div className="bg-white rounded-2xl p-6 shadow-sm max-w-2xl mx-auto">
          <button onClick={volver} className="text-[#0B3A8C] text-sm mb-4">
            ← Volver
          </button>
          <h1 className="text-2xl font-bold text-[#0B3A8C]">Dinero al Instante</h1>
          <p className="text-slate-600 mt-1">Valida tu identidad para continuar</p>

          {/* Resumen paso 1 */}
          <div className="mt-4 text-sm text-slate-700 bg-slate-50 border rounded-xl p-3 flex gap-6">
            <div>
              <span className="text-slate-500">Monto:</span>{" "}
              <span className="font-semibold">S/ {amount || "—"}</span>
            </div>
            <div>
              <span className="text-slate-500">Día de pago:</span>{" "}
              <span className="font-semibold">{payDay || "—"}</span>
            </div>
          </div>

          {/* Formulario validación */}
          <div className="grid md:grid-cols-[160px_1fr] gap-3 mt-6">
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value as "DNI" | "CE")}
              className="border rounded-lg p-2"
            >
              <option value="DNI">DNI</option>
              <option value="CE">Carné de Extranjería</option>
            </select>

            <div>
              <input
                type="text"
                placeholder="Nro de documento"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                className="w-full border rounded-lg p-2"
              />
              {errors.docNumber && (
                <p className="text-red-600 text-xs mt-1">{errors.docNumber}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-3 items-center mt-4">
            <div className="h-12 rounded-lg border flex items-center justify-center text-slate-500 select-none">
              <span className="tracking-widest">{code}</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Código"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="w-full border rounded-lg p-2"
              />
              {errors.captcha && (
                <p className="text-red-600 text-xs mt-1">{errors.captcha}</p>
              )}
            </div>
          </div>

          <button onClick={continuar} disabled={loading} className="mt-6 w-full btn-cta">
            {loading ? "Validando…" : "Continuar"}
          </button>
        </div>
      </div>
    </section>
  );
}

function randomCode(n: number) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < n; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}
