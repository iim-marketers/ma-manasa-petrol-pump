import Link from "next/link";
import { ArrowRight, Coins, Plug, Wallet, Zap } from "lucide-react";

import { Container, Section, SectionHead } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { offers, type OfferIcon } from "@/lib/site";

const icons: Record<OfferIcon, React.ElementType> = {
  coins: Coins,
  wallet: Wallet,
  bolt: Zap,
  plug: Plug,
};

export function OfferRail() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHead
          eyebrow="Offers & programmes"
          title="What you get beyond the litre"
          lede="Loyalty points, payment from the car, both Power grades and a charger on site — the things an HP forecourt carries that a roadside pump does not."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, i) => {
            const Icon = icons[offer.icon];
            return (
              <Reveal key={offer.slug} delay={(i % 4) * 55}>
                <Link
                  href={offer.href}
                  className="card-base card-hover group flex h-full flex-col p-6"
                >
                  <span
                    className="grid size-12 place-items-center rounded-2xl text-white"
                    style={{
                      background: offer.accent,
                      boxShadow: `0 10px 22px -12px ${offer.accent}`,
                    }}
                  >
                    <Icon className="size-5.5" aria-hidden="true" />
                  </span>

                  <span className="mt-5 block font-display text-[0.72rem] font-bold tracking-[0.1em] text-ink-3 uppercase">
                    {offer.kicker}
                  </span>
                  <h3 className="t-h3 mt-1.5">{offer.title}</h3>
                  <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-ink-2">
                    {offer.body}
                  </p>

                  <span
                    className="mt-5 inline-flex items-center gap-1.5 font-display text-[0.84rem] font-semibold"
                    style={{ color: offer.accent }}
                  >
                    {offer.cta}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
