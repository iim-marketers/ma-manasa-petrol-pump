import type { Metadata } from "next";

import { Band, Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { gallery, photos, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of the forecourt, fuel islands, HP Power dispensers and the online CNG station at Ma Manasa Auto Fuel Service, NH-12 Muragachha.",
};

/** Column and height rules per tile shape, tuned for a 6-column grid. */
const spanClass: Record<string, string> = {
  wide: "col-span-2 h-52 sm:col-span-4 sm:h-72 lg:h-[22rem]",
  tall: "col-span-2 h-52 sm:col-span-2 sm:h-72 lg:h-[22rem]",
  normal: "col-span-1 h-36 sm:col-span-2 sm:h-52 lg:h-56",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        plate="Around the pump"
        title={
          <>
            Have a look
            <br />
            before you pull in.
          </>
        }
        lede="The forecourt, the islands, the CNG station and the building — photographed at the pump, exactly as they are."
        image={photos.forecourt}
        imageAlt=""
      />

      <Band className="bg-concrete">
        <Container>
          <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-6">
            {gallery.map((tile, i) => (
              <Photo
                key={tile.src}
                src={tile.src}
                alt={tile.alt}
                caption={tile.caption}
                priority={i < 2}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className={cn(spanClass[tile.span] ?? spanClass.normal)}
              />
            ))}
          </Reveal>

          <p className="mt-8 text-center text-[0.85rem] text-ink-mute">
            All photographs taken at {site.name}, {site.highway}{" "}
            {site.locality}.
          </p>
        </Container>
      </Band>

      <CtaBand
        title="The real thing is better."
        body="Pull in off NH-12 at Muragachha and see the forecourt for yourself — any hour, any day."
      />
    </>
  );
}
