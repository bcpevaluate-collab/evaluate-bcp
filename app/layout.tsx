// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderGate from "@/components/HeaderGate";

export const metadata = {
  title: "Dinero al instante | Pide un préstamo",
  description: "Solicita tu préstamo 100% online y recíbelo al instante.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 flex flex-col">
        {/* El Navbar solo se muestra fuera de /prestamo/* */}
        <HeaderGate>
          <Navbar />
        </HeaderGate>

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
