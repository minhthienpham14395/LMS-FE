import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseCard, CardStyles } from "./Card";
import type { Course } from "../../data/courseData";

interface CourseGroupSectionProps {
  title: string;
  subtitle?: string;
  courses: Course[];
  accentColor?: string;
  initialCount?: number;
}

export default function CourseGroupSection({
  title,
  subtitle,
  courses,
  accentColor = "#3085c7",
  initialCount = 4,
}: CourseGroupSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const visibleCourses = showAll ? courses : courses.slice(0, initialCount);

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

        .section-title {
          animation: fadeInUp 0.6s ease-out;
        }

        .section-subtitle {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }
      `}</style>

      <section className="py-24 px-12 bg-[#f7f8fa] relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-[#3085c7]/5 to-transparent top-0 left-1/2 -translate-x-1/2 -translate-y-32"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4 section-title text-gray-900">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-lg text-gray-600 section-subtitle">
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleCourses.map((course, idx) => (
              <CourseCard
                key={course.id}
                {...course}
                accentColor={accentColor}
                animationDelay={idx}
                onClick={() => navigate(`/courses/${course.id}`)}
              />
            ))}
          </div>

          {courses.length > initialCount ? (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 10px 30px rgba(48, 133, 199, 0.22)`,
                }}
              >
                {showAll ? "Show less" : `Show more (${courses.length - initialCount})`}
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
