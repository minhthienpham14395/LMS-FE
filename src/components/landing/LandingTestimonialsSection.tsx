import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

interface LandingTestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export default function LandingTestimonialsSection({
  testimonials,
}: LandingTestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="mt-10 bg-[#0d3278] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              Cảm nhận
            </p>
            <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-tight">
              Tiếng nói từ học viên.
            </h2>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[24px] border border-white/10 bg-white/10 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.1)] backdrop-blur"
            >
              <p className="text-base leading-8 text-white/90">{item.text}</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9f5f2] font-semibold text-[#0a7b83]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/65">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
