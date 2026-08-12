import { useMemo } from "react";
import { useParams } from "react-router-dom";

import {
  LessonContent,
  LessonOutline,
  LessonOutlineSheet,
} from "@/features/lessons/components";
import { useCourseOutline } from "@/features/lessons";

export default function LearningPage() {
  const { courseId, lessonId } = useParams();
  const outline = useCourseOutline(courseId);

  const lessonPosition = useMemo(() => {
    const lessons =
      outline.data?.modules.flatMap((module) => module.lessons) ?? [];
    const index = lessons.findIndex(
      (lesson) => String(lesson.id) === String(lessonId)
    );

    return {
      current: index >= 0 ? index + 1 : 0,
      total: lessons.length,
    };
  }, [lessonId, outline.data?.modules]);

  const subtitle =
    lessonPosition.current > 0
      ? `Bài ${lessonPosition.current} / ${lessonPosition.total}`
      : lessonPosition.total > 0
        ? `${lessonPosition.total} bài học`
        : "Lộ trình học";

  if (!courseId) {
    return (
      <div className="min-h-dvh px-4 py-10">
        <div className="mx-auto max-w-xl rounded-[1.75rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
          <h1 className="text-2xl font-bold text-slate-950">
            Không thể mở khóa học
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Không thể mở lộ trình học này.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-3 border-b border-white/70 bg-white/66 px-4 shadow-sm backdrop-blur-xl xs:px-5 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-slate-950">
            {outline.data?.courseTitle ?? "Bài học của khóa"}
          </p>
          <p className="truncate text-xs text-slate-500">{subtitle}</p>
        </div>

        <div className="lg:hidden">
          <LessonOutlineSheet courseId={courseId} />
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden border-r border-white/60 bg-white/56 backdrop-blur-xl lg:sticky lg:top-16 lg:block lg:h-[calc(100dvh-4rem)] lg:overflow-y-auto">
          <LessonOutline courseId={courseId} />
        </aside>

        <main className="min-w-0">
          <LessonContent courseId={courseId} lessonId={lessonId} />
        </main>
      </div>
    </div>
  );
}
