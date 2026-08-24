import { Check } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";
import { IconChip, ServiceGlyph } from "@/components/icons";
import { Photo } from "@/components/photo";
import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "card-base card-hover flex flex-col overflow-hidden",
        className,
      )}
    >
      <div className="relative aspect-16/10 shrink-0">
        <Photo
          src={service.image}
          alt={service.imageAlt}
          position={service.imagePosition}
          rounded="none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="absolute inset-0"
        />
        {service.comingSoon ? (
          <ComingSoon className="absolute top-3 right-3 z-3" />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <IconChip size="sm" tone="brand">
            <ServiceGlyph name={service.icon} />
          </IconChip>
          <h3 className="t-h3">{service.title}</h3>
        </div>

        <p className="mt-3 flex-1 text-[0.89rem] leading-relaxed text-ink-2">
          {service.short}
        </p>
      </div>
    </article>
  );
}

export function ServiceDetail({
  service,
  flip = false,
  className,
}: {
  service: Service;
  flip?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn("card-base grid overflow-hidden lg:grid-cols-2", className)}
    >
      <Photo
        src={service.image}
        alt={service.imageAlt}
        position={service.imagePosition}
        rounded="none"
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "h-60 sm:h-80 lg:h-full lg:min-h-96",
          flip && "lg:order-2",
        )}
      />

      <div className="p-6 sm:p-9 lg:p-11">
        <div className="flex items-start justify-between gap-4">
          <IconChip size="lg" tone="brand">
            <ServiceGlyph name={service.icon} />
          </IconChip>
          {service.comingSoon ? <ComingSoon /> : null}
        </div>

        <h3 className="t-h2 mt-5">{service.title}</h3>
        <p className="mt-3 leading-relaxed text-ink-2">{service.body}</p>

        <ul className="mt-6 space-y-3">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-[0.93rem]">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-700">
                <Check className="size-3" aria-hidden="true" />
              </span>
              {detail}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-block rounded-pill bg-brand-50 px-3.5 py-1.5 font-display text-[0.78rem] font-semibold text-brand-700">
          {service.tag}
        </span>
      </div>
    </article>
  );
}

export function ServiceRow({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="card-base card-hover scroll-mt-28 overflow-hidden sm:flex"
    >
      <Photo
        src={service.image}
        alt={service.imageAlt}
        position={service.imagePosition}
        rounded="none"
        sizes="(max-width: 640px) 100vw, 40vw"
        className="h-48 shrink-0 sm:h-auto sm:w-[38%] sm:min-w-60"
      />

      <div className="flex-1 p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <IconChip size="sm" tone="brand">
            <ServiceGlyph name={service.icon} />
          </IconChip>
          <h3 className="t-h3">{service.title}</h3>
          {service.comingSoon ? <ComingSoon /> : null}
        </div>

        <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-2">
          {service.body}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {service.details.map((detail) => (
            <li
              key={detail}
              className="flex items-center gap-2 text-[0.85rem] text-ink-2"
            >
              <Check
                className="size-3.5 shrink-0 text-leaf-500"
                aria-hidden="true"
              />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
