// app/page.tsx
import Hero from "@/components/Hero";
import FormSection from "@/components/FormSection";
import StepsSlider from "@/components/StepsSlider";   // 👈 aquí está el nuevo
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTASticky from "@/components/CTASticky";

export default function Page() {
  return (
    <>
      <Hero />
      <FormSection />

      <Benefits />

      {/* Sección: Obtén tu préstamo BCP online (slider 1–6) */}
      <StepsSlider />

      <section id="faq" className="container-max py-10">
        <h2 className="text-3xl font-bold mb-6">Preguntas frecuentes</h2>
        <FAQ />
      </section>

      <CTASticky />
    </>
  );
}
