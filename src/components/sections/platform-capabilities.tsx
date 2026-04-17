import { platformCapabilities } from "@/content/proposal";
import CarouselCards from "@/components/carousel-cards";

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

        <div className="mt-14">
          <CarouselCards desktopPerView={4}>
            {platformCapabilities.capabilities.map((cap) => (
              <div
                key={cap.title}
                data-card
                className="flex h-full snap-start flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/20 hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.2)]"
              >
                <div className="mb-4 text-3xl">{cap.icon}</div>
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  {cap.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </CarouselCards>
        </div>
      </div>
    </section>
  );
}
