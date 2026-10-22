import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MtdChecker } from "@/components/mtd/MtdChecker";
import { APP_STORE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Do I Need Making Tax Digital? MTD Checker for Trades",
  description:
    "Check if and when Making Tax Digital for Income Tax applies to you as a sole trader in the trades: April 2026, 2027 or 2028. Free, based on GOV.UK.",
  alternates: {
    canonical: "https://graftmate.net/mtd",
  },
};

const comparisonRows = [
  { label: "Quotes and invoices from your phone", graftmate: true, other: "Sometimes" },
  { label: "Labour and materials on separate lines", graftmate: true, other: "Varies" },
  { label: "Digital record of what you've invoiced", graftmate: true, other: true },
  { label: "Quarterly updates to HMRC", graftmate: false, other: true },
  { label: "Final tax return", graftmate: false, other: true },
];

const faqs = [
  {
    question: "Is it based on profit or turnover?",
    answer: "Turnover: income before expenses.",
  },
  {
    question: "I have a PAYE job as well. Does that count?",
    answer:
      "No. Only self-employment and property income count towards the threshold.",
  },
  {
    question: "Is VAT included?",
    answer:
      "If you use the cash basis and you're VAT registered, you can choose whether to include VAT in your business income. If you include it, it counts.",
  },
  {
    question: "I've only been trading part of a year.",
    answer:
      "HMRC annualises a sole trader's income where it can, so six months' trading is doubled.",
  },
  {
    question: "Where do I find compatible software?",
    answer:
      "HMRC's software finder lists it. HMRC doesn't recommend any product.",
  },
];

export default function MtdPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            MTD checker
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Do I need Making Tax Digital, and when?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Making Tax Digital (MTD) for Income Tax means keeping digital
            records and sending HMRC quarterly updates through compatible
            software. It&apos;s coming in stages for sole traders and
            landlords. Enter your qualifying income to see where you stand.
          </p>

          <div className="mt-6 rounded-xl border-2 border-border-subtle bg-surface p-4 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-foreground">
              Straight up:
            </span>{" "}
            GraftMate keeps digital records of your invoices and expenses,
            but it isn&apos;t MTD filing software. You&apos;ll still need
            HMRC-recognised software to submit.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <MtdChecker />
      </section>

      <section className="border-y border-border-subtle bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What MTD means day to day
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Once you&apos;re in, your software will need to:
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>keep digital records of your self-employment income and expenses</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>send HMRC a summary every quarter (these updates aren&apos;t tax returns)</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>submit your tax return by 31 January after the tax year ends</span>
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            You still do a Self Assessment return for the year before you
            start.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Example
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          A plumber turned over £34,000 in 2025–26 and spent £9,000 on parts
          and van costs. Their profit is £25,000, but MTD uses turnover, so
          their qualifying income is £34,000. That&apos;s over £30,000, so
          MTD applies from 6 April 2027.
        </p>
      </section>

      <section className="border-y border-border-subtle bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where GraftMate fits (and where it doesn&apos;t)
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border-subtle text-left">
                  <th className="py-3 pr-4 font-display font-semibold text-foreground">
                    &nbsp;
                  </th>
                  <th className="py-3 pr-4 font-display font-semibold text-foreground">
                    GraftMate
                  </th>
                  <th className="py-3 font-display font-semibold text-foreground">
                    MTD-compatible software / your accountant
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border-subtle">
                    <td className="py-3 pr-4 text-muted">{row.label}</td>
                    <td className="py-3 pr-4 text-muted">
                      {row.graftmate === true ? "✓" : "✗"}
                    </td>
                    <td className="py-3 text-muted">
                      {row.other === true ? "✓" : row.other === false ? "✗" : row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          FAQ
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
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

        <p className="mt-8 text-sm leading-relaxed text-muted">
          Sources:{" "}
          <a
            href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax"
            className="font-medium text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.UK — Find out if and when you need to use MTD for Income Tax
          </a>
          ,{" "}
          <a
            href="https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax"
            className="font-medium text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            work out your qualifying income
          </a>
          , and{" "}
          <a
            href="https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax"
            className="font-medium text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            choose the right software
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Get your invoices in order before April 2027.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
            GraftMate keeps every quote and invoice in one place on your
            phone, ready for whoever does your books.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button href={APP_STORE_URL} size="lg">
              Get GraftMate on the App Store
            </Button>
            <p className="text-sm text-muted">
              Try GraftMate free for 14 days
            </p>
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
