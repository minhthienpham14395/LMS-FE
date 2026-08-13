import { RotateCw } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/Button";

import { LessonBlocks } from "./LessonBlocks";
import { LessonNavigation } from "./LessonNavigation";
import { useCompleteLesson, useLesson } from "../hooks/useLessons";
import type { LessonId } from "../types/lesson.type";

interface LessonContentProps {
  courseId: LessonId;
  lessonId: LessonId | undefined;
}

export function LessonContent({ courseId, lessonId }: LessonContentProps) {
  const lesson = useLesson(lessonId);
  const completeLesson = useCompleteLesson(lessonId);

  if (!lessonId) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-8 xs:px-5 sm:px-6 lg:px-8">
        <div className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
          <h1 className="text-2xl font-bold text-foreground">
            Chọn một bài học
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Mở danh sách bài học và chọn nơi bạn muốn tiếp tục.
          </p>
        </div>
      </div>
    );
  }

  if (lesson.isLoading) {
    return <LessonSkeleton />;
  }

  if (lesson.isError) {
    return <LessonError onRetry={lesson.refetch} />;
  }

  if (!lesson.data) {
    return null;
  }

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-6 xs:px-5 sm:px-6 sm:py-8 lg:px-8">
      <header>
        {lesson.data.moduleTitle && (
          <p className="break-words text-sm font-bold text-primary">
            {lesson.data.moduleTitle}
          </p>
        )}
        <h1 className="mt-2 break-words text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
          {lesson.data.title}
        </h1>
      </header>

      {lesson.data.videoUrl && (
        <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-secondary sm:rounded-xl">
          <video
            src={lesson.data.videoUrl}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full"
          />
        </div>
      )}

      {lesson.data.audioUrl && (
        <div className="mt-6 rounded-xl border bg-background-soft p-4">
          <audio src={lesson.data.audioUrl} controls preload="metadata" className="w-full" />
        </div>
      )}

      <LessonBlocks blocks={lesson.data.blocks} />

      <LessonNavigation
        courseId={courseId}
        previous={lesson.data.previous}
        next={lesson.data.next}
        completing={completeLesson.isPending}
        onComplete={() =>
          completeLesson.mutate(undefined, {
            onSuccess: () => toast.success("Đã đánh dấu hoàn thành bài học."),
            onError: () => toast.error("Không thể lưu tiến độ bài học."),
          })
        }
      />
    </article>
  );
}

function LessonSkeleton() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 xs:px-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="h-4 w-36 animate-pulse rounded bg-secondary" />
      <div className="mt-3 h-10 w-4/5 animate-pulse rounded bg-secondary" />
      <div className="mt-6 aspect-video animate-pulse rounded-xl bg-secondary" />
      <div className="mt-8 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-secondary" />
        <div className="h-4 w-11/12 animate-pulse rounded bg-secondary" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-secondary" />
      </div>
    </div>
  );
}

function LessonError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 xs:px-5 sm:px-6 lg:px-8">
      <div className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
        <h1 className="text-2xl font-bold text-foreground">
          Không thể tải bài học
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Hiện không thể tải bài học này.
        </p>
        <Button variant="outline" className="mt-5" onClick={onRetry}>
          <RotateCw className="size-4" />
          Thử lại
        </Button>
      </div>
    </div>
  );
}


