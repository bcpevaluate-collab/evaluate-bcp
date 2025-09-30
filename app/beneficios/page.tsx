// app/beneficios/page.tsx
import BenefitCard from "@/components/BenefitCard";


export default function Beneficios() {
const items = [
{ title: "Flexibilidad de montos", desc: "Elige el monto que necesitas." },
{ title: "Ahorra tiempo", desc: "Proceso 100% online en minutos." },
{ title: "Pago Automático", desc: "Programa tu débito para no olvidar." },
];
return (
<div className="mx-auto max-w-6xl px-4 py-12 grid gap-4">
<h1 className="h1">Beneficios de tu préstamo online</h1>
<div className="grid md:grid-cols-3 gap-4">
{items.map((b) => (<BenefitCard key={b.title} {...b} />))}
</div>
</div>
);
}