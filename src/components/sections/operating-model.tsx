import { operatingModel, trackRecord } from "@/content/proposal";

const ICON_MAP: Record<string, React.ReactNode> = {
  brand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  platform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  ),
};

export default function OperatingModel() {
  return (
    <section id="operating-model" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {operatingModel.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {operatingModel.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {operatingModel.subtitle}
        </p>

        {/* 3 role cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {operatingModel.roles.map((role, i) => (
            <div
              key={role.party}
              className={
                i === 1
                  ? "relative rounded-2xl bg-[#0F172A] p-8 text-white md:p-10"
                  : "rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
              }
            >
              {i === 1 && (
                <div className="absolute -top-3 right-6 rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  The MVNO Builder
                </div>
              )}
              <div
                className={
                  i === 1
                    ? "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/20 text-[#F59E0B]"
                    : "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9]"
                }
              >
                {ICON_MAP[role.icon]}
              </div>
              <h3
                className={
                  i === 1
                    ? "text-xl font-semibold tracking-tight"
                    : "text-xl font-semibold tracking-tight text-[#0F172A]"
                }
              >
                {role.party}
              </h3>
              <p
                className={
                  i === 1
                    ? "mt-1 text-sm font-medium text-[#F59E0B]"
                    : "mt-1 text-sm font-medium text-[#0EA5E9]"
                }
              >
                {role.scope}
              </p>
              <ul className="mt-5 space-y-2">
                {role.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm">
                    <span
                      className={
                        i === 1
                          ? "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#F59E0B]"
                          : "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#0EA5E9]"
                      }
                    />
                    <span className={i === 1 ? "text-slate-200" : "text-slate-700"}>
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Track Record */}
        <div className="mt-24 flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {trackRecord.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {trackRecord.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {trackRecord.subtitle}
        </p>

        {/* Stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {trackRecord.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
            >
              <div className="text-3xl font-semibold tracking-tight text-[#0EA5E9] md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* MVNO launches */}
        <div className="mt-16">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Proven MVNO Launches
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trackRecord.mvnoLaunches.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#0EA5E9]/30 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.25)]"
              >
                <h4 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  {m.name}
                </h4>
                <p className="mt-1 text-xs font-medium text-[#0EA5E9]">{m.type}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {trackRecord.credentials.map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/15 text-[#F59E0B]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold tracking-tight text-[#0F172A]">
                  {c.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
