import { platformCapabilities } from "@/content/proposal";
import { Icon } from "@/lib/icon-map";

export default function PlatformCapabilities() {
  return (
    <section id="capabilities" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {platformCapabilities.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {platformCapabilities.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {platformCapabilities.subtitle}
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformCapabilities.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.25)]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9]">
                <Icon name={cap.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-[#0F172A]">
                {cap.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
