// components/Footer.tsx
export default function Footer() {
return (
<footer className="bg-white border-t">
<div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
<p>© {new Date().getFullYear()} Banco Demo Peruano — Proyecto académico.</p>
</div>
</footer>
);
}