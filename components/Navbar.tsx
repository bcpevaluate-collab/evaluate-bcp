// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
return (
<header className="bg-[color:var(--brand)] text-white">
<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
<Link href="/" className="flex items-center gap-2">
<Image src="/placeholder-logo.svg" alt="Banco Demo" width={36} height={20} />
<span className="font-bold">BDP</span>
</Link>
<nav className="hidden md:flex items-center gap-6 text-sm">
<Link href="/prestamo" className="hover:underline">Préstamo Online</Link>
<Link href="/beneficios" className="hover:underline">Beneficios</Link>
<Link href="/preguntas-frecuentes" className="hover:underline">Preguntas frecuentes</Link>
</nav>
</div>
</header>
);
}