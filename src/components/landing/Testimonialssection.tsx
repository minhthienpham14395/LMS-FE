
import { TestimonialCard, CardStyles } from "./Card";

interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  text: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <>
      <style>{`
        ${CardStyles}

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .title-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .subtitle-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }
      `}</style>

      <section className="py-24 px-12 bg-[#f7f8fa] relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-[#3085c7]/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Học viên nói gì về chúng tôi
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những ngôi sao sáng của chúng tôi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              content={testimonial.text}
              author={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating || 5}
              animationDelay={idx}
            />
          ))}
        </div>
      </section>
    </>
  );
}
