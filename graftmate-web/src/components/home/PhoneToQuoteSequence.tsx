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

const steps = [
  {
    step: "01",
    title: "Rough notes in",
    caption: "Type how you would text a mate — GraftMate understands plain English.",
    renderPhone: () => (
      <PhoneFrame alt="GraftMate new quote screen with rough site notes typed in">
        <JobNotesInputScreen roughNotes={homeRoughJobNotes} />
      </PhoneFrame>
    ),
  },
  {
    step: "02",
    title: "Quote built",
    caption: "Line items, VAT, and totals — ready for you to review on site.",
    renderPhone: () => (
      <QuoteBuilderPhoneFrame quote={homeSequenceQuote} />
    ),
  },
  {
    step: "03",
    title: "Quote sent",
    caption: "Send before you leave. Your customer gets a professional PDF by email.",
    renderPhone: () => (
      <PhoneFrame alt={`${quoteBuilderAlt(homeSequenceQuote)} — sent confirmation`}>
        <QuoteSentScreen quote={homeSequenceQuote} />
      </PhoneFrame>
    ),
  },
] as const;

export function PhoneToQuoteSequence() {
  return (
    <section
      id="phone-to-quote"
      className="border-t border-border-subtle py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Phone to quote
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          From scruffy site notes to a sent quote in three steps
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          No spreadsheet gymnastics. Describe the job once, check the figures, and
          send it while the customer is still interested.
        </p>

        <ol className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
          {steps.map((item) => (
            <li key={item.step} className="flex flex-col">
              <span className="font-display text-5xl font-bold text-accent/20">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.caption}
              </p>
              <div className="mt-6 w-full max-w-[280px]">{item.renderPhone()}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
