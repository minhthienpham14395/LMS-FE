import * as React from "react";

import { cn } from "@/utils/cn";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | null;
}

export function Progress({ className, value = 0, ...props }: ProgressProps) {
  const safeValue = Math.min(100, Math.max(0, value ?? 0));

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safeValue}
      className={cn("h-2.5 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <div
        className="h-full rounded-full bg-primary transition-all"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
