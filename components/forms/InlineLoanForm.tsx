"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

type Props = {
  className?: string;
  /** Cambia algunos tamaños/paddings en desktop dentro del hero */
  variant?: "hero" | "section";
};

export default function InlineLoanForm({ className, variant = "hero" }: Props) {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [payDay, setPayDay] = useState("");
  const [touched, setTouched] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!amount || !payDay) return;

    // 👇 usa el MISMO flujo que tienes en móvil
    // (si móvil hace otra ruta, pon la misma aquí)
    router.push(`/prestamo/datos?amount=${encodeURIComponent(amount)}&payDay=${encodeURIComponent(payDay)}`);
  };

  const isInvalid = touched && (!amount || !payDay);

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(
        "rounded-[16px] bg-white/95 shadow-[0_12px_28px_rgba(0,0,0,.12)]",
        "flex items-center gap-3 px-4 py-4 md:px-6 md:py-5",
        className
      )}
    >
      <input
        className={clsx(
          "h-[48px] md:h-[56px] w-full rounded-[12px] border border-[#E6EDF6] px-4 text-[#1F2A37] outline-none",
          "placeholder:text-[#9AA6B2] focus:border-[#4880FF]",
          variant === "hero" ? "min-w-[280px]" : "min-w-[240px]"
        )}
        placeholder="Ingresa tu monto"
        inputMode="numeric"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div
        className={clsx(
          "relative h-[48px] md:h-[56px] rounded-[12px] border border-[#E6EDF6] text-[#1F2A37]",
          "flex items-center px-4 min-w-[220px]"
        )}
      >
        <select
  className="w-full bg-transparent outline-none appearance-none pr-6"
  value={payDay}
  onChange={(e) => setPayDay(e.target.value)}
>
  <option value="">Fecha de pago</option>
  <option value="02">02</option>
  <option value="15">15</option>
  <option value="28">28</option>
</select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#627A9D]">▾</span>
      </div>

      <button
        type="submit"
        className={clsx(
          "h-[48px] md:h-[56px] rounded-[12px] bg-[#FF7A00] text-white font-semibold px-6 md:px-8",
          "hover:brightness-110 transition"
        )}
      >
        Empezar
      </button>

      {/* Mensaje de error muy sutil (solo si falta algo) */}
      {isInvalid && (
        <span className="sr-only">Completa monto y fecha de pago</span>
      )}
    </form>
  );
}
