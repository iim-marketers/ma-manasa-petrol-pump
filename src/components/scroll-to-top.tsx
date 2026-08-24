"use client";

import { ArrowUp } from "lucide-react";

import { scrollToTop } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function ScrollToTop({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-4 py-2.5 font-display text-[0.82rem] font-semibold transition-colors hover:border-white/45 hover:bg-white/12 hover:text-white",
        className,
      )}
    >
      <ArrowUp aria-hidden="true" className="size-4" />
      Back to top
    </button>
  );
}
