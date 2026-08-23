import { Clock, CreditCard, MapPin, Navigation, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { IconChip } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { outletCategories, paymentMethods, site } from "@/lib/site";

/**
 * The outlet card the HP dealer listings put under the banner. It sits half
 * over the hero band so the two read as one unit rather than as two stacked
 * strips.
 */
export function OutletCard() {
  return (
    <div className="relative z-10 -mt-8 lg:-mt-12">
      <Container>
        <div className="card-base overflow-hidden shadow-[var(--shadow-e3)]">
          <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:gap-8">
            <Cell icon={MapPin} label="Address">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Cell>

            <Cell icon={Phone} label="Phone">
              <a
                href={site.phoneHref}
                className="block font-semibold text-ink transition-colors hover:text-brand-600"
              >
                {site.phone}
              </a>
              <a
                href={site.altPhoneHref}
                className="block transition-colors hover:text-brand-600"
              >
                {site.altPhone}
              </a>
            </Cell>

            <Cell icon={Clock} label="Hours">
              <span className="flex items-center gap-2 font-semibold text-leaf-700">
                <i
                  className="animate-dot size-1.5 rounded-full bg-leaf-500"
                  aria-hidden="true"
                />
                {site.hours}
              </span>
              <span className="block">{site.hoursNote}</span>
            </Cell>

            <Cell icon={CreditCard} label="Payments">
              <span className="flex flex-wrap gap-1.5 pt-0.5">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="rounded-pill border border-line bg-surface-2 px-2.5 py-1 text-[0.74rem] font-medium text-ink-2"
                  >
                    {method}
                  </span>
                ))}
              </span>
            </Cell>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-surface-2 px-6 py-4 sm:px-8">
            <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[0.8rem] text-ink-2">
              {outletCategories.map((category, i) => (
                <li key={category}>
                  {category}
                  {i < outletCategories.length - 1 ? (
                    <span className="ml-2 text-line-strong" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            <LinkButton
              href={site.mapsLink}
              external
              variant="brand"
              size="pill-sm"
            >
              <Navigation aria-hidden="true" />
              Open in Maps
            </LinkButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Cell({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3.5">
      <IconChip size="sm" tone="brand">
        <Icon aria-hidden="true" />
      </IconChip>
      <div className="min-w-0">
        <span className="block font-display text-[0.72rem] font-bold tracking-[0.1em] text-ink-3 uppercase">
          {label}
        </span>
        <div className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-2">
          {children}
        </div>
      </div>
    </div>
  );
}
