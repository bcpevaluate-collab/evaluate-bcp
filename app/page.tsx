// app/page.tsx
import Hero from "@/components/Hero";
import FormSection from "@/components/FormSection";
import StepsSlider from "@/components/StepsSlider";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTABox from "@/components/CTABox";
import CTASticky from "@/components/CTASticky";

export default function Page() {
  return (
    <>
      <Hero />
      <FormSection />

      <Benefits />

      {/* Sección: Obtén tu préstamo BCP online (slider 1–6) */}
      <StepsSlider />

      {/* ✅ Título visible y en azul */}
      <section id="faq" className="container-max pt-10 pb-6">
        <h2 className="text-[#0B3A8C] font-[600] leading-tight
                       text-[28px] md:text-[32px] mb-6">
          Preguntas frecuentes
        </h2>
        <FAQ />
      </section>

      {/* ✅ CTA con aire y bordes redondeados */}
      <CTABox />

      <CTASticky />
    </>
  );
}
