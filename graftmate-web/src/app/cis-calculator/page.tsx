import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CisCalculatorForm } from "@/components/calculators/CisCalculatorForm";
import { buildGuidePageMetadata } from "@/lib/guides/metadata";
import { APP_STORE_URL } from "@/lib/config";

const ROUTE = "/cis-calculator";

export const metadata = buildGuidePageMetadata({
  route: ROUTE,
  titleTag: "CIS Deduction Calculator UK – Work Out Net Pay | GraftMate",
  metaDescription:
    "Free CIS deduction calculator for UK subcontractors. Enter gross, materials and VAT to see the deduction at 20%, 30% or 0% and what you'll actually be paid.",
});

const faqs = [
  {
    question: "Is the CIS deduction an extra tax?",
    answer:
      "No. It's tax and National Insurance paid in advance on your behalf. It's set against your bill when you do your Self Assessment. If you think too much has been taken over the year, speak to HMRC or your accountant.",
  },
  {
    question: "Do I get charged CIS on materials?",
    answer:
      "Not if you bought them yourself for that job and you put them on the invoice. Show them as a separate line so the contractor can see them.",
  },
  {
    question: "Is VAT included?",
    answer:
      "No. VAT comes off before the deduction is worked out. You're still paid the VAT in full.",
  },
  {
    question: "What about travel?",
    answer:
      "Travel stays in. Fuel for travelling is not one of the things taken off before the deduction.",
  },
  {
    question: "What should I get back from the contractor?",
    answer:
      "A payment and deduction statement. They must give you one within 14 days of the end of each tax month in which they made deductions. Keep them all: you'll need them for your tax return.",
  },
  {
    question: "Which rate applies to me?",
    answer:
      "HMRC tells the contractor which rate to use when they verify you. If you're being taken at 30% and you think you're registered, check with HMRC.",
  },
  {
    question: "Does this calculator give tax advice?",
    answer:
      "No. It follows HMRC's published method. For anything unusual, check with HMRC or an accountant.",
  },
];

export default function CisCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        Free calculator
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        CIS deduction calculator UK
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        How much will be taken off your invoice under the Construction
        Industry Scheme? Put in your figures and you&apos;ll see the
        deduction and your net pay. It&apos;s free, and nothing you type is
        saved.
      </p>

      <div className="mt-10">
        <CisCalculatorForm />
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How CIS deductions work
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          When a contractor pays you for construction work, HMRC usually
          tells them to hold back part of the payment and pass it on to
          HMRC. That money isn&apos;t lost: it counts as an advance payment
          towards your tax and National Insurance bill.
        </p>
        <p className="mt-4 leading-relaxed text-muted">There are three rates:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
          <li>
            <strong className="text-foreground">20%</strong> if you&apos;re
            registered for CIS
          </li>
          <li>
            <strong className="text-foreground">30%</strong> if you&apos;re
            not registered
          </li>
          <li>
            <strong className="text-foreground">0%</strong> if you have
            gross payment status
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted">
          The deduction isn&apos;t taken from the whole invoice. The
          contractor starts with the gross amount and takes off what you
          paid for:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
          <li>VAT</li>
          <li>materials (only if you bought them directly)</li>
          <li>consumable stores (equipment that&apos;s now unusable)</li>
          <li>fuel, except fuel for travelling</li>
          <li>plant hired for the job</li>
          <li>manufacturing or prefabricating materials</li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted">
          The CIS rate is applied to what&apos;s left. Your labour, and any
          travel you charge for, stays in.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          The contractor can ask for receipts to show you paid for
          materials. If you can&apos;t show them, they can estimate the
          cost, so keep your receipts.
        </p>
        <p className="mt-4 text-sm text-muted-dim">
          Source:{" "}
          <a
            href="https://www.gov.uk/what-you-must-do-as-a-cis-contractor/make-deductions-and-pay-subcontractors"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline underline-offset-2 hover:text-accent"
          >
            GOV.UK – Make deductions and pay subcontractors
          </a>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          A worked example (HMRC&apos;s own)
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          This is the example HMRC uses in its guidance for contractors:
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <tbody>
              <tr className="border-b border-border-subtle">
                <td className="px-3 py-3 text-muted">Total payment</td>
                <td className="px-3 py-3 text-foreground">£2,567.00</td>
              </tr>
              <tr className="border-b border-border-subtle">
                <td className="px-3 py-3 text-muted">Less materials</td>
                <td className="px-3 py-3 text-foreground">£367.00</td>
              </tr>
              <tr className="border-b border-border-subtle">
                <td className="px-3 py-3 text-muted">
                  Amount the deduction is worked out on
                </td>
                <td className="px-3 py-3 text-foreground">£2,200.00</td>
              </tr>
              <tr className="border-b border-border-subtle">
                <td className="px-3 py-3 text-muted">CIS deduction at 20%</td>
                <td className="px-3 py-3 font-semibold text-foreground">
                  £440.00
                </td>
              </tr>
              <tr className="border-b border-border-subtle">
                <td className="px-3 py-3 text-muted">
                  Paid to the subcontractor
                </td>
                <td className="px-3 py-3 text-foreground">£2,127.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed text-muted">
          Not registered? At 30% the deduction on the same job would be
          £660.00, leaving £1,907.00. That&apos;s a good reason to register.
        </p>
        <p className="mt-4 text-sm text-muted-dim">
          Source:{" "}
          <a
            href="https://www.gov.uk/hmrc-internal-manuals/construction-industry-scheme-reform/cisr61230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline underline-offset-2 hover:text-accent"
          >
            HMRC manual CISR61230
          </a>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          FAQ
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group graftmate-card transition-colors open:border-accent/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="border-t border-border-subtle px-5 pb-4 pt-3 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Card className="px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Do this on every invoice without the maths
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
            GraftMate builds quotes and invoices on your phone with labour
            and materials as separate lines, so it&apos;s clear what the
            deduction is worked out on.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <Button href={APP_STORE_URL} size="lg">
              Get GraftMate on the App Store
            </Button>
            <p className="text-sm text-muted-dim">
              Try GraftMate free for 14 days
            </p>
          </div>
        </Card>
      </section>

      <p className="mt-10 text-center text-sm text-muted-dim">
        Need the background reading?{" "}
        <Link
          href="/guides"
          className="text-secondary underline underline-offset-2 hover:text-accent"
        >
          See all guides
        </Link>
        .
      </p>
    </div>
  );
}
