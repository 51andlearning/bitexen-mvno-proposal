// Bitexen MVNO Proposal — Content Data
// All proposal content lives here as static TypeScript objects.
// Section components import from this file.
// To update content, edit this file and redeploy.

export const executiveSummary = {
  eyebrow: "Executive Summary",
  title: "A fintech-led MVNO",
  titleHighlight: "unlike anything in Africa.",
  subtitle:
    "Bitexen operates Turkey's leading cryptocurrency exchange — 2M+ active users, 350+ listed coins, and a fintech technology stack built by Turkish engineers. This MVNO leverages fintech, crypto rewards, and digital wallet infrastructure to create a differentiated telecoms offering in South Africa.",
  stats: [
    { value: "$505M", label: "SA MVNO market value (2025)" },
    { value: "$750M", label: "Projected market value by 2030" },
    { value: "4.3M", label: "Active MVNO SIMs in SA (+51% YoY)" },
    { value: "2M+", label: "Bitexen active users" },
  ],
};

export const fintechArsenal = {
  eyebrow: "Fintech Arsenal",
  title: "What no competitor can replicate",
  subtitle:
    "Bitexen controls an extraordinary breadth of fintech and crypto capability under one roof. This is the moat that makes the MVNO defensible.",
  divisions: [
    {
      title: "Crypto Exchange",
      body: "Turkey's widest product range — 350+ coins on 45,000+ trading pairs. First Turkish company to list 200+ coins.",
      stat: "2M+ active users",
    },
    {
      title: "Digital Wallet",
      body: "Fiat and crypto wallet with TRY on/off ramp, instant transfers, and merchant payments.",
      stat: "Multi-currency",
    },
    {
      title: "Research & Insights",
      body: "Bitexen Research — market analysis, tokenomics, and crypto education content for subscribers.",
      stat: "Daily content",
    },
    {
      title: "Technology Platform",
      body: "Built by Turkish engineers at ITU ARI Teknokent — proprietary matching engine, API infrastructure, and security stack.",
      stat: "Enterprise-grade",
    },
    {
      title: "Regulatory Compliance",
      body: "Partnered with Coinfirm for AML/KYC — FATF-aligned risk monitoring and counterparty auditing.",
      stat: "FATF compliant",
    },
    {
      title: "Merchant Network",
      body: "Growing merchant acceptance network for crypto payments across Turkey and expanding internationally.",
      stat: "Expanding",
    },
  ],
};

export const productTiers = {
  eyebrow: "Mobile-Led Bundles",
  title: "Three mobile bundles. Fintech rewards on every tier.",
  subtitle:
    "Every Bitexen mobile bundle includes voice, data, SMS AND free access to the Bitexen app with zero-rated trading. Mid and Premium tiers add crypto rewards, premium research, and enhanced trading features. All bundles maintain 50%+ gross profit.",
  tiers: [
    {
      name: "Bitexen Connect",
      tier: "Entry — Mass Market",
      price: "R149/mo",
      description: "Entry-level mobile with free Bitexen app access and crypto portfolio tracker.",
      features: [
        "30 voice minutes",
        "1 GB mobile data",
        "25 SMS",
        "WhatsApp zero-rated",
        "FREE Bitexen app access (zero-rated)",
        "R10 crypto welcome bonus on activation",
      ],
      margin: "60.3% GP",
      highlight: false,
    },
    {
      name: "Bitexen Plus",
      tier: "Mid — Active Trader",
      price: "R249/mo",
      description: "Everyday mobile plus Bitexen Pro trading tools and crypto cashback.",
      features: [
        "60 voice minutes",
        "2 GB mobile data",
        "75 SMS",
        "FREE Bitexen app access (zero-rated)",
        "PLUS Bitexen Pro trading tools",
        "1% crypto cashback on airtime top-ups",
      ],
      margin: "53.7% GP",
      highlight: true,
    },
    {
      name: "Bitexen Black",
      tier: "Premium — Executive Trader",
      price: "R499/mo",
      description: "Premium mobile with full Research suite, priority trading, and travel eSIM.",
      features: [
        "150 voice minutes",
        "7 GB mobile data (bulk rate)",
        "150 SMS",
        "FREE Bitexen app access (zero-rated)",
        "PLUS Bitexen Pro + full Research suite",
        "2% crypto cashback on all spend + Travel eSIM",
      ],
      margin: "52.8% GP",
      highlight: false,
    },
  ],
};

export const revenueModel = {
  eyebrow: "Revenue Model",
  title: "Five revenue layers. One platform.",
  subtitle:
    "The MVNO creates a layered revenue stack that transforms Bitexen from a single-product exchange into a full digital consumer platform in South Africa.",
  layers: [
    { name: "Connectivity", description: "Data, voice, and messaging — the core subscriber revenue" },
    { name: "Fintech Services", description: "Trading fees, wallet services, crypto cashback programme commissions" },
    { name: "Advertising", description: "Sponsored data bundles, in-app advertising, partner offers" },
    { name: "Commerce", description: "Marketplace offers, loyalty rewards, merchant payment fees" },
    { name: "VAS", description: "Travel eSIM, cybersecurity, insurance, education bundles" },
  ],
};

export const commercialModel = {
  eyebrow: "Commercial Model",
  title: "Zero upfront. Pure revenue share.",
  subtitle:
    "Digital Mobile carries the build. Bitexen carries the brand. Revenue is split 50/50 on net profit, after a small loan account covers Digital Mobile's build investment.",
  highlights: [
    { metric: "R0", label: "Upfront capex from Bitexen" },
    { metric: "50 / 50", label: "Net profit share" },
    { metric: "R2M", label: "Advertising value in-kind" },
    { metric: "300k", label: "Subscriber target (Yr 5)" },
  ],
};

export const implementationRoadmap = {
  eyebrow: "Implementation Roadmap",
  title: "From signature to service launch in 8 weeks.",
  subtitle:
    "A proven, phased delivery plan — one week per stage. Agile sprint governance, weekly stakeholder reviews, and a dedicated cross-functional team.",
  phases: [
    { phase: "Phase 1", duration: "Week 1", title: "Project Kick-off" },
    { phase: "Phase 2", duration: "Week 2", title: "Requirements & Design" },
    { phase: "Phase 3", duration: "Week 3", title: "Platform Configuration" },
    { phase: "Phase 4", duration: "Week 4", title: "Testing & UAT" },
    { phase: "Phase 5", duration: "Week 5", title: "Training & Onboarding" },
    { phase: "Phase 6", duration: "Week 6", title: "Go-Live Preparation" },
    { phase: "Phase 7", duration: "Week 7", title: "Service Launch" },
    { phase: "Phase 8", duration: "Week 8", title: "Operate & Optimise" },
  ],
};

export const cta = {
  eyebrow: "Next Steps",
  title: "Ready to build Africa's first fintech-led MVNO?",
  subtitle:
    "Next steps: formalise SA entity structure, structure zero-rating with the MNO host, define product architecture, design the app experience, and build the go-to-market by audience segment.",
  primary: {
    label: "Request a working session",
    href: "mailto:edwardw@mvne.co.za",
  },
};

export const footer = {
  confidentiality:
    "This document is confidential. It may not be presented to another party without consent from MVNE. Disclosing, copying, distributing or taking any action in relation to the contents of this information is strictly prohibited.",
};
