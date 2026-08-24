"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fuel, House, Images, Info, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { scrollToTop } from "@/lib/scroll";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Keyed by href so `nav` stays free of presentation concerns. */
const icons: Record<string, LucideIcon> = {
  "/": House,
  "/about": Info,
  "/services": Fuel,
  "/gallery": Images,
  "/contact": Mail,
};

/**
 * Thumb-reachable navigation for phones and small tablets. Replaces the drawer
 * so the five pages are one tap away — most visitors arrive on the road.
 * Hidden from `lg` up, where the header carries the full nav.
 */
export function MobileTabBar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <ul className="mx-auto grid h-tabbar max-w-md grid-cols-5">
        {nav.map((item) => {
          const Icon = icons[item.href];
          const active = isActive(item.href);

          return (
            <li key={item.href} className="contents">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={(event) => {
                  // Tapping the current tab returns to the top, as in a native app.
                  if (pathname === item.href) {
                    event.preventDefault();
                    scrollToTop();
                  }
                }}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 pt-1.5 pb-2 transition-colors",
                  active ? "text-brand-700" : "text-ink-3 hover:text-ink-2",
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-12 items-center justify-center rounded-pill transition-colors",
                    active && "bg-brand-50",
                  )}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span
                  className={cn(
                    "font-display text-[0.68rem] leading-none tracking-[-0.01em]",
                    active ? "font-bold" : "font-semibold",
                  )}
                >
                  {item.short}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
