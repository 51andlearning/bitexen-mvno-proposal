import { productTiers, topUps } from "@/content/proposal";

export default function ProductTiers() {
  return (
    <section id="product-tiers" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Mobile-Led Bundles */}
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {productTiers.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {productTiers.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {productTiers.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {productTiers.tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.highlight
                  ? "relative rounded-2xl bg-[#0F172A] p-8 text-white md:p-10"
                  : "rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
              }
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  Most Popular
                </div>
              )}
              <div
                className={
                  tier.highlight
                    ? "text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]"
                    : "text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]"
                }
              >
                {tier.tier}
              </div>
              <h3
                className={
                  tier.highlight
                    ? "mt-3 text-2xl font-semibold tracking-tight"
                    : "mt-3 text-2xl font-semibold tracking-tight text-[#0F172A]"
                }
              >
                {tier.name}
              </h3>
              <div
                className={
                  tier.highlight
                    ? "mt-2 text-3xl font-semibold tracking-tight text-[#F59E0B]"
                    : "mt-2 text-3xl font-semibold tracking-tight text-[#0EA5E9]"
                }
              >
                {tier.price}
              </div>
              <p
                className={
                  tier.highlight
                    ? "mt-2 text-sm text-slate-300"
                    : "mt-2 text-sm text-slate-600"
                }
              >
                {tier.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className={
                    tier.highlight
                      ? "inline-flex rounded-full bg-[#F59E0B]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#F59E0B]"
                      : "inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700"
                  }
                >
                  {tier.margin}
                </span>
                <span
                  className={
                    tier.highlight
                      ? "inline-flex rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-slate-200"
                      : "inline-flex rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#0EA5E9]"
                  }
                >
                  + {tier.targetContent}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={
                        tier.highlight
                          ? "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/20 text-[#F59E0B]"
                          : "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9]"
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className={
                        tier.highlight
                          ? "text-sm text-slate-200"
                          : "text-sm text-slate-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Pricing note:</span>{" "}
          {productTiers.pricingNote}
        </p>

        {/* Top-Up Bundles */}
        <div className="mt-24 flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0F172A]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0F172A]">
            {topUps.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {topUps.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {topUps.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Data */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                Data
              </h3>
            </div>
            <ul className="space-y-2">
              {topUps.data.map((d) => (
                <li
                  key={d.size}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-700">{d.size}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#0EA5E9]">{d.price}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {d.margin}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Voice */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F59E0B]/15 text-[#F59E0B]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                Voice
              </h3>
            </div>
            <ul className="space-y-2">
              {topUps.voice.map((v) => (
                <li
                  key={v.size}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-700">{v.size}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#F59E0B]">{v.price}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {v.margin}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* SMS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                SMS
              </h3>
            </div>
            <ul className="space-y-2">
              {topUps.sms.map((s) => (
                <li
                  key={s.size}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-700">{s.size}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#0F172A]">{s.price}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {s.margin}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Top-up note:</span>{" "}
          Top-ups are standalone purchases that add to the customer&apos;s
          remaining allowance. Valid for 30 days. Pricing at all levels maintains
          &ge;50% gross profit on wholesale unit costs.
        </p>
      </div>
    </section>
  );
}
