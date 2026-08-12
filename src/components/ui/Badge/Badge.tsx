import * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { badgeVariants } from "@/components/ui/Badge/badgeVariants";
import { cn } from "@/utils/cn";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
