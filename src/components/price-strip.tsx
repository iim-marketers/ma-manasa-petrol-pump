import { Info, RefreshCw } from "lucide-react";

import { Container } from "@/components/container";
import { rates, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PriceStrip() {
  return (
    <section id="rates" className="scroll-mt-28 bg-surface pt-14 sm:pt-16">
      <Container>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="t-eyebrow mb-2">Today&rsquo;s rates</span>
            <h2 className="t-h2">What it costs at the island</h2>
          </div>
          <p className="flex items-center gap-2 text-[0.85rem] text-ink-2">
            <RefreshCw className="size-4 text-brand-500" aria-hidden="true" />
            Board updated every morning
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {rates.map((rate) => {
            const [whole, fraction] = rate.price.toFixed(2).split(".");
            return (
              <li
                key={rate.name}
                className={cn(
                  "card-base card-hover relative overflow-hidden p-5",
                  rate.highlight && "border-flame-100 bg-flame-50/40",
                )}
              >
                <span className="block font-display text-[0.86rem] font-bold text-ink">
                  {rate.name}
                </span>
                <span className="mt-0.5 block min-h-[1.1rem] text-[0.74rem] text-ink-3">
                  {rate.note ?? " "}
                </span>

                <span className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-[1.05rem] font-semibold text-ink-2">
                    ₹
                  </span>
                  <span className="font-display text-[1.85rem] leading-none font-extrabold tracking-[-0.03em] text-ink">
                    {whole}
                    <span className="text-[0.62em] font-bold text-ink-2">
                      .{fraction}
                    </span>
                  </span>
                  <span className="text-[0.8rem] font-medium text-ink-3">
                    {rate.unit}
                  </span>
                </span>

                {rate.highlight ? (
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 bg-flame-500"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            );
          })}
        </ul>

        <p className="mt-4 flex items-start gap-2.5 rounded-xl bg-surface-2 px-4 py-3 text-[0.82rem] leading-relaxed text-ink-2">
          <Info
            className="mt-0.5 size-4 shrink-0 text-brand-500"
            aria-hidden="true"
          />
          <span>
            <b className="font-semibold text-ink">
              Sample figures for this draft.
            </b>{" "}
            Rates move with the daily revision — replace them with the
            pump&rsquo;s board, or ring{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-brand-600 underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>{" "}
            for today&rsquo;s figure before you set off.
          </span>
        </p>
      </Container>
    </section>
  );
}
