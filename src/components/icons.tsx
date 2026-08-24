import {
  Cctv,
  Coffee,
  ConciergeBell,
  Droplet,
  Droplets,
  FileText,
  Flame,
  Fuel,
  Gauge,
  LampCeiling,
  Leaf,
  Plug,
  Receipt,
  Smartphone,
  Sun,
  Toilet,
  Truck,
  Umbrella,
  Wind,
  Zap,
} from "lucide-react";

import type { AmenityIcon, ServiceIcon } from "@/lib/site";
import { cn } from "@/lib/utils";

const serviceIcons: Record<ServiceIcon, React.ElementType> = {
  fuel: Fuel,
  gauge: Gauge,
  zap: Zap,
  flame: Flame,
  leaf: Leaf,
  plug: Plug,
  coffee: Coffee,
  droplet: Droplet,
  file: FileText,
};

const amenityIcons: Record<AmenityIcon, React.ElementType> = {
  wind: Wind,
  droplets: Droplets,
  toilet: Toilet,
  truck: Truck,
  "lamp-ceiling": LampCeiling,
  smartphone: Smartphone,
  "concierge-bell": ConciergeBell,
  flame: Flame,
  sun: Sun,
  umbrella: Umbrella,
  receipt: Receipt,
  cctv: Cctv,
};

export function ServiceGlyph({
  name,
  className,
}: {
  name: ServiceIcon;
  className?: string;
}) {
  const Icon = serviceIcons[name];
  return <Icon className={className} aria-hidden="true" />;
}

export function AmenityGlyph({
  name,
  className,
}: {
  name: AmenityIcon;
  className?: string;
}) {
  const Icon = amenityIcons[name];
  return <Icon className={className} aria-hidden="true" />;
}

/**
 * The rounded icon square used throughout the cards. `tone` swaps it between
 * the light surfaces and the blue bands.
 */
export function IconChip({
  children,
  tone = "brand",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  tone?: "brand" | "flame" | "leaf" | "dark" | "solid";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-xl",
        size === "sm" && "size-9 [&_svg]:size-4.5",
        size === "md" && "size-11 [&_svg]:size-5",
        size === "lg" && "size-13 [&_svg]:size-6",
        tone === "brand" && "bg-brand-50 text-brand-600",
        tone === "flame" && "bg-flame-50 text-flame-600",
        tone === "leaf" && "bg-leaf-50 text-leaf-700",
        tone === "dark" && "bg-white/10 text-brand-100",
        tone === "solid" && "bg-brand-600 text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
