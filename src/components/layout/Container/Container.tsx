import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/utils/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";

  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-7xl px-4 xs:px-5 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
