// components/FormSection.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // 👈 añade router

type DayOption = { value: string; label: string };
const DAY_OPTIONS: DayOption[] = [
  { value: "02", label: "02 de cada mes" },
  { value: "15", label: "15 de cada mes" },
  { value: "28", label: "28 de cada mes" },
];

export default function FormSection() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [payDay, setPayDay] = useState<DayOption | null>(null);
  const [open, setOpen] = useState(false);
  const [amountError, setAmountError] = useState("");
  const [dayError, setDayError] = useState("");

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const validate = () => {
    let ok = true;
    const n = Number(amount || 0);
    if (!amount) { setAmountError("Este campo es requerido."); ok = false; }
    else if (isNaN(n) || n < 100) { setAmountError("El monto mínimo es S/ 100"); ok = false; }
    else setAmountError("");

    if (!payDay) { setDayError("Este campo es requerido."); ok = false; }
    else setDayError("");

    return ok;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // 👉 navega al PASO 2 con query params
    const n = String(Number(amount));              // normaliza
    const day = payDay?.value ?? "";
    const qs = new URLSearchParams({ amount: n, payDay: day }).toString();
    const url = `/prestamo/validacion?${qs}`;

    try {
      router.push(url);
    } catch {
      window.location.assign(url);
    }
  };

  return (
    <section className="container-max py-6 md:py-10">
      {/* 👇 Solo se renderiza en móvil; en desktop NO aparece */}
      <div className="md:hidden">
        {/* ✅ Mantengo tu estructura exacta (solo envuelto para mobile-only) */}
        <section id="form" className="relative z-20 bg-[#F2F4F7]">
          {/* tarjeta “pegada” a la curva */}
          <div className="container-max -mt-12 md:-mt-16 pb-6">
            <div className="card-frm mx-auto max-w-[640px] px-5 md:px-6 py-5 md:py-6">
              <form onSubmit={submit} className="stack-20">
                {/* Monto */}
                <div>
                  <input
                    className={`input-bcp w-full ${amountError ? "error" : ""}`}
                    inputMode="numeric"
                    placeholder="Ingresa tu monto"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    onBlur={validate}
                  />
                  {amountError && (
                    <p className="mt-2 text-[#DD1831] text-[14px]">{amountError}</p>
                  )}
                </div>

                {/* Fecha de pago (select custom) */}
                <div ref={menuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    className={`select-bcp w-full flex items-center justify-between ${dayError ? "error" : ""}`}
                  >
                    <span className={`text-[16px] ${payDay ? "text-[#0E1B2A]" : "text-[color:var(--placeholder)]"}`}>
                      {payDay ? payDay.label : "Fecha de pago"}
                    </span>
                    <svg className={`chev transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" aria-hidden>
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </button>

                  {/* menú opciones */}
                  {open && (
                    <div className="absolute left-0 right-0 mt-2 rounded-[14px] border border-[color:var(--line)] bg-white shadow-[0_12px_24px_rgba(0,0,0,.12)] overflow-hidden z-20">
                      {DAY_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          className="w-full text-left px-5 py-4 hover:bg-[#F5F7FB] text-[#0E1B2A] text-[16px]"
                          onClick={() => { setPayDay(opt); setDayError(""); setOpen(false); }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {dayError && <p className="mt-2 text-[#DD1831] text-[14px]">{dayError}</p>}
                </div>

                {/* Botón grande (submit) */}
                <button type="submit" className="btn-bcp">Empezar</button>
              </form>
            </div>

            {/* Badge Horario de atención */}
            <div className="mt-4 badge-hours flex items-start gap-3 max-w-[640px]">
              <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
                <circle cx="12" cy="12" r="9" fill="none" stroke="var(--brand-700)" strokeWidth="2"/>
                <path d="M12 7v5l4 2" fill="none" stroke="var(--brand-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>
                Horario de atención: <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
