import { ArrowRight } from "lucide-react";

import { Container, Section, SectionHead } from "@/components/container";
import { Hero } from "@/components/hero";
import { LinkButton } from "@/components/link-button";
import { LocateBand } from "@/components/locate-band";
import { OutletCard } from "@/components/outlet-card";
import { Photo } from "@/components/photo";
// import { PriceStrip } from "@/components/price-strip";
import { QuickAccess } from "@/components/quick-access";
import { Reveal } from "@/components/reveal";
import { ReviewBand } from "@/components/review-band";
import { ServiceCard, ServiceDetail } from "@/components/service-cards";

import { gallery, servicesInGroup } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OutletCard />
      {/* <PriceStrip />   */}
      <ProductSection />
      <QuickAccess />
      <GallerySection />
      <ReviewBand />
      <LocateBand />
    </>
  );
}

/* ---------------- Fuels and the two flagship bays ---------------- */

function ProductSection() {
  const fuels = servicesInGroup("fuel");
  const alt = servicesInGroup("alt");
  const forecourt = servicesInGroup("forecourt");

  return (
    <Section
      tone="surface"
      id="services"
      className="scroll-mt-24 pt-14 sm:pt-16"
    >
      <Container>
        <SectionHead
          eyebrow="Products & services"
          title="Everything on one forecourt"
          lede="Fuel is only the first reason to pull in. Four grades on the islands, gas and charging on their own bays, and the counters behind them — so nobody on this stretch has to make a second stop."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fuels.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 55}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 space-y-4">
          {alt.map((service, i) => (
            <Reveal key={service.slug}>
              <ServiceDetail service={service} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forecourt.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 55}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex justify-center">
          <LinkButton href="/services" variant="brand" size="pill">
            Every service in detail
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- Gallery ---------------- */

function GallerySection() {
  const tiles = gallery.slice(0, 5);

  return (
    <Section tone="surface">
      <Container>
        <SectionHead
          eyebrow="Gallery"
          title="Have a look before you pull in"
          lede="Every bay and counter on this page, photographed at the pump exactly as it is."
          action={
            <LinkButton
              href="/gallery"
              variant="soft"
              size="pill"
              className="border"
            >
              See the full gallery
              <ArrowRight aria-hidden="true" />
            </LinkButton>
          }
        />

        <Reveal className="grid grid-cols-2 gap-3 lg:h-128 lg:grid-cols-4 lg:grid-rows-2">
          {tiles.map((tile, i) => (
            <Photo
              key={tile.caption}
              src={tile.src}
              alt={tile.alt}
              caption={tile.caption}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              className={
                i === 0
                  ? "col-span-2 h-52 sm:h-72 lg:row-span-2 lg:h-full"
                  : "h-36 sm:h-52 lg:h-full"
              }
            />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
