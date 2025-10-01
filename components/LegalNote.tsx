// components/LegalNote.tsx
import Image from "next/image";

export default function LegalNote() {
  return (
    <section className="bg-[#F2F4F7]">
      <div className="container-max py-8">
        <div className="rounded-2xl bg-white border border-[#E5EAF3] p-5 md:p-6 shadow-[0_1px_0_#E5EAF3_inset]">
          <div className="space-y-4 text-[13px] leading-[1.45] text-[#435268]">
            <p>
              Recuerda que obtendrás el préstamo si cumples con los requisitos de la evaluación
              crediticia online exitosamente. En caso no podamos otorgarte el préstamo a través de
              este canal, puedes acercarte a cualquiera de nuestras agencias a nivel nacional.
            </p>

            <p>
              Le informamos que puede contratar un Seguro de Desgravamen de otra compañía de
              seguros y realizar el endoso al Banco, siempre y cuando se cumpla con las condiciones
              informadas previamente. El trámite para el endoso de su póliza lo podrá realizar
              gratuitamente en cualquier Agencia BCP. Para obtener mayor información de condiciones,
              restricciones, cargos y productos, ingresa a{" "}
              <a
                href="https://www.viabcp.com/creditos/credito-efectivo/prestamo-personal-bcp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3A8C] font-semibold hover:underline"
              >
                www.viabcp.com/creditos/credito-efectivo/prestamo-personal-bcp
              </a>
            </p>

            <p>
              La TCEA máxima referencial es 41.88%. Por ejemplo, para un préstamo de S/ 5,000 a 12
              meses, la TCEA máxima es 41.88% y la cuota mensual es S/ 501.51; las cuales se
              calculan en base a una tasa de interés efectiva anual (TEA) de 40% y un seguro de
              desgravamen mensual de 0.115% del saldo. En caso de retraso en los pagos, aplicará la
              penalidad de pago atrasado, salvo prohibición legal expresa, en cuyo caso aplicarán
              los intereses moratorios establecidos en la Hoja de Resumen de su crédito.
            </p>

            <p>
              Esta web brinda préstamos con plazos desde 3 meses hasta 60 meses.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5EAF3] flex items-center gap-3">
            {/* Logo B/N */}
            <Image
              src="/brand/bcp-bw.svg"
              alt="BCP"
              width={80}
              height={20}
              priority
              className="h-[20px] w-auto"
            />
            <span className="ml-auto text-[12px] tracking-wide text-[#8A96AC]">
              ›BCP›
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
