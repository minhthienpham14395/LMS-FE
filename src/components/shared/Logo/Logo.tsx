import { Link } from "react-router-dom";

import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Trang chủ LMS Tiếng Anh"
      className={cn("inline-flex min-h-11 items-center gap-2 rounded-lg", className)}
    >
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-base font-bold text-primary-foreground"
      >
        E
      </span>

      {!compact && (
        <span className="text-base font-bold tracking-tight sm:text-lg">
          LMS Tiếng Anh
        </span>
      )}
    </Link>
  );
}
