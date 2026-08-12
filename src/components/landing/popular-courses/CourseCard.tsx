import { ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/Badge";

import type { LandingCourse } from "./popular-courses.types";

type CourseCardProps = {
  course: LandingCourse;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
      <Link
        to={`/courses/${course.slug}`}
        className="flex h-full min-w-0 flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <img
            src={course.image}
            alt={course.title}
            width="640"
            height="360"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />

          {course.badges && course.badges.length > 0 ? (
            <div className="absolute right-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap justify-end gap-1.5">
              {course.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="outline"
                  className="border-white/80 bg-white/95 px-2 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <p className="truncate text-sm font-medium text-slate-600">
            {course.provider}
          </p>

          <h3 className="mt-3 line-clamp-2 min-h-12 text-base font-semibold leading-6 text-slate-950">
            {course.title}
          </h3>

          <div className="mt-auto space-y-2 pt-4 text-sm leading-5 text-slate-600">
            <span className="flex min-w-0 items-center gap-2">
              <ArrowUpRight className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
              <span className="truncate">{course.degreePath}</span>
            </span>
            <span className="flex min-w-0 items-center gap-2">
              <Award className="size-4 shrink-0 text-emerald-600" aria-hidden="true" />
              <span className="truncate">{course.credential}</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
