"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ContactDialog from "@/components/contact-dialog";
import BitexenWordmark from "@/components/bitexen-wordmark";

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
        {/* PRIMARY: Bitexen Mobile wordmark */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-4"
          onClick={() => setOpen(false)}
        >
          <BitexenWordmark className="text-xl md:text-2xl" />

          {/* Secondary: partnership */}
          <span
            aria-hidden
            className="hidden h-7 w-px bg-slate-200 md:block"
          />
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              In partnership with
            </span>
            <Image
              src="/images/mvne-logo.png"
              alt="MVNE"
              width={600}
              height={236}
              priority
              className="relative top-[2px] h-6 w-auto opacity-80"
            />
            <Image
              src="/images/dsg-proud-member.png"
              alt="DSG"
              width={964}
              height={620}
              priority
              className="h-6 w-auto opacity-80"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2">
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

          <ContactDialog
            label="Get in touch"
            showIcon={false}
            className="hidden shrink-0 items-center rounded-full bg-[#0EA5E9] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0284C7] md:inline-flex"
          />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F172A] transition hover:bg-slate-50 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

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
                  <span className="text-sm font-semibold">{p.label}</span>
                  <span className={active ? "text-xs text-[#0EA5E9]/80" : "text-xs text-slate-500"}>
                    {p.sub}
                  </span>
                </Link>
              );
            })}
            <div className="mt-3 flex items-center justify-between px-4 pt-3 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              <span>In partnership with</span>
              <div className="flex items-center gap-3">
                <Image src="/images/mvne-logo.png" alt="MVNE" width={600} height={236} className="h-5 w-auto opacity-80" />
                <Image src="/images/dsg-proud-member.png" alt="DSG" width={964} height={620} className="h-5 w-auto opacity-80" />
              </div>
            </div>
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
