function BenefitCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="card p-6 flex items-start gap-4">
      <div className="h-12 w-12 rounded-full bg-[color:var(--brand)]/5 flex items-center justify-center text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="container-max py-12">
      <h2 className="text-3xl font-bold mb-8">Beneficios de tu préstamo online</h2>
      <div className="grid md:grid-cols-3 gap-5">
        <BenefitCard title="Flexibilidad de montos" desc="Elige cuánto necesitas según tu capacidad de pago." icon="💙" />
        <BenefitCard title="Ahorra tiempo" desc="Solicita en minutos, 100% digital." icon="⏱️" />
        <BenefitCard title="Pago Automático" desc="Programa el débito de tus cuotas mensuales." icon="✅" />
      </div>
    </section>
  );
}
