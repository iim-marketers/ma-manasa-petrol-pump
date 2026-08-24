import type { Metadata } from "next";
import { Clock, CreditCard, Mail, MapPin, Phone } from "lucide-react";

import { Container, Section, SectionHead } from "@/components/container";
import { EnquiryForm } from "@/components/enquiry-form";
import { IconChip } from "@/components/icons";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { paymentMethods, photos, site } from "@/lib/site";

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
    note: site.altPhone,
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
  {
    icon: CreditCard,
    label: "Payments",
    value: paymentMethods.join(" · "),
    note: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        eyebrow="Get in touch"
        title={`Pull in at ${site.locality}`}
        lede={`We are on the ${site.highway} stretch at ${site.locality}, close to Kalyani More. Entry from both directions of the highway, and somebody at the island whatever the hour.`}
        image={photos.building}
        imageAlt=""
      />

      <Section tone="surface">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <span className="t-eyebrow mb-3">Reach us</span>
            <h2 className="t-h2">Everything you need to get here</h2>

            <dl className="mt-7 space-y-3">
              {rows.map((row) => (
                <div key={row.label} className="card-base flex gap-3.5 p-5">
                  <IconChip size="sm" tone="brand">
                    <row.icon aria-hidden="true" />
                  </IconChip>
                  <div className="min-w-0">
                    <dt className="font-display text-[0.72rem] font-bold tracking-widest text-ink-3 uppercase">
                      {row.label}
                    </dt>
                    <dd className="mt-1">
                      {row.href ? (
                        <a
                          href={row.href}
                          className="block font-display text-[1rem] font-bold text-ink transition-colors hover:text-brand-600"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <b className="block font-display text-[1rem] font-bold text-ink">
                          {row.value}
                        </b>
                      )}
                      {row.note ? (
                        <small className="mt-0.5 block text-[0.84rem] text-ink-2">
                          {row.note}
                        </small>
                      ) : null}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={80}>
            <EnquiryForm />
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHead
            eyebrow="On the map"
            title={`${site.locality}, ${site.highway}`}
            lede="Right on the highway with entry from both directions — no detour into town."
          />

          <div className="grid gap-4 lg:grid-cols-1">
            <Reveal>
              <MapEmbed />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
