import LoanCard from "@/components/LoanCard";

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-deep)] text-white">
      {/* CURVA: gran círculo que corta el borde superior derecho */}
      <div
        className="pointer-events-none absolute -top-[280px] -right-[260px] w-[760px] h-[760px] rounded-full"
        style={{ background: "radial-gradient(closest-side, var(--brand-deep) 60%, transparent 61%)" }}
      />
      <div className="container-max py-10 grid md:grid-cols-2 gap-8 items-start">
        <div className="pt-4">
          <p className="text-white/90 mb-1">Solicita tu</p>
          <h1 className="text-[38px] leading-[1.1] md:text-[44px] font-extrabold">
            Préstamo<br/>100% online
          </h1>
          <p className="mt-2 text-white/90">y recíbelo al instante</p>
        </div>
        <div className="mt-2">
          <LoanCard />
        </div>
      </div>
      <div className="container-max pb-6 text-white/80 text-sm">
        Horario de atención: Lun a Dom de 5:00am – 12:00am
      </div>
    </section>
  );
}
