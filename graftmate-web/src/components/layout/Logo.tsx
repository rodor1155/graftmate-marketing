import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="GraftMate"
        width={211}
        height={256}
        className="h-9 w-auto sm:h-10"
        priority={priority}
      />
    </Link>
  );
}
