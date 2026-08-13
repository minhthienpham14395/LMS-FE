import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/utils/cn";

interface PageMotionProps {
  children: ReactNode;
  className?: string;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export function PageMotion({ children, className }: PageMotionProps) {
  return <div className={cn("page-enter", className)}>{children}</div>;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div className={cn("reveal-up", className)} style={style}>
      {children}
    </div>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = false,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const style = {
    "--scroll-reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={cn("scroll-reveal", isVisible && "is-visible", className)}
      style={style}
    >
      {children}
    </div>
  );
}
