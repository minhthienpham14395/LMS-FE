
import { StatCard, CardStyles } from "./Card";

interface Stat {
  number: string;
  label: string;
  icon?: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({
  stats,
}: StatsSectionProps) {
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
      `}</style>

      <section className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-16 title-fadeInUp text-gray-900">
          Thành tích của chúng tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto relative z-10">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.number}
              label={stat.label}
              icon={stat.icon}
              animationDelay={idx}
            />
          ))}
        </div>
      </section>
    </>
  );
}
