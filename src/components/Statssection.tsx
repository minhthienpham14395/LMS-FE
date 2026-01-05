import React from "react";

interface Stat {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  accentColor?: string;
}

export default function StatsSection({
  stats,
  accentColor = "#0891b2",
}: StatsSectionProps) {
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

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-item {
          animation: fadeInUp 0.6s ease-out;
          box-shadow: 0 4px 16px rgba(8, 145, 178, 0.08);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          box-shadow: 0 12px 32px rgba(8, 145, 178, 0.18);
        }

        .stat-item:nth-child(1) { animation-delay: 0.1s; }
        .stat-item:nth-child(2) { animation-delay: 0.2s; }
        .stat-item:nth-child(3) { animation-delay: 0.3s; }
        .stat-item:nth-child(4) { animation-delay: 0.4s; }

        .stat-number {
          animation: countUp 2s ease-out;
        }

        .title-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>

      <section className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-16 title-fadeInUp text-gray-900">
          Thành tích của chúng tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item text-center">
              <div
                className="stat-number text-6xl font-black mb-3"
                style={{
                  color: accentColor,
                  textShadow: `0 0 12px rgba(8, 145, 178, 0.2)`,
                }}
              >
                {stat.number}
              </div>
              <div className="text-xl text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
