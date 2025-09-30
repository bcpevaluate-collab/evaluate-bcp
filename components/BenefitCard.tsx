// components/BenefitCard.tsx
export default function BenefitCard({ title, desc }: { title: string; desc: string }) {
return (
<div className="card p-6">
<div className="text-xl font-semibold">{title}</div>
<p className="mt-2 text-slate-600">{desc}</p>
</div>
);
}