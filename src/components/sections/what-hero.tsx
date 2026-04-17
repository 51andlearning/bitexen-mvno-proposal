import Image from "next/image";

export default function WhatHero() {
  return (
    <section id="what-hero" className="relative overflow-hidden bg-[#0A0E1A] py-14 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_10%_80%,#0EA5E9_0,transparent_35%),radial-gradient(circle_at_90%_20%,#10B981_0,transparent_30%),radial-gradient(circle_at_50%_100%,#F59E0B_0,transparent_25%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div aria-hidden className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#0EA5E9]/20 blur-[120px]" />
      <div aria-hidden className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#10B981]/15 blur-[100px]" />

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
            The Proposition
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#10B981]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#10B981]">
            Proposition
          </p>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          A fintech-led MVNO —{" "}
          <span className="bg-gradient-to-r from-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent">
            built around the Bitexen trader.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Four mobile bundles, crypto-denominated rewards on every tier, zero-rated trading on the Bitexen app, and an MVNO platform built to scale to 10 million subscribers. This is what the product looks like.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { v: "4", l: "Mobile-led tiers" },
            { v: "R79–R299", l: "Monthly price range" },
            { v: "250 MB+", l: "Trading reward data" },
            { v: "Up to 25%", l: "Fee discount on Elite" },
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
