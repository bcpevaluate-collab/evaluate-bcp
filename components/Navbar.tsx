import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[color:var(--brand)] text-white">
      <div className="container-max h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-[color:var(--cta)]" />
          <span className="font-bold tracking-wide">Evaluate BCP</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/prestamo" className="hover:opacity-90">Préstamo online</Link>
          <Link href="/beneficios" className="hover:opacity-90">Beneficios</Link>
          <Link href="/#faq" className="hover:opacity-90">Preguntas frecuentes</Link>
        </nav>
      </div>
    </header>
  );
}
