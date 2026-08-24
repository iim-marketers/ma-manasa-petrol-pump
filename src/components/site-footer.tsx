import Link from "next/link";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { HpLockup } from "@/components/hp-logo";
import { LinkButton } from "@/components/link-button";
import { LogoMark } from "@/components/logo";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  nav,
  outletCategories,
  paymentMethods,
  services,
  site,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Identity + contact */}
          <div>
            <div className="flex items-start gap-3.5">
              <LogoMark size={48} plate={false} alt="" />
              <div>
                <div className="font-display text-[1.05rem] leading-tight font-extrabold tracking-[-0.02em] text-white">
                  {site.name}
                </div>
                <div className="mt-1 text-[0.82rem] text-brand-200">
                  {site.tagline}
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5 text-[0.88rem]">
              <ContactRow icon={MapPin}>
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </ContactRow>
              <ContactRow icon={Phone}>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
                <a
                  href={site.altPhoneHref}
                  className="mt-0.5 block hover:text-white"
                >
                  {site.altPhone}
                </a>
              </ContactRow>
              <ContactRow icon={Mail}>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-white"
                >
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon={Clock}>
                {site.hours}
                <span className="block text-brand-200">{site.hoursNote}</span>
              </ContactRow>
            </ul>
          </div>

          {/* Pages */}
          <FooterColumn title="Pages">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Actions + payments */}
          <div>
            <FooterHeading>Plan your stop</FooterHeading>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <LinkButton
                href={site.mapsLink}
                external
                variant="flame"
                size="pill-sm"
              >
                <Navigation aria-hidden="true" />
                Directions
              </LinkButton>
              <LinkButton
                href={site.phoneHref}
                variant="onDark"
                size="pill-sm"
                className="border"
              >
                <Phone aria-hidden="true" />
                Call
              </LinkButton>
            </div>

            <FooterHeading className="mt-8">We accept</FooterHeading>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {paymentMethods.map((method) => (
                <li
                  key={method}
                  className="rounded-pill border border-white/15 bg-white/5 px-2.5 py-1 text-[0.72rem]"
                >
                  {method}
                </li>
              ))}
            </ul>

            <FooterHeading className="mt-8">Listed under</FooterHeading>
            <p className="mt-2.5 text-[0.8rem] leading-relaxed text-brand-200">
              {outletCategories.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/12 pt-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <HpLockup />
            <p className="mt-4 max-w-[76ch] text-[0.75rem] leading-relaxed text-brand-200/80">
              &ldquo;HP&rdquo;, &ldquo;HP Power&rdquo; and the Hindustan
              Petroleum marks belong to Hindustan Petroleum Corporation Limited
              and are used here by an authorised dealer. This site is run by the
              dealership, not by HPCL. Fuel rates change daily — the rate board
              on the forecourt is final.
            </p>
          </div>

          <ScrollToTop className="self-start" />
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-white/12 pt-6 text-[0.78rem] text-brand-200">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span lang="bn">{site.bengali}</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`font-display text-[0.72rem] font-bold tracking-[0.14em] text-white uppercase ${className ?? ""}`}
    >
      {children}
    </h3>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-4 space-y-2.5 text-[0.88rem]">{children}</ul>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <Icon
        className="mt-1 size-4 shrink-0 text-brand-200"
        aria-hidden="true"
      />
      <div className="min-w-0">{children}</div>
    </li>
  );
}
