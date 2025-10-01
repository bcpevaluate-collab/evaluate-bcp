// components/FormSection.tsx
"use client";
import { useEffect, useRef, useState } from "react";

type DayOption = { value: string; label: string };

const DAY_OPTIONS: DayOption[] = [
  { value: "02", label: "02 de cada mes" },
  { value: "15", label: "15 de cada mes" },
  { value: "28", label: "28 de cada mes" },
];

export default function FormSection() {
  const [amount, setAmount] = useState<string>("");
  const [payDay, setPayDay] = useState<DayOption | null>(null);
  const [open, setOpen] = useState(false);

  // errores
  const [amountError, setAmountError] = useState<string>("");
  const [dayError, setDayError] = useState<string>("");

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function validate(): boolean {
    let ok = true;
    const n = Number(amount || 0);

    if (!amount) {
      setAmountError("Este campo es requerido.");
      ok = false;
    } else if (isNaN(n) || n < 100) {
      setAmountError("El monto mínimo es S/ 100");
      ok = false;
    } else {
      setAmountError("");
    }

    if (!payDay) {
      setDayError("Este campo es requerido.");
      ok = false;
    } else {
      setDayError("");
    }

    return ok;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    await new Promise((r) => setTimeout(r, 400));
  }

  return (
    <section className="relative z-20 bg-[#F2F4F7]">
      {/* solapa sobre la curva */}
      <div className="container-max -mt-12 md:-mt-16 pb-6">
        <div className="mx-auto max-w-2xl rounded-[22px] border border-[color:var(--line)] bg-white shadow-[0_12px_30px_rgba(0,27,71,.18)] p-5 md:p-6">
          {/* =====  LEYENDA DENTRO DE LA TARJETA (como el original)  ===== */}
          <p className="text-[16px] text-[#8FA0B4] mb-4">
            Ingresa tu monto y fecha de pago
          </p>

          <form onSubmit={submit} className="space-y-5">
            {/* MONTO */}
            <div>
              <label
                className={`block text-[15px] mb-2 ${
                  amountError ? "text-[#DD1831]" : "text-[#0E1B2A]"
                }`}
              >
                Ingresa tu monto
              </label>

              <input
                inputMode="numeric"
                placeholder="¿Cuánto necesitas? (S/)"
                className={`w-full h-[56px] rounded-[14px] px-4 outline-none bg-white
                  border ${
                    amountError
                      ? "border-[#DD1831] focus:ring-2 focus:ring-[#DD1831]"
                      : "border-[color:var(--line)] focus:ring-2 focus:ring-[color:var(--brand)]"
                  } placeholder:text-[#9AA8B8]`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onBlur={validate}
              />

              {amountError && (
                <p className="mt-2 text-[#DD1831] text-[14px]">{amountError}</p>
              )}
            </div>

            {/* FECHA DE PAGO (custom select) */}
            <div ref={menuRef} className="relative">
              <label
                className={`block text-[15px] mb-2 ${
                  dayError ? "text-[#DD1831]" : "text-[#0E1B2A]"
                }`}
              >
                Fecha de pago
              </label>

              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={`w-full h-[56px] rounded-[14px] px-4 text-left bg-white flex items-center justify-between
                  border ${
                    dayError
                      ? "border-[#DD1831] focus:ring-2 focus:ring-[#DD1831]"
                      : "border-[color:var(--line)] focus:ring-2 focus:ring-[color:var(--brand)]"
                  }`}
              >
                <span
                  className={`text-[16px] ${
                    payDay ? "text-[#0E1B2A]" : "text-[#9AA8B8]"
                  }`}
                >
                  {payDay ? payDay.label : "Selecciona una fecha"}
                </span>

                {/* flecha */}
                <svg
                  className={`w-5 h-5 transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  } ${dayError ? "fill-[#DD1831]" : "fill-[#0B3A8C]"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>

              {open && (
                <div
                  role="listbox"
                  className="absolute left-0 right-0 mt-2 rounded-[16px] border border-[color:var(--line)] bg-white shadow-[0_12px_24px_rgba(0,0,0,.12)] overflow-hidden z-20"
                >
                  {DAY_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      className="w-full text-left px-5 py-4 hover:bg-[#F5F7FB] text-[#0E1B2A] text-[18px]"
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

              {dayError && (
                <p className="mt-2 text-[#DD1831] text-[14px]">{dayError}</p>
              )}
            </div>

            {/* CTA */}
            <button
              className="w-full h-[58px] rounded-full bg-[#FF7A00] text-white font-semibold shadow hover:opacity-90 transition text-[18px]"
            >
              Empezar
            </button>
          </form>
        </div>

        {/* Badge de horario */}
        <div className="mt-4 rounded-[16px] border border-[color:var(--line)] bg-[#EAF1FF] text-[#113B8D] px-4 py-3 inline-flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-[#0B3A8C]">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.414V7h-2v6l5 3 .999-1.732L13 12.414z"/>
          </svg>
          <p className="text-[15px]">
            Horario de atención:{" "}
            <b className="text-[#0B3A8C]">
              Lun a Dom de 5:00am - 12:00am ( medianoche )
            </b>
          </p>
        </div>
      </div>
    </section>
  );
}
