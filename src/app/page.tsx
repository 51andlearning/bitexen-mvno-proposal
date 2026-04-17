import SiteHeader from "@/components/sections/site-header";
import WhatHero from "@/components/sections/what-hero";
import ProductTiers from "@/components/sections/product-tiers";
import CryptoRewards from "@/components/sections/crypto-rewards";
import VasServices from "@/components/sections/vas-services";
import PropertyMap from "@/components/sections/property-map";
import FintechArsenal from "@/components/sections/fintech-arsenal";
import PageNav from "@/components/page-nav";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* WHAT — the proposed MVNO */}
        <WhatHero />
        <ProductTiers />
        <CryptoRewards />
        <PropertyMap />
        <FintechArsenal />
        <VasServices />
        <PageNav current="what" />
      </main>
    </>
  );
}
