import Link from "next/link";
import Image from "next/image";
import BitexenWordmark from "@/components/bitexen-wordmark";
import { footer } from "@/content/proposal";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#0A0E1A] text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <BitexenWordmark variant="dark" className="text-2xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Fintech MVNO proposal prepared for Bitexen Teknoloji A.S. by the
              MVNE team at Digital Solutions Group.
            </p>
            <div className="mt-6 inline-flex items-center gap-4 rounded-lg bg-white px-4 py-2.5">
              <Image
                src="/images/mvne-logo.png"
                alt="MVNE"
                width={600}
                height={236}
                className="h-7 w-auto"
              />
              <span aria-hidden className="h-6 w-px bg-slate-200" />
              <Image
                src="/images/dsg-proud-member.png"
                alt="Proud member of DSG"
                width={964}
                height={620}
                className="h-7 w-auto"
              />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="transition hover:text-white">Proposition</Link></li>
              <li><Link href="/why" className="transition hover:text-white">Business Case</Link></li>
              <li><Link href="/how" className="transition hover:text-white">Execution</Link></li>
              <li><a href="/Bitexen-MVNO-Executive-Deck.pdf" download className="transition hover:text-white">Download the deck</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:edwardw@mvne.co.za" className="transition hover:text-white">
                  edwardw@mvne.co.za
                </a>
              </li>
              <li className="text-xs leading-relaxed">
                Digital Solutions Group<br />
                158 Jan Smuts Avenue<br />
                Rosebank, 2196<br />
                South Africa
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="max-w-4xl text-[11px] leading-relaxed text-slate-500">
            {footer.confidentiality}
          </p>
          <p className="mt-3 text-[11px] text-slate-600">
            © {new Date().getFullYear()} Digital Solutions Group (Pty) Ltd · Prepared for Bitexen Teknoloji A.S.
          </p>
        </div>
      </div>
    </footer>
  );
}
