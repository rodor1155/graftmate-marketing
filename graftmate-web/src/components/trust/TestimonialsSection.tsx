import type { Testimonial } from "@/content/testimonials";
import { getTestimonialsForTrade } from "@/lib/testimonials";
import type { TradeSlug } from "@/lib/tradePages";

type TestimonialsSectionProps = {
  trade?: TradeSlug;
};

export function TestimonialsSection({ trade }: TestimonialsSectionProps) {
  const entries = getTestimonialsForTrade(trade);
  return <TestimonialsSectionContent entries={entries} />;
}

export function TestimonialsSectionContent({
  entries,
}: {
  entries: Testimonial[];
}) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <section
      className="border-y border-border-subtle bg-surface py-16 sm:py-20"
      aria-label="What trades say about GraftMate"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Trusted by UK trades
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hear from people using GraftMate on site
          </h2>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <li
              key={`${entry.attribution}-${entry.body.slice(0, 32)}`}
              className="graftmate-card flex h-full flex-col p-6"
            >
              <p className="flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{entry.body}&rdquo;
              </p>
              <footer className="mt-5 border-t border-border-subtle pt-4">
                <p className="font-display text-sm font-semibold text-foreground">
                  {entry.attribution}
                </p>
                {entry.detail ? (
                  <p className="mt-0.5 text-xs text-muted">{entry.detail}</p>
                ) : null}
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
