import { propertyMap } from "@/content/proposal";

const SEGMENT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Mass Market": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Premium Trader": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Youth / Digital": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  "Business / SME": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  "Professional / Analyst": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};

export default function PropertyMap() {
  return (
    <section id="property-map" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">{propertyMap.eyebrow}</p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">{propertyMap.title}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{propertyMap.subtitle}</p>
        <div className="mt-14 space-y-6">
          {propertyMap.segments.map((seg) => {
            const colors = SEGMENT_COLORS[seg.segment] ?? { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" };
            return (
              <div key={seg.segment} className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-[#0EA5E9]/20 hover:shadow-[0_8px_30px_-15px_rgba(14,165,233,0.15)] md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-flex rounded-full ${colors.bg} ${colors.border} border px-3 py-1 text-xs font-semibold ${colors.text}`}>{seg.segment}</span>
                      <span className="text-xs text-slate-500">ARPU: <span className="font-semibold text-[#0F172A]">{seg.arpu}</span></span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#0F172A]">{seg.property}</h3>
                    <p className="mt-1 text-sm font-medium text-[#0EA5E9]">{seg.product}</p>
                    <p className="mt-2 text-sm text-slate-600">{seg.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:max-w-sm">
                    {seg.features.map((f) => (
                      <span key={f} className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-xs text-slate-700">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
