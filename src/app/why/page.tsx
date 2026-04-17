import SiteHeader from "@/components/sections/site-header";
import ExecutiveSummary from "@/components/sections/executive-summary";
import RevenueModel from "@/components/sections/revenue-model";
import PageNav from "@/components/page-nav";

export const metadata = {
  title: "Bitexen Fintech MVNO — Why",
  description: "The rationale: market opportunity, Bitexen's competitive moat, and the five-layer revenue stack.",
};

export default function WhyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* WHY — the rationale */}
        <ExecutiveSummary />
        <RevenueModel />
        <PageNav current="why" />
      </main>
    </>
  );
}
