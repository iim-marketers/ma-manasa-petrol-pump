import { facts } from "@/lib/site";
import { cn } from "@/lib/utils";

const accents = ["bg-hp-blue", "bg-hp-red", "bg-sodium", "bg-sign"];

/**
 * Four headline facts. Always two across — the grid sits inside a half-width
 * column on both pages that use it, and four across leaves each card too
 * narrow for a value like "NH-12".
 */
export function FactGrid({ className }: { className?: string }) {
  return (
    <div data-slot="fact-grid" className={cn("grid grid-cols-2 gap-3", className)}>
      {facts.map((fact, i) => (
        <div
          key={fact.label}
          className="@container relative overflow-hidden rounded-[5px] border border-hairline bg-paper p-5"
        >
          <span
            className={cn(
              "absolute inset-y-0 left-0 w-1",
              accents[i % accents.length],
            )}
            aria-hidden="true"
          />
          {/* Sized against the card, not the viewport, so the value can never
              outgrow the box it sits in. */}
          <b className="block font-display text-[clamp(1.35rem,17cqi,1.95rem)] leading-none font-black tracking-[-0.03em] whitespace-nowrap">
            {fact.value}
          </b>
          <span className="mt-1.5 block text-[0.75rem] font-semibold tracking-[0.06em] text-ink-mute uppercase">
            {fact.label}
          </span>
        </div>
      ))}
    </div>
  );
}
