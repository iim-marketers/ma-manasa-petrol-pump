import Image from "next/image";

import { Container } from "@/components/container";
import { site } from "@/lib/site";

/** Banner used at the top of every inner page. */
export function PageHero({
  plate,
  title,
  lede,
  image,
  imageAlt,
}: {
  plate: string;
  title: React.ReactNode;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-asphalt text-concrete">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-30"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-asphalt via-asphalt/85 to-asphalt/40"
        aria-hidden="true"
      />

      <Container className="py-14 sm:py-20 lg:py-24">
        <span className="plate plate-amber">{plate}</span>
        <h1 className="h-lg mt-5 text-white">{title}</h1>
        <p className="lede mt-5 text-[#a6b2bc]">{lede}</p>
        <p className="mt-6 font-display text-[0.72rem] font-extrabold tracking-[0.16em] text-sodium uppercase">
          {site.highway} · {site.locality} · Open 24×7
        </p>
      </Container>
    </section>
  );
}
