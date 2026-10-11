import type { TradePageData } from "@/lib/tradePages";

export const forCarpentersJoinersPage: TradePageData = {
  slug: "carpentersJoiners",
  route: "/for-carpenters-joiners",
  linkLabel: "Carpenters & joiners",
  tradeSingular: "carpenter & joiner",
  tradePlural: "carpenters & joiners",
  title: "Carpenter & Joiner Quote and Invoice App | GraftMate",
  description:
    "Quote first fix, second fix and bespoke joinery from the van. Free carpenter invoice template, CIS-friendly records and one-tap invoicing.",
  eyebrow: "For UK carpenters & joiners",
  heroTitle: "Quote joinery and first fix from the van in minutes",
  subheading:
    "Stud walls, doors, kitchens, bespoke cabinets — describe the job and send a clear quote with labour, materials, and VAT.",
  heroCopy:
    "Joinery quotes mix labour days, materials, and fiddly extras customers only mention later. GraftMate helps you capture scope on site, draft line items with AI, and keep every message and invoice tied to the right client.",
  painIntro:
    "Whether you are pricing a loft conversion trim-out or a one-off bespoke unit, clear paperwork keeps margins visible and customers confident.",
  painPoints: [
    {
      title: "Bespoke jobs, bespoke spreadsheets",
      description:
        "Stop rebuilding similar quotes from scratch — describe the job once and refine the draft on your phone.",
    },
    {
      title: "CIS paperwork scattered",
      description:
        "Keep client and job notes together for CIS-friendly records alongside quotes and invoices.",
    },
    {
      title: "Chasing sign-off on variations",
      description:
        "When the customer adds three extra sockets worth of architrave, the conversation stays with the job.",
    },
  ],
  featureIntro:
    "GraftMate supports the flow carpenters repeat: quote accurately, manage the client, invoice promptly, and move to the next fit-out.",
  features: [
    {
      icon: "quote",
      title: "AI quote generation",
      description:
        "Describe first fix, second fix, doors, floors, or bespoke joinery. GraftMate drafts professional line items you can edit before sending.",
    },
    {
      icon: "inbox",
      title: "Client messages in one place",
      description:
        "Site photos, sizes, and change requests stay linked to the client instead of lost in personal texts.",
    },
    {
      icon: "client",
      title: "Client and job records",
      description:
        "Track quote history and follow-ups when builders call you back for the next phase.",
    },
    {
      icon: "invoice",
      title: "One-tap invoicing",
      description:
        "Accepted quote to invoice without retyping labour and timber lines — VAT shown clearly.",
    },
  ],
  exampleQuote: {
    title: "Supply and fit internal doors",
    client: "Riverside Developments",
    location: "Cambridge",
    status: "Sent",
    subtotal: "£1,041.67",
    vat: "£208.33",
    vatLabel: "VAT (20%)",
    total: "£1,250.00",
    lines: [
      {
        item: "Labour",
        description:
          "Hang and adjust six internal doors, linings, handles, architrave, make good.",
        qty: "1",
        unitPrice: "£720.00",
        total: "£720.00",
      },
      {
        item: "Materials",
        description: "Doors, ironmongery, linings, fixings, filler.",
        qty: "1",
        unitPrice: "£321.67",
        total: "£321.67",
      },
    ],
  },
  templateSection: {
    title: "Free carpenter invoice template",
    body: "A simple UK invoice for joinery and fix-out work — labour, materials, and VAT. Template files are placeholders for now; quote and invoice the same job in GraftMate in about two minutes.",
    downloads: [
      {
        label: "Word (.docx)",
        href: "#todo-carpenter-invoice-word",
        placeholder: true,
      },
      {
        label: "PDF",
        href: "#todo-carpenter-invoice-pdf",
        placeholder: true,
      },
    ],
  },
  pricingCopy:
    "GraftMate Pro is £29.99/month with your first month free. One plan with quotes, clients, jobs, and invoices included.",
  faqs: [
    {
      question: "Is GraftMate suitable for CIS subcontractors?",
      answer:
        "Yes. Keep organised client and invoice records for CIS jobs. Deductions and reporting should follow HMRC rules and your accountant.",
    },
    {
      question: "Can I break quotes into labour and materials?",
      answer:
        "Yes. Line items support clear labour and materials splits you can adjust before sending.",
    },
    {
      question: "Does it work on site from my phone?",
      answer:
        "Yes. The workflow is phone-first — ideal between jobs on the van.",
    },
    {
      question: "Can I manage multiple builders at once?",
      answer:
        "Client records and job notes help you juggle several contractors without mixing up quotes.",
    },
  ],
  heroScreenshot: {
    src: "/app/jobs.webp",
    alt: "GraftMate jobs view for joinery work",
    statusBar: "#f5f3ed",
  },
};
