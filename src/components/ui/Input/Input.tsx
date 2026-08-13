import * as React from "react";

import { cn } from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ className, invalid = false, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "flex min-h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm transition",
        "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        "md:text-sm",
        invalid && "border-destructive bg-destructive/5 focus-visible:outline-destructive",
        className
      )}
      aria-invalid={invalid || props["aria-invalid"]}
      {...props}
    />
  );
}
