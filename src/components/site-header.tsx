"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Clock, MapPin, Menu, Navigation, Phone } from "lucide-react";

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

/**
 * Two-tier header, the shape the HP dealer listings use: a thin dark utility
 * strip carrying address, phone and open status, and a white bar under it with
 * the mark, the menu and the one action that matters.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-brand-900 text-brand-100 md:block">
        <div className="mx-auto flex h-topbar w-full max-w-310 items-center gap-6 px-5 text-[0.78rem] sm:px-7 lg:px-10">
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 text-brand-200" aria-hidden="true" />
            {site.addressLines[0]}
          </span>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-brand-200" aria-hidden="true" />
            {site.phone}
          </a>
          <span className="ml-auto flex items-center gap-2 font-medium text-white">
            <i
              className="animate-dot size-1.5 rounded-full bg-leaf-500"
              aria-hidden="true"
            />
            <Clock className="size-3.5 text-brand-200" aria-hidden="true" />
            {site.hours} · {site.hoursNote}
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex h-nav w-full max-w-310 items-center gap-5 px-5 sm:px-7 lg:px-10">
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
            <LogoMark size={40} />
            <span className="min-w-0">
              <span className="block truncate font-display text-[1rem] leading-tight font-extrabold tracking-[-0.025em] text-ink">
                {site.name}
              </span>
              <span className="block truncate text-[0.72rem] text-ink-2">
                Authorised HP dealer · {site.highway} {site.locality}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-pill px-3.5 py-2 font-display text-[0.86rem] font-semibold whitespace-nowrap transition-colors",
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-2 hover:bg-surface-2 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <LinkButton
            href={site.mapsLink}
            external
            variant="flame"
            size="pill-sm"
            className="hidden sm:inline-flex"
          >
            <Navigation aria-hidden="true" />
            Directions
          </LinkButton>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="soft"
                  size="icon-lg"
                  className="border lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[88%] max-w-sm gap-0 bg-white p-0"
            >
              <div className="flex items-center gap-3 border-b border-line p-5">
                <LogoMark size={40} />
                <SheetTitle className="min-w-0 font-display text-[0.95rem] leading-tight font-extrabold tracking-[-0.02em] text-ink">
                  {site.shortName}
                  <span className="mt-0.5 block truncate text-[0.72rem] font-medium text-ink-2">
                    {site.highway} · {site.locality}
                  </span>
                </SheetTitle>
              </div>

              <nav className="flex flex-col p-3" aria-label="Mobile">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={<Link href={item.href} />}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-left font-display text-[0.98rem] font-semibold transition-colors",
                      isActive(item.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink hover:bg-surface-2",
                    )}
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto space-y-3 border-t border-line p-5">
                <LinkButton
                  href={site.phoneHref}
                  variant="soft"
                  size="pill"
                  className="w-full border"
                >
                  <Phone aria-hidden="true" />
                  {site.phone}
                </LinkButton>
                <LinkButton
                  href={site.mapsLink}
                  external
                  variant="flame"
                  size="pill"
                  className="w-full"
                >
                  <Navigation aria-hidden="true" />
                  Get directions
                </LinkButton>
                <p className="pt-1 text-center text-[0.78rem] text-ink-2">
                  {site.hours} · {site.hoursNote}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
