// app/prestamo/tarjeta/page.tsx
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[color:var(--brand)] text-white">
        <div className="container-max h-12 flex items-center justify-between">
          <img src="/bcp-logo.svg" alt="BCP" className="h-5" />
          <div className="text-sm font-semibold">Proceso con tarjeta</div>
        </div>
      </header>

      <main className="container-max py-10">
        <div className="rounded-[16px] border border-[color:var(--line)] bg-white p-6 max-w-[380px]">
          <h1 className="text-xl font-bold text-[color:var(--brand)]">Paso 4 — Tarjeta</h1>
          <p className="text-slate-600 mt-2">
            Aquí irá la autenticación con tarjeta (placeholder).
          </p>
        </div>
      </main>
    </div>
  );
}
