import SiteHeader from "@/components/sections/site-header";
import HowHero from "@/components/sections/how-hero";
import OperatingModel from "@/components/sections/operating-model";
import DsgEcosystem from "@/components/sections/dsg-ecosystem";
import DeliveryJourney from "@/components/sections/delivery-journey";
import PlatformCapabilities from "@/components/sections/platform-capabilities";
import GtmEnablement from "@/components/sections/gtm-enablement";
import ImplementationRoadmap from "@/components/sections/implementation-roadmap";
import Cta from "@/components/sections/cta";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "Bitexen Fintech MVNO — How",
  description: "Delivery model, commercials, timelines, P&L, and roles & responsibilities.",
};

export default function HowPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* HOW — delivery, commercials, timeline */}
        <HowHero />
        <OperatingModel />
        <DsgEcosystem />
        <DeliveryJourney />
        <PlatformCapabilities />
        <GtmEnablement />
        <ImplementationRoadmap />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
