export type ResourceHeroVisual = {
  src: string;
  alt: string;
  statusBar?: string;
};

export const resourcePageHeroVisuals: Record<string, ResourceHeroVisual> = {
  "/cis-calculator": {
    src: "/app/quote-builder.webp",
    alt: "GraftMate quote builder showing labour and materials as separate line items",
    statusBar: "#f5f3ed",
  },
  "/cis-invoice-template": {
    src: "/app/quotes.webp",
    alt: "GraftMate quotes list ready to turn into a CIS invoice",
    statusBar: "#f5f3ed",
  },
  "/invoice-app-for-tradesmen": {
    src: "/app/quotes.webp",
    alt: "GraftMate app showing quotes and invoicing on your phone",
    statusBar: "#f5f3ed",
  },
  "/tradify-alternative": {
    src: "/app/home.webp",
    alt: "GraftMate home screen with today's jobs and quotes",
    statusBar: "#a9b8c0",
  },
  "/late-payment-calculator": {
    src: "/app/clients.webp",
    alt: "GraftMate client list showing who still owes on invoices",
    statusBar: "#f5f3ed",
  },
  "/mtd": {
    src: "/app/jobs.webp",
    alt: "GraftMate jobs screen for keeping digital records",
    statusBar: "#f5f3ed",
  },
};

export function getResourceHeroVisual(route: string): ResourceHeroVisual {
  return (
    resourcePageHeroVisuals[route] ?? {
      src: "/app/home.webp",
      alt: "GraftMate app on iPhone",
      statusBar: "#a9b8c0",
    }
  );
}
