// components/Navbar.tsx
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#0B3A8C]">
      {/* barra superior con altura y padding exactos */}
      <div className="h-[56px] flex items-center justify-between px-4">
        {/* logo izquierda */}
        <div className="flex items-center gap-2">
          <Image
            src="/bcp-logo.svg"     // tu SVG en /public
            alt="BCP"
            width={64}              // 64px encaja con el móvil del sitio
            height={20}
            priority
          />
        </div>

        {/* hamburguesa derecha */}
        <button
          aria-label="Abrir menú"
          className="relative w-8 h-8 grid place-items-center"
        >
          <span className="block w-5 h-[2px] bg-white rounded-sm" />
          <span className="block w-5 h-[2px] bg-white rounded-sm mt-[6px]" />
        </button>
      </div>

      {/* hairline / línea divisoria sutil como la de tu captura */}
      <div className="h-px bg-white/15" />
    </header>
  );
}
