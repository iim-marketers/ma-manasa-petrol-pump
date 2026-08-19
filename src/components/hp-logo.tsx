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
        "relative block shrink-0 overflow-hidden rounded-[3px] bg-white",
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
        "inline-flex items-center gap-2.5 rounded-[4px] bg-white py-1.5 pr-3.5 pl-2",
        "shadow-[0_1px_0_rgb(18_23_28/0.12),inset_0_0_0_1px_rgb(18_23_28/0.09)]",
        className,
      )}
    >
      <HpLogo size={38} alt="" />
      <span className="leading-[1.18]">
        <span className="block font-display text-[0.68rem] font-extrabold tracking-[0.11em] text-hp-blue uppercase">
          Authorised Dealer
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.09em] text-ink-mute uppercase">
          Hindustan Petroleum Corporation Ltd.
        </span>
      </span>
    </span>
  );
}
