import Link from "next/link";

const PAGES = [
  { key: "what", label: "What", sub: "The proposed MVNO", href: "/" },
  { key: "why", label: "Why", sub: "The rationale", href: "/why" },
  { key: "how", label: "How", sub: "Delivery & commercials", href: "/how" },
];

export default function PageNav({ current }: { current: "what" | "why" | "how" }) {
  const others = PAGES.filter((p) => p.key !== current);
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
          Continue reading
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.25)]"
            >
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#0EA5E9]">
                  {p.label}
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight text-[#0F172A]">
                  {p.sub}
                </div>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-[#0EA5E9] transition group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
