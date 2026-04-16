

interface WhyReason {
  icon: string;
  title: string;
  description: string;
}

interface WhySectionProps {
  reasons: WhyReason[];
}

export default function WhySection({ reasons }: WhySectionProps) {
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

        .why-card {
          animation: fadeInUp 0.6s ease-out;
          box-shadow: 0 4px 16px rgba(8, 145, 178, 0.08);
          transition: all 0.3s ease;
        }

        .why-card:hover {
          box-shadow: 0 12px 32px rgba(8, 145, 178, 0.18);
          transform: translateY(-4px);
        }

        .why-card:nth-child(1) { animation-delay: 0.1s; }
        .why-card:nth-child(2) { animation-delay: 0.2s; }
        .why-card:nth-child(3) { animation-delay: 0.3s; }
        .why-card:nth-child(4) { animation-delay: 0.4s; }

        .title-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .subtitle-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }
      `}</style>

      <section id="why" className="py-24 px-12 bg-blue-200 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Tại sao chọn chúng tôi
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Lợi ích nổi bật của nền tảng học tập
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="why-card bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-teal-300"
            >
              <div className="text-5xl mb-5">{reason.icon}</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
