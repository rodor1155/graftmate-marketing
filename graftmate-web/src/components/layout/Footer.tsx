import Link from "next/link";

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
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-lg font-bold text-[#0a0a0b]">
                G
              </span>
              <span className="font-display text-xl font-bold">Graftmate</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Business management built for UK sole traders. Voice quotes,
              receipt scanning, and invoicing — without the spreadsheet
              headache.
            </p>
            <p className="mt-4 text-xs text-muted-dim">
              Prices in GBP · VAT-ready · Made for UK trades
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
                      className="text-sm text-muted transition-colors hover:text-accent-bright"
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
            © {new Date().getFullYear()} Graftmate. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-dim">
            <Link href="#" className="hover:text-muted">
              Privacy
            </Link>
            <Link href="#" className="hover:text-muted">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
