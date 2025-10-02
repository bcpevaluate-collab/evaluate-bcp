// app/prestamo/gracias/page.tsx
import GraciasClient from "./GraciasClient";

export default function Page({
  searchParams,
}: {
  searchParams: { to?: string; delayMs?: string };
}) {
  // URL destino (si no viene, no redirige, solo muestra el mensaje)
  const redirectTo = searchParams.to ?? "";
  const delayMs = Number(searchParams.delayMs ?? 2500);

  return <GraciasClient redirectTo={redirectTo} delayMs={delayMs} />;
}
