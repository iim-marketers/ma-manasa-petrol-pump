import type { Metadata, Viewport } from "next";
import { Archivo, Doto, Instrument_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { photos, site } from "@/lib/site";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mamanasaautofuel.example"),
  title: {
    default: `${site.name} — HP Petrol Pump, ${site.highway} ${site.locality}, ${site.landmark}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Authorised HP dealer on NH-12 at Muragachha, near Kalyani More. Petrol, diesel, Power 95, Power 100, CNG online station, EV charging, lubricants and PUC. Tea Junction coming soon. Open 24x7.",
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
      "Petrol, diesel, HP Power 95 & 100, an online CNG station, EV charging, lubricants and PUC. Open 24×7 at Muragachha, near Kalyani More.",
    siteName: site.name,
    images: [photos.forecourt],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B4F9E",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSans.variable} ${doto.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        {/* Scroll reveals are driven by IntersectionObserver — without JS the
            content must still be visible. */}
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
