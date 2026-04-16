import SiteHeader from "@/components/sections/site-header";
import ExecutiveSummary from "@/components/sections/executive-summary";
import FintechArsenal from "@/components/sections/fintech-arsenal";
import PropertyMap from "@/components/sections/property-map";
import DsgEcosystem from "@/components/sections/dsg-ecosystem";
import OperatingModel from "@/components/sections/operating-model";
import DeliveryJourney from "@/components/sections/delivery-journey";
import PlatformCapabilities from "@/components/sections/platform-capabilities";
import GtmEnablement from "@/components/sections/gtm-enablement";
import ProductTiers from "@/components/sections/product-tiers";
import CryptoRewards from "@/components/sections/crypto-rewards";
import VasServices from "@/components/sections/vas-services";
import RevenueModel from "@/components/sections/revenue-model";
import CommercialModel from "@/components/sections/commercial-model";
import ImplementationRoadmap from "@/components/sections/implementation-roadmap";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Why */}
        <ExecutiveSummary />
        <FintechArsenal />
        <PropertyMap />

        {/* How we deliver */}
        <DsgEcosystem />
        <OperatingModel />
        <DeliveryJourney />
        <PlatformCapabilities />
        <GtmEnablement />

        {/* What we sell */}
        <ProductTiers />
        <CryptoRewards />
        <VasServices />
        <RevenueModel />

        {/* Commercials, timeline + next steps */}
        <CommercialModel />
        <ImplementationRoadmap />
        <Cta />
      </main>
    </>
  );
}
