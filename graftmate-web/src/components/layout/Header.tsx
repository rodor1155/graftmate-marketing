"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type RefObject,
} from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { toolsPageLinks } from "@/lib/tradePageCatalog";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/urls";

const primaryNavLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
] as const;

const navLinkClassName =
  "whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-accent";

export function Header() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsMenuId = useId();
  const toolsContainerRef = useRef<HTMLDivElement>(null);

  const closeTools = useCallback(() => setToolsOpen(false), []);

  useEffect(() => {
    if (!toolsOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        toolsContainerRef.current &&
        !toolsContainerRef.current.contains(target)
      ) {
        closeTools();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeTools();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [toolsOpen, closeTools]);

  return (
    <header className="border-b border-border bg-[#f5f3ed]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-6 lg:px-8">
        <Logo priority className="mr-1 shrink-0 sm:mr-2" />

        <nav className="hidden min-w-0 items-center gap-4 md:flex lg:gap-5">
          {primaryNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClassName}>
              {link.label}
            </Link>
          ))}
          <ToolsDropdown
            containerRef={toolsContainerRef}
            menuId={toolsMenuId}
            open={toolsOpen}
            onOpenChange={setToolsOpen}
            onClose={closeTools}
          />
        </nav>

        <div className="hidden shrink-0 items-center gap-3 whitespace-nowrap md:flex">
          <Button href={LOGIN_URL} variant="ghost" size="sm" className="whitespace-nowrap">
            Sign in
          </Button>
          <Button href={SIGNUP_URL} size="sm" className="whitespace-nowrap">
            Get started →
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-border text-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-surface-raised px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-background hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Tools
            </p>
            {toolsPageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-background hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border-subtle pt-3">
              <Button href={LOGIN_URL} variant="ghost" className="w-full">
                Sign in
              </Button>
              <Button href={SIGNUP_URL} className="w-full">
                Get started →
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

type ToolsDropdownProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  menuId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
};

function ToolsDropdown({
  containerRef,
  menuId,
  open,
  onOpenChange,
  onClose,
}: ToolsDropdownProps) {
  const toggle = () => onOpenChange(!open);

  const onTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
    if (event.key === "ArrowDown" && !open) {
      event.preventDefault();
      onOpenChange(true);
    }
    if (event.key === "Escape" && open) {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        className={`inline-flex items-center gap-1 whitespace-nowrap ${navLinkClassName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        id={`${menuId}-trigger`}
        onClick={toggle}
        onKeyDown={onTriggerKeyDown}
      >
        Tools
        <ChevronDownIcon open={open} />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={`${menuId}-trigger`}
          className="absolute left-0 top-full z-50 mt-2 min-w-[16.5rem] rounded-lg border border-border bg-surface-raised py-1 shadow-lg"
        >
          {toolsPageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-background hover:text-accent"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
