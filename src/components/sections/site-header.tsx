import Image from "next/image";
import ContactDialog from "@/components/contact-dialog";

const NAV = [
  { label: "Summary", href: "#executive-summary" },
  { label: "Fintech", href: "#fintech-arsenal" },
  { label: "Properties", href: "#property-map" },
  { label: "Ecosystem", href: "#dsg-ecosystem" },
  { label: "Operating Model", href: "#operating-model" },
  { label: "Journey", href: "#delivery-journey" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "GTM", href: "#gtm-enablement" },
  { label: "Bundles", href: "#product-tiers" },
  { label: "Crypto", href: "#crypto-rewards" },
  { label: "VAS", href: "#vas-services" },
  { label: "Revenue", href: "#revenue-model" },
  { label: "Commercials", href: "#commercial-model" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Next Steps", href: "#next-steps" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="/" className="flex shrink-0 items-end gap-3 pb-1 text-[#0F172A]">
          <Image
            src="/images/mvne-logo.png"
            alt="MVNE"
            width={600}
            height={236}
            priority
            className="h-10 w-auto"
          />
          <span
            aria-hidden
            className="mb-[2px] hidden h-7 w-px bg-slate-200 sm:block"
          />
          <Image
            src="/images/dsg-proud-member.png"
            alt="Proud member of DSG"
            width={964}
            height={620}
            priority
            className="mb-[-3px] hidden h-8 w-auto sm:block"
          />
        </a>
        <ContactDialog
          label="Get in touch"
          showIcon={false}
          className="inline-flex shrink-0 items-center rounded-full bg-[#0EA5E9] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0284C7]"
        />
      </div>
      <nav className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-1 gap-y-0.5 border-t border-slate-100 px-4 py-2 md:flex">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#0EA5E9]"
          >
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
