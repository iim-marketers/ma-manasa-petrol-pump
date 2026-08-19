import type { Metadata } from "next";
import { Clock, CreditCard, Mail, MapPin, Phone } from "lucide-react";

import { Band, Container } from "@/components/container";
import { EnquiryForm } from "@/components/enquiry-form";
import { LinkButton } from "@/components/link-button";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Find Ma Manasa Auto Fuel Service on NH-12 at Muragachha, near Kalyani More. Phone, email, opening hours, payment options and directions.",
};

const rows = [
  {
    icon: MapPin,
    label: "Address",
    value: site.name,
    note: site.addressLines.join(", "),
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    note: "",
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    note: "Add your email before publishing",
    href: `mailto:${site.email}`,
  },
  { icon: Clock, label: "Hours", value: site.hours, note: site.hoursNote },
  { icon: CreditCard, label: "Payments", value: site.payments, note: null },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        plate="Find us"
        title={
          <>
            Pull in at
            <br />
            {site.locality}.
          </>
        }
        lede={`We are on the ${site.highway} stretch at ${site.locality}, close to Kalyani More. Entry from both directions of the highway, and somebody at the island whatever the hour.`}
        image={photos.building}
        imageAlt=""
      />

      <Band className="bg-paper">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <span className="plate">Get in touch</span>
            <h2 className="h-md mt-5">Everything you need to reach us.</h2>

            <dl className="mt-7 border-t border-hairline">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-x-4 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="flex items-center gap-2 pt-0.5 font-display text-[0.67rem] font-extrabold tracking-[0.15em] text-ink-mute uppercase">
                    <row.icon
                      className="size-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    {row.label}
                  </dt>
                  <dd>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="block font-display text-[1.03rem] font-extrabold tracking-[-0.01em] hover:text-hp-blue"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <b className="block font-display text-[1.03rem] font-extrabold tracking-[-0.01em]">
                        {row.value}
                      </b>
                    )}
                    {row.note ? (
                      <small className="mt-0.5 block text-[0.84rem] text-ink-mute">
                        {row.note}
                      </small>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton
                href={site.mapsLink}
                external
                variant="hp"
                size="sign"
              >
                <MapPin aria-hidden="true" />
                Get directions
              </LinkButton>
              <LinkButton href={site.phoneHref} variant="hpOutline" size="sign">
                <Phone aria-hidden="true" />
                Call the pump
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <EnquiryForm />
          </Reveal>
        </Container>
      </Band>

      <Band className="bg-concrete">
        <Container>
          <Reveal className="mb-7">
            <span className="plate plate-amber">On the map</span>
            <h2 className="h-md mt-5">
              {site.locality}, {site.highway}.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <MapEmbed />
          </Reveal>
        </Container>
      </Band>
    </>
  );
}
