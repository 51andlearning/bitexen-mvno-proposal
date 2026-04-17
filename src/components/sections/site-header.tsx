"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactDialog from "@/components/contact-dialog";

const PAGES = [
  { label: "Proposition", sub: "The proposed MVNO", href: "/" },
  { label: "Business Case", sub: "The rationale", href: "/why" },
  { label: "Execution", sub: "Delivery & commercials", href: "/how" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-[#0F172A]" onClick={() => setOpen(false)}>
          <Image
            src="/images/mvne-logo.png"
            alt="MVNE"
            width={600}
            height={236}
            priority
            className="relative top-[3px] h-7 w-auto sm:h-8"
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={
                isActive(p.href)
                  ? "rounded-full bg-[#0EA5E9]/10 px-4 py-1.5 text-sm font-semibold text-[#0EA5E9]"
                  : "rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#0EA5E9]"
              }
            >
              {p.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactDialog
            label="Get in touch"
            showIcon={false}
            className="hidden shrink-0 items-center rounded-full bg-[#0EA5E9] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0284C7] md:inline-flex"
          />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F172A] transition hover:bg-slate-50 md:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {PAGES.map((p) => {
              const active = isActive(p.href);
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setOpen(false)}
                  className={
                    active
                      ? "flex flex-col rounded-xl bg-[#0EA5E9]/10 px-4 py-3 text-[#0EA5E9]"
                      : "flex flex-col rounded-xl px-4 py-3 text-[#0F172A] transition hover:bg-slate-50"
                  }
                >
                  <span className={active ? "text-sm font-semibold" : "text-sm font-semibold"}>
                    {p.label}
                  </span>
                  <span className={active ? "text-xs text-[#0EA5E9]/80" : "text-xs text-slate-500"}>
                    {p.sub}
                  </span>
                </Link>
              );
            })}
            <div className="mt-3 px-1">
              <ContactDialog
                label="Get in touch"
                showIcon={false}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0EA5E9] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#0284C7]"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
