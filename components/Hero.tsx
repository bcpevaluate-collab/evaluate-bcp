import LoanCard from "@/components/LoanCard";

export default function Hero() {
  return (
    <section className="bg-[color:var(--brand)] text-white">
      <div className="container-max py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Solicita tu <br/>Préstamo 100% online
          </h1>
          <p className="mt-4 text-white/90">y recíbelo al instante</p>
        </div>
        <LoanCard />
      </div>
      <div className="container-max pb-6 text-white/80 text-sm">
        Horario de atención: Lun a Dom de 5:00am – 12:00am
      </div>
    </section>
  );
}
