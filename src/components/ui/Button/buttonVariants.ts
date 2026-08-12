import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-primary",
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus-visible:outline-destructive",
        danger:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus-visible:outline-destructive",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 focus-visible:outline-ring",
        outline:
          "border border-input bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-ring",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-ring",
        link: "min-h-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-4 py-2",
        sm: "min-h-10 px-3 text-sm",
        md: "min-h-11 px-4 py-2",
        lg: "min-h-12 px-5 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
