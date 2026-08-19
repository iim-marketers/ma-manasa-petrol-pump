import type { ServiceIcon as ServiceIconName } from "@/lib/site";

const paths: Record<ServiceIconName, React.ReactNode> = {
  pump: (
    <>
      <path d="M4 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
      <path d="M2 20h14" />
      <path d="M14 9h3a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V9l-3-3" />
      <path d="M4 9h10" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  "bolt-plus": (
    <>
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
      <path d="M20 3v4M22 5h-4" />
    </>
  ),
  cng: (
    <>
      <path d="M3 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
      <path d="M2 20h15" />
      <circle cx="9" cy="10" r="3" />
      <path d="M15 10h3a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0v-7" />
    </>
  ),
  ev: (
    <>
      <rect x="3" y="3" width="11" height="18" rx="2" />
      <path d="M9 8l-2 4h3l-2 4" />
      <path d="M14 11h3a2 2 0 0 1 2 2v4a1.5 1.5 0 0 0 3 0V9l-3-3" />
    </>
  ),
  cup: (
    <>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M17 10h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M7 2v3M11 2v3" />
      <path d="M3 22h16" />
    </>
  ),
  clock: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  oil: (
    <>
      <path d="M8 3h8l-1 5H9z" />
      <path d="M9 8h6v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      <path d="M9 13h6" />
    </>
  ),
  doc: (
    <>
      <path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 14.5l2 2 4-4.5" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
