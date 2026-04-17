import { commercialModel } from "@/content/proposal";
import SubscriberCalculator from "@/components/subscriber-calculator";

export default function CommercialModel() {
  return (
    <section id="commercial-model" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            {commercialModel.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {commercialModel.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {commercialModel.subtitle}
        </p>

        {/* Highlight stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {commercialModel.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F8FAFC] p-6"
            >
              <div className="text-4xl font-bold tracking-tight text-[#F59E0B]">
                {h.metric}
              </div>
              <div className="mt-2 text-sm font-semibold text-[#0F172A]">
                {h.label}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-slate-600">
                {h.description}
              </div>
            </div>
          ))}
        </div>

        {/* Cost structure table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="bg-[#0F172A] px-6 py-4">
            <h3 className="text-sm font-semibold tracking-tight text-white">
              Who carries what
            </h3>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="hidden grid-cols-[2fr_1fr_1.2fr] gap-4 bg-[#F8FAFC] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:grid">
              <div>Line item</div>
              <div>Who pays</div>
              <div>Cost</div>
            </div>
            {commercialModel.costStructure.map((c) => (
              <div
                key={c.item}
                className="grid gap-2 px-6 py-4 md:grid-cols-[2fr_1fr_1.2fr] md:gap-4"
              >
                <div className="text-sm font-medium text-[#0F172A]">{c.item}</div>
                <div>
                  <span
                    className={
                      c.who === "Bitexen"
                        ? "inline-flex rounded-full bg-[#0EA5E9]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0EA5E9]"
                        : c.who === "Both"
                          ? "inline-flex rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700"
                          : "inline-flex rounded-full bg-[#F59E0B]/15 px-2.5 py-0.5 text-xs font-semibold text-[#F59E0B]"
                    }
                  >
                    {c.who}
                  </span>
                </div>
                <div className="text-sm text-slate-600">{c.cost}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified P&L */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="bg-[#0A0E1A] px-6 py-4">
            <h3 className="text-sm font-semibold tracking-tight text-white">
              {commercialModel.profitAndLoss.title}
            </h3>
          </div>
          <div className="divide-y divide-slate-100">
            {commercialModel.profitAndLoss.rows.map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-3 ${
                  row.type === "subtotal"
                    ? "bg-slate-50 font-semibold"
                    : row.type === "profit"
                      ? "bg-emerald-50/50"
                      : row.type === "margin"
                        ? "bg-emerald-50/50"
                        : ""
                }`}
              >
                <div
                  className={`text-sm ${
                    row.type === "revenue"
                      ? "font-semibold text-[#0F172A]"
                      : row.type === "profit" || row.type === "margin"
                        ? "font-bold text-[#0F172A]"
                        : row.type === "subtotal"
                          ? "font-semibold text-[#0F172A]"
                          : "text-slate-600"
                  }`}
                >
                  {row.label}
                </div>
                <div
                  className={`text-sm font-semibold ${
                    row.type === "revenue"
                      ? "text-[#0EA5E9]"
                      : row.type === "profit"
                        ? "text-emerald-600"
                        : row.type === "margin"
                          ? "text-emerald-600"
                          : row.type === "subtotal"
                            ? "text-[#0F172A]"
                            : "text-slate-500"
                  }`}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier breakdown */}
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {commercialModel.profitAndLoss.tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3"
            >
              <div>
                <div className="text-sm font-semibold text-[#0F172A]">{tier.name}</div>
                <div className="text-xs text-slate-500">{tier.price} &middot; {tier.mix} mix</div>
              </div>
              <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                {tier.margin}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Note:</span>{" "}
          {commercialModel.profitAndLoss.note}
        </p>

        {/* 5-Year Annualised P&L */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="bg-[#0A0E1A] px-6 py-4">
            <h3 className="text-sm font-semibold tracking-tight text-white">
              {commercialModel.profitAndLoss.annualProjection.title}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3">Subscribers</th>
                  <th className="px-4 py-3">Revenue</th>
                  <th className="px-4 py-3">Wholesale</th>
                  <th className="px-4 py-3">Gross Profit</th>
                  <th className="px-4 py-3">Platform Fee</th>
                  <th className="px-4 py-3">Net Profit</th>
                  <th className="px-4 py-3">Per Party (50/50)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {commercialModel.profitAndLoss.annualProjection.years.map((y) => (
                  <tr key={y.year} className="hover:bg-slate-50/50">
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-[#0F172A]">{y.year}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{y.subs}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-[#0EA5E9]">{y.revenue}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-500">{y.wholesaleCost}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-[#0F172A]">{y.grossProfit}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-500">{y.platformFee}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-emerald-600">{y.netProfit}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-emerald-600">{y.perParty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Projection note:</span>{" "}
          {commercialModel.profitAndLoss.annualProjection.note}
        </p>

        {/* Interactive subscriber calculator */}
        <SubscriberCalculator />
      </div>
    </section>
  );
}
