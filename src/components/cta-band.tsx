import { MapPin, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Pull in at Muragachha.",
  body = "Entry from both directions of NH-12, room to turn a trailer, and the lights are on whatever the hour.",
  secondary = "contact",
}: {
  title?: string;
  body?: string;
  secondary?: "contact" | "phone";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-hp-blue text-white">
      <div className="hazard-dark absolute inset-0 -z-10" aria-hidden="true" />

      <Container className="py-14 sm:py-16 lg:py-20">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="h-lg max-w-[16ch]">{title}</h2>
            <p className="mt-4 max-w-[52ch] text-white/80">{body}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <LinkButton href={site.mapsLink} external variant="hpWhite" size="sign">
              <MapPin aria-hidden="true" />
              Get directions
            </LinkButton>

            {secondary === "contact" ? (
              <LinkButton href="/contact" variant="hpLight" size="sign">
                Contact us
              </LinkButton>
            ) : (
              <LinkButton href={site.phoneHref} variant="hpLight" size="sign">
                <Phone aria-hidden="true" />
                Call the pump
              </LinkButton>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
