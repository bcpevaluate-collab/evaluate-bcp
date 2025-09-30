// app/page.tsx
import Link from "next/link";


export default function Page() {
return (
<section className="bg-[color:var(--brand)] text-white">
<div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="h1">Solicita tu <span className="">Préstamo 100% online</span></h1>
<p className="lead mt-4 opacity-90">y recíbelo al instante</p>
<div className="mt-8 flex gap-3">
<Link href="/prestamo" className="btn-cta">Empezar</Link>
<Link href="/beneficios" className="underline">Ver beneficios</Link>
</div>
</div>
<div className="card p-6 bg-white text-[color:var(--text)]">
<h2 className="h2">Préstamo 100% online</h2>
<p className="mt-2 text-slate-600">Ingresa tu monto y fecha de pago para iniciar.</p>
<Link href="/prestamo" className="btn-cta mt-6 inline-block">Ver mi préstamo y cuotas</Link>
<div className="mt-6 text-xs text-slate-500">Horario de atención: Lun a Dom de 5:00am - 12:00am.</div>
</div>
</div>
</section>
);
}