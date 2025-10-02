// app/prestamo/datos/page.tsx
import DatosClient from "./DatosClient";

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
    <DatosClient
      amount={searchParams.amount ?? ""}
      payDay={searchParams.payDay ?? ""}
      docType={searchParams.docType ?? ""}
      docNumber={searchParams.docNumber ?? ""}
    />
  );
}
