

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
  accentColor?: string;
}

export default function HowItWorksSection({
  steps,
  accentColor = "#3085c7",
}: HowItWorksSectionProps) {
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

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .step {
          animation: fadeInUp 0.6s ease-out;
          box-shadow: 0 4px 16px rgba(48, 133, 199, 0.08);
          transition: all 0.3s ease;
        }

        .step:hover {
          box-shadow: 0 12px 32px rgba(48, 133, 199, 0.18);
        }

        .step:nth-child(1) { animation-delay: 0.1s; }
        .step:nth-child(2) { animation-delay: 0.2s; }
        .step:nth-child(3) { animation-delay: 0.3s; }
        .step:nth-child(4) { animation-delay: 0.4s; }

        .step-number {
          animation: bounce 1s ease-in-out infinite;
        }

        .step:nth-child(2) .step-number { animation-delay: 0.2s; }
        .step:nth-child(3) .step-number { animation-delay: 0.4s; }
        .step:nth-child(4) .step-number { animation-delay: 0.6s; }

        .title-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .subtitle-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }
      `}</style>

      <section className="py-24 px-12 bg-white relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-[#3085c7]/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Cách thức hoạt động
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Hướng dẫn từng bước để bắt đầu
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="step text-center">
              <div
                className="step-number w-20 h-20 rounded-full flex items-center justify-center text-4xl font-black text-white mx-auto mb-6"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 15px rgba(48, 133, 199, 0.2)`,
                }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
