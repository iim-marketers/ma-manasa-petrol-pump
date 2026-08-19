import { cn } from "@/lib/utils";

/**
 * Marker for a service that is still being built. Amber so it reads as a
 * roadwork sign rather than as one of the accent-coloured service tags.
 */
export function ComingSoon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-[2px] border border-sodium/45 bg-sodium/15 px-2.5 py-1.5",
        "font-display text-[0.61rem] font-extrabold tracking-[0.14em] text-[#8A5A00] uppercase",
        className,
      )}
    >
      <span
        className="size-1.5 rounded-full bg-sodium ring-2 ring-sodium/30"
        aria-hidden="true"
      />
      Coming soon
    </span>
  );
}
