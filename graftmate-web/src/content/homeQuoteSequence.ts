import type { ExampleQuote } from "@/lib/tradePages";

/** Informal job notes as a tradesperson might type on site (homepage demo). */
export const homeRoughJobNotes =
  "cloakroom leak behind basin, probably flexi. need new 550 vanity + mixer, isolate mains, test. tenant in til 12";

export const homeSequenceQuote: ExampleQuote = {
  title: "Cloakroom basin replacement",
  siteNotes:
    "Upstairs cloakroom — isolate water, remove old basin and taps, supply and fit 550mm vanity basin with mixer tap, new waste and flexible connectors. Test for leaks.",
  client: "Sample customer",
  location: "Leeds",
  status: "Sent",
  subtotal: "£237.50",
  vat: "£47.50",
  vatLabel: "VAT (20%)",
  total: "£285.00",
  lines: [
    {
      item: "Labour",
      description:
        "Isolate supply, remove old basin and taps, fit new basin suite and mixer tap, test for leaks.",
      qty: "1",
      unitPrice: "£165.00",
      total: "£165.00",
    },
    {
      item: "Materials",
      description: "Basin, mixer tap, waste, flexible connectors, and sundries.",
      qty: "1",
      unitPrice: "£72.50",
      total: "£72.50",
    },
  ],
};
