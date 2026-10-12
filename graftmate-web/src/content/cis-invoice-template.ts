import type { CommercialPageContent } from "@/lib/commercialPages";

export const cisInvoiceTemplatePage: CommercialPageContent = {
  route: "/cis-invoice-template",
  title: "Free CIS Invoice Template UK (Word, PDF) | GraftMate",
  description:
    "Download a free CIS invoice template for UK subcontractors (Word & PDF). Labour, materials, deduction lines — or invoice in GraftMate in two minutes.",
  eyebrow: "Free resource",
  heroTitle: "Free CIS invoice template for UK subcontractors",
  heroSubtitle:
    "A clear layout for labour, materials, VAT, and CIS deduction lines — built for subcontractors who still send invoices from Word. Use the template, or send the same job from GraftMate in about two minutes.",
  sections: [
    {
      id: "what-included",
      title: "What to include on a CIS invoice",
      body: [
        "HMRC expects subcontractors on the Construction Industry Scheme to show your business details, the contractor's details, a unique invoice number, the tax month, labour and materials separately where relevant, and the CIS deduction applied to labour.",
        "This page offers placeholder Word and PDF downloads until final files are published. Always follow current HMRC guidance or your accountant for CIS treatment.",
      ],
      bullets: [
        "Your business name, address, and UTR",
        "Contractor name and address",
        "Invoice number and date",
        "Description of work and site",
        "Labour and materials split where needed",
        "CIS deduction rate and amount on labour",
        "VAT if you are VAT registered",
      ],
    },
    {
      id: "downloads",
      variant: "surface",
      title: "Download the template",
      body: [
        "Choose Word if you edit on a laptop, or PDF if you fill and send from a tablet. Files below are placeholders until the real templates are uploaded.",
      ],
      downloads: [
        {
          label: "Word (.docx)",
          href: "#todo-cis-invoice-word",
          placeholder: true,
        },
        {
          label: "PDF",
          href: "#todo-cis-invoice-pdf",
          placeholder: true,
        },
      ],
      note: "TODO(verify): replace placeholder download links with real CIS invoice template files (Word and PDF).",
    },
    {
      id: "graftmate",
      title: "Do the same in GraftMate in two minutes",
      body: [
        "Template seekers are often one step away from quoting and invoicing in an app. GraftMate lets you describe the job, generate line items with AI, keep CIS-related notes with the client, and invoice without copying rows between documents.",
        "GraftMate is free for everyone until 25 Dec 2026 — no card needed. From 26 Dec, GraftMate Pro is £29.99/month — one plan for quotes, clients, jobs, and invoices.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is this tax advice?",
      answer:
        "No. This page is a general UK trades resource. Check HMRC CIS guidance or speak to your accountant before you rely on any template wording.",
    },
    {
      question: "Does GraftMate calculate CIS deductions automatically?",
      answer:
        "GraftMate helps you organise quotes, clients, jobs, and invoices. TODO(verify): confirm current product behaviour for CIS deduction fields before claiming automatic CIS calculation in marketing copy.",
    },
    {
      question: "Can I use the template for domestic work?",
      answer:
        "CIS applies to construction work for contractors in the scheme. Domestic homeowners may not need CIS invoices — use your accountant's advice for each job.",
    },
  ],
};
