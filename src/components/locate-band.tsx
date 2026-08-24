import { ParkingCircle } from "lucide-react";

import { Container, Section, SectionHead } from "@/components/container";
import { IconChip } from "@/components/icons";
import { MapEmbed } from "@/components/map-embed";
import { Reveal } from "@/components/reveal";
import { nearby, site } from "@/lib/site";

/**
 * Locate us. The reference closes on a map plus a stack of nearby outlets;
 * here the stack is the landmarks a driver actually navigates by on this
 * stretch, each with the road it sits on.
 */
export function LocateBand() {
  return (
    <Section tone="surface" id="locate" className="scroll-mt-24">
      <Container>
        <SectionHead
          eyebrow="Locate us"
          title="On the highway, not off it"
          lede={`Direct ${site.highway} frontage with a wide entry and a separate exit, so a loaded truck can swing in and pull out without reversing across traffic.`}
        />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <MapEmbed />
          </Reveal>

          <Reveal delay={80} className="space-y-4">
            <div className="card-base p-6">
              <h3 className="t-h3">On this stretch</h3>
              <p className="mt-1.5 text-[0.84rem] text-ink-2">
                Approximate driving times from the forecourt.
              </p>

              <ul className="mt-5 space-y-4">
                {nearby.map((row) => (
                  <li
                    key={row.place}
                    className="flex items-start justify-between gap-4 border-t border-line pt-4 first:border-0 first:pt-0"
                  >
                    <span className="min-w-0">
                      <span className="block font-display text-[0.92rem] font-semibold text-ink">
                        {row.place}
                      </span>
                      <span className="block text-[0.8rem] text-ink-2">
                        {row.note}
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      <span className="block font-display text-[0.9rem] font-bold text-brand-600">
                        {row.distance}
                      </span>
                      <span className="block text-[0.74rem] text-ink-3">
                        {row.direction}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base flex gap-3.5 p-6">
              <IconChip size="sm" tone="leaf">
                <ParkingCircle aria-hidden="true" />
              </IconChip>
              <div>
                <h3 className="font-display text-[0.95rem] font-bold text-ink">
                  Free parking on the apron
                </h3>
                <p className="mt-1 text-[0.84rem] leading-relaxed text-ink-2">
                  Clear of the islands — for a tea stop, a charge, or waiting
                  out a squall.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
