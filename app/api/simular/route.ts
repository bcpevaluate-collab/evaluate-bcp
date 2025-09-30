// app/api/simular/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";


export async function POST(req: Request) {
const { amount, payDay } = await req.json();
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
await supabase.from("loan_simulations").insert({ amount, pay_day: payDay });
return NextResponse.json({ ok: true });
}