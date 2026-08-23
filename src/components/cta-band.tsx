import { Navigation, Phone } from "lucide-react";

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
    <section className="wash-brand text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="t-h2 max-w-[20ch] text-white">{title}</h2>
            <p className="mt-3.5 max-w-[56ch] text-brand-100/85">{body}</p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <LinkButton
              href={site.mapsLink}
              external
              variant="flame"
              size="pill-lg"
            >
              <Navigation aria-hidden="true" />
              Get directions
            </LinkButton>

            {secondary === "contact" ? (
              <LinkButton
                href="/contact"
                variant="onDarkSolid"
                size="pill-lg"
              >
                Contact us
              </LinkButton>
            ) : (
              <LinkButton
                href={site.phoneHref}
                variant="onDarkSolid"
                size="pill-lg"
              >
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
