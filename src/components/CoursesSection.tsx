import React, { useState } from "react";

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

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
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

        .course-card {
          animation: scaleIn 0.5s ease-out;
          box-shadow: 0 6px 20px rgba(8, 145, 178, 0.12);
          transition: all 0.3s ease;
        }

        .course-card:hover {
          box-shadow: 0 16px 40px rgba(8, 145, 178, 0.25);
          transform: translateY(-8px);
        }

        .course-card:nth-child(1) { animation-delay: 0.1s; }
        .course-card:nth-child(2) { animation-delay: 0.2s; }
        .course-card:nth-child(3) { animation-delay: 0.3s; }

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
              <div
                key={idx}
                className="course-card bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300"
              >
                {/* Course Image */}
                <div className="w-full h-48 bg-gradient-to-br from-cyan-100 to-gray-100 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div
                    className="absolute w-full h-full bg-gradient-radial from-cyan-300/10 to-transparent"
                    style={{ animation: "pulse 3s ease-in-out infinite" }}
                  ></div>
                  {course.icon}
                </div>

                {/* Course Content */}
                <div className="p-8">
                  {/* Badge */}
                  <span
                    className="inline-block text-white px-4 py-1 rounded-2xl text-xs font-black mb-4"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: `0 0 10px rgba(8, 145, 178, 0.2)`,
                    }}
                  >
                    {course.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-black mb-3 text-gray-900">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="flex gap-5 text-gray-600 text-sm mb-5">
                    <span>⏱️ {course.duration}</span>
                    <span>👥 {course.type}</span>
                    <span>👶 {course.age}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-3xl font-black"
                      style={{ color: accentColor }}
                    >
                      {course.currentPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {course.oldPrice}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full text-white py-3 rounded-xl font-black transition-all hover:shadow-md"
                    style={{ backgroundColor: accentColor }}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
