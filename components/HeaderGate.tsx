// components/HeaderGate.tsx
"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function HeaderGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Oculta header global en todos los pasos >= 2:
  // (/prestamo/validacion, /prestamo/datos, /prestamo/sms, etc.)
  const hideGlobalHeader =
    pathname?.startsWith("/prestamo/") && pathname !== "/prestamo";

  if (hideGlobalHeader) return null;
  return <>{children}</>;
}
