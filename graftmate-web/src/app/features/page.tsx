import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FeatureSection } from "@/components/features/FeatureSection";
import {
  CalendarIcon,
  ExpenseIcon,
  InvoiceIcon,
  ReceiptIcon,
  UkIcon,
  VoiceIcon,
} from "@/components/features/FeatureIcons";
import {
  CalendarVisual,
  ExpenseVisual,
  InvoiceVisual,
  ReceiptVisual,
  UkVisual,
  VoiceQuoteVisual,
} from "@/components/features/FeatureVisuals";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Voice quotes, AI receipt scanning, quote-to-invoice, expense tracking, Google Calendar, and UK VAT — built for sole traders.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Features
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need to run your trade business
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Quotes, invoices, expenses, and your diary — in one app built for UK
            sole traders. No spreadsheets. No faff.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/pricing" size="lg">
              Start 14-day free trial
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              View pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FeatureSection
          id="voice-quotes"
          icon={<VoiceIcon />}
          label="Voice quotes"
          title="Quote by speaking, not typing"
          description="After a long day on site, the last thing you want is to peck out line items on your phone. Tell Graftmate the job in plain English — customer, price, materials — and get a professional quote with VAT, ready to email."
          bullets={[
            "Speak naturally: job scope, price, and materials in one go",
            "Hands-free from the van — no typing on a small screen",
            "Professional PDF quotes with UK VAT included",
            "Send to your customer before you pull away",
          ]}
          visual={<VoiceQuoteVisual />}
        />

        <FeatureSection
          id="receipt-scanning"
          icon={<ReceiptIcon />}
          label="AI receipt scanning"
          title="Snap a receipt, done"
          description="Point your camera at any receipt from Screwfix, merchants, or fuel stations. Graftmate reads the details and logs the expense — so you're not stuffing paper in the glovebox for January."
          bullets={[
            "AI extracts amount, date, and supplier automatically",
            "Expenses auto-categorised (materials, fuel, tools, and more)",
            "VAT rate detected and stored for your records",
            "Works with crumpled receipts and thermal paper",
          ]}
          visual={<ReceiptVisual />}
          reversed
        />

        <FeatureSection
          id="quote-to-invoice"
          icon={<InvoiceIcon />}
          label="Quote to invoice"
          title="One tap from quote to invoice"
          description="When your customer accepts, don't re-type everything into a new document. Convert the quote to a branded invoice instantly — same line items, same VAT, same professional look."
          bullets={[
            "Accepted quote becomes an invoice in one tap",
            "No duplicate data entry or copy-paste errors",
            "Branded PDF ready to email or print",
            "Track what's quoted, invoiced, and paid",
          ]}
          visual={<InvoiceVisual />}
        />

        <FeatureSection
          id="expense-tracking"
          icon={<ExpenseIcon />}
          label="Expense tracking"
          title="Track every penny without the spreadsheet"
          description="See where your money goes without maintaining a maze of tabs. Receipt scanning, smart categories, and VAT breakdowns keep you ready for tax time — and your accountant will thank you."
          bullets={[
            "All expenses in one place, linked to receipts",
            "Filter by category, supplier, or date range",
            "Input and output VAT tracked for returns",
            "Export-ready summaries when you need them",
          ]}
          visual={<ExpenseVisual />}
          reversed
        />

        <FeatureSection
          id="calendar"
          icon={<CalendarIcon />}
          label="Google Calendar"
          title="Your jobs, synced to your calendar"
          description="Site visits, installs, and follow-ups stay in the diary you already use. Graftmate syncs with Google Calendar so you're not juggling two systems or missing a Saturday job."
          bullets={[
            "Jobs and appointments sync to Google Calendar",
            "See your week at a glance on phone or desktop",
            "Avoid double-booking site visits",
            "Reminders where you already look every morning",
          ]}
          visual={<CalendarVisual />}
        />

        <FeatureSection
          id="uk-specific"
          icon={<UkIcon />}
          label="UK-specific"
          title="Built for UK trades"
          description="Generic US software doesn't understand VAT, pounds, or how UK sole traders actually work. Graftmate is built from the ground up for British tradespeople."
          bullets={[
            "Multi-rate VAT: 20%, 5%, and 0% on quotes and invoices",
            "All amounts in £ sterling — no currency confusion",
            "UK date formats and phone number fields",
            "Designed for sole traders, not enterprise teams",
          ]}
          visual={<UkVisual />}
          reversed
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface px-6 py-12 text-center sm:px-12">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            All features. One plan.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            £9.99/month for your first 3 months, then £29.99. No tiers, no
            per-seat fees.
          </p>
          <Button href="/pricing" size="lg" className="mt-8">
            See pricing
          </Button>
        </div>
      </section>
    </>
  );
}
