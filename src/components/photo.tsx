import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Photo tile. Fills its container, so the parent must set a height or an
 * aspect ratio. Caption slides up on hover / focus.
 */
export function Photo({
  src,
  alt,
  caption,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "group relative isolate overflow-hidden rounded-md bg-concrete-2",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:scale-[1.04]"
      />

      {caption ? (
        <figcaption
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-[rgb(7_12_17/0.85)] to-transparent",
            "px-4 pt-9 pb-3.5 font-display text-[0.76rem] font-bold tracking-[0.1em] text-white uppercase",
            "translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            "max-sm:translate-y-0 max-sm:opacity-100",
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
