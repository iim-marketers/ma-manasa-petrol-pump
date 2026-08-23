import Link from "next/link";
import { ArrowUpRight, FileCheck, Gauge, MapPin, Plug, Truck } from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { quickAccess } from "@/lib/site";

const icons: Record<string, React.ElementType> = {
  gauge: Gauge,
  plug: Plug,
  file: FileCheck,
  truck: Truck,
  pin: MapPin,
};

/**
 * Quick access — the five things people ring up to ask about, as a row of
 * shortcuts on the brand band.
 */
export function QuickAccess() {
  return (
    <section className="wash-brand text-white">
      <Container className="py-12 sm:py-14">
        <Reveal className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="t-eyebrow mb-2 text-brand-200">Quick access</span>
            <h2 className="t-h3 text-white sm:text-[1.5rem]">
              Straight to what you came for
            </h2>
          </div>
          <p className="text-[0.88rem] text-brand-100/75">
            The five things people ring up to ask about.
          </p>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {quickAccess.map((item, i) => {
            const Icon = icons[item.icon] ?? Gauge;
            const body = (
              <>
                <Icon
                  className="size-6 shrink-0 text-flame-500 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="mt-4 block font-display text-[0.95rem] leading-tight font-bold">
                  {item.label}
                </span>
                <span className="mt-1 block text-[0.8rem] text-brand-100/70">
                  {item.note}
                </span>
                <ArrowUpRight
                  className="absolute top-5 right-5 size-4 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-flame-500"
                  aria-hidden="true"
                />
              </>
            );

            const className =
              "group relative block h-full rounded-card border border-white/12 bg-white/6 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/28 hover:bg-white/12";

            return (
              <Reveal key={item.label} delay={(i % 5) * 45} as="li">
                {"external" in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {body}
                  </a>
                ) : (
                  <Link href={item.href} className={className}>
                    {body}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
