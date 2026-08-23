import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-surface-3 aria-expanded:bg-secondary",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",

        /* --- Retail UI set --- */
        /** Primary action. Warm, so it never disappears into the blue. */
        flame:
          "rounded-pill bg-flame-500 text-white shadow-[0_8px_18px_-8px_rgb(242_103_34/0.75)] hover:bg-flame-600 hover:shadow-[0_12px_24px_-10px_rgb(242_103_34/0.8)]",
        /** Brand action for secondary weight on light surfaces. */
        brand:
          "rounded-pill bg-brand-600 text-white shadow-[0_8px_18px_-10px_rgb(11_87_171/0.8)] hover:bg-brand-700",
        /** Quiet action on light surfaces. */
        soft: "rounded-pill border-line bg-white text-brand-700 hover:border-brand-200 hover:bg-brand-50",
        /** Quiet action on the dark hero / blue bands. */
        onDark:
          "rounded-pill border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/18",
        /** Solid white on the dark hero / blue bands. */
        onDarkSolid:
          "rounded-pill bg-white text-brand-800 shadow-[0_10px_24px_-12px_rgb(0_0_0/0.6)] hover:bg-brand-50",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-10 rounded-pill",

        /* --- Retail UI sizes --- */
        pill: "h-auto gap-2 px-6 py-3 font-display text-[0.9rem] font-semibold tracking-[-0.01em] [&_svg:not([class*='size-'])]:size-4",
        "pill-sm":
          "h-auto gap-1.5 px-4 py-2.5 font-display text-[0.82rem] font-semibold tracking-[-0.01em] [&_svg:not([class*='size-'])]:size-3.5",
        "pill-lg":
          "h-auto gap-2.5 px-7 py-3.5 font-display text-[0.98rem] font-semibold tracking-[-0.01em] [&_svg:not([class*='size-'])]:size-4.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
