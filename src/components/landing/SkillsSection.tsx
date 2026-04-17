
import { SkillCard, CardStyles } from "./Card";

interface Skill {
  icon: string;
  title: string;
  description: string;
}

interface SkillsSectionProps {
  skills: Skill[];
  accentColor?: string;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
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

      <section id="skills" className="py-24 px-12 bg-[#f7f8fa] relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-[#3085c7]/5 to-transparent bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Tại sao học sinh yêu BrightKids
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những lợi ích đặc biệt mà chúng tôi mang lại
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} {...skill} animationDelay={idx} />
          ))}
        </div>
      </section>
    </>
  );
}
