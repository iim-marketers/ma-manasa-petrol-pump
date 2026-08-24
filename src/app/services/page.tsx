import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { AmenityGrid } from "@/components/amenity-grid";
import { Container, Section, SectionHead } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { IconChip, ServiceGlyph } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  ServiceCard,
  ServiceDetail,
  ServiceRow,
} from "@/components/service-cards";
// import { ServiceTimes } from "@/components/service-times";
import {
  amenities,
  photos,
  serviceGroups,
  services,
  servicesInGroup,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & amenities",
  description:
    "Petrol, diesel, HP Power 95 and 100, an online CNG station, HP e-Charge, lubricants and PUC certificates at Muragachha on NH-12 — plus a free air point, washroom, truck parking and UPI payment. Open 24×7.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services & amenities"
        eyebrow="Services & amenities"
        title="Everything on one apron"
        lede="Fuel on two islands, gas and charging on their own bays, and the counters and conveniences behind them. Roll in, get what you need, get back on the highway."
        image={photos.forecourt}
        imageAlt=""
      />

      <ServiceIndex />
      <FuelSection />
      <AltSection />
      <ForecourtSection />
      <AmenitySection />
      {/* <ServiceTimes /> */}

      <CtaBand
        title="Not sure we stock it?"
        body="Bulk diesel, fleet accounts, PUC timings or lubricant grades — ask, and we will tell you straight."
        secondary="phone"
      />
    </>
  );
}

/* ---------------- Jump index ---------------- */

/**
 * Nine services is more than fits on one screen, so the page opens with the
 * whole list as anchors — scrollable on phones rather than wrapping into four
 * ragged rows.
 */
function ServiceIndex() {
  return (
    <div className="border-b border-line bg-surface-2">
      <Container className="flex items-center gap-3 py-4">
        <ul className="no-scrollbar -mx-1 flex flex-1 gap-2 overflow-x-auto px-1 py-1">
          {services.map((service) => (
            <li key={service.slug} className="shrink-0">
              <a
                href={`#${service.slug}`}
                className="inline-flex items-center gap-2 rounded-pill border border-line bg-white px-3.5 py-2 text-[0.82rem] font-medium whitespace-nowrap text-ink-2 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
              >
                <ServiceGlyph
                  name={service.icon}
                  className="size-4 text-brand-500"
                />
                {service.title}
              </a>
            </li>
          ))}
          <li className="shrink-0">
            <a
              href="#amenities"
              className="inline-flex items-center gap-2 rounded-pill bg-brand-600 px-3.5 py-2 text-[0.82rem] font-medium whitespace-nowrap text-white transition-colors hover:bg-brand-700"
            >
              Amenities
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

/* ---------------- Fuels ---------------- */

function FuelSection() {
  const fuels = servicesInGroup("fuel");

  return (
    <Section tone="surface">
      <Container>
        <SectionHead
          eyebrow={serviceGroups.fuel.label}
          title={serviceGroups.fuel.heading}
          lede={serviceGroups.fuel.blurb}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fuels.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 50}>
              <div id={service.slug} className="h-full scroll-mt-28">
                <ServiceCard service={service} className="h-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- Gas & electric ---------------- */

function AltSection() {
  const alt = servicesInGroup("alt");

  return (
    <Section tone="muted">
      <Container>
        <SectionHead
          eyebrow={serviceGroups.alt.label}
          title={serviceGroups.alt.heading}
          lede={serviceGroups.alt.blurb}
        />

        <div className="space-y-4">
          {alt.map((service, i) => (
            <Reveal key={service.slug}>
              <div id={service.slug} className="scroll-mt-28">
                <ServiceDetail service={service} flip={i % 2 === 1} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- The rest of the forecourt ---------------- */

function ForecourtSection() {
  const forecourt = servicesInGroup("forecourt");

  return (
    <Section tone="surface">
      <Container>
        <SectionHead
          eyebrow={serviceGroups.forecourt.label}
          title={serviceGroups.forecourt.heading}
          lede={serviceGroups.forecourt.blurb}
        />

        <div className="space-y-4">
          {forecourt.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 50}>
              <ServiceRow service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- Amenities ---------------- */

function AmenitySection() {
  return (
    <Section tone="muted" id="amenities" className="scroll-mt-24">
      <Container>
        <SectionHead
          eyebrow="Service amenities"
          title={`Few things that cost you nothing`}
          lede={`None of these are on the rate board. They are the reasons a driver picks one pump on ${site.highway} over the next one down the road — and the reason the same trucks stop here on the way back.`}
        />

        <AmenityGrid />
      </Container>
    </Section>
  );
}
