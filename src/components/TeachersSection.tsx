import React from "react";

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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.25;
          }
        }

        .teacher-card {
          animation: fadeInUp 0.6s ease-out;
          box-shadow: 0 4px 16px rgba(8, 145, 178, 0.08);
          transition: all 0.3s ease;
        }

        .teacher-card:hover {
          box-shadow: 0 12px 32px rgba(8, 145, 178, 0.18);
          transform: translateY(-4px);
        }

        .teacher-card:nth-child(1) { animation-delay: 0.1s; }
        .teacher-card:nth-child(2) { animation-delay: 0.2s; }
        .teacher-card:nth-child(3) { animation-delay: 0.3s; }

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
            <div
              key={idx}
              className="teacher-card bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal-300"
            >
              {/* Teacher Image */}
              <div className="w-full h-64 bg-gradient-to-br from-cyan-100 to-gray-100 flex items-center justify-center text-7xl relative overflow-hidden">
                <div
                  className="absolute w-full h-full bg-gradient-radial from-cyan-300/10 to-transparent"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                ></div>
                {teacher.avatar}
              </div>

              {/* Teacher Info */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {teacher.bio}
                </p>
                <div style={{ color: accentColor }} className="font-semibold">
                  {teacher.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
