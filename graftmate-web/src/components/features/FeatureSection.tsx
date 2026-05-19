import type { ReactNode } from "react";

type FeatureSectionProps = {
  id: string;
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  visual?: ReactNode;
  reversed?: boolean;
};

export function FeatureSection({
  id,
  icon,
  label,
  title,
  description,
  bullets,
  visual,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10"
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reversed ? "lg:[direction:rtl]" : ""}`}
      >
        <div className={reversed ? "lg:[direction:ltr]" : ""}>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-secondary">
            {icon}
          </div>
          <p className="mt-5 text-sm font-medium uppercase tracking-wider text-secondary">
            {label}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {visual ? (
          <div className={reversed ? "lg:[direction:ltr]" : ""}>{visual}</div>
        ) : null}
      </div>
    </article>
  );
}
