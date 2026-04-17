import PhoneMockup from "@/components/phone-mockup";
import AnimatedStat from "@/components/animated-stat";
import BitexenWordmark from "@/components/bitexen-wordmark";

export default function WhatHero() {
  return (
    <section id="what-hero" className="relative overflow-hidden bg-[#0A0E1A] py-14 text-white md:py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_10%_80%,#0EA5E9_0,transparent_35%),radial-gradient(circle_at_90%_20%,#10B981_0,transparent_30%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div aria-hidden className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#0EA5E9]/20 blur-[120px]" />
      <div aria-hidden className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#10B981]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          {/* Left: copy */}
          <div>
            <div className="mb-8">
              <BitexenWordmark variant="dark" className="text-3xl md:text-4xl" />
              <div className="mt-1 text-sm font-medium text-slate-400">
                The Proposition · MVNO for South Africa
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-6 rounded-full bg-[#10B981]" />
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#10B981]">
                Proposition
              </p>
            </div>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              A fintech-led MVNO{" "}
              <span className="bg-gradient-to-r from-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent">
                built around the Bitexen trader.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Four mobile bundles, crypto-denominated rewards on every tier, zero-rated trading on the Bitexen app. Product-ready for the SA market.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
              {[
                { v: "4", l: "Mobile-led tiers" },
                { v: "R79+", l: "Entry price point" },
                { v: "1GB", l: "Max reward data / R5k" },
                { v: "25%", l: "Fee discount on Elite" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    <AnimatedStat value={s.v} />
                  </div>
                  <div className="mt-2 text-sm leading-snug text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[280px] md:max-w-[320px]">
              <PhoneMockup className="relative" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
