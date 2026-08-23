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
      <Container className="relative grid items-center gap-14 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div>
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
            className="animate-fade-up mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2"
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

        {/* Photo panel */}
        <div
          className="animate-fade-up relative"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/12 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.8)] sm:aspect-16/11">
            <Image
              src={photos.forecourt}
              alt={`The forecourt at ${site.name}, seen from the ${site.highway} entry`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>

      {/* The status card hangs past the panel, so the band needs the room. */}
      <div className="h-10 lg:h-6" aria-hidden="true" />
    </section>
  );
}
