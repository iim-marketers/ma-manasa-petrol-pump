import Link from "next/link";
import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";

type LinkButtonProps = VariantProps<typeof buttonVariants> & {
  href: string;
  /** Opens in a new tab and adds rel="noopener". */
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

/**
 * A Button rendered as an anchor. Base UI needs `nativeButton={false}` when the
 * rendered element is not a real <button>, otherwise it warns and drops the
 * native semantics.
 */
export function LinkButton({
  href,
  external = false,
  variant,
  size,
  className,
  children,
  ...props
}: LinkButtonProps) {
  const anchor = external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" />
  ) : (
    <Link href={href} />
  );

  return (
    <Button
      nativeButton={false}
      render={anchor}
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
