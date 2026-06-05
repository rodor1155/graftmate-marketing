import { Button } from "@/components/ui/Button";
import { SIGNUP_URL } from "@/lib/urls";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-raised px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Less desk. More tools.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            Join UK tradespeople who quote with AI, manage clients in one inbox,
            and invoice in one tap — £9.99/month for 3 months, then £29.99 flat.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={SIGNUP_URL} size="lg">
              Get started →
            </Button>
            <Button href="/features" variant="ghost" size="lg">
              Explore features
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-dim">
            Cancel anytime · UK support
          </p>
        </div>
      </div>
    </section>
  );
}
