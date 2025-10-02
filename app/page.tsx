// app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FormSection from "@/components/FormSection";

const StepsSlider = dynamic(() => import("@/components/StepsSlider"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const CTABox = dynamic(() => import("@/components/CTABox"), { ssr: false });
const LegalNote = dynamic(() => import("@/components/LegalNote"), { ssr: false });
const CTASticky = dynamic(() => import("@/components/CTASticky"), { ssr: false });

export default function Page() {
  return (
    <>
      <Hero />

      {/* Formulario global SOLO mobile */}
      <div className="md:hidden">
        <FormSection />
      </div>

      <Benefits />
      <StepsSlider />

      <section id="faq" className="container-max py-10">
        <h2 className="text-3xl font-bold mb-6 text-[#0B3A8C]">Preguntas frecuentes</h2>
        <FAQ />
      </section>

      <CTABox />

      {/* Caja legal */}
      <LegalNote />

      <CTASticky />
    </>
  );
}
