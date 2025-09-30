import LoanCard from "@/components/LoanCard";

export default function Hero() {
  return (
    <section className="relative bg-[color:var(--brand-deep)] text-white">
      <div className="container-max pt-10 grid md:grid-cols-2 gap-8 items-start relative z-10">
        <div className="pt-4">
          <p className="text-white/90 mb-1">Solicita tu</p>
          <h1 className="text-[38px] md:text-[44px] font-extrabold leading-tight">
            Préstamo<br />100% online
          </h1>
          <p className="mt-2 text-white/90">y recíbelo al instante</p>
        </div>
        <div className="mt-2">
          <LoanCard />
        </div>
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#0B3A8C"
            d="M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,58.7C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container-max pb-6 text-white/80 text-sm relative z-10">
        Horario de atención: Lun a Dom de 5:00am – 12:00am
      </div>
    </section>
  );
}
