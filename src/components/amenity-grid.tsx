import { AmenityGlyph, IconChip } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { amenities } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AmenityGrid({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <ul
      className={cn(
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {amenities.map((amenity, i) => (
        <Reveal key={amenity.title} delay={(i % 4) * 50} as="li">
          <div
            className={cn(
              "flex h-full gap-4 rounded-card p-5 transition duration-300",
              dark
                ? "border border-white/12 bg-white/6 hover:border-white/25 hover:bg-white/10"
                : "card-base card-hover",
            )}
          >
            <IconChip size="sm" tone={dark ? "dark" : "brand"}>
              <AmenityGlyph name={amenity.icon} />
            </IconChip>

            <div className="min-w-0">
              <h3
                className={cn(
                  "font-display text-[0.98rem] font-bold tracking-[-0.015em]",
                  dark ? "text-white" : "text-ink",
                )}
              >
                {amenity.title}
              </h3>
              <p
                className={cn(
                  "mt-1 text-[0.85rem] leading-relaxed",
                  dark ? "text-brand-100/75" : "text-ink-2",
                )}
              >
                {amenity.note}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
