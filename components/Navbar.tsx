import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return (
    <header className="bg-[color:var(--brand-deep)] text-white">
      <div className="container-max h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/bcp-logo.svg" alt="Evaluate BCP" width={64} height={20} priority />
        </Link>
        <button aria-label="Menú" className="md:hidden">
          <div className="w-6 h-[2px] bg-white mb-[6px]" />
          <div className="w-6 h-[2px] bg-white" />
        </button>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/prestamo" className="hover:opacity-90">Préstamo online</Link>
          <Link href="/beneficios" className="hover:opacity-90">Beneficios</Link>
          <Link href="/#faq" className="hover:opacity-90">Preguntas frecuentes</Link>
        </nav>
      </div>
    </header>
  );
}
