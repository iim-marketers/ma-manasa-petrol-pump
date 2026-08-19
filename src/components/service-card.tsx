import { ComingSoon } from "@/components/coming-soon";
import { ServiceIcon } from "@/components/service-icon";
import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <article
      style={{ "--accent": service.accent } as React.CSSProperties}
      className={cn(
        "group relative overflow-hidden rounded-md border border-hairline bg-concrete px-5 pt-6 pb-6",
        "transition duration-300 ease-[cubic-bezier(0.2,0.8,0.3,1)]",
        "hover:-translate-y-1.5 hover:shadow-[0_18px_34px_-20px_rgb(18_23_28/0.4)]",
        className,
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div
          className="grid size-11 place-items-center rounded-[5px]"
          style={{
            background: "color-mix(in srgb, var(--accent) 14%, transparent)",
            color: "var(--accent)",
          }}
        >
          <ServiceIcon name={service.icon} className="size-6" />
        </div>

        {service.comingSoon ? <ComingSoon /> : null}
      </div>

      <h3
        className={cn(
          "font-display font-extrabold tracking-[-0.02em]",
          service.wide ? "text-[1.32rem]" : "text-[1.1rem]",
        )}
      >
        {service.title}
      </h3>

      <p className="mt-2 text-[0.89rem] leading-relaxed text-ink-mute">
        {service.wide ? service.body : service.short}
      </p>

      <span
        className="mt-3.5 inline-block rounded-[2px] px-2.5 py-1.5 font-display text-[0.61rem] font-extrabold tracking-[0.14em] uppercase"
        style={{
          color: "var(--accent)",
          background: "color-mix(in srgb, var(--accent) 12%, transparent)",
        }}
      >
        {service.tag}
      </span>

      <span
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-[380ms] ease-[cubic-bezier(0.2,0.8,0.3,1)] group-hover:scale-x-100"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      />
    </article>
  );
}
