import Image from "next/image";
import { executiveSummary } from "@/content/proposal";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="relative overflow-hidden bg-[#0A0E1A] py-14 text-white">
      {/* Bitexen-inspired gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_10%_80%,#0EA5E9_0,transparent_35%),radial-gradient(circle_at_90%_20%,#10B981_0,transparent_30%),radial-gradient(circle_at_50%_100%,#F59E0B_0,transparent_25%)]"
      />
      {/* Animated grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      {/* Floating glow orbs */}
      <div aria-hidden className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#0EA5E9]/20 blur-[120px]" />
      <div aria-hidden className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#10B981]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Brand bar */}
        <div className="mb-10 flex items-center gap-4">
          <Image
            src="/images/bitexen-logo-white.png"
            alt="Bitexen"
            width={400}
            height={100}
            priority
            className="h-8 w-auto brightness-110 md:h-10"
          />
          <span aria-hidden className="h-8 w-px bg-white/20" />
          <span className="text-sm font-medium text-slate-400">
            Fintech MVNO Proposal
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#10B981]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#10B981]">
            {executiveSummary.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          {executiveSummary.title}{" "}
          <span className="bg-gradient-to-r from-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent">
            {executiveSummary.titleHighlight}
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {executiveSummary.subtitle}
        </p>

        {/* Stats with glassmorphism */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {executiveSummary.stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-[#0EA5E9]/30 hover:bg-white/[0.08]"
            >
              <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-400 group-hover:text-slate-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Touchpoints */}
        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {executiveSummary.touchpoints.title}
            </h3>
            <p className="mt-4 text-slate-300">
              {executiveSummary.touchpoints.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {executiveSummary.touchpoints.items.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-200 backdrop-blur-sm transition hover:border-[#0EA5E9]/30 hover:bg-[#0EA5E9]/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
