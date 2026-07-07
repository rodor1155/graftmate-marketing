import { Button } from "@/components/ui/Button";

const features = [
  {
    tag: "AI quotes",
    title: "Describe the job, get a quote in seconds",
    description:
      "Tell GraftMate AI the job while you're in the van — by voice or text. It builds a professional quote with VAT, ready to send before you've started the engine.",
    highlight: true,
  },
  {
    tag: "Unified inbox",
    title: "Email and WhatsApp in one place",
    description:
      "Every client conversation in a single inbox, automatically linked to the right job and contact.",
    highlight: false,
  },
  {
    tag: "Inbound email",
    title: "Clients email you, messages appear automatically",
    description:
      "Give clients your GraftMate AI address. Their emails land in your inbox — parsed and linked to the right client.",
    highlight: false,
  },
  {
    tag: "One-tap invoicing",
    title: "Accepted the quote? Invoice in one tap.",
    description:
      "No re-typing line items. Convert any quote to a branded invoice instantly, with UK VAT handled correctly.",
    highlight: false,
  },
  {
    tag: "UK-built",
    title: "VAT, £ sterling, sole-trader simple",
    description:
      "Multi-rate VAT (20%, 5%, 0%). Prices in pounds. British English throughout — built for UK tradespeople.",
    highlight: false,
  },
  {
    tag: "Dead simple pricing",
    title: "One plan. £9.99/month for 3 months, then £29.99.",
    description:
      "No Bronze/Silver/Gold nonsense. Every feature included. No per-seat surprises when you're working alone.",
    highlight: false,
  },
];

export function FeaturesOverview() {
  return (
    <section className="relative bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-wider text-secondary">
              Everything you need
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for the van, not the boardroom
            </h2>
          </div>
          <Button href="/features" variant="secondary">
            All features
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.tag}
              className={`group rounded-xl border p-6 transition-colors ${
                feature.highlight
                  ? "border-primary/40 bg-gradient-to-br from-primary/15 to-surface lg:col-span-2 lg:row-span-1"
                  : "border-border bg-surface hover:border-primary/25"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                {feature.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
