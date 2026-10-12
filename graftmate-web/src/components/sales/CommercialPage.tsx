import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SIGNUP_URL } from "@/lib/urls";
import type { CommercialPageContent } from "@/lib/commercialPages";

type CommercialPageProps = {
  content: CommercialPageContent;
};

export function CommercialPage({ content }: CommercialPageProps) {
  return (
    <div className="relative overflow-hidden">
      <section className="border-b border-border-subtle">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          {content.eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              {content.eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {content.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={SIGNUP_URL} size="lg">
              {content.primaryCtaLabel ?? "Start free"}
            </Button>
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {content.sections.map((section) => (
        <section
          key={section.id}
          className={
            section.variant === "surface"
              ? "border-y border-border-subtle bg-surface py-16 sm:py-20"
              : "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          }
        >
          <div
            className={
              section.variant === "surface"
                ? "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
                : undefined
            }
          >
            {section.title ? (
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {section.title}
              </h2>
            ) : null}
            {section.body ? (
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {section.bullets ? (
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.downloads ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {section.downloads.map((download) => (
                  <Button
                    key={download.label}
                    href={download.href}
                    variant="secondary"
                    size="lg"
                  >
                    {download.label}
                    {download.placeholder ? " (placeholder)" : ""}
                  </Button>
                ))}
              </div>
            ) : null}
            {section.note ? (
              <p className="mt-4 text-xs text-muted-dim">{section.note}</p>
            ) : null}
            {section.comparisonRows ? (
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle">
                      {section.comparisonRows.headers.map((header) => (
                        <th
                          key={header}
                          className="px-3 py-3 font-display font-semibold text-foreground"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.comparisonRows.rows.map((row) => (
                      <tr key={row.label} className="border-b border-border-subtle">
                        <th className="px-3 py-3 font-medium text-foreground">
                          {row.label}
                        </th>
                        <td className="px-3 py-3 text-muted">{row.graftmate}</td>
                        <td className="px-3 py-3 text-muted">{row.other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {content.faqs?.length ? (
        <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-foreground">
            FAQ
          </h2>
          <div className="mt-10 space-y-3">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group graftmate-card transition-colors open:border-accent/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronIcon />
                </summary>
                <p className="border-t border-border-subtle px-5 pb-4 pt-3 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="p-8 text-center sm:p-10">
          <p className="font-display text-2xl font-bold text-foreground">
            {content.closingTitle ?? "Try GraftMate on your next quote"}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
            {content.closingCopy ??
              "Describe the job, send a professional quote in about two minutes, then invoice in one tap. Free until Christmas – no card needed."}
          </p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <Button href={SIGNUP_URL} size="lg">
              Start free
            </Button>
            <AppStoreBadge />
          </div>
        </Card>
      </section>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
