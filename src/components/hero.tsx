import Image from "next/image";
import { Check, Navigation, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { HpLockup } from "@/components/hp-logo";
import { LinkButton } from "@/components/link-button";
import { photos, services, site } from "@/lib/site";

const proof = [
  "Four fuel grades",
  "Online CNG station",
  "HP e-Charge",
  "Free air & washroom",
];

export function Hero() {
  return (
    <section className="wash-brand relative isolate overflow-hidden text-white">
      {/* The forecourt runs full-bleed behind the copy. */}
      <Image
        src={photos.forecourt}
        alt={`The forecourt at ${site.name}, seen from the ${site.highway} entry`}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(4_24_47/0.94)_0%,rgb(4_24_47/0.86)_38%,rgb(4_24_47/0.62)_68%,rgb(4_24_47/0.5)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(to_top,rgb(4_24_47/0.95),transparent)]"
      />

      <Container className="relative py-12 lg:py-16">
        <div className="max-w-184">
          <HpLockup className="animate-fade-up mb-6" />

          <h1
            className="t-display animate-fade-up text-white"
            style={{ animationDelay: "0.06s" }}
          >
            Fuel, gas, charge and a cup of chai —{" "}
            <span className="text-flame-500">one stop</span> on {site.highway}.
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-[56ch] text-[1.03rem] leading-relaxed text-brand-100/90"
            style={{ animationDelay: "0.14s" }}
          >
            {site.name} is an authorised Hindustan Petroleum outlet at{" "}
            {site.locality}, {site.landmark}. {services.length} services on one
            forecourt, twelve amenities that cost you nothing, and the lights
            stay on every hour of the year.
          </p>

          <ul
            className="animate-fade-up mt-7 grid max-w-[40rem] gap-x-6 gap-y-2.5 sm:grid-cols-2"
            style={{ animationDelay: "0.2s" }}
          >
            {proof.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[0.92rem] text-brand-100"
              >
                <Check
                  className="size-4 shrink-0 text-flame-500"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <div
            className="animate-fade-up mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "0.26s" }}
          >
            <LinkButton
              href={site.mapsLink}
              external
              variant="flame"
              size="pill-lg"
            >
              <Navigation aria-hidden="true" />
              Get directions
            </LinkButton>
            <LinkButton
              href={site.phoneHref}
              variant="onDark"
              size="pill-lg"
              className="border"
            >
              <Phone aria-hidden="true" />
              {site.phone}
            </LinkButton>
          </div>
        </div>
      </Container>

      {/* The outlet card hangs past the band, so it needs the room. */}
      <div className="h-10 lg:h-6" aria-hidden="true" />
    </section>
  );
}
