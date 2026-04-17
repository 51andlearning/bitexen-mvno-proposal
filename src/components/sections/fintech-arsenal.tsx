import { fintechArsenal } from "@/content/proposal";

export default function FintechArsenal() {
  return (
    <section id="fintech-arsenal" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">{fintechArsenal.eyebrow}</p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">{fintechArsenal.title}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{fintechArsenal.subtitle}</p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fintechArsenal.divisions.map((d, i) => (
            <div key={d.title} className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.35)]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0EA5E9]/10 text-sm font-semibold text-[#0EA5E9]">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{d.body}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0EA5E9]/5 px-3 py-1 text-xs font-semibold text-[#0EA5E9]">{d.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
