// app/preguntas-frecuentes/page.tsx
import FaqAccordion from "@/components/FaqAccordion";


export default function FAQ() {
const faqs = [
{ q: "¿Cómo solicitar un préstamo online?", a: "Ingresa el monto, elige fecha de pago y completa tus datos." },
{ q: "¿Qué necesito para solicitar un préstamo?", a: "Documento vigente, mayoría de edad y evaluación crediticia." },
{ q: "¿Debo presentar algún documento?", a: "Todo el proceso es digital, pero podríamos validar tu identidad." },
{ q: "¿Puedo personalizar mi préstamo?", a: "Sí, podrás elegir montos y plazos disponibles." },
{ q: "¿En cuánto tiempo recibiré el préstamo?", a: "Depende de la evaluación; objetivo: al instante." },
];
return <FaqAccordion items={faqs} />;
}