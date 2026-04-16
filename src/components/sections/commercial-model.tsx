import { commercialModel } from "@/content/proposal";

export default function CommercialModel() {
  return (
    <section id="commercial-model" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            {commercialModel.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {commercialModel.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {commercialModel.subtitle}
        </p>

        {/* Highlight stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {commercialModel.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F8FAFC] p-6"
            >
              <div className="text-4xl font-bold tracking-tight text-[#F59E0B]">
                {h.metric}
              </div>
              <div className="mt-2 text-sm font-semibold text-[#0F172A]">
                {h.label}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-slate-600">
                {h.description}
              </div>
            </div>
          ))}
        </div>

        {/* Cost structure table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="bg-[#0F172A] px-6 py-4">
            <h3 className="text-sm font-semibold tracking-tight text-white">
              Who carries what
            </h3>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="hidden grid-cols-[2fr_1fr_1.2fr] gap-4 bg-[#F8FAFC] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:grid">
              <div>Line item</div>
              <div>Who pays</div>
              <div>Cost</div>
            </div>
            {commercialModel.costStructure.map((c) => (
              <div
                key={c.item}
                className="grid gap-2 px-6 py-4 md:grid-cols-[2fr_1fr_1.2fr] md:gap-4"
              >
                <div className="text-sm font-medium text-[#0F172A]">{c.item}</div>
                <div>
                  <span
                    className={
                      c.who === "Bitexen"
                        ? "inline-flex rounded-full bg-[#0EA5E9]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0EA5E9]"
                        : "inline-flex rounded-full bg-[#F59E0B]/15 px-2.5 py-0.5 text-xs font-semibold text-[#F59E0B]"
                    }
                  >
                    {c.who}
                  </span>
                </div>
                <div className="text-sm text-slate-600">{c.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
