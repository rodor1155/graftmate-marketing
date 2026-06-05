import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
  ],
  Trades: [
    { href: "/features", label: "Plumbers" },
    { href: "/features", label: "Electricians" },
    { href: "/features", label: "Builders" },
    { href: "/features", label: "Decorators" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              AI-powered job management built for UK sole traders. Quote
              generation, unified inbox, and client management — without the
              spreadsheet headache.
            </p>
            <p className="mt-4 text-xs text-muted-dim">
              Prices in GBP · VAT-ready · Made for UK trades
            </p>
            <p className="mt-2 text-sm text-muted">
              <a
                href="mailto:support@graftmate.net"
                className="transition-colors hover:text-secondary"
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
                      className="text-sm text-muted transition-colors hover:text-secondary"
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
            <a
              href="https://graftmate.net/privacy"
              className="hover:text-muted"
            >
              Privacy
            </a>
            <a href="https://graftmate.net/terms" className="hover:text-muted">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
