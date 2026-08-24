/**
 * Single source of truth for everything the dealership needs to edit.
 * Phone, email and coordinates are placeholders — replace before publishing.
 */

export const site = {
  name: "Ma Manasa Auto Fuel Service",
  shortName: "Ma Manasa Auto Fuel",
  tagline: "Authorised HP dealer",
  locality: "Muragachha",
  highway: "NH-12",
  landmark: "near Kalyani More",
  addressLines: ["Muragachha, NH-12, near Kalyani More", "Nadia, West Bengal"],
  phone: "+91-8100221804",
  phoneHref: "tel:+918100221804",
  altPhone: "+91-9831057070",
  altPhoneHref: "tel:+919831057070",
  email: "XXXXX@example.com",
  hours: "Open 24 hours",
  hoursNote: "All seven days, including holidays",
  bengali: "আপনার যাত্রা শুভ হোক",
  mapsLink: "https://maps.app.goo.gl/dMk23EjpCQnBgdPi9",
  // Right-click the pin in Google Maps on desktop to copy exact coordinates.
  lat: 22.696431,
  lng: 88.416236,
  zoom: 16,
} as const;

/** `short` is what the mobile tab bar shows — five labels have to fit one row. */
export const nav = [
  { href: "/", label: "Home", short: "Home" },
  { href: "/about", label: "About", short: "About" },
  { href: "/services", label: "Services & Amenities", short: "Services" },
  { href: "/gallery", label: "Gallery", short: "Gallery" },
  { href: "/contact", label: "Contact Us", short: "Contact" },
] as const;

/**
 * How Google and the directories classify the outlet. Shown as chips beside
 * the map, the same way the HP dealer listings carry them.
 */
export const outletCategories = [
  "Petrol Pump",
  "Fuel Supplier",
  "Diesel Fuel Supplier",
  "CNG Station",
  "EV Charging Station",
] as const;

export const paymentMethods = [
  "Cash",
  "UPI",
  "Debit Card",
  "Credit Card",
  // "Wallets",
  // "Fleet cards",
] as const;

/** Sample board rates — replace with the forecourt board each morning. */
export const rates = [
  { name: "Petrol", note: null, price: 113.95, unit: "/L", highlight: false },
  { name: "Diesel", note: null, price: 100.27, unit: "/L", highlight: false },
  {
    name: "HP Power 95",
    note: "High-octane petrol",
    price: 124.18,
    unit: "/L",
    highlight: true,
  },
  {
    name: "HP Power 100",
    note: "Performance grade",
    price: 128.75,
    unit: "/L",
    highlight: true,
  },
  {
    name: "CNG",
    note: "Online station",
    price: 86.0,
    unit: "/kg",
    highlight: false,
  },
] as const;

/**
 * The pump's own photographs. Every image on the site comes from this set —
 * drop new shots into `public/new-images/` and point a key here at the new
 * file to swap one out everywhere it is used.
 */
const photoDir = "/new-images";

export const photos = {
  /** Wide view from the entry: the full canopy, both islands and the building. */
  forecourt: `${photoDir}/Forecourt-3.jpeg`,
  /** Under the canopy — islands 1 and 2, the HP tanker unloading, bikes queued. */
  canopy: `${photoDir}/Forecourt-1.jpeg`,
  /** The canopy beside the station building: lube display and solar roof. */
  building: `${photoDir}/Forecourt-2.jpeg`,
  /** The Power 100 / Power 95 dispenser with the meter facing the customer. */
  powerGrades: `${photoDir}/power-100-95.jpeg`,
  /** The HP CNG dispenser on its own bay. */
  cng: `${photoDir}/CNG.jpeg`,
  /** The HP e-Charge electric vehicle charging station. */
  evCharge: `${photoDir}/HP-Echarge.jpeg`,
  /** The covered air point beside the forecourt. */
  air: `${photoDir}/Air-pressure.jpeg`,
  /** The PUC — smoke test — booth at the edge of the forecourt. */
  puc: `${photoDir}/PUC.jpeg`,
} as const;

export type ServiceIcon =
  | "fuel"
  | "gauge"
  | "zap"
  | "flame"
  | "leaf"
  | "plug"
  | "coffee"
  | "droplet"
  | "file";

/** Services are grouped so each block of the page has one clear subject. */
export type ServiceGroup = "fuel" | "alt" | "forecourt";

export type Service = {
  slug: string;
  group: ServiceGroup;
  title: string;
  short: string;
  body: string;
  tag: string;
  accent: string;
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  /** CSS object-position, when two services share one photograph. */
  imagePosition?: string;
  /** Gets the large treatment — a half-width photo panel rather than a card. */
  featured?: boolean;
  /** Not open yet — the card carries a "coming soon" marker. */
  comingSoon?: boolean;
  details: string[];
};

export const serviceGroups: Record<
  ServiceGroup,
  { label: string; heading: string; blurb: string }
> = {
  fuel: {
    label: "Fuels",
    heading: "Four grades on the islands",
    blurb:
      "Petrol, diesel and both HP Power grades, drawn from calibrated dispensers on islands 1 and 2 — with the meter reset to zero in front of you every time.",
  },
  alt: {
    label: "Gas & electric",
    heading: "CNG and charging, on their own bays",
    blurb:
      "An online CNG station and an HP e-Charge point, both clear of the petrol islands so a queue at one never blocks the other.",
  },
  forecourt: {
    label: "On the forecourt",
    heading: "Everything else you stop for",
    blurb:
      "Genuine HP lubricants, PUC certificates issued the same visit, and a Tea Junction counter going up now.",
  },
};

export const services: Service[] = [
  {
    slug: "petrol",
    group: "fuel",
    title: "Petrol",
    short:
      "Regular petrol for cars, bikes and autos, with the meter shown before every fill.",
    body: "Regular petrol for cars, bikes and autos. Calibrated nozzles, and the meter is reset to zero and shown to you before every fill — ask any time and the attendant will run it past you again.",
    tag: "All vehicles",
    accent: "#E1251B",
    icon: "fuel",
    image: photos.canopy,
    imageAlt: "Two-wheelers at the petrol island under the HP canopy",
    details: [
      "Zero shown before every fill",
      "Two islands, so the queue keeps moving",
      "Regular calibration checks on record",
    ],
  },
  {
    slug: "diesel",
    group: "fuel",
    title: "Diesel",
    short:
      "Standard HP diesel on both islands, with truck and tanker friendly access.",
    body: "Standard HP diesel on both islands, with truck-friendly access and quick turnaround. The apron is wide enough for a full-length trailer to swing in off the highway and back out without reversing across traffic.",
    tag: "Bulk welcome",
    accent: "#0B4F9E",
    icon: "gauge",
    image: photos.forecourt,
    imageAlt: "The wide apron with room for trucks to turn off the highway",
    details: [
      "Truck and tanker access from both directions",
      "Bulk and fleet supply on account",
      "Density and calibration records kept on site",
    ],
  },
  {
    slug: "hp-power-95",
    group: "fuel",
    title: "HP Power 95",
    short: "Higher-octane petrol with a detergent additive pack.",
    body: "Higher-octane petrol with a detergent additive pack — smoother idle, cleaner injectors and a noticeable difference on engines that have covered some distance.",
    tag: "Premium grade",
    accent: "#C8901A",
    icon: "zap",
    image: photos.powerGrades,
    imageAlt: "The Power 95 nozzle and meter on the Power dispenser",
    // Both grades come off one dispenser, so they share its photograph. The
    // tile is landscape and the shot is portrait, so only the vertical offset
    // moves the crop: Power 95 frames the badge and nozzles, Power 100 the
    // meter above them.
    imagePosition: "center 44%",
    details: [
      "95 octane with multifunctional additives",
      "Cleans injectors over regular use",
      "Own nozzle on the Power dispenser",
    ],
  },
  {
    slug: "hp-power-100",
    group: "fuel",
    title: "HP Power 100",
    short: "Our top performance grade for high-compression engines.",
    body: "Our top performance grade, for high-compression engines and anyone who simply wants the best fill on the board. Stocked year round, not just on request.",
    tag: "Top of the board",
    accent: "#8A4B12",
    icon: "flame",
    image: photos.powerGrades,
    imageAlt: "The Power 100 nozzle and meter on the Power dispenser",
    imagePosition: "center 28%",
    details: [
      "100 octane performance fuel",
      "For turbocharged and high-compression engines",
      "Always in stock",
    ],
  },
  {
    slug: "cng",
    group: "alt",
    title: "CNG — online station",
    short:
      "An online CNG station fed directly from the pipeline, not from trucked-in cascades.",
    body: "An online CNG station, fed directly from the gas pipeline rather than trucked-in cascades. That means steadier pressure, faster fills and fewer dry spells. It sits on a dedicated bay, so CNG queues never block the petrol islands.",
    tag: "Pipeline fed",
    accent: "#106B3C",
    icon: "leaf",
    image: photos.cng,
    imageAlt: "The HP CNG dispenser with its rate and quantity display",
    featured: true,
    details: [
      "Pipeline fed — steadier pressure than cascade stations",
      "Dedicated bay away from the petrol islands",
      "Cars, autos and commercial CNG vehicles",
      "Rate per kilogram shown on the dispenser",
    ],
  },
  {
    slug: "ev-charging",
    group: "alt",
    title: "HP e-Charge",
    short:
      "A two-gun HP e-Charge point for electric cars, right on the forecourt.",
    body: "An HP e-Charge station under its own canopy, with two guns so a second car does not have to wait for the first to finish. Park up, plug in, and spend the wait under the lights with people around instead of in an empty lot off the highway.",
    tag: "Two guns",
    accent: "#12925a",
    icon: "plug",
    image: photos.evCharge,
    imageAlt: "The HP e-Charge electric vehicle charging station",
    featured: true,
    details: [
      "Two charging guns on one unit",
      "Covered bay, lit and staffed through the night",
      "Room to park clear of the fuel islands",
      "Card and UPI payment at the unit",
    ],
  },
  {
    slug: "lubricants",
    group: "forecourt",
    title: "Lubricants",
    short: "HP engine oils, gear oils, coolants and greases from the lube bay.",
    body: "HP engine oils, gear oils, coolants and greases for cars, bikes and commercial vehicles, stocked in the shop beside the canopy. Top-ups are done at the bay while you wait, and we will show you the sealed pack before it is opened.",
    tag: "Genuine stock",
    accent: "#C8901A",
    icon: "droplet",
    image: photos.building,
    imageAlt: "The HP lubricants shop and display beside the canopy",
    imagePosition: "88% 62%",
    details: [
      "Genuine HP lubricants, sealed packs",
      "Top-ups done at the bay",
      "Gear oil, coolant and grease in stock",
    ],
  },
  {
    slug: "puc",
    group: "forecourt",
    title: "PUC certificate",
    short:
      "Our own smoke test centre on the forecourt — certificates issued on the spot.",
    body: "Our own smoke test centre — ধোঁয়া পরীক্ষা কেন্দ্র — at the edge of the forecourt, with the meter on site. Bring the vehicle and its papers, and walk out with the certificate on the same visit, no second trip.",
    tag: "Same visit",
    accent: "#106B3C",
    icon: "file",
    image: photos.puc,
    imageAlt:
      "The Ma Manasa smoke test centre booth, signed ধোঁয়া পরীক্ষা কেন্দ্র",
    // The booth is a tall shot in a landscape tile, so only the vertical
    // offset moves the crop — 30% lands on the Bengali headline and the name.
    imagePosition: "center 30%",
    details: [
      "Autos, cars, bikes and commercial vehicles",
      "Smoke meter on site — no sending the vehicle away",
      "Certificate issued on the same visit",
    ],
  },
  {
    slug: "tea-junction",
    group: "forecourt",
    title: "Tea Junction",
    short: "Hot chai, coffee and snacks — the counter is being built now.",
    body: "A Tea Junction counter for hot chai, coffee and snacks is being put up on the forecourt. Once it opens it will run through the night with the pump, which matters more at 3 a.m. than it does at noon.",
    tag: "Chai & snacks",
    accent: "#8A5A2B",
    icon: "coffee",
    image: photos.building,
    imageAlt:
      "The forecourt building where the Tea Junction counter is coming up",
    imagePosition: "40% 80%",
    comingSoon: true,
    details: [
      "Chai, coffee and cold drinks",
      "Packaged snacks",
      "Will stay open through the night",
    ],
  },
];

export function servicesInGroup(group: ServiceGroup) {
  return services.filter((service) => service.group === group);
}

/**
 * Amenities are the things you do not pay for but notice when they are
 * missing. Icon names map to lucide-react components in `<AmenityGrid>`.
 */
export type AmenityIcon =
  | "wind"
  | "droplets"
  | "toilet"
  | "truck"
  | "lamp-ceiling"
  | "smartphone"
  | "concierge-bell"
  | "flame"
  | "sun"
  | "umbrella"
  | "receipt"
  | "cctv";

export type Amenity = {
  icon: AmenityIcon;
  title: string;
  note: string;
};

export const amenities: Amenity[] = [
  {
    icon: "wind",
    title: "Air point",
    note: "Covered air machine on its own bay — free for every vehicle, no fill required.",
  },
  {
    icon: "droplets",
    title: "Drinking water",
    note: "Clean water on the apron, day and night. Fill a bottle before the next stretch.",
  },
  {
    icon: "toilet",
    title: "Washroom",
    note: "Kept clean and open through the night, not locked after the last shift.",
  },
  {
    icon: "truck",
    title: "Truck & trailer parking",
    note: "A full-length trailer can swing in, park clear of the islands and pull straight out.",
  },
  {
    icon: "lamp-ceiling",
    title: "Lit all night",
    note: "The whole apron stays lit — the canopy, the CNG bay, the charger and the parking.",
  },
  {
    icon: "smartphone",
    title: "UPI, cards & wallets",
    note: "PhonePe, Paytm, BHIM and every UPI app, plus debit, credit and fleet cards.",
  },
  {
    icon: "concierge-bell",
    title: "Attendant service",
    note: "Somebody is at the island every hour. Nobody is asked to work the nozzle themselves.",
  },
  {
    icon: "flame",
    title: "Fire safety on hand",
    note: "Extinguishers at every island and bay, checked on schedule and staff trained on them.",
  },
  {
    icon: "sun",
    title: "Solar powered",
    note: "Rooftop solar on the station building carries a share of the forecourt's load.",
  },
  {
    icon: "umbrella",
    title: "Shade & seating",
    note: "Somewhere to sit out of the sun while the tank fills or the car charges.",
  },
  {
    icon: "receipt",
    title: "Printed bill every time",
    note: "A receipt for every fill — which matters when the trip has to be claimed later.",
  },
  {
    icon: "cctv",
    title: "Under camera",
    note: "The forecourt is covered by CCTV, so a night stop is a safe one.",
  },
];

export const facts = [
  { value: "24×7", label: "Always open" },
  { value: "5", label: "Fuel grades" },
  { value: "NH-12", label: "Highway frontage" },
  { value: "PUC", label: "Issued on site" },
] as const;

/**
 * The gallery, in grid order. Spans are tuned so each row of the six-column
 * grid fills exactly: wide (4) + tall (2), then three normals, and so on.
 */
/**
 * The gallery, in grid order. Nine tiles: the first takes a 2x2 block and the
 * other eight fill the remaining cells of a four-column grid exactly, so no
 * row is ever left short.
 */
export const gallery = [
  {
    src: photos.forecourt,
    alt: "The forecourt seen from the entry off the highway",
    caption: "The forecourt from NH-12",
  },
  {
    src: photos.cng,
    alt: "The HP CNG dispenser on its dedicated bay",
    caption: "The online CNG station",
  },
  {
    src: photos.evCharge,
    alt: "The two-gun HP e-Charge electric vehicle charging station",
    caption: "HP e-Charge",
  },
  {
    src: photos.canopy,
    alt: "Islands 1 and 2 under the canopy with the HP tanker unloading",
    caption: "Under the canopy",
  },
  {
    src: photos.powerGrades,
    alt: "The Power 100 and Power 95 dispenser",
    caption: "Power 95 & Power 100",
  },
  {
    src: photos.building,
    alt: "The station building beside the canopy, with lube display and solar roof",
    caption: "The lube shop & solar roof",
  },
  {
    src: photos.puc,
    alt: "The Ma Manasa smoke test centre booth at the edge of the forecourt",
    caption: "The PUC booth",
  },
  {
    src: photos.air,
    alt: "The covered air point beside the forecourt",
    caption: "The air point",
  },
  {
    src: photos.forecourt,
    alt: "The canopy and station building from the apron",
    caption: "The apron",
  },
] as const;

/**
 * Programmes and offers, the strip the HP dealer sites run under the banner.
 * Copy here describes what the programme is; swap in the pump's live promo
 * before publishing.
 */
export type Offer = {
  slug: string;
  kicker: string;
  title: string;
  body: string;
  accent: string;
  icon: OfferIcon;
  href: string;
  external?: boolean;
  cta: string;
};

export type OfferIcon = "coins" | "wallet" | "bolt" | "plug";

export const offers: Offer[] = [
  {
    slug: "club-hp",
    kicker: "Loyalty",
    title: "Club HP rewards",
    body: "Collect points on every fill at the island and redeem them against your next one. Ask the attendant to scan your number before he starts the nozzle.",
    accent: "#e1251b",
    icon: "coins",
    href: "/contact",
    cta: "Ask at the counter",
  },
  {
    slug: "hp-pay",
    kicker: "Pay from the car",
    title: "HP Pay accepted",
    body: "Pay from the HP Pay app without winding the window down, or scan any UPI code on the dispenser — PhonePe, Paytm, BHIM and the rest.",
    accent: "#0b57ab",
    icon: "wallet",
    href: "/services#amenities",
    cta: "See all payments",
  },
  {
    slug: "power-grades",
    kicker: "Premium fuel",
    title: "Power 95 & Power 100",
    body: "Both performance grades are stocked year round on the Power dispenser, not held back for the weekend or ordered in on request.",
    accent: "#dd521a",
    icon: "bolt",
    href: "/services#hp-power-100",
    cta: "About the grades",
  },
  {
    slug: "e-charge",
    kicker: "Electric",
    title: "HP e-Charge on site",
    body: "Two charging guns under their own canopy, lit and staffed through the night — so the wait is spent somewhere with people around.",
    accent: "#12925a",
    icon: "plug",
    href: "/services#ev-charging",
    cta: "About charging",
  },
];

/**
 * The "we value your time" board. Averages measured at the island — replace
 * with the pump's own figures before publishing.
 */
export const fuellingTimes = {
  peakLabel: "Peak hours",
  peakNote: "08:00–10:00 · 18:00–20:00",
  offPeakLabel: "Off-peak",
  offPeakNote: "Every other hour of the day",
  rows: [
    { vehicle: "Four-wheeler", peak: "2:40", offPeak: "1:40" },
    { vehicle: "Two-wheeler", peak: "1:40", offPeak: "1:00" },
    { vehicle: "Truck / tanker", peak: "6:30", offPeak: "4:45" },
    { vehicle: "CNG fill", peak: "4:20", offPeak: "3:10" },
  ],
} as const;

/** The five things people arrive at the site looking for. */
export const quickAccess = [
  {
    label: "Today's rates",
    note: "Petrol, diesel, Power & CNG",
    href: "/#rates",
    icon: "gauge",
  },
  {
    label: "EV charging",
    note: "Two guns, 24 hours",
    href: "/services#ev-charging",
    icon: "plug",
  },
  {
    label: "PUC certificate",
    note: "Issued the same visit",
    href: "/services#puc",
    icon: "file",
  },
  {
    label: "Bulk & fleet diesel",
    note: "Supply on account",
    href: "/contact",
    icon: "truck",
  },
  {
    label: "Get directions",
    note: "NH-12, both directions",
    href: site.mapsLink,
    icon: "pin",
    external: true,
  },
] as const;

/**
 * PLACEHOLDER REVIEWS — these are drafted copy, not real customer words.
 * The block renders a visible "sample" badge until they are replaced with
 * the pump's actual Google reviews.
 */
export const reviewSummary = {
  rating: 4.6,
  count: 128,
  source: "Google reviews",
  /** Set false once real reviews replace the drafted ones below. */
  sample: true,
} as const;

export const reviews = [
  {
    name: "Fleet driver",
    context: "Krishnanagar run",
    date: "2 weeks ago",
    stars: 5,
    body: "Stop here every week on the Krishnanagar run. Wide enough to bring the trailer in off the highway and the diesel is quick even at night.",
  },
  {
    name: "CNG car owner",
    context: "Kalyani",
    date: "1 month ago",
    stars: 5,
    body: "The CNG bay is the reason I come. Pipeline fed, so the pressure holds and I am not waiting behind a queue at the petrol island.",
  },
  {
    name: "Two-wheeler rider",
    context: "Muragachha",
    date: "1 month ago",
    stars: 4,
    body: "Attendant shows the meter at zero every time without being asked. Air point is free and the lights are on whenever I pass at night.",
  },
] as const;

/** Business hours, as a table — every row the same because the pump never shuts. */
export const businessHours = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((day) => ({ day, opens: "12:00 AM", closes: "11:59 PM" }));

/**
 * Landmarks on this stretch, with the road they sit on. Times are
 * approximate — check them against the map before publishing.
 */
export const nearby = [
  {
    place: "Kalyani More",
    note: "The junction the pump is named for",
    distance: "2 min",
    direction: "On NH-12",
  },
  {
    place: "Kalyani town",
    note: "University, hospital and station",
    distance: "20 min",
    direction: "West",
  },
  {
    place: "Krishnanagar",
    note: "District headquarters",
    distance: "45 min",
    direction: "North on NH-12",
  },
  {
    place: "Barasat / Kolkata",
    note: "Straight down the highway",
    distance: "1 hr 20 min",
    direction: "South on NH-12",
  },
] as const;

export const enquiryTopics = [
  "Bulk diesel / fleet supply",
  "CNG enquiry",
  "EV charging",
  "PUC certificate",
  "Lubricants",
  "Something else",
] as const;
