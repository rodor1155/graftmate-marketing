import Link from "next/link";
import { tradePageLinks } from "@/lib/tradePages";

export function TradesStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface-raised py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted">
          Quoting software for UK trades
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {tradePageLinks.map((trade) => (
            <Link
              key={trade.href}
              href={trade.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/35 hover:text-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
              {trade.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
