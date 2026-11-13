import type { ExampleQuote } from "@/lib/tradePages";
import { clientInitials } from "@/lib/exampleQuote";

type QuoteBuilderScreenProps = {
  quote: ExampleQuote;
};

function lineUnitType(item: string): string {
  const lower = item.toLowerCase();
  if (lower.includes("labour") || lower.includes("labor")) return "job";
  return "item";
}

function stripPence(gbp: string): string {
  return gbp.replace(/\.00$/, "").replace(/^£/, "");
}

export function QuoteBuilderScreen({ quote }: QuoteBuilderScreenProps) {
  const initials = clientInitials(quote.client);

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-[#f5f3ed] text-[#1a1a1a]">
      <header className="flex shrink-0 items-center justify-between border-b border-[rgba(26,26,26,0.08)] bg-[#f5f3ed] px-3 py-2.5">
        <span className="text-[#1a1a1a]/70" aria-hidden>
          <BellIcon />
        </span>
        <h2 className="font-display text-[0.72rem] font-semibold tracking-tight sm:text-[0.78rem]">
          New quote
        </h2>
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2d5016] font-display text-[0.55rem] font-bold text-[#f5f3ed]"
          aria-hidden
        >
          {initials}
        </span>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-[7.5rem] pt-3">
        <p className="text-[0.62rem] text-[#4a4a4a]">
          For <span className="font-semibold text-[#1a1a1a]">{quote.client}</span>
          {quote.location ? (
            <span className="text-[#6b6b6b]"> · {quote.location}</span>
          ) : null}
        </p>

        <div className="mt-2.5 rounded-lg border border-[rgba(26,26,26,0.1)] bg-[#fbfaf6] p-2.5">
          <p className="text-[0.58rem] font-medium uppercase tracking-wide text-[#6b6b6b]">
            Site visit notes
          </p>
          <p className="mt-1 text-[0.62rem] leading-snug text-[#4a4a4a]">
            {quote.siteNotes}
          </p>
        </div>

        <div className="mt-3 flex items-baseline justify-between gap-2">
          <p className="font-display text-[0.68rem] font-semibold text-[#1a1a1a]">
            Line items
          </p>
          <p className="font-mono text-[0.68rem] font-semibold tabular-nums text-[#1a1a1a]">
            {quote.subtotal}
          </p>
        </div>

        <ul className="mt-2 space-y-2.5">
          {quote.lines.map((line) => (
            <li
              key={line.item}
              className="rounded-lg border border-[rgba(26,26,26,0.1)] bg-[#fbfaf6] p-2"
            >
              <p className="text-[0.62rem] font-semibold leading-snug text-[#1a1a1a]">
                {line.item}
              </p>
              <p className="mt-0.5 text-[0.56rem] leading-snug text-[#4a4a4a]">
                {line.description}
              </p>
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                <MockField label="Qty" value={line.qty} />
                <MockField label="Unit" value={lineUnitType(line.item)} />
                <MockField label="£" value={stripPence(line.unitPrice)} />
              </div>
              <p className="mt-1 text-right font-mono text-[0.58rem] font-semibold tabular-nums text-[#2d5016]">
                {line.total}
              </p>
            </li>
          ))}
        </ul>

        <dl className="mt-3 space-y-1 border-t border-[rgba(26,26,26,0.08)] pt-2.5 text-[0.62rem]">
          <div className="flex justify-between gap-2">
            <dt className="text-[#6b6b6b]">Subtotal</dt>
            <dd className="font-mono font-medium tabular-nums">{quote.subtotal}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-[#6b6b6b]">{quote.vatLabel}</dt>
            <dd className="font-mono font-medium tabular-nums">{quote.vat}</dd>
          </div>
          <div className="flex justify-between gap-2 font-display text-[0.68rem] font-semibold">
            <dt>Total</dt>
            <dd className="font-mono tabular-nums text-[#d45d00]">{quote.total}</dd>
          </div>
        </dl>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col bg-gradient-to-t from-[#f5f3ed] via-[#f5f3ed] to-transparent px-3 pb-2 pt-6">
        <div className="pointer-events-auto flex gap-2">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-[rgba(26,26,26,0.12)] bg-[#fbfaf6] py-2 text-[0.58rem] font-medium text-[#1a1a1a]"
            tabIndex={-1}
          >
            <SparkleIcon />
            Regenerate
          </button>
          <button
            type="button"
            className="flex-[1.4] rounded-lg bg-[#d45d00] py-2 text-[0.62rem] font-semibold text-[#fbfaf6]"
            tabIndex={-1}
          >
            Save quote
          </button>
        </div>
        <nav
          className="pointer-events-auto mt-2 flex items-center justify-between rounded-t-xl border border-b-0 border-[rgba(26,26,26,0.1)] bg-[#fbfaf6] px-1 py-1.5"
          aria-hidden
        >
          <TabIcon label="Home" active={false} />
          <TabIcon label="Clients" active />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d45d00] text-lg font-light text-[#fbfaf6]">
            +
          </span>
          <TabIcon label="Jobs" active={false} />
          <TabIcon label="Inbox" active={false} />
        </nav>
      </div>
    </div>
  );
}

function MockField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-[rgba(26,26,26,0.12)] bg-[#f5f3ed] px-1 py-0.5 text-center">
      <span className="sr-only">{label}</span>
      <span className="font-mono text-[0.58rem] tabular-nums text-[#1a1a1a]">{value}</span>
    </div>
  );
}

function TabIcon({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={`flex flex-col items-center px-1 text-[0.45rem] font-medium ${
        active ? "text-[#d45d00]" : "text-[#6b6b6b]"
      }`}
    >
      <span className="mb-0.5 h-3 w-3 rounded-sm bg-current opacity-40" />
      {label}
    </span>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M5 16h10M7.5 16a3 3 0 0 0 5 0M15 7.5a5 5 0 1 0-10 0v4l-1.5 3h13l-1.5-3v-4Z" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
      <path d="M8 1l1 4 4 1-4 1-1 4-1-4-4-1 4-1 1-4Z" />
    </svg>
  );
}
