"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { LinkButton } from "@/components/link-button";
import { LogoMark } from "@/components/logo";
import { scrollToTop } from "@/lib/scroll";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

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
        <div className="mx-auto flex h-nav w-full max-w-310 items-center gap-3 px-5 sm:gap-5 sm:px-7 lg:px-10">
          <Link
            href="/"
            className="mr-auto flex min-w-0 items-center gap-3"
            aria-label={`${site.name}, home`}
            onClick={(event) => {
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

          {/* The page links live in the bottom tab bar on small screens, so the
              header keeps only the two actions a driver actually needs. */}
          <LinkButton
            href={site.phoneHref}
            variant="soft"
            size="icon-lg"
            className="border lg:hidden"
            aria-label={`Call ${site.phone}`}
          >
            <Phone aria-hidden="true" />
          </LinkButton>

          <LinkButton
            href={site.mapsLink}
            external
            variant="flame"
            size="pill-sm"
            className="px-3 sm:px-4"
            aria-label="Get directions"
          >
            <Navigation aria-hidden="true" />
            <span className="hidden sm:inline">Directions</span>
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
