import { ArrowRight } from "lucide-react";

import { Band, Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { DirectionSign } from "@/components/direction-sign";
import { FactGrid } from "@/components/fact-grid";
import { Hero } from "@/components/hero";
import { LinkButton } from "@/components/link-button";
import { Marquee } from "@/components/marquee";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { chips, gallery, photos, services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ForecourtBand />
      <AboutPreview />
      <ServicesPreview />
      <AlwaysOpen />
      <GalleryPreview />
      <CtaBand />
    </>
  );
}

/* ---------------- Forecourt photo band ---------------- */

function ForecourtBand() {
  return (
    <section className="bg-paper py-12 sm:py-16 lg:py-20">
      <Container>
        <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <span className="plate plate-amber">The forecourt</span>
          <p className="lede max-w-[44ch] text-base">
            Wide entry and exit off the highway, room for trucks to turn, and
            lighting across the whole apron.
          </p>
        </Reveal>

        <Reveal className="grid gap-3 sm:h-[clamp(320px,44vw,470px)] sm:grid-cols-3 sm:grid-rows-2">
          <Photo
            src={photos.forecourt}
            alt="The forecourt seen from the entry off the highway"
            caption={`The forecourt from ${site.highway}`}
            priority
            sizes="(max-width: 640px) 100vw, 66vw"
            className="h-56 sm:col-span-2 sm:row-span-2 sm:h-full"
          />
          <Photo
            src={photos.canopy}
            alt="Trucks and two-wheelers at the islands under the HP canopy"
            caption="Room for trucks to turn"
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-48 sm:h-full"
          />
          <Photo
            src={photos.dispenser}
            alt="An HP petrol dispenser with the meter facing the customer"
            caption="Calibrated dispensers"
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-48 sm:h-full"
          />
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- About preview ---------------- */

function AboutPreview() {
  return (
    <Band className="bg-concrete">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="plate">About the pump</span>
          <h2 className="h-lg mt-5">
            One stop on
            <br />
            the Kalyani run.
          </h2>

          <div className="mt-5 space-y-4">
            <p className="lede">
              {site.name} is an authorised Hindustan Petroleum dealership on{" "}
              {site.highway} at {site.locality}, a short hop from Kalyani More.
              Trucks heading north, cars coming down towards Kolkata, and every
              two-wheeler in between — they all pass this stretch.
            </p>
            <p className="lede">
              We built the forecourt so nobody has to make a second stop. Petrol
              and diesel on the main islands, an online CNG station fed straight
              off the pipeline, and EV bays for cars that plug in. A Tea
              Junction counter for the driver who has been at the wheel since
              dawn is being built now.
            </p>
          </div>

          <FactGrid className="mt-8" />

          <LinkButton
            href="/about"
            variant="hpOutline"
            size="sign"
            className="mt-8"
          >
            Read more about us
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </Reveal>

        <Reveal delay={80} className="space-y-8">
          <DirectionSign />
          <Photo
            src={photos.entrySign}
            alt={`The HP sign and rate board facing ${site.highway}`}
            caption="The sign from the road"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-56 sm:h-72"
          />
        </Reveal>
      </Container>
    </Band>
  );
}

/* ---------------- Services preview ---------------- */

/**
 * Phones get a shorter list — four cards rather than six. The two dropped are
 * the extra petrol grades, so CNG and EV charging survive the cut: they are
 * what the page leads with, and stacked single-column the full six is a long
 * scroll before the "All services" link.
 */
const MOBILE_SERVICES = new Set(["diesel", "petrol", "cng", "ev-charging"]);

function ServicesPreview() {
  const featured = services.slice(0, 6);

  return (
    <Band className="bg-paper">
      <Container>
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="plate plate-amber">What we stock</span>
            <h2 className="h-lg mt-5">
              Everything on
              <br />
              one forecourt.
            </h2>
          </div>
          <p className="lede mb-1.5 max-w-[38ch]">
            Many services, one stop. Roll in, get what you need, get back on the
            highway.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 4) * 60}
              className={cn(
                service.wide && "sm:col-span-2",
                !MOBILE_SERVICES.has(service.slug) && "max-sm:hidden",
              )}
            >
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex justify-center">
          <LinkButton href="/services" variant="hpBlue" size="sign">
            All services
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </Reveal>
      </Container>
    </Band>
  );
}

/* ---------------- 24x7 band ---------------- */

function AlwaysOpen() {
  return (
    <section className="relative isolate overflow-hidden bg-asphalt text-concrete">
      <div className="hazard-dark absolute inset-0 -z-10" aria-hidden="true" />

      <Container className="grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[auto_1fr] lg:gap-14 lg:py-24">
        <Reveal className="font-led text-[clamp(3.2rem,10vw,6.6rem)] leading-[0.9] font-black text-sodium [text-shadow:0_0_26px_rgb(255_198_26/0.3)]">
          24<span className="opacity-55">×</span>7
        </Reveal>

        <Reveal delay={80}>
          <span className="plate plate-amber">Always open</span>
          <h2 className="h-lg mt-4 text-white">
            The board never
            <br />
            goes dark.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#96a2ac]">
            No shutter hours, no lunch break, no &ldquo;come back in the
            morning.&rdquo; Every service on this page runs through the night —
            fuel, CNG, charging and the lights across the apron.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/20 px-3.5 py-2 font-display text-[0.72rem] font-bold tracking-widest text-[#c4cdd4] uppercase"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Gallery preview ---------------- */

function GalleryPreview() {
  const tiles = gallery.slice(0, 6);

  return (
    <Band className="bg-concrete">
      <Container>
        <Reveal className="mb-9 max-w-[62ch]">
          <span className="plate">Around the pump</span>
          <h2 className="h-lg mt-5">
            Have a look
            <br />
            before you pull in.
          </h2>
          <p className="lede mt-4">
            Every bay, counter and service on this page, photographed as it
            actually is.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {tiles.map((tile, i) => (
            <Photo
              key={tile.src}
              src={tile.src}
              alt={tile.alt}
              caption={tile.caption}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              className={
                i === 0
                  ? "col-span-2 h-52 sm:h-72 lg:col-span-2 lg:h-80"
                  : "h-36 sm:h-52 lg:h-38 xl:h-40"
              }
            />
          ))}
        </Reveal>

        <Reveal className="mt-9 flex justify-center">
          <LinkButton href="/gallery" variant="hpOutline" size="sign">
            See the full gallery
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </Reveal>
      </Container>
    </Band>
  );
}
