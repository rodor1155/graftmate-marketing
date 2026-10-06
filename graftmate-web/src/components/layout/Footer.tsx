import Link from "next/link";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Logo } from "@/components/layout/Logo";
import { tradePageLinks } from "@/lib/tradePages";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
  ],
  Trades: tradePageLinks,
};

export function Footer() {
  return (
    <footer className="section-dark border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Describe a job and get a professional quote you can review and
              send from your phone in about two minutes. Clients, jobs, and
              invoicing included.
            </p>
            <div className="mt-5">
              <AppStoreBadge />
            </div>
            <p className="mt-4 text-xs text-muted-dim">
              Prices in GBP · VAT-ready · Made for UK trades
            </p>
            <p className="mt-2 text-sm text-muted">
              <a
                href="mailto:support@graftmate.net"
                className="transition-colors hover:text-accent"
              >
                support@graftmate.net
              </a>
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-xs text-muted-dim">
            © 2026 GraftMate. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-dim">
            <Link href="/privacy" className="hover:text-muted">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-muted">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
