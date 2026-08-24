import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { site } from "@/lib/site";

/** Banner used at the top of every inner page, with a breadcrumb. */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  image: string;
  imageAlt: string;
  crumb: string;
}) {
  return (
    <section className="wash-brand relative isolate overflow-hidden text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-18 mix-blend-luminosity"
      />

      <Container className="py-12 lg:py-16">
        <span className="t-eyebrow mb-3 text-brand-200">{eyebrow}</span>
        <h1 className="t-display max-w-[20ch] text-white">{title}</h1>
        <p className="mt-4 max-w-[62ch] text-[1.02rem] leading-relaxed text-brand-100/85">
          {lede}
        </p>

        {/* Status + location, given more weight than plain grey chips. */}
        <div className="mt-7 flex flex-wrap items-center gap-2.5 text-[0.86rem]">
          <span className="chip-onDark border-leaf-500/45 bg-leaf-500/18 font-semibold text-white">
            <i
              className="animate-dot-bright size-2 rounded-full bg-leaf-300"
              aria-hidden="true"
            />
            Open 24×7
          </span>

          <span className="chip-onDark border-white/20 bg-white/10 text-brand-100">
            <MapPin className="size-3.5 text-flame-500" aria-hidden="true" />
            <span className="font-semibold text-white">{site.highway}</span>
            <span className="text-brand-200/60" aria-hidden="true">
              ·
            </span>
            {site.locality}
          </span>
        </div>
      </Container>
    </section>
  );
}
