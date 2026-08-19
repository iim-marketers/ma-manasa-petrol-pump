import { directions, site } from "@/lib/site";

/** Green highway direction board, the "you are here" panel. */
export function DirectionSign() {
  return (
    <div className="rounded-md bg-sign p-2 shadow-[0_22px_44px_-24px_rgb(16_107_60/0.75)]">
      <div className="rounded-[4px] border-2 border-white/70 px-6 py-6 text-white">
        <div className="font-display leading-[1.08] font-black tracking-[-0.02em] uppercase">
          <span className="mb-2 block text-[0.5em] font-bold tracking-[0.14em] opacity-70">
            You are here
          </span>
          <span className="block text-[clamp(1.25rem,2.8vw,1.7rem)]">
            {site.locality} Forecourt
          </span>
        </div>

        <ul className="mt-5">
          {directions.map((row) => (
            <li
              key={row.place}
              className="flex items-center justify-between gap-4 border-t border-white/30 py-3 font-display text-[0.8rem] font-bold tracking-[0.06em] uppercase sm:text-[0.86rem]"
            >
              <span>{row.place}</span>
              <span className="font-semibold tracking-[0.04em] opacity-80">{row.note}</span>
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 font-display text-[0.76rem] font-black tracking-[0.08em] text-[#0a4b2a]">
          {site.highway} · West Bengal
        </span>
      </div>
    </div>
  );
}
