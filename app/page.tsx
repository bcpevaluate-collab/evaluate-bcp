// app/page.tsx
import Hero from "@/components/Hero";
import FormSection from "@/components/FormSection";
import StepsSlider from "@/components/StepsSlider";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTABox from "@/components/CTABox";   // 👈 nuevo import
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
        <FAQ />
      </section>

      {/* ✅ Nueva sección CTA debajo de FAQ */}
      <CTABox />

      <CTASticky />
    </>
  );
}
