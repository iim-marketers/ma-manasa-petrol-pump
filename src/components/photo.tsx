import Image from "next/image";

import { cn } from "@/lib/utils";

export function Photo({
  src,
  alt,
  caption,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  position,
  rounded = "card",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
  rounded?: "card" | "none" | "lg";
}) {
  return (
    <figure
      className={cn(
        "group relative isolate overflow-hidden bg-surface-3",
        rounded === "card" && "rounded-card",
        rounded === "lg" && "rounded-2xl",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={position ? { objectPosition: position } : undefined}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:scale-[1.05]"
      />

      {caption ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-2 bg-linear-to-t from-[rgb(6_20_36/0.82)] via-[rgb(6_20_36/0.35)] to-transparent px-4 pt-10 pb-3.5 text-[0.82rem] font-medium text-white">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
