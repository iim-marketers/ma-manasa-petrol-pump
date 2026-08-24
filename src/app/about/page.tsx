import type { Metadata } from "next";
import { BadgeCheck, Gauge, Receipt, ShieldCheck } from "lucide-react";

import { Container, Section, SectionHead } from "@/components/container";
import { IconChip } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { amenities, facts, nearby, photos, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ma Manasa Auto Fuel Service is an authorised Hindustan Petroleum dealership on NH-12 at Muragachha, near Kalyani More — petrol, diesel, CNG, HP e-Charge, lubricants and PUC, open 24×7.",
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
        crumb="About"
        eyebrow="About the pump"
        title="One stop on the Kalyani run"
        lede={`An authorised Hindustan Petroleum dealership on ${site.highway} at ${site.locality}, built so that nobody driving this stretch has to make a second stop.`}
        image={photos.canopy}
        imageAlt=""
      />

      <StatBar />
      <Story />
      <Promises />
      <Location />
    </>
  );
}

/* ---------------- Headline numbers ---------------- */

function StatBar() {
  const stats = [
    { value: "24×7", label: "Open, every day of the year" },
    { value: String(services.length), label: "Services on one forecourt" },
    {
      value: String(amenities.length),
      label: "Amenities, none of them charged",
    },
    { value: site.highway, label: "Direct highway frontage" },
  ];

  return (
    <div className="border-b border-line bg-surface">
      <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <span className="block font-display text-[2rem] leading-none font-extrabold tracking-[-0.035em] text-brand-700">
              {stat.value}
            </span>
            <span className="mt-2 block text-[0.86rem] text-ink-2">
              {stat.label}
            </span>
          </div>
        ))}
      </Container>
    </div>
  );
}

/* ---------------- Story ---------------- */

function Story() {
  return (
    <Section tone="surface">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <h2 className="t-h2">Who we are</h2>

          <div className="mt-5 space-y-4 text-ink-2">
            <p>
              {site.name} sits on the {site.highway} stretch at {site.locality},
              a short hop from Kalyani More. Trucks heading north towards
              Krishnanagar, cars coming down towards Barasat and Kolkata, and
              every two-wheeler in between — they all pass this piece of road.
            </p>
            <p>
              The forecourt was laid out for that mix. Four fuel grades on
              islands 1 and 2, an online CNG station fed straight off the
              pipeline, and an HP e-Charge point with two guns under its own
              canopy. A Tea Junction counter for the driver who has been at the
              wheel since dawn is being built now and will open shortly.
            </p>
            <p>
              Behind them sit the lube shop, the covered air point, the washroom
              and our own smoke test centre for PUC certificates — a dozen
              amenities that cost nothing and are the reason the same trucks
              stop here on the way back. The lights stay on and somebody is at
              the island every hour of the year, including the ones nobody wants
              to work.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <li key={fact.label} className="card-base p-5">
                <span className="block font-display text-[1.35rem] leading-none font-extrabold tracking-[-0.03em] text-ink">
                  {fact.value}
                </span>
                <span className="mt-1.5 block text-[0.82rem] text-ink-2">
                  {fact.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="space-y-3">
          <Photo
            src={photos.canopy}
            alt="Islands 1 and 2 under the canopy with the HP tanker unloading"
            caption="Under the canopy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-64 sm:h-80"
          />
          <div className="grid grid-cols-2 gap-3">
            <Photo
              src={photos.powerGrades}
              alt="The Power 100 and Power 95 dispenser"
              caption="Power 95 & Power 100"
              position="center 38%"
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-40 sm:h-52"
            />
            <Photo
              src={photos.cng}
              alt="The HP CNG dispenser on its own bay"
              caption="The CNG bay"
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-40 sm:h-52"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- Promises ---------------- */

function Promises() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHead
          eyebrow="How we run it"
          title="Quantity and quality, in that order"
          lede="The two things every customer at a pump actually worries about. Here is how each is handled here."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {promises.map((promise, i) => (
            <Reveal key={promise.title} delay={(i % 2) * 60}>
              <article className="card-base h-full p-6 sm:p-7">
                <IconChip size="md" tone="brand">
                  <promise.icon aria-hidden="true" />
                </IconChip>
                <h3 className="t-h3 mt-4">{promise.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-2">
                  {promise.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- Location ---------------- */

function Location() {
  return (
    <Section tone="surface">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <span className="t-eyebrow mb-3">Where we are</span>
          <h2 className="t-h2">On the highway, not off it</h2>
          <p className="t-lede mt-4">
            The pump has direct {site.highway} frontage with a wide entry and a
            separate exit, so a loaded truck can swing in and pull out without
            reversing across traffic. Kalyani More is minutes away; Krishnanagar
            is straight up the road and Barasat straight down it.
          </p>
          <Photo
            src={photos.building}
            alt="The station building and forecourt seen from the apron"
            caption="Watch for the HP canopy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mt-7 h-52 sm:h-64"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="card-base p-6 sm:p-8">
            <h3 className="t-h3">On this stretch</h3>
            <p className="mt-1.5 text-[0.86rem] text-ink-2">
              Approximate driving times from the forecourt.
            </p>

            <ul className="mt-6 space-y-4">
              {nearby.map((row) => (
                <li
                  key={row.place}
                  className="flex items-start justify-between gap-4 border-t border-line pt-4 first:border-0 first:pt-0"
                >
                  <span className="min-w-0">
                    <span className="block font-display text-[0.95rem] font-semibold text-ink">
                      {row.place}
                    </span>
                    <span className="block text-[0.82rem] text-ink-2">
                      {row.note}
                    </span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block font-display text-[0.92rem] font-bold text-brand-600">
                      {row.distance}
                    </span>
                    <span className="block text-[0.76rem] text-ink-3">
                      {row.direction}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
