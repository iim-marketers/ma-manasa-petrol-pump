import type { Metadata } from "next";
import { Check } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";
import { Band, Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Marquee } from "@/components/marquee";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { ServiceIcon } from "@/components/service-icon";
import { photos, services } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Petrol, diesel, HP Power 95 and 100, an online CNG station, EV charging, lubricants, PUC certificates and 24×7 service — everything on one forecourt at Muragachha. Tea Junction coming soon.",
};

export default function ServicesPage() {
  const detailed = services.filter((service) => service.wide);

  return (
    <>
      <PageHero
        plate="What we stock"
        title={
          <>
            Everything on
            <br />
            one forecourt.
          </>
        }
        lede="Many services on a single apron. Roll in, get what you need, get back on the highway — no second stop, no detour into town."
        image={photos.cngFill}
        imageAlt=""
      />

      <Marquee />

      {/* Full grid */}
      <Band className="bg-paper">
        <Container>
          <Reveal className="mb-9 max-w-[58ch]">
            <span className="plate">The full list</span>
            <h2 className="h-lg mt-5">Many services, one stop.</h2>
            <p className="lede mt-4">
              Fuel on the main islands, gas and charging on their own bays, and
              the counters that make the wait worth something.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={(i % 4) * 50}
                className={service.wide ? "sm:col-span-2" : undefined}
              >
                <ServiceCard service={service} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Band>

      {/* Deep dives on the two flagship bays */}
      <Band className="bg-concrete">
        <Container>
          <Reveal className="mb-9 max-w-[58ch]">
            <span className="plate plate-amber">The two new bays</span>
            <h2 className="h-lg mt-5">
              Gas and charging,
              <br />
              on their own aprons.
            </h2>
            <p className="lede mt-4">
              Both sit clear of the petrol islands, so a queue at one never
              blocks the other.
            </p>
          </Reveal>

          <div className="space-y-6">
            {detailed.map((service, i) => (
              <Reveal key={service.slug}>
                <article
                  style={{ "--accent": service.accent } as React.CSSProperties}
                  className={cn(
                    "grid gap-0 overflow-hidden rounded-md border border-hairline bg-paper",
                    "lg:grid-cols-2",
                  )}
                >
                  <Photo
                    src={service.image}
                    alt={service.imageAlt}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={cn(
                      "h-56 rounded-none sm:h-72 lg:h-full lg:min-h-[22rem]",
                      i % 2 === 1 && "lg:order-2",
                    )}
                  />

                  <div className="p-6 sm:p-9 lg:p-10">
                    <span
                      className="mb-4 grid size-12 place-items-center rounded-[5px]"
                      style={{
                        background:
                          "color-mix(in srgb, var(--accent) 14%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      <ServiceIcon name={service.icon} className="size-6" />
                    </span>

                    <h3 className="h-md">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-mute">
                      {service.body}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-2.5 text-[0.92rem]"
                        >
                          <Check
                            className="mt-1 size-4 shrink-0"
                            style={{ color: "var(--accent)" }}
                            aria-hidden="true"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <span
                      className="mt-5 inline-block rounded-[2px] px-2.5 py-1.5 font-display text-[0.61rem] font-extrabold tracking-[0.14em] uppercase"
                      style={{
                        color: "var(--accent)",
                        background:
                          "color-mix(in srgb, var(--accent) 12%, transparent)",
                      }}
                    >
                      {service.tag}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Band>

      {/* Everything else, as a detail list */}
      <Band className="bg-paper">
        <Container>
          <Reveal className="mb-9 max-w-[58ch]">
            <span className="plate">The rest of the apron</span>
            <h2 className="h-lg mt-5">Fuel, oil, chai, paperwork.</h2>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services
              .filter((service) => !service.wide)
              .map((service, i) => (
                <Reveal key={service.slug} delay={(i % 4) * 50}>
                  <article
                    style={
                      { "--accent": service.accent } as React.CSSProperties
                    }
                    className="flex h-full flex-col overflow-hidden rounded-md border border-hairline bg-concrete"
                  >
                    <Photo
                      src={service.image}
                      alt={service.imageAlt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="h-40 shrink-0 rounded-none"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-[1.05rem] font-extrabold tracking-[-0.02em]">
                          {service.title}
                        </h3>
                        {service.comingSoon ? <ComingSoon /> : null}
                      </div>
                      <p className="mt-2 flex-1 text-[0.86rem] leading-relaxed text-ink-mute">
                        {service.body}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex gap-2 text-[0.82rem] text-ink-mute"
                          >
                            <Check
                              className="mt-0.5 size-3.5 shrink-0"
                              style={{ color: "var(--accent)" }}
                              aria-hidden="true"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
          </div>
        </Container>
      </Band>

      <CtaBand
        title="Not sure we stock it?"
        body="Bulk diesel, fleet accounts, PUC timings or lubricant grades — ask, and we will tell you straight."
        secondary="phone"
      />
    </>
  );
}
