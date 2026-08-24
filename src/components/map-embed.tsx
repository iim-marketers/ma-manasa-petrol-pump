import { MapPin } from "lucide-react";

import { LinkButton } from "@/components/link-button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MapEmbed({ className }: { className?: string }) {
  const src = `https://maps.google.com/maps?q=${site.lat},${site.lng}&z=${site.zoom}&hl=en&output=embed`;

  return (
    <div className={cn("card-base overflow-hidden", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line p-5">
        <span className="flex min-w-0 items-center gap-3">
          <MapPin className="size-5 shrink-0 text-brand-600" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.95rem] font-bold text-ink">
              {site.name}
            </span>
            <span className="block truncate text-[0.82rem] text-ink-2">
              {site.locality} · {site.highway} · {site.landmark}
            </span>
          </span>
        </span>

        <LinkButton href={site.mapsLink} external variant="brand" size="pill-sm">
          Open in Google Maps
        </LinkButton>
      </div>

      <div className="relative h-75 bg-surface-3 sm:h-95 lg:h-115">
        <iframe
          src={src}
          title={`Map showing ${site.name} at ${site.locality}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}
