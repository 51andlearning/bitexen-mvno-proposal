import { propertyMap } from "@/content/proposal";
import { Users, TrendingUp, Smartphone, Building2, LineChart } from "lucide-react";

const SEGMENT_META: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }
> = {
  "Mass Market": { icon: Users, color: "text-blue-700", bg: "bg-blue-50" },
  "Premium Trader": { icon: TrendingUp, color: "text-amber-700", bg: "bg-amber-50" },
  "Youth / Digital": { icon: Smartphone, color: "text-purple-700", bg: "bg-purple-50" },
  "Business / SME": { icon: Building2, color: "text-emerald-700", bg: "bg-emerald-50" },
  "Professional / Analyst": { icon: LineChart, color: "text-rose-700", bg: "bg-rose-50" },
};

export default function PropertyMap() {
  return (
    <section id="property-map" className="bg-[#F8FAFC] py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {propertyMap.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {propertyMap.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {propertyMap.subtitle}
        </p>

        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-[1.2fr_1fr_1fr_2fr] gap-4 border-b border-slate-200 bg-slate-50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 md:grid">
            <div>Bitexen property</div>
            <div>Segment</div>
            <div>ARPU</div>
            <div>Role in portfolio</div>
          </div>
          {propertyMap.segments.map((seg, i) => {
            const meta = SEGMENT_META[seg.segment] ?? {
              icon: Users,
              color: "text-slate-700",
              bg: "bg-slate-50",
            };
            const SegIcon = meta.icon;
            return (
              <div
                key={seg.segment}
                className={`grid gap-4 px-6 py-5 transition hover:bg-[#0EA5E9]/5 md:grid-cols-[1.2fr_1fr_1fr_2fr] md:items-start ${
                  i !== propertyMap.segments.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${meta.bg} ${meta.color}`}>
                    <SegIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">{seg.property}</div>
                    <div className="mt-0.5 text-xs font-medium text-[#0EA5E9]">{seg.product}</div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">Segment</div>
                  <span className={`inline-flex rounded-full ${meta.bg} px-2.5 py-0.5 text-xs font-semibold ${meta.color}`}>
                    {seg.segment}
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">ARPU</div>
                  <div className="text-sm font-bold text-[#0F172A]">{seg.arpu}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">Role</div>
                  <div className="text-sm text-slate-700">{seg.role}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {seg.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] text-slate-600"
                      >
                        {f}
                      </span>
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
