import { executiveSummary } from "@/content/proposal";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32">
      <div aria-hidden className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle_at_15%_85%,#0EA5E9_0,transparent_40%),radial-gradient(circle_at_85%_95%,#F59E0B_0,transparent_40%)]" />
      <div aria-hidden className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10">
          <span className="text-3xl font-bold tracking-tight text-white md:text-4xl">Bitexen<span className="text-[#F59E0B]">Mobile</span></span>
          <span className="ml-4 text-sm font-medium text-slate-400">Fintech MVNO Proposal</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">{executiveSummary.eyebrow}</p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {executiveSummary.title}{" "}
          <span className="text-[#F59E0B]">{executiveSummary.titleHighlight}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{executiveSummary.subtitle}</p>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {executiveSummary.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{executiveSummary.touchpoints.title}</h3>
            <p className="mt-4 text-slate-300">{executiveSummary.touchpoints.body}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {executiveSummary.touchpoints.items.map((t) => (
              <span key={t} className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-200">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
