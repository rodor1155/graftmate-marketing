import type { CommercialPageContent } from "@/lib/commercialPages";

export const tradifyAlternativePage: CommercialPageContent = {
  route: "/tradify-alternative",
  title: "Tradify Alternative UK: One Plan, £29.99 | GraftMate",
  description:
    "Looking for a Tradify alternative in the UK? GraftMate is one £29.99/month plan with AI quoting, clients, and invoices. Compare fairly before you switch.",
  eyebrow: "Compare",
  heroTitle: "A Tradify alternative with one UK plan",
  heroSubtitle:
    "If you are comparing trade job software in the UK, GraftMate keeps pricing simple: free until 25 Dec 2026 (no card needed), then £29.99/month from 26 Dec, with AI quoting, a unified inbox, and quote-to-invoice in one app. See how it compares — verify Tradify details on their site before you decide.",
  sections: [
    {
      id: "why-compare",
      title: "Why trades look for Tradify alternatives",
      body: [
        "Tradify is a well-known quote and invoice tool for trades. Some UK businesses look elsewhere when they want a different price model, faster quoting, or a lighter setup.",
        "GraftMate is built for UK sole traders and small teams who want AI-assisted quoting, email and WhatsApp in one inbox, and a single plan without tier hunting.",
      ],
    },
    {
      id: "comparison",
      variant: "surface",
      title: "GraftMate vs Tradify (verify before you switch)",
      body: [
        "The table below uses GraftMate facts from this site plus clearly marked placeholders for Tradify. Do not treat placeholder cells as accurate — check Tradify's current pricing and features directly.",
      ],
      comparisonRows: {
        headers: ["Topic", "GraftMate", "Tradify"],
        rows: [
          {
            label: "Public pricing (UK)",
            graftmate:
              "Free until 25 Dec 2026, then £29.99/month (this site)",
            other: "TODO(verify): Tradify UK plan names and prices from tradify.co.uk",
          },
          {
            label: "Plan structure",
            graftmate: "One plan — quotes, clients, jobs, invoices included",
            other: "TODO(verify): Tradify tier count and what each tier includes",
          },
          {
            label: "AI quote drafting",
            graftmate: "Describe the job in plain English; review line items before sending",
            other: "TODO(verify): whether Tradify offers AI quote generation and how it works",
          },
          {
            label: "Unified inbox (email + WhatsApp)",
            graftmate: "Included — messages linked to clients and jobs",
            other: "TODO(verify): Tradify messaging channels and inbox behaviour",
          },
          {
            label: "App Store rating (GB)",
            graftmate: "New listing — ratings still building",
            other: "TODO(verify): current GB App Store rating count for Tradify",
          },
          {
            label: "Best for",
            graftmate: "UK sole traders wanting fast AI quotes and one monthly price",
            other: "TODO(verify): Tradify's stated target customer and team size",
          },
        ],
      },
      note: "TODO(verify): every Tradify column cell above. No unverified Tradify pricing, feature, or rating claims should be published without a source.",
    },
    {
      id: "graftmate-facts",
      title: "What GraftMate includes today",
      bullets: [
        "AI quote generation from plain-English job notes",
        "Unified inbox for email and WhatsApp linked to clients",
        "Client and job records with quote history",
        "Quote to invoice in one tap with UK VAT support",
        "Free until 25 Dec 2026, then £29.99/month — pay on the web by card or via Apple in-app purchase on iPhone",
      ],
    },
  ],
  faqs: [
    {
      question: "Is GraftMate a drop-in replacement for Tradify?",
      answer:
        "It depends on your workflow. Compare features you use every day — scheduling, inventory, accounting integrations — and verify Tradify capabilities before switching. TODO(verify): feature parity checklist once product team confirms.",
    },
    {
      question: "Can I import Tradify data?",
      answer:
        "TODO(verify): document whether customer or job import exists before claiming migration support.",
    },
    {
      question: "Which is cheaper?",
      answer:
        "GraftMate publishes one price on this site. Tradify pricing varies by plan — TODO(verify): fetch current Tradify UK pricing before making cost comparisons in ads or sales calls.",
    },
  ],
  closingCopy:
    "Try GraftMate on your next quote — free until Christmas, no card needed. From 26 Dec, £29.99/month. Make your own comparison against Tradify using their latest pricing and feature list.",
};
