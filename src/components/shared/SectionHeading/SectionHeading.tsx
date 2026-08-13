import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  align?: "center" | "left";
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}

