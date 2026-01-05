import React from "react";

interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  text: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  accentColor?: string;
}

export default function TestimonialsSection({
  testimonials,
  accentColor = "#0891b2",
}: TestimonialsSectionProps) {
  return (
    <>
      <style>{`
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

        .testimonial-card {
          animation: fadeInUp 0.6s ease-out;
          box-shadow: 0 4px 16px rgba(8, 145, 178, 0.08);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          box-shadow: 0 12px 32px rgba(8, 145, 178, 0.18);
          transform: translateY(-4px);
        }

        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }

        .title-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .subtitle-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }
      `}</style>

      <section className="py-24 px-12 bg-white relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Học viên nói gì về chúng tôi
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những ngôi sao sáng của chúng tôi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-gray-50 p-10 rounded-2xl border border-gray-200 hover:border-teal-300"
            >
              {/* Stars */}
              <div
                className="text-2xl mb-5"
                style={{
                  color: accentColor,
                  textShadow: `0 0 8px rgba(8, 145, 178, 0.2)`,
                }}
              >
                ★★★★★
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 10px rgba(8, 145, 178, 0.2)`,
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-gray-900 font-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
