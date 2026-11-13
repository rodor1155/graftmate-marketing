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
      aria-label="GraftMate home"
      className={`inline-flex shrink-0 items-center gap-2 sm:gap-2.5 ${className}`}
    >
      <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-lg sm:h-9 sm:w-9">
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes="36px"
          className="object-cover object-top"
          priority={priority}
          aria-hidden
        />
      </span>
      <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
        GraftMate
      </span>
    </Link>
  );
}
