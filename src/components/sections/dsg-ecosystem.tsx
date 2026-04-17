import { dsgEcosystem } from "@/content/proposal";

const CAP_BADGE_COLORS: Record<string, string> = {
  Telecoms: "bg-blue-50 text-blue-700 border-blue-200",
  "Core Platform": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Customer Experience": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Marketing: "bg-amber-50 text-amber-700 border-amber-200",
  Retention: "bg-purple-50 text-purple-700 border-purple-200",
  Security: "bg-rose-50 text-rose-700 border-rose-200",
  VAS: "bg-cyan-50 text-cyan-700 border-cyan-200",
  Insurance: "bg-orange-50 text-orange-700 border-orange-200",
  AI: "bg-violet-50 text-violet-700 border-violet-200",
  Personalisation: "bg-pink-50 text-pink-700 border-pink-200",
};

export default function DsgEcosystem() {
  return (
    <section id="dsg-ecosystem" className="bg-[#F8FAFC] py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {dsgEcosystem.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {dsgEcosystem.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {dsgEcosystem.subtitle}
        </p>

        {/* DSG Capabilities */}
        <div className="mt-12">
          <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            DSG Group Capabilities
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dsgEcosystem.capabilities.map((cap) => (
              <div
                key={cap.name}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/20 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.2)]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  {cap.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cap.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                        CAP_BADGE_COLORS[badge] ?? "bg-slate-50 text-slate-600 border-slate-200"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Technology Partners
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dsgEcosystem.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/20"
              >
                <h3 className="text-base font-semibold tracking-tight text-[#0F172A]">
                  {partner.name}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
