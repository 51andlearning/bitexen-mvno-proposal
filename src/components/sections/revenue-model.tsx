import { revenueModel } from "@/content/proposal";

const LAYER_ICONS: Record<string, React.ReactNode> = {
  signal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" />
    </svg>
  ),
  newspaper: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="m3 11 18-5v12L3 13v-2z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  shopping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
};

export default function RevenueModel() {
  return (
    <section id="revenue-model" className="relative overflow-hidden bg-[#0A0E1A] py-14 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_30%_30%,#0EA5E9_0,transparent_50%),radial-gradient(circle_at_75%_80%,#10B981_0,transparent_40%)]"
      />
      <div aria-hidden className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#0EA5E9]/8 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            {revenueModel.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {revenueModel.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {revenueModel.subtitle}
        </p>

        {/* Revenue layers */}
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {revenueModel.layers.map((layer, i) => (
            <div
              key={layer.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/20 text-[#F59E0B]">
                {LAYER_ICONS[layer.icon] ?? LAYER_ICONS.signal}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#F59E0B]">
                Layer {i + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {layer.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flywheel */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
            <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
              Customer Value Flywheel
            </h3>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
            Each turn of the wheel makes the next one faster. Five self-reinforcing stages
            compound together — fintech drives engagement, engagement earns rewards,
            rewards drive SIM usage, usage generates revenue, revenue-funded data improves
            targeting, which drives more relevant fintech content.
          </p>

          {/* Desktop: circular flywheel */}
          <div className="relative mx-auto mt-12 hidden aspect-square w-full max-w-[560px] md:block">
            {/* Dashed ring + directional arrow markers */}
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 600 600"
              fill="none"
              aria-hidden
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#0EA5E9" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Hub glow */}
              <circle cx="300" cy="300" r="200" fill="url(#hubGlow)" />

              {/* Dashed ring */}
              <circle
                cx="300"
                cy="300"
                r="230"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeDasharray="6 10"
                opacity="0.5"
              />

              {/* Directional clockwise arrows between steps (5 arrows at 36 offsets) */}
              {[36, 108, 180, 252, 324].map((angle) => {
                const rad = ((angle - 90) * Math.PI) / 180;
                const x = 300 + Math.cos(rad) * 230;
                const y = 300 + Math.sin(rad) * 230;
                return (
                  <g
                    key={angle}
                    transform={`translate(${x} ${y}) rotate(${angle})`}
                  >
                    <path
                      d="M -10 0 L 10 0 M 3 -7 L 10 0 L 3 7"
                      stroke="#F59E0B"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 flex h-[32%] w-[32%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#F59E0B]/50 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] shadow-[0_0_40px_-4px_rgba(245,158,11,0.4)] backdrop-blur">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-[#F59E0B]"
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
              <div className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                Bitexen
              </div>
              <div className="text-center text-[10px] text-slate-300">
                Virtuous cycle
              </div>
            </div>

            {/* 5 step pills around the circle */}
            {revenueModel.flywheel.map((step, i) => {
              const angle = -90 + i * 72;
              const rad = (angle * Math.PI) / 180;
              const r = 40; // radius as % of container half-width
              const x = 50 + Math.cos(rad) * r;
              const y = 50 + Math.sin(rad) * r;
              return (
                <div
                  key={step}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex items-center gap-2.5 rounded-full border border-[#F59E0B]/40 bg-[#0F172A] px-3 py-2 shadow-[0_8px_24px_-6px_rgba(245,158,11,0.35)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-[11px] font-bold text-[#0F172A]">
                      {i + 1}
                    </span>
                    <span className="whitespace-nowrap text-xs font-medium text-white">
                      {step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile fallback: vertical flow */}
          <div className="mt-8 space-y-3 md:hidden">
            {revenueModel.flywheel.map((step, i) => (
              <div key={step}>
                <div className="flex items-center gap-3 rounded-full border border-[#F59E0B]/40 bg-[#0F172A] px-3 py-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-xs font-bold text-[#0F172A]">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-white">{step}</span>
                </div>
                {i < revenueModel.flywheel.length - 1 && (
                  <div className="ml-3.5 flex h-4 items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-[#F59E0B]"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <polyline points="19 12 12 19 5 12" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
              Loops back to start
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight">
            {revenueModel.bottomLine.title}
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {revenueModel.bottomLine.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/20 text-[#F59E0B]">
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
                <span className="text-sm leading-relaxed text-slate-200">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
