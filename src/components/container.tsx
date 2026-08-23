import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-310 px-5 sm:px-7 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}

/**
 * A page section. `tone` picks the background so the page alternates white and
 * a light blue-grey without every caller repeating the colour.
 */
export function Section({
  className,
  tone = "surface",
  as: Comp = "section",
  ...props
}: React.ComponentProps<"section"> & {
  as?: React.ElementType;
  tone?: "surface" | "muted" | "brand" | "none";
}) {
  return (
    <Comp
      className={cn(
        "py-12 lg:py-16",
        tone === "surface" && "bg-surface",
        tone === "muted" && "bg-surface-2",
        tone === "brand" && "wash-brand text-white",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Standard section heading: eyebrow, title, and an optional lede that sits to
 * the right on wide screens so the block never becomes a wall of centred text.
 */
export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "split",
  tone = "light",
  className,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "split" | "start" | "center";
  tone?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
}) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-9 lg:mb-11",
        align === "split" &&
          "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-14",
        align === "center" && "mx-auto max-w-[58ch] text-center",
        className,
      )}
    >
      <div className={align === "center" ? undefined : "max-w-[34ch]"}>
        {eyebrow ? (
          <span
            className={cn(
              "t-eyebrow mb-3",
              dark && "text-brand-200",
              align === "center" && "justify-center",
            )}
          >
            {eyebrow}
          </span>
        ) : null}
        <h2 className={cn("t-h2", dark && "text-white")}>{title}</h2>
      </div>

      {lede || action ? (
        <div
          className={cn(
            align === "split" && "lg:max-w-[46ch] lg:pb-1",
            align === "center" && "mt-4",
          )}
        >
          {lede ? (
            <p className={cn("t-lede", dark && "text-brand-100/85")}>{lede}</p>
          ) : null}
          {action ? <div className="mt-5">{action}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
