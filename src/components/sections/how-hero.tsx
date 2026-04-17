import AnimatedStat from "@/components/animated-stat";
import BitexenWordmark from "@/components/bitexen-wordmark";

export default function HowHero() {
  return (
    <section id="how-hero" className="relative overflow-hidden bg-[#0A0E1A] py-14 text-white md:py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_20%,#0EA5E9_0,transparent_35%),radial-gradient(circle_at_20%_80%,#10B981_0,transparent_30%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div aria-hidden className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#10B981]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10">
          <BitexenWordmark variant="dark" className="text-3xl md:text-4xl" />
          <div className="mt-1 text-sm font-medium text-slate-400">
            The Execution · Delivery, commercials, and timeline
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#10B981]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#10B981]">
            Execution
          </p>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          A proven platform,{" "}
          <span className="bg-gradient-to-r from-[#10B981] to-[#0EA5E9] bg-clip-text text-transparent">
            live in 8 weeks.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Roles and responsibilities, timeline, platform capabilities, and delivery playbook — from signature to go-live in two months.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            { v: "8", l: "Weeks to launch" },
            { v: "R250k", l: "Upfront capex" },
            { v: "50/50", l: "Net profit share" },
            { v: "13+", l: "Years MVNE heritage" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                <AnimatedStat value={s.v} />
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-400">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
