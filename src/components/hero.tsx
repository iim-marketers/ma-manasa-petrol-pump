import { MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { HpLockup } from "@/components/hp-logo";
import { LinkButton } from "@/components/link-button";
import { RateBoard } from "@/components/rate-board";
import { site } from "@/lib/site";

const lines = [
  <>Fuel up.</>,
  <>Charge up.</>,
  <>
    <em className="text-hp-blue not-italic">Chai</em>{" "}
    <span className="text-hp-red">&amp;</span> go.
  </>,
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="hazard pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-10 pt-10 pb-12 sm:pt-14 lg:grid-cols-[1.12fr_0.88fr] ">
        <div>
          <HpLockup className="mb-4" />

          <div>
            <span className="plate">
              <span className="text-[0.9rem] leading-none">▲</span>
              {site.highway} · {site.landmark}
            </span>
          </div>

          <h1 className="h-xl mt-5">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className="animate-rise block whitespace-nowrap"
                  style={{ animationDelay: `${0.05 + i * 0.1}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="lede animate-fade mt-6"
            style={{ animationDelay: "0.5s" }}
          >
            An HP forecourt at {site.locality} with petrol, diesel, an online
            CNG station and EV charging bays side by side — plus lubricants and
            PUC certificates, and a Tea Junction counter on the way. The lights
            stay on all night, so your run does not have to stop.
          </p>

          <div
            className="animate-fade mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.62s" }}
          >
            <LinkButton href={site.mapsLink} external variant="hp" size="sign">
              <MapPin aria-hidden="true" />
              Get directions
            </LinkButton>
            <LinkButton href="/services" variant="hpOutline" size="sign">
              See what we stock
            </LinkButton>
          </div>

          <p
            className="animate-fade mt-6 text-[0.95rem] font-semibold text-hp-blue"
            style={{ animationDelay: "0.74s" }}
          >
            <span lang="bn">{site.bengali}</span> — safe journey.
          </p>
        </div>

        <div className="w-full">
          <RateBoard />
        </div>
      </Container>
    </section>
  );
}
