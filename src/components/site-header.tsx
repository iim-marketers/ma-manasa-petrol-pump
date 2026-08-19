"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MapPin, Menu, Phone } from "lucide-react";

import { LinkButton } from "@/components/link-button";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { scrollToTop } from "@/lib/scroll";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 h-nav border-b border-hairline bg-concrete/90 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-full w-full max-w-[1180px] items-center gap-5 px-5 sm:px-8 lg:px-14">
        {/* Brand */}
        <Link
          href="/"
          className="mr-auto flex min-w-0 items-center gap-3"
          aria-label={`${site.name}, home`}
          onClick={(event) => {
            // Already home: the route never changes, so navigation is a no-op.
            // Send the reader back to the top instead.
            if (pathname === "/") {
              event.preventDefault();
              scrollToTop();
            }
          }}
        >
          <LogoMark size={42} className="shadow-[0_1px_0_rgb(18_23_28/0.14)]" />
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.9rem] leading-tight font-black tracking-[-0.02em] uppercase">
              {site.shortName}
            </span>
            <span className="block truncate text-[0.63rem] font-bold tracking-[0.1em] text-hp-blue uppercase">
              HP · {site.highway} {site.locality}
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "group relative rounded-[3px] px-3 py-2 font-display text-[0.78rem] font-bold tracking-[0.12em] uppercase transition-colors",
                isActive(item.href)
                  ? "text-asphalt"
                  : "text-asphalt/75 hover:text-asphalt",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute right-3 bottom-1 left-3 h-0.5 origin-left bg-hp-red transition-transform duration-300",
                  isActive(item.href)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>
          ))}
        </nav>

        <LinkButton
          href={site.mapsLink}
          external
          variant="hp"
          size="sign-sm"
          className="hidden sm:inline-flex"
        >
          <MapPin aria-hidden="true" />
          Directions
        </LinkButton>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="hpOutline"
                size="icon-lg"
                className="lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[86%] max-w-sm bg-paper p-0 gap-0"
          >
            <div className="flex items-center gap-3 border-b border-hairline p-5">
              <LogoMark size={42} />
              <SheetTitle className="font-display text-[0.9rem] leading-tight font-black tracking-[-0.02em] uppercase">
                {site.shortName}
                <span className="mt-0.5 block text-[0.62rem] font-bold tracking-widest text-hp-blue">
                  HP · {site.highway} {site.locality}
                </span>
              </SheetTitle>
            </div>

            {/* Padding sits on each row rather than the nav, so the divider
                rules run edge to edge across the sheet. */}
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={<Link href={item.href} />}
                  className={cn(
                    "border-b border-hairline px-5 py-4 font-display text-[0.95rem] font-bold tracking-widest uppercase transition-colors",
                    isActive(item.href)
                      ? "text-hp-red"
                      : "text-asphalt hover:text-hp-blue",
                  )}
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 p-5">
              <LinkButton
                href={site.mapsLink}
                external
                variant="hp"
                size="sign"
                className="w-full"
              >
                <MapPin aria-hidden="true" />
                Get directions
              </LinkButton>
              <LinkButton
                href={site.phoneHref}
                variant="hpOutline"
                size="sign"
                className="w-full"
              >
                <Phone aria-hidden="true" />
                Call the pump
              </LinkButton>
              <p className="pt-1 text-center text-[0.78rem] text-ink-mute">
                Open 24×7 · {site.bengali}
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
