import { MessageSquare, Quote, Star } from "lucide-react";

import { Container, Section } from "@/components/container";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { reviewSummary, reviews, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function Stars({
  value,
  className,
  size = "sm",
}: {
  value: number;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn("inline-flex gap-0.5", className)}
      role="img"
      aria-label={`${value} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            size === "sm" ? "size-4" : "size-5",
            i <= Math.round(value)
              ? "fill-flame-500 text-flame-500"
              : "fill-surface-3 text-surface-3",
          )}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

/**
 * What drivers say, plus the route to say it. The quotes below are drafted for
 * this build, not collected from customers — `reviewSummary.sample` keeps a
 * visible notice on the block until real reviews replace them.
 */
export function ReviewBand() {
  return (
    <Section tone="muted">
      <Container>
        <div className="mb-9 flex flex-col gap-6 lg:mb-11 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[34ch]">
            <span className="t-eyebrow mb-3">From the forecourt</span>
            <h2 className="t-h2">What drivers say about the stop</h2>
          </div>

          <div className="card-base flex items-center gap-5 p-5 sm:px-7">
            <div>
              <span className="block font-display text-[2.4rem] leading-none font-extrabold tracking-[-0.04em] text-ink">
                {reviewSummary.rating.toFixed(1)}
              </span>
            </div>
            <div className="border-l border-line pl-5">
              <Stars value={reviewSummary.rating} size="md" />
              <span className="mt-1.5 block text-[0.82rem] text-ink-2">
                {reviewSummary.count} ratings on {reviewSummary.source}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 55}>
              <figure className="card-base flex h-full flex-col p-6">
                <Quote
                  className="size-7 text-brand-100"
                  aria-hidden="true"
                />
                <blockquote className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-ink-2">
                  {review.body}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <span className="min-w-0">
                    <span className="block truncate font-display text-[0.9rem] font-bold text-ink">
                      {review.name}
                    </span>
                    <span className="block truncate text-[0.78rem] text-ink-3">
                      {review.context} · {review.date}
                    </span>
                  </span>
                  <Stars value={review.stars} className="shrink-0" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="card-base mt-4 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex gap-4">
            <MessageSquare
              className="mt-0.5 size-6 shrink-0 text-brand-600"
              aria-hidden="true"
            />
            <div>
              <h3 className="t-h3">How can we serve you better?</h3>
              <p className="mt-1.5 max-w-[56ch] text-[0.9rem] leading-relaxed text-ink-2">
                Short queue, long queue, a meter that looked wrong, a bay that
                needs a light — tell us and it reaches the manager the same day.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <LinkButton href="/contact" variant="brand" size="pill-sm">
              Submit a review
            </LinkButton>
            <LinkButton
              href={site.mapsLink}
              external
              variant="soft"
              size="pill-sm"
              className="border"
            >
              View all reviews
            </LinkButton>
          </div>
        </Reveal>

        {reviewSummary.sample ? (
          <p className="mt-5 flex flex-wrap items-center gap-3 text-[0.82rem] text-ink-2">
            <span className="rounded-pill bg-flame-500 px-3 py-1 font-display text-[0.7rem] font-semibold text-white">
              Sample
            </span>
            The rating and the three quotes above are drafted placeholders.
            Replace them with the pump&rsquo;s real Google reviews before
            publishing.
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
