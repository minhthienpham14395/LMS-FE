import { NavLink } from "react-router-dom";
import { CheckCircle2, Circle, Lock } from "lucide-react";

import { cn } from "@/utils/cn";

import { useCourseOutline } from "../hooks/useLessons";
import type { LessonId } from "../types/lesson.type";

interface LessonOutlineProps {
  courseId: LessonId | undefined;
  onNavigate?: () => void;
}

export function LessonOutline({ courseId, onNavigate }: LessonOutlineProps) {
  const outline = useCourseOutline(courseId);

  if (outline.isLoading) {
    return <LessonOutlineSkeleton />;
  }

  if (outline.isError) {
    return (
      <div className="p-4 text-sm leading-6 text-slate-600">
        Không thể tải danh sách bài học.
      </div>
    );
  }

  const modules = outline.data?.modules ?? [];

  if (modules.length === 0) {
    return (
      <div className="p-4 text-sm leading-6 text-slate-600">
        Chưa có bài học nào.
      </div>
    );
  }

  return (
    <nav aria-label="Bài học của khóa" className="p-3">
      {modules.map((module) => (
        <section key={module.id} className="mb-5 last:mb-0">
          <h2 className="px-2 text-xs font-bold uppercase text-slate-500">
            {module.title}
          </h2>

          <div className="mt-2 grid gap-1">
            {module.lessons.map((lesson) => {
              const disabled = lesson.locked || !courseId;

              if (disabled) {
                return (
                  <div
                    key={lesson.id}
                    className="flex min-h-11 items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400"
                  >
                    <Lock className="mt-0.5 size-4 shrink-0" />
                    <span className="min-w-0 break-words">{lesson.title}</span>
                  </div>
                );
              }

              return (
                <NavLink
                  key={lesson.id}
                  to={`/student/learn/${courseId}/${lesson.id}`}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-11 items-start gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-slate-100",
                      isActive && "bg-brand-50 text-brand-700"
                    )
                  }
                >
                  <span className="mt-0.5 shrink-0">
                    {lesson.completed ? (
                      <CheckCircle2 className="size-4" />
                    ) : (
                      <Circle className="size-4" />
                    )}
                  </span>
                  <span className="min-w-0 break-words">{lesson.title}</span>
                </NavLink>
              );
            })}
          </div>
        </section>
      ))}
    </nav>
  );
}

function LessonOutlineSkeleton() {
  return (
    <div className="space-y-5 p-4">
      {Array.from({ length: 3 }).map((_, moduleIndex) => (
        <div key={moduleIndex}>
          <div className="h-3 w-28 animate-pulse rounded bg-slate-200" />
          <div className="mt-3 space-y-2">
            {Array.from({ length: 3 }).map((__, lessonIndex) => (
              <div
                key={lessonIndex}
                className="h-11 animate-pulse rounded-xl bg-slate-100"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
