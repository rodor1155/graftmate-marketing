import type { CommercialPageContent } from "@/lib/commercialPages";

export const invoiceAppForTradesmenPage: CommercialPageContent = {
  route: "/invoice-app-for-tradesmen",
  title: "Best Invoice App for Tradesmen UK | GraftMate",
  description:
    "Invoice app for UK tradesmen: AI quotes, VAT-ready invoices, clients and WhatsApp in one place. £29.99/month, first month free. Built for sole traders.",
  eyebrow: "Invoice app",
  heroTitle: "Invoice app for UK tradesmen — quotes included",
  heroSubtitle:
    "The best invoice app for trades is the one you actually use on site. GraftMate combines AI quoting, VAT-ready invoices, client records, and email plus WhatsApp in one UK-friendly app.",
  sections: [
    {
      id: "what-to-look-for",
      title: "What to look for in a trades invoice app",
      bullets: [
        "Quote and invoice in one flow — no retyping line items",
        "UK VAT support and clear PDFs customers expect",
        "Phone-first workflow between jobs",
        "Client history when repeat work comes in",
        "Messages linked to the job, not lost in personal texts",
        "Simple pricing without surprise tiers",
      ],
    },
    {
      id: "graftmate",
      variant: "surface",
      title: "How GraftMate fits UK trades",
      body: [
        "Describe the job in plain English and review an AI-drafted quote with line items and VAT. When the customer accepts, invoice in one tap. Keep clients, jobs, and chats together so admin does not eat your evenings.",
        "GraftMate Pro is £29.99/month with your first month free — one plan with quotes, inbox, clients, and unlimited quotes and invoices on the pricing page.",
      ],
    },
    {
      id: "trades",
      title: "Built for your trade",
      body: [
        "Explore quoting pages for electricians, plumbers, builders, roofers, painters, and more — each with optional free invoice templates while files are prepared.",
      ],
      bullets: [
        "Electricians, plumbers, builders, heating & gas engineers",
        "Roofers, plasterers, landscapers, carpenters, kitchen & bathroom fitters, handymen",
        "Free CIS invoice template for subcontractors",
      ],
    },
  ],
  faqs: [
    {
      question: "Is GraftMate only an invoice app?",
      answer:
        "It covers quoting, client management, messaging, jobs, and invoicing — invoicing works best when it follows the quote you already sent.",
    },
    {
      question: "Does it work for CIS subcontractors?",
      answer:
        "GraftMate helps you keep organised job and invoice records for CIS work. Follow HMRC rules and your accountant for deductions.",
    },
    {
      question: "Can I subscribe on iPhone?",
      answer:
        "Yes. Pay by card on the web or subscribe via Apple in-app purchase on iPhone. The pricing page notes a 30-day free trial for Apple IAP.",
    },
    {
      question: "Are there user limits?",
      answer:
        "The pricing page lists no user limits on GraftMate Pro — suitable for sole traders and small teams.",
    },
  ],
};
