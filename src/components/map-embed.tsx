import { MapPin } from "lucide-react";

import { LinkButton } from "@/components/link-button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MapEmbed({ className }: { className?: string }) {
  const src = `https://maps.google.com/maps?q=${site.lat},${site.lng}&z=${site.zoom}&hl=en&output=embed`;

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-t-md bg-hp-blue px-5 py-4 text-white">
        <span className="flex min-w-0 items-center gap-3">
          <MapPin className="size-5 shrink-0 text-sodium" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block font-display text-[0.86rem] font-extrabold tracking-[0.08em] uppercase">
              {site.name}
            </span>
            <span className="block text-[0.76rem] opacity-85">
              {site.locality} · {site.highway} · {site.landmark}
            </span>
          </span>
        </span>

        <LinkButton href={site.mapsLink} external variant="hpWhite" size="sign-sm">
          Open in Google Maps
        </LinkButton>
      </div>

      <div
        className={cn(
          "relative h-[300px] overflow-hidden rounded-b-md border border-t-0 border-hairline bg-concrete-2",
          "sm:h-[380px] lg:h-[440px]",
        )}
      >
        <iframe
          src={src}
          title={`Map showing ${site.name} at ${site.locality}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0 grayscale-[0.18] contrast-[1.03]"
        />
      </div>

      <p className="mt-3 text-[0.8rem] text-ink-mute">
        Check the pin before publishing — set the exact coordinates in{" "}
        <code className="rounded bg-concrete-2 px-1.5 py-0.5 font-mono text-[0.75rem]">
          src/lib/site.ts
        </code>
        .
      </p>
    </div>
  );
}
