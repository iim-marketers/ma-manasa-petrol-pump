import type { Metadata } from "next";

import { Container, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { gallery, photos, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of the forecourt, fuel islands, HP Power dispensers, the online CNG station and the HP e-Charge bay at Ma Manasa Auto Fuel Service, NH-12 Muragachha.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Gallery"
        title="Have a look before you pull in"
        lede="The forecourt, the islands, the CNG bay, the charger and the PUC booth — photographed at the pump, exactly as they are."
        image={photos.canopy}
        imageAlt=""
      />

      <Section tone="surface">
        <Container>
          <Reveal className="grid grid-cols-2 gap-3 sm:auto-rows-52 sm:grid-cols-4 lg:auto-rows-62">
            {gallery.map((tile, i) => (
              <Photo
                key={tile.caption}
                src={tile.src}
                alt={tile.alt}
                caption={tile.caption}
                priority={i < 3}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className={cn(
                  "h-36 sm:h-auto",
                  i === 0 && "col-span-2 h-52 sm:row-span-2",
                )}
              />
            ))}
          </Reveal>

          <p className="mt-8 text-center text-[0.86rem] text-ink-2">
            All photographs taken at {site.name}, {site.highway} {site.locality}
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
