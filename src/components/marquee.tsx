import { marqueeItems } from "@/lib/site";

function Sequence() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-3.5 px-5 py-3.5 font-display text-[0.74rem] font-extrabold tracking-[0.14em] whitespace-nowrap uppercase sm:px-6 sm:text-[0.82rem]"
        >
          {item}
          <span className="size-1.5 rounded-full bg-sodium" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="group overflow-hidden border-t-[3px] border-b-[3px] border-t-sodium border-b-hp-red bg-hp-blue text-white"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
