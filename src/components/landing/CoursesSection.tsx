import { useState } from "react";
import { CourseCard, CardStyles } from "./Card";

interface Course {
  id: number;
  icon: string;
  badge: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  age: string;
  currentPrice: string;
  oldPrice: string;
}

interface CoursesSectionProps {
  courses: Course[];
  accentColor?: string;
}

export default function CoursesSection({
  courses,
  accentColor = "#0891b2",
}: CoursesSectionProps) {
  const [activeFilter, setActiveFilter] = useState("Tất cả");

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

      <section className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-1/2 -translate-x-1/2 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Các khóa học hàng đầu
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12 subtitle-fadeInUp">
          Lựa chọn đa dạng cho mọi lứa tuổi
        </p>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Filter Buttons */}
          <div className="flex gap-4 mb-12 justify-center flex-wrap">
            {["Tất cả", "Lập trình", "Robotics", "Tài chính"].map(
              (filter, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
                      ? "text-white px-6 py-2 rounded-full font-semibold transition-all"
                      : "bg-white border border-gray-300 text-gray-900 hover:border-teal-300 px-6 py-2 rounded-full transition-all"
                  }
                  style={
                    activeFilter === filter
                      ? { backgroundColor: accentColor }
                      : {}
                  }
                >
                  {filter}
                </button>
              )
            )}
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <CourseCard
                key={idx}
                {...course}
                accentColor={accentColor}
                animationDelay={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
