"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type DayOption = { value: string; label: string };
const DAY_OPTIONS: DayOption[] = [
  { value: "02", label: "02 de cada mes" },
  { value: "15", label: "15 de cada mes" },
  { value: "28", label: "28 de cada mes" },
];

export default function InlineLoanForm({
  variant = "section",
}: {
  variant?: "hero" | "section";
}) {
  const router = useRouter();

  // Estado compartido
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

    if (!amount) {
      setAmountError("Este campo es requerido.");
      ok = false;
    } else if (isNaN(n) || n < 100) {
      setAmountError("El monto mínimo es S/ 100");
      ok = false;
    } else setAmountError("");

    if (!payDay) {
      setDayError("Este campo es requerido.");
      ok = false;
    } else setDayError("");

    return ok;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // 👉 aquí mantienes tu navegación / envío como ya lo tienes montado
    const qs = new URLSearchParams({
      amount: String(Number(amount)),
      payDay: payDay?.value ?? "",
    }).toString();
    router.push(`/prestamo/validacion?${qs}`);
  };

  // ====== ESTILOS REUTILIZABLES ======
  const inputBase =
    "h-[52px] w-full rounded-[12px] border border-[#E6EEF8] bg-white px-5 text-[#0B3A8C] " +
    "placeholder-[#8AA0B6] outline-none focus:border-[#BFD6FF]";

  const selectBtnBase =
    "h-[52px] w-full rounded-[12px] border border-[#E6EEF8] bg-white px-5 " +
    "flex items-center justify-between text-[#0B3A8C]";

  // ===================== RENDER DESKTOP (HERO) =====================
  if (variant === "hero") {
    return (
      <div className="mx-auto md:max-w-[980px]">
        {/* PÍLDORA */}
        <div
          className="
            hidden md:flex items-center gap-4
            rounded-[18px] bg-white shadow-[0_18px_36px_rgba(9,22,58,.24)]
            px-4 py-3
          "
        >
          {/* Monto */}
          <div className="flex-1 min-w-[380px]">
            <input
              className={`${inputBase}`}
              placeholder="Ingresa tu monto"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onBlur={validate}
            />
          </div>

          {/* Fecha de pago (select) */}
<div className="w-[320px] relative" ref={menuRef}>
  <button
    type="button"
    onClick={() => setOpen((v) => !v)}
    aria-expanded={open}
    className={`${selectBtnBase} appearance-none`} // 👈 aquí agregamos appearance-none
  >
    <span className={`${payDay ? "text-[#0E1B2A]" : "text-[#8AA0B6]"}`}>
      {payDay ? payDay.label : "Fecha de pago"}
    </span>
    {/* 👇 solo se verá esta flecha */}
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M7 10l5 5 5-5" stroke="#0B3A8C" strokeWidth="2" fill="none" />
    </svg>
  </button>

  {open && (
    <div
      className="absolute left-0 right-0 mt-2 rounded-[14px] border border-[#E6EEF8] bg-white
                 shadow-[0_12px_24px_rgba(0,0,0,.12)] overflow-hidden z-20"
    >
      {DAY_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className="w-full text-left px-5 py-4 hover:bg-[#F5F7FB] text-[#0E1B2A] text-[16px]"
          onClick={() => {
            setPayDay(opt);
            setDayError("");
            setOpen(false);
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )}
</div>

          {/* Botón */}
          <button
            type="button"
            onClick={submit}
            className="
              h-[52px] min-w-[150px] rounded-[14px]
              bg-[#FF7A00] text-white font-semibold px-6
              hover:brightness-110 transition
            "
          >
            Empezar
          </button>
        </div>

        {/* Errores (si los hay) — los dejamos fuera de la píldora */}
        {(amountError || dayError) && (
          <div className="hidden md:flex gap-6 mt-2 text-[14px]">
            <p className="text-[#DD1831] min-h-[1em] flex-1">{amountError}</p>
            <p className="text-[#DD1831] w-[320px]">{dayError}</p>
            <span className="w-[150px]" />
          </div>
        )}

        {/* BARRA HORARIO (idéntica bajo el pill, ancho del pill) */}
        <div
          className="
            hidden md:flex items-center gap-3 mt-3
            rounded-[12px] bg-[#EAF2FF] text-[#0B3A8C]
            px-5 py-3
          "
        >
          <span
            className="
              inline-flex h-5 w-5 items-center justify-center
              rounded-full border border-[#0B3A8C]
            "
            aria-hidden
          >
            <svg width="12" height="12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="none" stroke="#0B3A8C" strokeWidth="2" />
              <path
                d="M12 7v6l4 2"
                fill="none"
                stroke="#0B3A8C"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-[14px] leading-tight">
            Horario de atención:{" "}
            <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
          </span>
        </div>
      </div>
    );
  }

  // ===================== RENDER SECTION (SOLO MOBILE) =====================
  return (
    <div className="md:hidden">
      <form onSubmit={submit} className="space-y-5">
        <div>
          <input
            className={`${inputBase} ${amountError ? "border-[#DD1831]" : ""}`}
            placeholder="Ingresa tu monto"
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onBlur={validate}
          />
          {amountError && (
            <p className="mt-2 text-[#DD1831] text-[14px]">{amountError}</p>
          )}
        </div>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`${selectBtnBase} ${dayError ? "border-[#DD1831]" : ""}`}
          >
            <span className={`${payDay ? "text-[#0E1B2A]" : "text-[#8AA0B6]"}`}>
              {payDay ? payDay.label : "Fecha de pago"}
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M7 10l5 5 5-5" stroke="#0B3A8C" strokeWidth="2" fill="none" />
            </svg>
          </button>
          {open && (
            <div className="absolute left-0 right-0 mt-2 rounded-[14px] border border-[#E6EEF8] bg-white shadow-[0_12px_24px_rgba(0,0,0,.12)] overflow-hidden z-20">
              {DAY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className="w-full text-left px-5 py-4 hover:bg-[#F5F7FB] text-[#0E1B2A] text-[16px]"
                  onClick={() => {
                    setPayDay(opt);
                    setDayError("");
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
          {dayError && <p className="mt-2 text-[#DD1831] text-[14px]">{dayError}</p>}
        </div>

        <button
          type="submit"
          className="h-[52px] w-full rounded-[14px] bg-[#FF7A00] text-white font-semibold"
        >
          Empezar
        </button>
      </form>

      {/* barra horario (mobile) */}
      <div className="mt-4 rounded-[10px] bg-[#EAF2FF] text-[#0B3A8C] p-3 flex items-center gap-2">
        <span>🕒</span>
        <span className="text-sm">
          Horario de atención: <b>Lun a Dom de 5:00am - 12:00am ( medianoche )</b>
        </span>
      </div>
    </div>
  );
}
