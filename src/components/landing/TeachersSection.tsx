
import { TeacherCard, CardStyles } from "./Card";

interface Teacher {
  avatar: string;
  name: string;
  bio: string;
  rating: string;
}

interface TeachersSectionProps {
  teachers: Teacher[];
  accentColor?: string;
}

export default function TeachersSection({
  teachers,
  accentColor = "#0891b2",
}: TeachersSectionProps) {
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

      <section id="teachers" className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-1/2 -translate-x-1/2 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Đội ngũ giáo viên
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những người dẫn đường tận tâm với sự thành công của học viên
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {teachers.map((teacher, idx) => (
            <TeacherCard
              key={idx}
              {...teacher}
              accentColor={accentColor}
              animationDelay={idx}
            />
          ))}
        </div>
      </section>
    </>
  );
}
