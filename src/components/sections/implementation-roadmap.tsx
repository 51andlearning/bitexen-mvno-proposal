import { implementationRoadmap } from "@/content/proposal";

export default function ImplementationRoadmap() {
  return (
    <section id="roadmap" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {implementationRoadmap.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {implementationRoadmap.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {implementationRoadmap.subtitle}
        </p>

        <div className="mt-14 space-y-4">
          {implementationRoadmap.phases.map((p, i) => (
            <div
              key={p.phase}
              className="relative grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#0EA5E9]/20 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.2)] md:grid-cols-[auto_auto_1fr] md:items-start md:gap-8 md:p-7"
            >
              {/* Phase number */}
              <div className="flex items-center gap-4 md:w-48">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0EA5E9] text-lg font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#0EA5E9]">
                    {p.phase}
                  </div>
                  <div className="text-sm font-semibold text-[#0F172A]">
                    {p.duration}
                  </div>
                </div>
              </div>

              {/* Vertical separator */}
              <div className="hidden h-full w-px bg-slate-200 md:block" />

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  {p.title}
                </h3>
                <ul className="mt-3 grid gap-2 md:grid-cols-2">
                  {p.activities.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0EA5E9]"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
