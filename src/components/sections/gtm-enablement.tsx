import { gtmEnablement } from "@/content/proposal";

export default function GtmEnablement() {
  return (
    <section id="gtm-enablement" className="bg-[#F8FAFC] py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {gtmEnablement.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {gtmEnablement.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {gtmEnablement.subtitle}
        </p>

        {/* 4-phase S&M Enablement Program */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {gtmEnablement.phases.map((p, i) => (
            <div
              key={p.phase}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.25)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0EA5E9]/10 text-sm font-bold text-[#0EA5E9]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#0EA5E9]">
                {p.phase}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#0F172A]">
                {p.focus}
              </h3>
              <ul className="mt-4 space-y-2">
                {p.activities.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#0EA5E9]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Supporting delivery capabilities */}
        <div className="mt-20">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Supporting Delivery Capabilities
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            Beyond the MVNO platform and marketing program, Bitexen has access to DSG&apos;s full
            services stack — from supply chain to identity to commerce to AI.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {gtmEnablement.supportingServices.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#0EA5E9]/20 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.15)]"
              >
                <div className="text-3xl">{s.icon}</div>
                <div>
                  <h4 className="text-base font-semibold tracking-tight text-[#0F172A]">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
