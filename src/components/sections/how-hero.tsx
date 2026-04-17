import Image from "next/image";

export default function HowHero() {
  return (
    <section id="how-hero" className="relative overflow-hidden bg-[#0A0E1A] py-14 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_20%,#0EA5E9_0,transparent_35%),radial-gradient(circle_at_20%_80%,#F59E0B_0,transparent_30%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div aria-hidden className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F59E0B]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
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
            Delivery &amp; Commercials
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            Execution
          </p>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          A proven platform,{" "}
          <span className="bg-gradient-to-r from-[#F59E0B] to-[#0EA5E9] bg-clip-text text-transparent">
            a clear commercial model, live in 8 weeks.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Roles and responsibilities, timeline, platform capabilities, and the full commercial model — including per-subscriber P&amp;L and a 5-year projection you can interact with.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { v: "8 weeks", l: "Signature to launch" },
            { v: "R250k", l: "Upfront capex" },
            { v: "50/50", l: "Net profit share" },
            { v: "13+ yrs", l: "MVNE track record" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">{s.v}</div>
              <div className="mt-2 text-sm leading-snug text-slate-400">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
