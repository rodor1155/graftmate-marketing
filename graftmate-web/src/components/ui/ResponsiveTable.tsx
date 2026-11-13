import type { ReactNode } from "react";

type ResponsiveTableProps = {
  children: ReactNode;
  className?: string;
};

/** Scrollable table wrapper so wide tables do not overflow the page on small screens. */
export function ResponsiveTable({ children, className = "" }: ResponsiveTableProps) {
  return (
    <div
      className={`w-full max-w-full overflow-x-auto overscroll-x-contain rounded-xl border border-border-subtle bg-surface-raised/40 ${className}`.trim()}
    >
      <div className="min-w-0 p-1 sm:p-0">{children}</div>
    </div>
  );
}
