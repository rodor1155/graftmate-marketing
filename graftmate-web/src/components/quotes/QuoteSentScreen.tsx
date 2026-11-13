import type { ExampleQuote } from "@/lib/tradePages";
import { clientInitials } from "@/lib/exampleQuote";

type QuoteSentScreenProps = {
  quote: ExampleQuote;
};

export function QuoteSentScreen({ quote }: QuoteSentScreenProps) {
  const initials = clientInitials(quote.client);

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#f5f3ed] text-[#1a1a1a]">
      <header className="flex shrink-0 items-center justify-between border-b border-[rgba(26,26,26,0.08)] px-3 py-2.5">
        <span className="text-[#1a1a1a]/70" aria-hidden>
          <BackIcon />
        </span>
        <h2 className="font-display text-[0.72rem] font-semibold tracking-tight sm:text-[0.78rem]">
          Quote sent
        </h2>
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2d5016] font-display text-[0.55rem] font-bold text-[#f5f3ed]"
          aria-hidden
        >
          {initials}
        </span>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d5016]/15 text-[#2d5016]">
          <CheckIcon />
        </span>
        <p className="mt-4 font-display text-[0.78rem] font-semibold text-[#1a1a1a]">
          Sent to {quote.client}
        </p>
        {quote.location ? (
          <p className="mt-1 text-[0.58rem] text-[#6b6b6b]">{quote.location}</p>
        ) : null}
        <div className="mt-5 w-full rounded-lg border border-[rgba(26,26,26,0.1)] bg-[#fbfaf6] p-3 text-left">
          <p className="font-display text-[0.68rem] font-semibold text-[#1a1a1a]">
            {quote.title}
          </p>
          <p className="mt-2 font-mono text-[0.72rem] font-semibold tabular-nums text-[#d45d00]">
            {quote.total}
            <span className="ml-1 text-[0.58rem] font-normal text-[#6b6b6b]">
              inc VAT
            </span>
          </p>
          <p className="mt-2 text-[0.58rem] leading-snug text-[#4a4a4a]">
            Your customer can open the PDF from the email. You will see when it
            is viewed.
          </p>
        </div>
        <p className="mt-4 text-[0.56rem] text-[#6b6b6b]">
          Status: <span className="font-medium text-[#2d5016]">Sent</span>
        </p>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M12.5 5 7.5 10l5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="m5 10 3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
