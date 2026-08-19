import Image from "next/image";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * The dealership's own mark — gold on a dark plate, as it is on the sign.
 * The artwork's interior is cut out, so it needs a dark surface behind it:
 * on a light background the black letterforms would read inverted.
 */
export function LogoMark({
  className,
  size = 40,
  plate = true,
  alt = site.name,
}: {
  className?: string;
  /** Height in px. Width follows the artwork's 1.4:1 ratio. */
  size?: number;
  /** Draws the dark tile the artwork needs. Turn off on dark surfaces. */
  plate?: boolean;
  alt?: string;
}) {
  const width = Math.round(size * (1122 / 800));

  return (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden rounded-[4px]",
        plate && "bg-asphalt px-1 py-0.5",
        className,
      )}
      style={{ width: plate ? width + 8 : width, height: size }}
    >
      <Image
        src="/images/logo-alpha.png"
        alt={alt}
        fill
        sizes={`${width + 8}px`}
        priority
        className="object-contain"
      />
    </span>
  );
}

/** The full signage lockup, for dark surfaces only. */
export function LogoLockup({
  className,
  width = 260,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <Image
      src="/images/logo-alpha.png"
      alt={site.name}
      width={width}
      height={Math.round((width * 800) / 1122)}
      className={cn("h-auto", className)}
    />
  );
}
