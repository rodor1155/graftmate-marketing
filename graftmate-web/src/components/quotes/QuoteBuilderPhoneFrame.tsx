import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { QuoteBuilderScreen } from "@/components/quotes/QuoteBuilderScreen";
import type { ExampleQuote } from "@/lib/tradePages";

type QuoteBuilderPhoneFrameProps = {
  quote: ExampleQuote;
  className?: string;
  priority?: boolean;
};

export function quoteBuilderAlt(quote: ExampleQuote): string {
  return `GraftMate quote builder mock: ${quote.title}, ${quote.total} inc VAT`;
}

export function QuoteBuilderPhoneFrame({
  quote,
  className,
  priority,
}: QuoteBuilderPhoneFrameProps) {
  return (
    <PhoneFrame
      alt={quoteBuilderAlt(quote)}
      statusBar="#f5f3ed"
      className={className}
      priority={priority}
    >
      <QuoteBuilderScreen quote={quote} />
    </PhoneFrame>
  );
}
