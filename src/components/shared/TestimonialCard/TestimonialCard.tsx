import { Quote } from "lucide-react";

export interface TestimonialCardTestimonial {
  avatar: string;
  meta: string;
  name: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialCardTestimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="h-full rounded-xl border border-border/80 bg-card p-5 shadow-md ring-1 ring-border/80 sm:p-6">
      <Quote className="size-7 text-primary" aria-hidden="true" />

      <blockquote className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
        "{testimonial.quote}"
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt=""
          loading="lazy"
          className="size-11 rounded-full object-cover"
        />
        <div className="min-w-0">
          <div className="truncate font-semibold">{testimonial.name}</div>
          <div className="truncate text-xs text-muted-foreground">{testimonial.meta}</div>
        </div>
      </figcaption>
    </figure>
  );
}



