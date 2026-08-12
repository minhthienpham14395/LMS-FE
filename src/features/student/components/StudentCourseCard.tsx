import { Link } from "react-router-dom";

import { Progress } from "@/components/ui-shadcn/progress";
import { Button } from "@/components/ui/Button";

import type { StudentCourse } from "../types/my-course.type";

interface StudentCourseCardProps {
  course: StudentCourse;
}

export function StudentCourseCard({ course }: StudentCourseCardProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="aspect-video bg-slate-100">
        <img
          src={course.thumbnail}
          alt=""
          width="640"
          height="360"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-semibold text-slate-500">
          <span className="truncate">{course.instructor}</span>
          <span className="shrink-0">{course.lastActivity}</span>
        </div>

        <h2 className="mt-2 line-clamp-2 font-bold text-slate-950">
          {course.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {course.description}
        </p>

        <div className="mt-4">
          <div className="flex justify-between gap-3 text-xs text-slate-500">
            <span>Tiến độ</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="mt-2" />
        </div>

        <Button asChild className="mt-5 w-full">
          <Link to={`/student/learn/${course.id}`}>
            {course.progress >= 100 ? "Ôn lại khóa học" : "Tiếp tục"}
          </Link>
        </Button>
      </div>
    </article>
  );
}
