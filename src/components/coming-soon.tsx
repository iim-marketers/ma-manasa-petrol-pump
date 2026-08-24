import { cn } from "@/lib/utils";

/** Marker for a service that is still being built. */
export function ComingSoon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-pill bg-flame-500 px-3 py-1.5",
        "font-display text-[0.7rem] font-semibold text-white shadow-[0_4px_12px_-4px_rgb(242_103_34/0.8)]",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-white/85" aria-hidden="true" />
      Coming soon
    </span>
  );
}
