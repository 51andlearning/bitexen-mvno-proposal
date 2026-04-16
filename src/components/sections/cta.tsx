import { cta, footer } from "@/content/proposal";

export default function Cta() {
  return (
    <section
      id="next-steps"
      className="relative overflow-hidden bg-[#0F172A] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_30%_30%,#0EA5E9_0,transparent_50%),radial-gradient(circle_at_75%_80%,#F59E0B_0,transparent_45%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            {cta.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          {cta.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {cta.subtitle}
        </p>

        {/* Workstreams */}
        <div className="mt-10 max-w-2xl">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#F59E0B]">
            Parallel Workstreams
          </h3>
          <ul className="mt-4 space-y-3">
            {cta.workstreams.map((ws, i) => (
              <li key={ws} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/20 text-xs font-semibold text-[#F59E0B]">
                  {i + 1}
                </div>
                <span className="text-sm leading-relaxed text-slate-200">
                  {ws}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={cta.primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#0EA5E9] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0EA5E9]/90"
          >
            {cta.primary.label}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href={cta.secondary.href}
            download="Bitexen-MVNO-Executive-Deck.pptx"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {cta.secondary.label}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        <p className="mt-24 max-w-4xl border-t border-white/15 pt-8 text-xs leading-relaxed text-slate-400">
          {footer.confidentiality}
        </p>
      </div>
    </section>
  );
}
