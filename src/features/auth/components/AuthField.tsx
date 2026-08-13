import type { ReactNode } from "react";

import { Input, type InputProps } from "@/components/ui";
import { cn } from "@/utils/cn";

interface AuthFieldProps extends InputProps {
  label: string;
  error?: string;
  action?: ReactNode;
  inputClassName?: string;
}

export function AuthField({
  action,
  className,
  error,
  id,
  inputClassName,
  label,
  ...props
}: AuthFieldProps) {
  const errorId = error && id ? `${id}-error` : undefined;

  return (
    <div className={cn("min-w-0", className)}>
      <div className="flex min-w-0 items-center justify-between gap-3">
        <label
          htmlFor={id}
          className="min-w-0 text-sm font-semibold text-foreground"
        >
          {label}
        </label>
        {action}
      </div>
      <Input
        id={id}
        invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn("mt-2 text-base md:text-base", inputClassName)}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 break-words text-sm leading-5 text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

