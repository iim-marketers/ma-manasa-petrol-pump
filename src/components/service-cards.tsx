import { Check } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";
import { IconMedallion, ServiceGlyph } from "@/components/icons";
import { Photo } from "@/components/photo";
import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ---------------- Copy ---------------- */

const QUALIFIERS = new Set([
  "with",
  "for",
  "from",
  "on",
  "at",
  "in",
  "to",
  "—",
]);

function splitSummary(text: string) {
  const words = text.split(" ");

  // Start at 2 so the bold line is never a single word.
  for (let i = 2; i < words.length - 1; i += 1) {
    if (!QUALIFIERS.has(words[i].toLowerCase())) continue;

    return {
      lead: words.slice(0, i).join(" "),
      // A dash is a break, not a word — it would read as a stray glyph at the
      // head of the second line.
      tail: words.slice(words[i] === "—" ? i + 1 : i).join(" "),
    };
  }

  return { lead: text, tail: "" };
}

/** "HP Power 95" → a "HP Power" plate over a "95" plate. */
function splitTitle(title: string) {
  const graded = title.match(/^(.*\S)\s+(\d+)$/);
  return graded
    ? { name: graded[1], grade: graded[2] }
    : { name: title, grade: null };
}

/* ---------------- Shared parts ---------------- */

/** The faint dot field the photo arc sweeps through. */
function DotField({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgb(11_87_171/0.16)_1px,transparent_1.2px)] [background-size:12px_12px]",
        className,
      )}
    />
  );
}

function ServicePlate({
  service,
  size = "md",
}: {
  service: Service;
  size?: "md" | "lg";
}) {
  const { name, grade } = splitTitle(service.title);

  return (
    <h3 className="flex -skew-x-6 flex-col items-start font-display leading-none tracking-tight">
      <span
        className={cn(
          "rounded-lg bg-brand-700 font-extrabold text-white",
          size === "lg"
            ? "px-3.5 py-2 text-[1.1rem] md:text-[1.3rem]"
            : "px-2.5 py-1.5 text-[0.95rem] @md:px-3 @md:text-[1.1rem]",
        )}
      >
        {name}
      </span>
      {grade ? (
        <span
          className={cn(
            "mt-0.5 rounded-lg font-extrabold text-white",
            size === "lg"
              ? "px-3.5 py-1 text-[2rem] md:text-[2.35rem]"
              : "px-2.5 py-1 text-[1.5rem] @md:px-3 @md:text-[1.95rem]",
          )}
          style={{ backgroundColor: service.accent }}
        >
          {grade}
        </span>
      ) : null}
    </h3>
  );
}

function ServiceHeading({
  service,
  size = "md",
}: {
  service: Service;
  size?: "md" | "lg";
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <IconMedallion size={size === "lg" ? "lg" : "md"}>
        <ServiceGlyph name={service.icon} />
      </IconMedallion>
      <ServicePlate service={service} size={size} />
    </div>
  );
}

function ServicePhoto({
  service,
  side,
  curve,
  stroke,
  sizes,
  className,
}: {
  service: Service;
  /** Which side of the card the photo stands on. */
  side: "left" | "right";
  /** Variant-prefixed curve utility, e.g. `@md:curve-left`. */
  curve: string;
  /** The same curve plus its visibility, for the accent stroke. */
  stroke: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0",
          side === "right"
            ? "right-0 -left-4 border-l-2"
            : "-right-4 left-0 border-r-2",
          stroke,
        )}
        style={{ borderColor: service.accent, opacity: 0.6 }}
      />

      <Photo
        src={service.image}
        alt={service.imageAlt}
        position={service.imagePosition}
        rounded="none"
        sizes={sizes}
        className={cn("absolute inset-0", curve)}
      />

      {service.comingSoon ? (
        <ComingSoon className="absolute top-3 right-3 z-3" />
      ) : null}
    </div>
  );
}

/* ---------------- Layouts ---------------- */

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const { lead, tail } = splitSummary(service.short);

  console.log(service.short, lead, tail);

  return (
    <article
      className={cn(
        "card-base card-hover @container relative isolate flex overflow-hidden",
        className,
      )}
    >
      <DotField className="hidden @md:block mask-[linear-gradient(90deg,transparent_28%,black_52%,black_78%,transparent)]" />

      <div className="flex w-full flex-col @md:grid @md:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
        <ServicePhoto
          service={service}
          side="right"
          curve="@md:curve-left"
          stroke="hidden @md:block @md:curve-left"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="aspect-16/10 shrink-0 @md:order-2 @md:aspect-auto"
        />

        <div className="relative z-2 flex flex-1 flex-col items-start gap-1 lg:gap-4 p-5 @md:order-1 @md:p-7 @md:pr-6">
          <ServiceHeading service={service} />

          <p className="pt-1 md:mt-auto">
            <span className="block font-display text-[1rem] font-medium tracking-tight text-ink">
              {service.short}
            </span>
          </p>
        </div>
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
      className={cn(
        "card-base relative isolate grid overflow-hidden lg:grid-cols-2",
        className,
      )}
    >
      <DotField
        className={cn(
          "hidden lg:block",
          flip
            ? "mask-[linear-gradient(270deg,transparent_44%,black_54%,transparent_72%)]"
            : "mask-[linear-gradient(90deg,transparent_44%,black_54%,transparent_72%)]",
        )}
      />

      <ServicePhoto
        service={service}
        side={flip ? "right" : "left"}
        curve={flip ? "lg:curve-left" : "lg:curve-right"}
        stroke={cn(
          "hidden lg:block",
          flip ? "lg:curve-left" : "lg:curve-right",
        )}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "h-60 sm:h-80 lg:h-full lg:min-h-96 lg:[--curve:4rem]",
          flip && "lg:order-2",
        )}
      />

      <div className="relative z-2 p-6 sm:p-9 lg:p-11">
        <ServiceHeading service={service} size="lg" />

        <p className="mt-5 leading-relaxed text-ink-2">{service.body}</p>

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
      className="card-base card-hover relative isolate scroll-mt-28 overflow-hidden sm:flex"
    >
      <DotField className="hidden sm:block mask-[linear-gradient(90deg,transparent_32%,black_43%,transparent_60%)]" />

      <ServicePhoto
        service={service}
        side="left"
        curve="sm:curve-right"
        stroke="hidden sm:block sm:curve-right"
        sizes="(max-width: 640px) 100vw, 40vw"
        className="h-48 shrink-0 sm:h-auto sm:w-[38%] sm:min-w-60"
      />

      <div className="relative z-2 flex-1 p-6 sm:p-7 sm:pl-9">
        <ServiceHeading service={service} />

        <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-2">
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
