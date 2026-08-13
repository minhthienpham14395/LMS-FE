import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/cn";

interface AccordionContextValue {
  collapsible: boolean;
  openValue?: string;
  toggleValue: (value: string) => void;
}

interface AccordionItemContextValue {
  contentId: string;
  isOpen: boolean;
  triggerId: string;
  value: string;
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  collapsible?: boolean;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  type: "single";
  value?: string;
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: string;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);
const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion components must be used inside Accordion.");
  }

  return context;
}

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error("AccordionTrigger and AccordionContent need AccordionItem.");
  }

  return context;
}

export function Accordion({
  children,
  className,
  collapsible = false,
  defaultValue,
  onValueChange,
  value,
  type,
  ...props
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const openValue = value ?? internalValue;

  const contextValue = useMemo<AccordionContextValue>(
    () => ({
      collapsible,
      openValue,
      toggleValue: (nextValue) => {
        const nextOpenValue =
          collapsible && openValue === nextValue ? undefined : nextValue;

        if (value === undefined) {
          setInternalValue(nextOpenValue);
        }

        onValueChange?.(nextOpenValue ?? "");
      },
    }),
    [collapsible, onValueChange, openValue, value]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={cn("w-full", className)} data-type={type} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  className,
  value,
  ...props
}: AccordionItemProps) {
  const { openValue } = useAccordionContext();
  const reactId = useId();
  const triggerId = `accordion-trigger-${reactId}`;
  const contentId = `accordion-content-${reactId}`;
  const isOpen = openValue === value;

  const contextValue = useMemo<AccordionItemContextValue>(
    () => ({ contentId, isOpen, triggerId, value }),
    [contentId, isOpen, triggerId, value]
  );

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div className={cn("border-b", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleValue } = useAccordionContext();
  const { contentId, isOpen, triggerId, value } = useAccordionItemContext();

  return (
      <button
      id={triggerId}
      type="button"
      aria-controls={contentId}
      aria-expanded={isOpen}
      className={cn(
        "flex min-h-14 w-full items-center justify-between gap-4 py-4 text-sm font-semibold text-foreground transition hover:text-primary sm:text-base",
        className
      )}
      onClick={() => toggleValue(value)}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn("size-4 shrink-0 transition-transform", isOpen && "rotate-180")}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { contentId, isOpen, triggerId } = useAccordionItemContext();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={cn("pb-4 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}
