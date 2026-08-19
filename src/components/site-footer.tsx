import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { HpLockup } from "@/components/hp-logo";
import { LogoMark } from "@/components/logo";
import { ScrollToTop } from "@/components/scroll-to-top";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-asphalt pt-14 pb-7 text-[#8b98a3]">
      <Container>
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            {/* No plate needed — the footer is already the dark surface the
                cut-out artwork expects. */}
            <LogoMark size={56} plate={false} alt="" />
            <div>
              <div className="font-display text-xl leading-tight font-black tracking-[-0.02em] text-white uppercase">
                {site.name}
              </div>
              <div className="mt-1.5 text-[0.88rem] text-sodium">
                {site.tagline} · {site.locality} · {site.highway} · {site.landmark}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <nav
              className="flex flex-wrap gap-1 lg:justify-end"
              aria-label="Footer"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[3px] px-3 py-2 font-display text-[0.75rem] font-bold tracking-[0.12em] uppercase transition-colors hover:bg-white/[0.07] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ScrollToTop />
          </div>
        </div>

        <div className="grid gap-6 border-b border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterFact icon={<MapPin aria-hidden="true" />} label="Address">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </FooterFact>
          <FooterFact icon={<Phone aria-hidden="true" />} label="Phone">
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
          </FooterFact>
          <FooterFact icon={<Mail aria-hidden="true" />} label="Email">
            <a href={`mailto:${site.email}`} className="break-all hover:text-white">
              {site.email}
            </a>
          </FooterFact>
          <FooterFact icon={<Clock aria-hidden="true" />} label="Hours">
            {site.hours}
            <span className="block">{site.hoursNote}</span>
          </FooterFact>
        </div>

        <div className="flex flex-wrap justify-between gap-3.5 pt-6 text-[0.77rem]">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            Open 24×7 · <span lang="bn">{site.bengali}</span>
          </span>
        </div>

        {/* The dealership's own mark now carries the brand up top, so the HP
            badge sits with the attribution it belongs to. */}
        <HpLockup className="mt-6" />

        <p className="mt-4 max-w-[74ch] text-[0.72rem] leading-relaxed text-[#63707b]">
          &ldquo;HP&rdquo;, &ldquo;HP Power&rdquo; and the Hindustan Petroleum marks belong to
          Hindustan Petroleum Corporation Limited and are used here by an authorised dealer.
          This site is run by the dealership, not by HPCL. Fuel rates change daily — the rate
          board on the forecourt is final.
        </p>
      </Container>
    </footer>
  );
}

function FooterFact({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-[3px] bg-white/[0.07] text-sodium [&_svg]:size-4">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="font-display text-[0.64rem] font-extrabold tracking-[0.15em] text-white/60 uppercase">
          {label}
        </div>
        <div className="mt-1 text-[0.86rem] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
