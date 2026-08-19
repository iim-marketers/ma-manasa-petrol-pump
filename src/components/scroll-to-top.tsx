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
        "inline-flex items-center gap-2 rounded-[3px] border border-white/15 px-3.5 py-2 font-display text-[0.72rem] font-bold tracking-[0.12em] uppercase transition-colors hover:border-white/30 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sodium",
        className,
      )}
    >
      <ArrowUp aria-hidden="true" className="size-3.5" />
      Back to top
    </button>
  );
}
