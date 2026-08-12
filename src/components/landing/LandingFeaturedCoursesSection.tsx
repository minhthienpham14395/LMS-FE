import { useState } from "react";
import { Link } from "react-router-dom";
import { Layers3 } from "lucide-react";
import type { CourseGroup } from "../../data/courseData";

interface LandingFeaturedCoursesSectionProps {
  groups: CourseGroup[];
}

const courseImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
];

export default function LandingFeaturedCoursesSection({
  groups,
}: LandingFeaturedCoursesSectionProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>({});

  const toggleGroup = (index: number) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="courses" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#0a7b83]">
            Lựa chọn đặc sắc
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0d3278]">
            Khóa học nổi bật
          </h2>
        </div>

        <div className="mt-12 space-y-16">
          {groups.map((group, groupIndex) => {
            const isExpanded = expandedGroups[groupIndex] ?? false;
            const visibleCourses = isExpanded
              ? group.courses
              : group.courses.slice(0, 4);

            return (
              <div key={group.title}>
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0a7b83]">
                      {group.title}
                    </p>
                    {group.subtitle ? (
                      <p className="mt-3 max-w-2xl text-lg leading-8 text-[#64748b]">
                        {group.subtitle}
                      </p>
                    ) : null}
                  </div>
                  {group.courses.length > 4 ? (
                    <button
                      type="button"
                      onClick={() => toggleGroup(groupIndex)}
                      className="inline-flex items-center justify-center rounded-full bg-[#0d3278] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a275d]"
                    >
                      {isExpanded
                        ? "Thu gọn"
                        : `Xem thêm (${group.courses.length - 4})`}
                    </button>
                  ) : null}
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {visibleCourses.map((course, index) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      className="group overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
                    >
                      <div className="relative h-48 overflow-hidden bg-[#0d1f43]">
                        <img
                          src={courseImages[index % courseImages.length]}
                          alt={course.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07152e]/70 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                          {course.badge}
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0a7b83]">
                          <Layers3 size={12} />
                          <span>{course.type}</span>
                        </div>

                        <h3 className="mt-4 text-xl font-semibold leading-snug text-[#0f172a]">
                          {course.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#64748b]">
                          {course.description}
                        </p>

                        <div className="mt-6 flex items-center justify-between border-t border-[#e8edf5] pt-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce8ff] text-xs font-semibold text-[#0d3278]">
                              {course.title.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#0f172a]">
                                {course.age}
                              </p>
                              <p className="text-xs text-[#64748b]">{course.duration}</p>
                            </div>
                          </div>
                          <p className="text-sm font-semibold text-[#0d3278]">
                            {course.currentPrice}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
