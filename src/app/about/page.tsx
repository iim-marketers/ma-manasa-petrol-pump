import type { Metadata } from "next";
import { BadgeCheck, Gauge, Receipt, ShieldCheck } from "lucide-react";

import { Band, Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { DirectionSign } from "@/components/direction-sign";
import { FactGrid } from "@/components/fact-grid";
import { HpLockup } from "@/components/hp-logo";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ma Manasa Auto Fuel Service is an authorised Hindustan Petroleum dealership on NH-12 at Muragachha, near Kalyani More — petrol, diesel, CNG, EV charging, lubricants and PUC, open 24×7.",
};

const promises = [
  {
    icon: Gauge,
    title: "The meter starts at zero",
    body: "Every fill begins with the meter reset and shown to you. Ask the attendant to run it past you again and they will, without being asked twice.",
  },
  {
    icon: ShieldCheck,
    title: "Density and calibration on record",
    body: "Density checks and calibration records are kept on site. If a reading ever looks off, ask for the manager and the paperwork comes out.",
  },
  {
    icon: BadgeCheck,
    title: "Every litre through HP's chain",
    body: "Fuel arrives through Hindustan Petroleum's own supply chain — sealed at the terminal, seals checked on arrival.",
  },
  {
    icon: Receipt,
    title: "A printed bill, every time",
    body: "Cash, UPI, card or fleet card — you get a printed receipt for the fill, which matters when the trip has to be claimed later.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        plate="About the pump"
        title={
          <>
            One stop on
            <br />
            the Kalyani run.
          </>
        }
        lede={`An authorised Hindustan Petroleum dealership on ${site.highway} at ${site.locality}, built so that nobody driving this stretch has to make a second stop.`}
        image={photos.forecourt}
        imageAlt=""
      />
      <Story />
      <Promises />
      <Location />
      <CtaBand
        title="Come and see the forecourt."
        body="We are on the NH-12 stretch at Muragachha, close to Kalyani More, with entry from both directions."
      />
    </>
  );
}

function Story() {
  return (
    <Band className="bg-concrete">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <HpLockup className="mb-5" />
          <h2 className="h-md">Who we are</h2>

          <div className="mt-5 space-y-4">
            <p className="lede">
              {site.name} sits on the {site.highway} stretch at {site.locality}, a short hop
              from Kalyani More. Trucks heading north towards Krishnanagar, cars coming down
              towards Barasat and Kolkata, and every two-wheeler in between — they all pass
              this piece of road.
            </p>
            <p className="lede">
              The forecourt was laid out for that mix. Petrol and diesel on the main
              islands, an online CNG station fed straight off the pipeline, and EV bays for
              cars that plug in. A Tea Junction counter for the driver who has been at the
              wheel since dawn is being built now and will open shortly.
            </p>
            <p className="lede">
              Lubricants, PUC certificates, air and water are all on the same apron. The
              lights stay on and somebody is at the island every hour of the year, including
              the ones nobody wants to work.
            </p>
          </div>

          <FactGrid className="mt-8" />
        </Reveal>

        <Reveal delay={80} className="space-y-3">
          <Photo
            src={photos.entrySign}
            alt="The HP sign and rate board at the entry to the forecourt"
            caption="The rate board at the entry"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-64 sm:h-80"
          />
          <div className="grid grid-cols-2 gap-3">
            <Photo
              src={photos.canopy}
              alt="Vehicles at the islands under the canopy"
              caption="Under the canopy"
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-40 sm:h-52"
            />
            <Photo
              src={photos.dispenser}
              alt="An attendant filling a two-wheeler at the petrol island"
              caption="At the island"
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-40 sm:h-52"
            />
          </div>
        </Reveal>
      </Container>
    </Band>
  );
}

function Promises() {
  return (
    <Band className="bg-paper">
      <Container>
        <Reveal className="mb-9 max-w-[60ch]">
          <span className="plate">How we run it</span>
          <h2 className="h-lg mt-5">
            Quantity and quality,
            <br />
            in that order.
          </h2>
          <p className="lede mt-4">
            The two things every customer at a pump actually worries about. Here is how each
            is handled here.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {promises.map((promise, i) => (
            <Reveal key={promise.title} delay={(i % 2) * 70}>
              <article className="h-full rounded-md border border-hairline bg-concrete p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-[5px] bg-hp-blue/10 text-hp-blue">
                  <promise.icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-[1.1rem] font-extrabold tracking-[-0.02em]">
                  {promise.title}
                </h3>
                <p className="mt-2 text-[0.89rem] leading-relaxed text-ink-mute">
                  {promise.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Band>
  );
}

function Location() {
  return (
    <Band className="bg-concrete">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="plate plate-amber">Where we are</span>
          <h2 className="h-lg mt-5">
            On the highway,
            <br />
            not off it.
          </h2>
          <p className="lede mt-4">
            The pump has direct {site.highway} frontage with a wide entry and a separate
            exit, so a loaded truck can swing in and pull out without reversing across
            traffic. Kalyani More is minutes away; Krishnanagar is straight up the road and
            Barasat straight down it.
          </p>
          <Photo
            src={photos.building}
            alt="The station building and forecourt seen from the apron"
            caption="Watch for the HP canopy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mt-6 h-52 sm:h-64"
          />
        </Reveal>

        <Reveal delay={80}>
          <DirectionSign />
        </Reveal>
      </Container>
    </Band>
  );
}
