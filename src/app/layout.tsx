import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { MobileTabBar } from "@/components/mobile-tab-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { photos, site } from "@/lib/site";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mamanasaautofuel.example"),
  title: {
    default: `${site.name} — HP Petrol Pump, ${site.highway} ${site.locality}, ${site.landmark}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Authorised HP dealer on NH-12 at Muragachha, near Kalyani More. Petrol, diesel, Power 95, Power 100, CNG online station, HP e-Charge, lubricants and PUC. Free air, washroom and truck parking. Open 24x7.",
  keywords: [
    "HP petrol pump",
    "Muragachha",
    "Kalyani More",
    "NH-12",
    "CNG station",
    "EV charging",
    "PUC certificate",
    "West Bengal",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} — HP Petrol Pump on ${site.highway}`,
    description:
      "Petrol, diesel, HP Power 95 & 100, an online CNG station, HP e-Charge, lubricants and PUC. Open 24×7 at Muragachha, near Kalyani More.",
    siteName: site.name,
    images: [photos.forecourt],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b57ab",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full`}>
      {/* The bottom padding clears the fixed mobile tab bar. */}
      <body className="flex min-h-full flex-col pb-[calc(var(--spacing-tabbar)+env(safe-area-inset-bottom))] lg:pb-0">
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileTabBar />
        <Toaster
          position="bottom-right"
          richColors
          mobileOffset={{ bottom: "calc(var(--spacing-tabbar) + 1rem)" }}
        />
      </body>
    </html>
  );
}
