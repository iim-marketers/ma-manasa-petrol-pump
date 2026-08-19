"use client";

import { useEffect, useRef } from "react";

import { rates } from "@/lib/site";
import { cn } from "@/lib/utils";

function RateRow({
  name,
  note,
  price,
  unit,
  highlight,
  index,
  last,
}: {
  name: string;
  note: string | null;
  price: number;
  unit: string;
  highlight: boolean;
  index: number;
  last: boolean;
}) {
  const wholeRef = useRef<HTMLSpanElement>(null);
  const fracRef = useRef<HTMLSpanElement>(null);

  /**
   * The real price is rendered on the server, so the board reads correctly
   * before hydration and with JavaScript off. Once mounted we rewind the
   * digits to zero and count them back up, writing straight to the DOM rather
   * than through state — nothing else in the tree needs the in-between values.
   */
  useEffect(() => {
    const whole = wholeRef.current;
    const fraction = fracRef.current;
    if (!whole || !fraction) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const paint = (value: number) => {
      const [w, f] = value.toFixed(2).split(".");
      whole.textContent = w;
      fraction.textContent = f;
    };

    let frame = 0;
    let start: number | null = null;
    const duration = 1100;

    paint(0);

    const timer = window.setTimeout(
      () => {
        const step = (time: number) => {
          start ??= time;
          const progress = Math.min((time - start) / duration, 1);
          paint(price * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) frame = requestAnimationFrame(step);
          else paint(price);
        };
        frame = requestAnimationFrame(step);
      },
      300 + index * 130,
    );

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      paint(price);
    };
  }, [price, index]);

  const [whole, fraction] = price.toFixed(2).split(".");

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3.5 py-2.5",
        !last && "border-b border-dashed border-[#21282a]",
      )}
    >
      <span
        className={cn(
          "font-display text-[0.78rem] font-bold tracking-[0.09em] uppercase sm:text-[0.8rem]",
          highlight ? "text-sodium" : "text-[#b6c0c4]",
        )}
      >
        {name}
        {note ? (
          <small className="mt-0.5 block font-sans text-[0.62rem] font-medium tracking-normal text-[#5c666b] normal-case">
            {note}
          </small>
        ) : null}
      </span>

      <span className="led-glow font-led text-[1.35rem] leading-none font-bold whitespace-nowrap text-led sm:text-[1.7rem] lg:text-[1.95rem]">
        <span className="mr-1 font-sans text-[0.58em] font-semibold opacity-75">
          ₹
        </span>
        <span ref={wholeRef}>{whole}</span>
        {/* Doto renders a full stop as a dot-matrix cross, so the decimal
            separator is set in the body font instead. */}
        <span className="mx-[0.03em] inline-block font-sans">.</span>
        <span className="ml-0.5" ref={fracRef}>
          {fraction}
        </span>
        {/* Fixed width so "/kg" does not shove its row's digits left of the
            "/L" rows — it keeps the prices right-aligned as a column. */}
        <span className="ml-1 inline-block min-w-[2.4em] text-left font-sans text-[0.4em] font-semibold tracking-[0.06em] text-[#5c666b] text-shadow-none">
          {unit}
        </span>
      </span>
    </div>
  );
}

export function RateBoard({ tilt = true }: { tilt?: boolean }) {
  return (
    <div className="w-full">
      <div
        className={cn(
          "rounded-lg bg-linear-to-b from-[#0c0e0f] to-[#080a0b] p-2",
          "shadow-[0_26px_50px_-22px_rgb(18_23_28/0.7),inset_0_0_0_1px_rgb(255_255_255/0.08)]",
          tilt &&
            "lg:transform-[perspective(1400px)_rotateY(-4.5deg)_rotateX(1.5deg)]",
        )}
      >
        <div className="rounded-[5px] border-2 border-[#22282a] px-4 pt-4 pb-3.5 sm:px-5">
          <div className="mb-1 flex items-center justify-between gap-2.5 border-b border-dashed border-[#2e3639] pb-3">
            <span className="font-display text-[0.64rem] font-extrabold tracking-[0.19em] text-[#77838a] uppercase">
              Today&rsquo;s Rate Board
            </span>
            <span className="inline-flex items-center gap-2 font-display text-[0.62rem] font-extrabold tracking-[0.16em] text-[#4ade80] uppercase">
              <i className="animate-blip size-1.75 rounded-full bg-[#4ade80]" />
              Open now
            </span>
          </div>

          {rates.map((rate, i) => (
            <RateRow
              key={rate.name}
              name={rate.name}
              note={rate.note}
              price={rate.price}
              unit={rate.unit}
              highlight={rate.highlight}
              index={i}
              last={i === rates.length - 1}
            />
          ))}

          <div className="mt-3 flex items-center justify-between gap-2.5 border-t border-[#1e2426] pt-3">
            <span className="text-[0.65rem] leading-snug text-[#586165]">
              Rates shown are samples for this draft.
              <br />
              Replace with the pump&rsquo;s board each morning.
            </span>
            <span className="shrink-0 rounded-xs bg-sodium px-2.5 py-1.5 font-display text-[0.58rem] font-extrabold tracking-[0.14em] text-asphalt uppercase">
              Sample
            </span>
          </div>
        </div>
      </div>

      {/* Sign post */}
      <div className="mx-auto h-6 w-[78%] rounded-b bg-linear-to-b from-[#1e2426] to-[#12171c]" />
    </div>
  );
}
