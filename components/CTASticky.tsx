// components/CTASticky.tsx
"use client";

export default function CTASticky() {
  const scrollToForm = () => {
    const form = document.getElementById("form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="sticky-cta"
      onClick={scrollToForm}
    >
      Solicita tu préstamo
    </div>
  );
}
