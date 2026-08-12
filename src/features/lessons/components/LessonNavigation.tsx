import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";

import type { LessonId, LessonNavigationItem } from "../types/lesson.type";

interface LessonNavigationProps {
  courseId: LessonId;
  previous?: LessonNavigationItem | null;
  next?: LessonNavigationItem | null;
  onComplete?: () => void;
  completing?: boolean;
}

export function LessonNavigation({
  courseId,
  previous,
  next,
  onComplete,
  completing = false,
}: LessonNavigationProps) {
  return (
    <nav
      aria-label="Điều hướng bài học"
      className="mt-10 flex flex-col-reverse gap-3 border-t pt-6 xs:flex-row xs:items-center xs:justify-between"
    >
      <Button
        variant="outline"
        className="w-full xs:w-auto"
        disabled={!previous}
        asChild={Boolean(previous)}
      >
        {previous ? (
          <Link to={`/student/learn/${courseId}/${previous.id}`}>Bài trước</Link>
        ) : (
          "Bài trước"
        )}
      </Button>

      <div className="flex flex-col gap-3 xs:flex-row xs:items-center">
        {onComplete && (
          <Button
            variant="outline"
            className="w-full xs:w-auto"
            onClick={onComplete}
            disabled={completing}
          >
            {completing ? "Đang lưu..." : "Đánh dấu hoàn thành"}
          </Button>
        )}

        <Button className="w-full xs:w-auto" disabled={!next} asChild={Boolean(next)}>
          {next ? (
            <Link to={`/student/learn/${courseId}/${next.id}`}>Bài tiếp theo</Link>
          ) : (
            "Bài tiếp theo"
          )}
        </Button>
      </div>
    </nav>
  );
}
