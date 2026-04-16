import { vasServices } from "@/content/proposal";
import CarouselCards from "@/components/carousel-cards";

const BADGE_COLORS: Record<string, string> = {
  "New Revenue": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Retention: "bg-blue-50 text-blue-700 border-blue-200",
  Stickiness: "bg-purple-50 text-purple-700 border-purple-200",
  "Higher Margins": "bg-amber-50 text-amber-700 border-amber-200",
  Differentiation: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function VasServices() {
  return (
    <section id="vas-services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0EA5E9]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0EA5E9]">
            {vasServices.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {vasServices.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {vasServices.subtitle}
        </p>

        <div className="mt-14">
          <CarouselCards desktopPerView={4}>
            {vasServices.items.map((item) => (
              <div
                key={item.title}
                data-card
                className="flex h-full snap-start flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/20 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.2)]"
              >
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                        BADGE_COLORS[badge] ?? "bg-slate-50 text-slate-600 border-slate-200"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CarouselCards>
        </div>
      </div>
    </section>
  );
}
