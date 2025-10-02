// app/prestamo/tarjeta/page.tsx
import TarjetaClient from "./TarjetaClient";

export default function Page({
  searchParams,
}: {
  searchParams: {
    amount?: string;
    payDay?: string;
    docType?: string;
    docNumber?: string;
  };
}) {
  return (
    <TarjetaClient
      amount={searchParams.amount ?? ""}
      payDay={searchParams.payDay ?? ""}
      docType={searchParams.docType ?? ""}
      docNumber={searchParams.docNumber ?? ""}
    />
  );
}
