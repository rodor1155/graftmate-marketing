import {
  homeRoughJobNotes,
  homeSequenceQuote,
} from "@/content/homeQuoteSequence";
import { JobNotesInputScreen } from "@/components/quotes/JobNotesInputScreen";
import {
  QuoteBuilderPhoneFrame,
  quoteBuilderAlt,
} from "@/components/quotes/QuoteBuilderPhoneFrame";
import { QuoteSentScreen } from "@/components/quotes/QuoteSentScreen";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

export function DescribeJobStepVisual() {
  return (
    <PhoneFrame alt="GraftMate new quote screen with rough site notes typed in">
      <JobNotesInputScreen roughNotes={homeRoughJobNotes} />
    </PhoneFrame>
  );
}

export function ReviewQuoteStepVisual() {
  return <QuoteBuilderPhoneFrame quote={homeSequenceQuote} />;
}

export function SendQuoteStepVisual() {
  return (
    <PhoneFrame alt={`${quoteBuilderAlt(homeSequenceQuote)} — sent confirmation`}>
      <QuoteSentScreen quote={homeSequenceQuote} />
    </PhoneFrame>
  );
}

export function ManageJobStepVisual() {
  return (
    <PhoneFrame
      src="/app/jobs.webp"
      alt="GraftMate jobs list showing work in progress and upcoming jobs"
      statusBar="#f5f3ed"
    />
  );
}
