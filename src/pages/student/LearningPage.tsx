import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { PageMotion } from "@/components/layout";
import { Button } from "@/components/ui/Button";
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
      <PageMotion>
        <div className="min-h-dvh px-4 py-10">
          <div className="mx-auto max-w-xl rounded-[1.75rem] border border-border/70 bg-card/95 p-6 shadow-lg backdrop-blur-md">
            <h1 className="text-2xl font-bold text-foreground">
              Không thể mở khóa học
            </h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Không thể mở lộ trình học này.
            </p>
          </div>
        </div>
      </PageMotion>
    );
  }

  return (
    <PageMotion>
      <div className="min-h-dvh">
        <header className="sticky top-0 z-40 flex min-h-16 items-center justify-between gap-3 border-b border-border/70 bg-card/90 px-4 py-3 shadow-sm backdrop-blur-xl xs:px-5 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Button variant="ghost" size="sm" asChild className="shrink-0">
              <Link to="/student/" aria-label="Quay lại trang học viên">
                <ArrowLeft className="size-4" />
                <span className="hidden sm:inline">Quay lại</span>
              </Link>
            </Button>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-foreground">
                {outline.data?.courseTitle ?? "Bài học của khóa"}
              </p>
              <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
            </div>
          </div>

          <div className="lg:hidden">
            <LessonOutlineSheet courseId={courseId} />
          </div>
        </header>

        <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden border-r border-border/60 bg-card/90 backdrop-blur-xl lg:sticky lg:top-16 lg:block lg:h-[calc(100dvh-4rem)] lg:overflow-y-auto">
            <LessonOutline courseId={courseId} />
          </aside>

          <main className="min-w-0">
            <LessonContent courseId={courseId} lessonId={lessonId} />
          </main>
        </div>
      </div>
    </PageMotion>
  );
}


