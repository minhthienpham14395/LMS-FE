import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  id?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "id">;

export function Section<T extends ElementType = "section">({
  as,
  id,
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Tag = as ?? "section";

  return (
    <Tag
      id={id}
      className={cn("scroll-mt-20 py-12 sm:py-14 md:py-16 lg:py-20", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
