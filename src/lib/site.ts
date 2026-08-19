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
  phoneHref: "tel:+91XXXXXXXXXX",
  email: "XXXXX@example.com",
  hours: "Open 24 hours",
  hoursNote: "All seven days, including holidays",
  payments: "Cash · UPI · Cards · Fleet cards",
  bengali: "আপনার যাত্রা শুভ হোক",
  mapsLink: "https://maps.app.goo.gl/dMk23EjpCQnBgdPi9",
  // Right-click the pin in Google Maps on desktop to copy exact coordinates.
  lat: 22.696431,
  lng: 88.416236,
  zoom: 16,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
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
 * drop new shots into `public/images/petrol-pump-images/` and point a key here
 * at the new file to swap one out everywhere it is used.
 */
const photoDir = "/images/petrol-pump-images";

export const photos = {
  /** Wide view of the forecourt from the entry, rate board pole on the left. */
  forecourt: `${photoDir}/1.jpeg`,
  /** The station building beside the canopy — lube display, CNG panels. */
  building: `${photoDir}/2.jpeg`,
  /** The HP pole sign and Club HP rate board at the entry. */
  entrySign: `${photoDir}/3.jpeg`,
  /** Under the canopy, both islands with vehicles at the pumps. */
  canopy: `${photoDir}/4.jpeg`,
  /** Petrol dispenser close up — meter, nozzles and the UPI codes. */
  dispenser: `${photoDir}/5.jpeg`,
  /** The HP Power 95 / Power 100 dispenser. */
  powerGrades: `${photoDir}/6.jpeg`,
  /** The online CNG station compressor yard. */
  cngStation: `${photoDir}/7.jpeg`,
  /** An HP CNG cascade at the gate of the CNG yard. */
  cngSupply: `${photoDir}/8.jpeg`,
  /** A car being filled at the HP CNG dispenser. */
  cngFill: `${photoDir}/9.jpeg`,
} as const;

export type ServiceIcon =
  | "pump"
  | "bolt"
  | "bolt-plus"
  | "cng"
  | "ev"
  | "cup"
  | "clock"
  | "oil"
  | "doc";

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  tag: string;
  accent: string;
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  wide?: boolean;
  /** Not open yet — the card carries a "coming soon" marker. */
  comingSoon?: boolean;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "diesel",
    title: "Diesel",
    short:
      "Standard HP diesel on the main islands, with truck-friendly access.",
    body: "Standard HP diesel on the main islands, with truck-friendly access and quick turnaround. The apron is wide enough for a full-length trailer to swing in off the highway and back out without reversing across traffic.",
    tag: "Bulk welcome",
    accent: "#0B4F9E",
    icon: "pump",
    image: photos.canopy,
    imageAlt: "Loaded trucks at the fuel islands under the HP canopy",
    details: [
      "Truck and tanker access from both directions",
      "Bulk and fleet supply on account",
      "Density and calibration records kept on site",
    ],
  },
  {
    slug: "petrol",
    title: "Petrol",
    short:
      "Regular petrol for cars, bikes and autos, with the meter shown before every fill.",
    body: "Regular petrol for cars, bikes and autos. Calibrated nozzles, and the meter is reset to zero and shown to you before every fill — ask any time and the attendant will run it past you again.",
    tag: "All vehicles",
    accent: "#E1251B",
    icon: "pump",
    image: photos.dispenser,
    imageAlt: "An HP petrol dispenser with the meter facing the customer",
    details: [
      "Zero shown before every fill",
      "Separate two-wheeler island at peak hours",
      "Weekly calibration checks",
    ],
  },
  {
    slug: "hp-power-95",
    title: "HP Power 95",
    short: "Higher-octane petrol with a detergent additive pack.",
    body: "Higher-octane petrol with a detergent additive pack — smoother idle, cleaner injectors and a noticeable difference on engines that have covered some distance.",
    tag: "Premium grade",
    accent: "#C8901A",
    icon: "bolt",
    image: photos.powerGrades,
    imageAlt: "The HP Power 95 and Power 100 dispenser on the forecourt",
    details: [
      "95 octane with multifunctional additives",
      "Cleans injectors over regular use",
      "Available on the main petrol island",
    ],
  },
  {
    slug: "hp-power-100",
    title: "HP Power 100",
    short: "Our top performance grade for high-compression engines.",
    body: "Our top performance grade, for high-compression engines and anyone who simply wants the best fill on the board. Stocked year round, not just on request.",
    tag: "Top of the board",
    accent: "#8A4B12",
    icon: "bolt-plus",
    image: photos.entrySign,
    imageAlt: "The HP sign and rate board at the entry to the forecourt",
    details: [
      "100 octane performance fuel",
      "For turbocharged and high-compression engines",
      "Always in stock",
    ],
  },
  {
    slug: "cng",
    title: "CNG — online station",
    short:
      "An online CNG station fed directly from the pipeline, not from trucked-in cascades.",
    body: "An online CNG station, fed directly from the gas pipeline rather than trucked-in cascades. That means steadier pressure, faster fills and fewer dry spells. It sits on a dedicated bay, so CNG queues never block the petrol islands.",
    tag: "Pipeline fed",
    accent: "#106B3C",
    icon: "cng",
    image: photos.cngFill,
    imageAlt: "A car being filled at the HP CNG dispenser",
    wide: true,
    details: [
      "Pipeline fed — steadier pressure than cascade stations",
      "Dedicated bay away from the petrol islands",
      "Cars, autos and commercial CNG vehicles",
    ],
  },
  {
    slug: "ev-charging",
    title: "EVC — electric vehicle charging",
    short:
      "Charging bays for electric cars and two-wheelers, right on the forecourt.",
    body: "Charging bays for electric cars and two-wheelers, right on the forecourt. Park up, plug in, and spend the wait over a cup of tea instead of sitting in an empty lot somewhere off the highway.",
    tag: "Cars & two-wheelers",
    accent: "#1A73C7",
    icon: "ev",
    image: photos.forecourt,
    imageAlt: "The forecourt seen from the entry off the highway",
    wide: true,
    details: [
      "Chargers for cars and two-wheelers",
      "Lit and staffed through the night",
      "Room to park clear of the fuel islands",
    ],
  },
  {
    slug: "tea-junction",
    title: "Tea Junction",
    short: "Hot chai, coffee and snacks — the counter is being built now.",
    body: "A Tea Junction counter for hot chai, coffee and snacks is being put up on the forecourt. Once it opens it will run through the night with the pump, which matters more at 3 a.m. than it does at noon.",
    tag: "Chai & snacks",
    accent: "#8A5A2B",
    icon: "cup",
    image: photos.building,
    imageAlt:
      "The station building where the Tea Junction counter is coming up",
    comingSoon: true,
    details: [
      "Chai, coffee and cold drinks",
      "Packaged snacks",
      "Will stay open through the night",
    ],
  },
  {
    slug: "24x7",
    title: "24×7 service",
    short: "Staffed round the clock, every day of the year.",
    body: "Staffed round the clock, every day of the year. Midnight run or a 4 a.m. start — the pump is on, the lights are on, and somebody is at the island.",
    tag: "Never shut",
    accent: "#12171C",
    icon: "clock",
    image: photos.forecourt,
    imageAlt: "The forecourt with vehicles at both islands",
    details: ["365 days a year", "Full apron lighting", "Air and water point"],
  },
  {
    slug: "lubricants",
    title: "Lubricants",
    short: "HP engine oils, gear oils, coolants and greases.",
    body: "HP engine oils, gear oils, coolants and greases for cars, bikes and commercial vehicles. Top-ups are done at the bay while you wait, and we will show you the sealed pack before it is opened.",
    tag: "Genuine stock",
    accent: "#C8901A",
    icon: "oil",
    image: photos.building,
    imageAlt: "The HP lubricants display above the station building",
    details: [
      "Genuine HP lubricants, sealed packs",
      "Top-ups done at the bay",
      "Gear oil, coolant and grease in stock",
    ],
  },
  {
    slug: "puc",
    title: "PUC certificate",
    short:
      "Pollution Under Control testing and certificates issued on the spot.",
    body: "Pollution Under Control testing and certificates issued on the spot. Bring the vehicle and its papers, and walk out with the certificate on the same visit — no second trip.",
    tag: "Same visit",
    accent: "#106B3C",
    icon: "doc",
    image: photos.dispenser,
    imageAlt: "The attendant's counter beside the petrol island",
    details: [
      "Testing for petrol, diesel and CNG vehicles",
      "Certificate issued on the same visit",
      "Bring the registration certificate",
    ],
  },
];

export const marqueeItems = [
  "Petrol",
  "Diesel",
  "HP Power 95",
  "HP Power 100",
  "CNG Online Station",
  "EV Charging",
  "Tea Junction — Coming Soon",
  "Lubricants",
  "PUC Certificate",
  "Open 24×7",
] as const;

export const facts = [
  { value: "24×7", label: "Always open" },
  { value: "5", label: "Fuel grades" },
  { value: "NH-12", label: "Highway frontage" },
  { value: "PUC", label: "Issued on site" },
] as const;

export const directions = [
  { place: "Kalyani More", note: "Nearby" },
  { place: "Kalyani", note: "NH-12" },
  { place: "Krishnanagar", note: "North ▲" },
  { place: "Barasat / Kolkata", note: "South ▼" },
] as const;

/**
 * The gallery, in grid order. Spans are tuned so each row of the six-column
 * grid fills exactly: wide (4) + tall (2), then three normals, and so on.
 */
export const gallery = [
  {
    src: photos.forecourt,
    alt: "The forecourt seen from the entry off the highway",
    caption: "The forecourt from NH-12",
    span: "wide",
  },
  {
    src: photos.entrySign,
    alt: "The HP pole sign and rate board at the entry",
    caption: "The sign from the road",
    span: "tall",
  },
  {
    src: photos.dispenser,
    alt: "An HP petrol dispenser with the meter facing the customer",
    caption: "Zero shown before every fill",
    span: "normal",
  },
  {
    src: photos.powerGrades,
    alt: "The HP Power 95 and Power 100 dispenser",
    caption: "Power 95 & Power 100",
    span: "normal",
  },
  {
    src: photos.canopy,
    alt: "Trucks, cars and two-wheelers at the islands under the canopy",
    caption: "Under the canopy",
    span: "normal",
  },
  {
    src: photos.building,
    alt: "The station building beside the canopy",
    caption: "The station building",
    span: "wide",
  },
  {
    src: photos.cngFill,
    alt: "A car being filled at the HP CNG dispenser",
    caption: "CNG fills",
    span: "normal",
  },
  {
    src: photos.cngStation,
    alt: "The compressor yard of the online CNG station",
    caption: "The online CNG station",
    span: "wide",
  },
  {
    src: photos.cngSupply,
    alt: "An HP CNG cascade at the gate of the CNG yard",
    caption: "CNG supply",
    span: "normal",
  },
] as const;

export const chips = [
  "365 days",
  "Night lighting",
  "Truck parking",
  "Air & water",
  "Card & UPI accepted",
] as const;

export const enquiryTopics = [
  "Bulk diesel / fleet supply",
  "CNG enquiry",
  "EV charging",
  "PUC certificate",
  "Lubricants",
  "Something else",
] as const;
