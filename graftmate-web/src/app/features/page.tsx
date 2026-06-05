import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FeatureSection } from "@/components/features/FeatureSection";
import {
  ClientIcon,
  EmailIcon,
  InboxIcon,
  InvoiceIcon,
  UkIcon,
  VoiceIcon,
} from "@/components/features/FeatureIcons";
import {
  ClientVisual,
  EmailVisual,
  InboxVisual,
  InvoiceVisual,
  UkVisual,
  VoiceQuoteVisual,
} from "@/components/features/FeatureVisuals";

const SIGNUP_URL = "https://graftmate.net/signup";

export const metadata: Metadata = {
  title: "Features",
  description:
    "AI quote generation, unified inbox, inbound email parsing, client management, and UK VAT — built for sole traders.",
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
            AI quotes, unified inbox, client management, and invoicing — in one
            app built for UK sole traders. No spreadsheets. No faff.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={SIGNUP_URL} size="lg">
              Get started →
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              View pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FeatureSection
          id="ai-quotes"
          icon={<VoiceIcon />}
          label="AI quote generation"
          title="Describe the job, get a quote in seconds"
          description="After a long day on site, the last thing you want is to peck out line items on your phone. Tell GraftMate the job in plain English — by voice or text — and get a professional quote with VAT, ready to email."
          bullets={[
            "Speak naturally or type: job scope, price, and materials in one go",
            "Hands-free from the van — no typing on a small screen",
            "Professional PDF quotes with UK VAT included",
            "Send to your customer before you pull away",
          ]}
          visual={<VoiceQuoteVisual />}
        />

        <FeatureSection
          id="unified-inbox"
          icon={<InboxIcon />}
          label="Unified inbox"
          title="Email and WhatsApp in one place"
          description="Stop scrolling through hundreds of messages to find a job detail. GraftMate brings every client conversation into one inbox — automatically linked to the right contact and job."
          bullets={[
            "WhatsApp and email messages in a single view",
            "Conversations auto-linked to clients and jobs",
            "See full message history without switching apps",
            "Never lose a quote request in the chat again",
          ]}
          visual={<InboxVisual />}
          reversed
        />

        <FeatureSection
          id="inbound-email"
          icon={<EmailIcon />}
          label="Inbound email parsing"
          title="Clients email you, messages appear automatically"
          description="Give clients your GraftMate email address. When they send a message, it lands in your unified inbox — parsed, linked to the right client, and ready to action."
          bullets={[
            "Dedicated GraftMate address for your business",
            "Inbound emails parsed and linked automatically",
            "No manual forwarding or copy-paste",
            "Works alongside your existing email habits",
          ]}
          visual={<EmailVisual />}
        />

        <FeatureSection
          id="client-management"
          icon={<ClientIcon />}
          label="Client management"
          title="Full history, follow-ups, and contact tracking"
          description="Every client in one place — quotes sent, messages received, jobs in progress, and follow-ups due. No more digging through WhatsApp to remember what you quoted last month."
          bullets={[
            "Complete client history at a glance",
            "Track follow-ups and next actions",
            "See all quotes, jobs, and messages per client",
            "Stay on top of every relationship",
          ]}
          visual={<ClientVisual />}
          reversed
        />

        <FeatureSection
          id="quote-to-invoice"
          icon={<InvoiceIcon />}
          label="Jobs & invoicing"
          title="From quote to paid in minutes"
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
          id="uk-specific"
          icon={<UkIcon />}
          label="Built for UK trades"
          title="£GBP, UK VAT, British English"
          description="Generic US software doesn't understand VAT, pounds, or how UK sole traders actually work. GraftMate is built from the ground up for British tradespeople."
          bullets={[
            "Multi-rate VAT: 20%, 5%, and 0% on quotes and invoices",
            "All amounts in £ sterling — no currency confusion",
            "UK date formats and phone number fields",
            "British English throughout — designed for sole traders",
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
          <Button href={SIGNUP_URL} size="lg" className="mt-8">
            Get started →
          </Button>
        </div>
      </section>
    </>
  );
}
