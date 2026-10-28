import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LatePaymentCalculator } from "@/components/calculators/LatePaymentCalculator";
import { APP_STORE_URL } from "@/lib/config";

const ROUTE = "/late-payment-calculator";

export const metadata: Metadata = {
  title: "Late Payment Interest Calculator UK",
  description:
    "Work out the statutory interest and fixed recovery charge you can add to a late invoice from another business. Free, based on GOV.UK rules.",
  alternates: {
    canonical: `https://graftmate.net${ROUTE}`,
  },
};

const proseClassName =
  "text-muted [&_a]:text-secondary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:sm:text-3xl [&_p]:mt-4 [&_p]:leading-relaxed [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground";

export default function LatePaymentCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Free calculator
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Late payment interest calculator
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          If another business pays you late, the law usually lets you add interest
          and a fixed charge on top. Put in the invoice details and this works out
          how much.
        </p>
      </header>

      <div className="mt-10">
        <LatePaymentCalculator />
      </div>

      <div className={proseClassName}>
        <h2>When is an invoice late?</h2>
        <p>
          If you agreed a payment date, it&apos;s late the day after that.
          Business-to-business terms should usually be no more than 60 days (30
          for public authorities), although a longer period can be agreed if
          it&apos;s fair to both sides.
        </p>
        <p>
          If you didn&apos;t agree a date, the law says payment is late 30 days
          after the customer gets your invoice, or 30 days after you finish the
          work if that&apos;s later.
        </p>

        <h2>What you can add</h2>
        <p>
          <strong>Statutory interest:</strong> 8% plus the Bank of England base
          rate, per year, worked out daily.
        </p>
        <p>
          <strong>A fixed sum for recovery costs</strong>, once per invoice:
        </p>
        <table className="mt-6 w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="border-b border-border-subtle px-3 py-3 font-display font-semibold text-foreground">
                Invoice amount
              </th>
              <th className="border-b border-border-subtle px-3 py-3 font-display font-semibold text-foreground">
                Fixed sum
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-border-subtle px-3 py-3">Up to £999.99</td>
              <td className="border-b border-border-subtle px-3 py-3">£40</td>
            </tr>
            <tr>
              <td className="border-b border-border-subtle px-3 py-3">£1,000 to £9,999.99</td>
              <td className="border-b border-border-subtle px-3 py-3">£70</td>
            </tr>
            <tr>
              <td className="border-b border-border-subtle px-3 py-3">£10,000 or more</td>
              <td className="border-b border-border-subtle px-3 py-3">£100</td>
            </tr>
          </tbody>
        </table>
        <p>
          You can also claim reasonable costs each time you try to recover the
          debt.
        </p>
        <p className="text-sm text-muted-dim">
          Sources:{" "}
          <a
            href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.UK – When a payment becomes late
          </a>
          ,{" "}
          <a
            href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interest on late commercial payments
          </a>
          ,{" "}
          <a
            href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery/claim-debt-recovery-costs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim debt recovery costs
          </a>
        </p>

        <h2>How to charge interest on a late invoice (UK)</h2>
        <p>
          Late payment is a big problem for small firms. The government estimates
          businesses are owed £26bn in late payments at any one time, and that
          late payment causes 38 business closures a day (
          <a
            href="https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Small Business Commissioner
          </a>
          ). The law gives you a way to charge for the wait, but many trades
          never use it.
        </p>
        <ol>
          <li>
            <strong>Check it applies.</strong> Statutory interest is for
            business-to-business work: a main contractor, a letting agent, a
            shop fit-out client. It doesn&apos;t cover private homeowners. If
            your contract sets its own interest rate, you use that rate
            instead.
          </li>
          <li>
            <strong>Work out when it became late.</strong> Use the agreed
            payment date. If there wasn&apos;t one, it&apos;s 30 days after the
            customer got your invoice (or after you finished the work, if that
            was later).
          </li>
          <li>
            <strong>Work out the interest.</strong> The rate is 8% plus the
            Bank of England base rate. GOV.UK gives this example, using an
            illustrative base rate of 0.5%: on £1,000, a year&apos;s interest
            is £85. That&apos;s about 23p a day, so 50 days late comes to
            £11.50. Use the current base rate for your own sums.
          </li>
          <li>
            <strong>Add the fixed sum.</strong> On top of interest you can
            charge £40 for invoices under £1,000, £70 for £1,000 to £9,999.99,
            and £100 for £10,000 or more. This is once per invoice.
          </li>
          <li>
            <strong>Send a new invoice.</strong> GOV.UK says to send a new
            invoice if you decide to add interest. Show the original invoice
            number, the days late, the rate used, the interest and the fixed
            sum as separate lines.
          </li>
          <li>
            <strong>Keep it civil, and keep records.</strong> Many trades send
            a friendly reminder first and mention interest second. You decide
            when to charge it, since it&apos;s a right, not an obligation.
            Keep copies of everything you send.
          </li>
        </ol>
        <p>
          If they still don&apos;t pay, the same GOV.UK guide sets out the
          options for recovering the debt.
        </p>
        <p>
          <Link href="#calculator">
            Work out what you&apos;re owed: free late payment calculator
          </Link>
        </p>
        <p className="text-sm text-muted-dim">
          Sources:{" "}
          <a
            href="https://www.gov.uk/late-commercial-payments-interest-debt-recovery"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.UK – Late commercial payments: charging interest and debt
            recovery
          </a>
          ;{" "}
          <a
            href="https://www.smallbusinesscommissioner.gov.uk/late-payments-research-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Small Business Commissioner – Late Payments Research
          </a>
          .
        </p>
      </div>

      <Card className="mt-16 px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Chase it properly, from your phone.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
          GraftMate keeps track of what&apos;s been paid and what hasn&apos;t,
          so you know who to chase and when. Quotes and invoices in one app.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <Button
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Get GraftMate on the App Store →
          </Button>
          <p className="text-sm text-muted-dim">Try GraftMate free for 14 days</p>
        </div>
      </Card>
    </div>
  );
}
