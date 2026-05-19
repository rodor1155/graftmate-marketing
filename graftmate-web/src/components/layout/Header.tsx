"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-lg font-bold text-[#0a0a0b]">
            G
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent-bright">
            Graftmate
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/pricing" variant="ghost" size="sm">
            Sign in
          </Button>
          <Button href="/pricing" size="sm">
            Start free trial
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-surface px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface-raised hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border-subtle pt-3">
              <Button href="/pricing" variant="secondary" className="w-full">
                Sign in
              </Button>
              <Button href="/pricing" className="w-full">
                Start free trial
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      {open ? (
        <path d="M4 4l12 12M16 4L4 16" />
      ) : (
        <>
          <path d="M3 6h14M3 10h14M3 14h14" />
        </>
      )}
    </svg>
  );
}
