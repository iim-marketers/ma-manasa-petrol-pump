import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-295 px-5 sm:px-8 lg:px-14",
        className,
      )}
      {...props}
    />
  );
}

/** Vertical rhythm for a full-width band. */
export function Band({
  className,
  as: Comp = "section",
  ...props
}: React.ComponentProps<"section"> & { as?: React.ElementType }) {
  return (
    <Comp className={cn("py-16 sm:py-20 lg:py-28", className)} {...props} />
  );
}
