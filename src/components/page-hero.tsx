import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
        {/* <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-1.5 text-[0.82rem] text-brand-200"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="text-white">{crumb}</span>
        </nav> */}

        <span className="t-eyebrow mb-3 text-brand-200">{eyebrow}</span>
        <h1 className="t-display max-w-[20ch] text-white">{title}</h1>
        <p className="mt-4 max-w-[62ch] text-[1.02rem] leading-relaxed text-brand-100/85">
          {lede}
        </p>

        <p className="mt-6 flex flex-wrap items-center gap-2.5 text-[0.84rem] text-brand-200">
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/18 bg-white/8 px-3.5 py-1.5">
            <i
              className="animate-dot size-1.5 rounded-full bg-leaf-500"
              aria-hidden="true"
            />
            Open 24×7
          </span>
          <span className="rounded-pill border border-white/18 bg-white/8 px-3.5 py-1.5">
            {site.highway} · {site.locality}
          </span>
        </p>
      </Container>
    </section>
  );
}
