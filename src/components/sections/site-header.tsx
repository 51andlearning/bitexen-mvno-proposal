"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactDialog from "@/components/contact-dialog";

const PAGES = [
  { label: "What", sub: "The proposed MVNO", href: "/" },
  { label: "Why", sub: "The rationale", href: "/why" },
  { label: "How", sub: "Delivery & commercials", href: "/how" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-[#0F172A]">
          <Image
            src="/images/mvne-logo.png"
            alt="MVNE"
            width={600}
            height={236}
            priority
            className="relative top-[3px] h-8 w-auto"
          />
          <span
            aria-hidden
            className="hidden h-7 w-px bg-slate-200 sm:block"
          />
          <Image
            src="/images/dsg-proud-member.png"
            alt="Proud member of DSG"
            width={964}
            height={620}
            priority
            className="hidden h-8 w-auto sm:block"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {PAGES.map((p) => {
            const active =
              p.href === "/" ? pathname === "/" : pathname?.startsWith(p.href);
            return (
              <Link
                key={p.href}
                href={p.href}
                className={
                  active
                    ? "rounded-full bg-[#0EA5E9]/10 px-4 py-1.5 text-sm font-semibold text-[#0EA5E9]"
                    : "rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#0EA5E9]"
                }
              >
                {p.label}
              </Link>
            );
          })}
        </nav>

        <ContactDialog
          label="Get in touch"
          showIcon={false}
          className="inline-flex shrink-0 items-center rounded-full bg-[#0EA5E9] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0284C7]"
        />
      </div>
    </header>
  );
}
