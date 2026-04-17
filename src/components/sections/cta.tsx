import { cta, footer } from "@/content/proposal";
import ContactDialog from "@/components/contact-dialog";

export default function Cta() {
  return (
    <section
      id="next-steps"
      className="relative overflow-hidden bg-[#0A0E1A] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_30%_30%,#0EA5E9_0,transparent_50%),radial-gradient(circle_at_75%_80%,#10B981_0,transparent_40%)]"
      />
      <div aria-hidden className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#10B981]/15 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10">
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
          <ContactDialog label={cta.primary.label} />
          <a
            href={cta.secondary.href}
            download="Bitexen-MVNO-Executive-Deck.pdf"
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
