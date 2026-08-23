import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Official HPCL mark. Sits on a white plate — the logo artwork itself is
 * drawn on white, so never place it directly on a dark surface.
 */
export function HpLogo({
  className,
  size = 40,
  alt = "Hindustan Petroleum",
}: {
  className?: string;
  size?: number;
  alt?: string;
}) {
  return (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden rounded-lg bg-white",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/hp-logo.png"
        alt={alt}
        fill
        sizes={`${size}px`}
        unoptimized
        priority
        className="object-contain"
      />
    </span>
  );
}

/** Full "Authorised Dealer" lockup used at the top of the hero. */
export function HpLockup({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-xl bg-white py-2 pr-4 pl-2.5",
        "shadow-[0_2px_10px_-4px_rgb(6_42_82/0.35)]",
        className,
      )}
    >
      <HpLogo size={38} alt="" />
      <span className="leading-[1.18]">
        <span className="block font-display text-[0.72rem] font-bold tracking-[0.1em] text-brand-700 uppercase">
          Authorised Dealer
        </span>
        <span className="block text-[0.66rem] font-medium text-ink-2">
          Hindustan Petroleum Corporation Ltd.
        </span>
      </span>
    </span>
  );
}
