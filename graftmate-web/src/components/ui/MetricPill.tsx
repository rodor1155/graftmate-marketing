import type { ReactNode } from "react";

type MetricPillProps = {
  icon: ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function MetricPill({ icon, children, className = "" }: MetricPillProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-[rgba(26,26,26,0.08)] bg-white/95 px-3 py-2 text-sm shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.08)] backdrop-blur-sm ${className}`.trim()}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
        {icon}
      </span>
      <span className="font-mono text-[13px] font-medium tabular-nums text-foreground">
        {children}
      </span>
    </div>
  );
}
