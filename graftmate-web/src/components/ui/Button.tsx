import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-bright border-2 border-transparent",
  secondary:
    "border-2 border-[rgba(26,26,26,0.1)] bg-surface-raised text-foreground hover:border-accent/30 hover:bg-background",
  ghost: "text-muted hover:text-accent",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    if (href.startsWith("http://") || href.startsWith("https://")) {
      return <a href={href} className={classes} {...linkProps} />;
    }

    return <Link href={href} className={classes} {...linkProps} />;
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return <button type={type} className={classes} {...buttonProps} />;
}
