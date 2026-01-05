import React from "react";

interface Skill {
  icon: string;
  title: string;
  description: string;
}

interface SkillsSectionProps {
  skills: Skill[];
  accentColor?: string;
}

export default function SkillsSection({
  skills,
  accentColor = "#0891b2",
}: SkillsSectionProps) {
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

        @keyframes rotateIcon {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }

        .skill-card {
          animation: fadeInUp 0.6s ease-out;
          box-shadow: 0 4px 16px rgba(8, 145, 178, 0.08);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          box-shadow: 0 12px 32px rgba(8, 145, 178, 0.18);
          transform: translateY(-4px);
        }

        .skill-card:nth-child(1) { animation-delay: 0.1s; }
        .skill-card:nth-child(2) { animation-delay: 0.2s; }
        .skill-card:nth-child(3) { animation-delay: 0.3s; }
        .skill-card:nth-child(4) { animation-delay: 0.4s; }
        .skill-card:nth-child(5) { animation-delay: 0.5s; }
        .skill-card:nth-child(6) { animation-delay: 0.6s; }

        .skill-icon {
          animation: rotateIcon 3s ease-in-out infinite;
        }

        .title-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .subtitle-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }
      `}</style>

      <section id="skills" className="py-24 px-12 bg-white relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Tại sao học sinh yêu BrightKids
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những lợi ích đặc biệt mà chúng tôi mang lại
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card bg-white p-8 rounded-2xl border border-gray-200 hover:border-teal-300"
            >
              <div className="text-5xl mb-5 skill-icon">{skill.icon}</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
