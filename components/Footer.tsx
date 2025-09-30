// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container-max py-10 text-sm text-slate-600">
        © {new Date().getFullYear()} Evaluate BCP — Proyecto académico.
      </div>
    </footer>
  );
}
