// app/prestamo/validacion/page.tsx
import ValidacionClient from "./ValidacionClient";

export default function Page({
  searchParams,
}: {
  searchParams: { amount?: string; payDay?: string };
}) {
  const amount = searchParams.amount ?? "";
  const payDay = searchParams.payDay ?? "";
  return <ValidacionClient amount={amount} payDay={payDay} />;
}
