"use client";
placeholder="Nro de documento"
value={docNumber}
onChange={(e) => setDocNumber(e.target.value)}
className="w-full border rounded-lg p-2"
/>
{errors.docNumber && <p className="text-red-600 text-xs mt-1">{errors.docNumber}</p>}
</div>
</div>


<div className="grid md:grid-cols-[200px_1fr] gap-3 items-center mt-4">
<div className="h-12 rounded-lg border flex items-center justify-center text-slate-500 select-none">
<span className="tracking-widest">{code}</span>
</div>
<div>
<input
type="text"
placeholder="Código"
value={captcha}
onChange={(e) => setCaptcha(e.target.value)}
className="w-full border rounded-lg p-2"
/>
{errors.captcha && <p className="text-red-600 text-xs mt-1">{errors.captcha}</p>}
</div>
</div>


<button onClick={continuar} disabled={loading} className="mt-6 w-full btn-cta">
{loading ? "Validando…" : "Continuar"}
</button>
</div>
</div>
</section>
);
}


function randomCode(n: number) {
const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
let out = "";
for (let i = 0; i < n; i++) out += chars[Math.floor(Math.random() * chars.length)];
return out;
}