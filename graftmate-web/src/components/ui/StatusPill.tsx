type StatusVariant = "sent" | "in-progress" | "scheduled" | "accepted";

const variantStyles: Record<StatusVariant, string> = {
  sent: "bg-accent/15 text-accent",
  "in-progress": "bg-secondary/15 text-primary",
  scheduled: "bg-[rgba(26,26,26,0.06)] text-muted",
  accepted: "bg-primary/15 text-primary",
};

type StatusPillProps = {
  children: React.ReactNode;
  variant?: StatusVariant;
  className?: string;
};

export function StatusPill({
  children,
  variant = "sent",
  className = "",
}: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
