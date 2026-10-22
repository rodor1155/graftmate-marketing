import { forCarpentersJoinersPage } from "@/content/for-carpenters-joiners";
import { forHandymenPage } from "@/content/for-handymen";
import { forKitchenBathroomFittersPage } from "@/content/for-kitchen-bathroom-fitters";
import { forLandscapersPage } from "@/content/for-landscapers";
import { forPaintersDecoratorsPage } from "@/content/for-painters-decorators";
import { forPlasterersPage } from "@/content/for-plasterers";
import { forRoofersPage } from "@/content/for-roofers";
import { tradePages, type TradePageData } from "@/lib/tradePages";

export const additionalTradePages: TradePageData[] = [
  forRoofersPage,
  forPaintersDecoratorsPage,
  forCarpentersJoinersPage,
  forPlasterersPage,
  forLandscapersPage,
  forKitchenBathroomFittersPage,
  forHandymenPage,
];

export const allTradePages: TradePageData[] = [
  tradePages.electricians,
  tradePages.plumbers,
  tradePages.builders,
  tradePages.heatingGas,
  ...additionalTradePages,
];

export const tradePageLinks = allTradePages.map((page) => ({
  href: page.route,
  label: page.linkLabel,
}));

export const resourcePageLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/cis-invoice-template", label: "CIS invoice template" },
  { href: "/invoice-app-for-tradesmen", label: "Invoice app for trades" },
  { href: "/tradify-alternative", label: "Tradify alternative" },
  { href: "/late-payment-calculator", label: "Late payment calculator" },
];
