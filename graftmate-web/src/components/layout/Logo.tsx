import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="GraftMate AI home"
      className={`inline-flex shrink-0 items-center gap-2 sm:gap-2.5 ${className}`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={211}
        height={256}
        className="h-8 w-auto sm:h-9"
        priority={priority}
        aria-hidden
      />
      <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
        GraftMate AI
      </span>
    </Link>
  );
}
