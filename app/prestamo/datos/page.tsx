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
  const amount = searchParams.amount ?? "";
  const payDay = searchParams.payDay ?? "";
  const docType = searchParams.docType ?? "";
  const docNumber = searchParams.docNumber ?? "";
  return (
    <DatosClient
      amount={amount}
      payDay={payDay}
      docType={docType}
      docNumber={docNumber}
    />
  );
}
