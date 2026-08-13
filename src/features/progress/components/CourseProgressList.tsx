import { Progress } from "@/components/ui-shadcn/progress";

import type { ProgressMetricCourse } from "../types/progress.type";

interface CourseProgressListProps {
  courses: ProgressMetricCourse[];
}

export function CourseProgressList({ courses }: CourseProgressListProps) {
  return (
    <section className="min-w-0 rounded-xl border bg-card p-4 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold text-foreground">Tiến độ khóa học</h2>

      <div className="mt-5 grid gap-4">
        {courses.map((course) => (
          <article key={course.id} className="min-w-0 rounded-xl border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h3 className="break-words font-bold text-foreground">
                  {course.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {course.completedLessons}/{course.totalLessons} bài học
                </p>
              </div>

              <strong className="shrink-0 text-sm text-foreground">
                {course.progress}%
              </strong>
            </div>

            <Progress value={course.progress} className="mt-3" />
          </article>
        ))}
      </div>
    </section>
  );
}


