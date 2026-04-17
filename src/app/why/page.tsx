import SiteHeader from "@/components/sections/site-header";
import ExecutiveSummary from "@/components/sections/executive-summary";
import RevenueModel from "@/components/sections/revenue-model";
import CommercialModel from "@/components/sections/commercial-model";
import PageNav from "@/components/page-nav";

export const metadata = {
  title: "Bitexen Fintech MVNO — Business Case",
  description: "The rationale: market opportunity, Bitexen's competitive moat, the five-layer revenue stack, and the commercial model.",
};

export default function WhyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* BUSINESS CASE — the rationale */}
        <ExecutiveSummary />
        <RevenueModel />
        <CommercialModel />
        <PageNav current="why" />
      </main>
    </>
  );
}
