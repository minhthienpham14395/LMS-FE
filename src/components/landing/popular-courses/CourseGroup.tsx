import { Button } from "@/components/ui/Button";

import { CourseCard } from "./CourseCard";
import type { CourseGroup as CourseGroupType } from "./popular-courses.types";

const INITIAL_VISIBLE_COUNT = 4;

type CourseGroupProps = {
  group: CourseGroupType;
  isExpanded: boolean;
  onToggle: (groupId: string) => void;
};

export function CourseGroup({ group, isExpanded, onToggle }: CourseGroupProps) {
  const visibleCourses = isExpanded
    ? group.courses
    : group.courses.slice(0, INITIAL_VISIBLE_COUNT);
  const remaining = group.courses.length - INITIAL_VISIBLE_COUNT;
  const canToggle = remaining > 0;

  return (
    <section aria-labelledby={`${group.id}-courses-title`} className="pb-12 last:pb-0 md:pb-16">
      <h2
        id={`${group.id}-courses-title`}
        className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
      >
        {group.title}
      </h2>

      <div
        id={`${group.id}-courses-grid`}
        className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {visibleCourses.map((course) => (
          <CourseCard key={`${group.id}-${course.id}`} course={course} />
        ))}
      </div>

      {canToggle ? (
        <Button
          variant="outline"
          size="sm"
          className="mt-5 cursor-pointer"
          aria-expanded={isExpanded}
          aria-controls={`${group.id}-courses-grid`}
          onClick={() => onToggle(group.id)}
        >
          {isExpanded ? "Thu gọn" : `Xem thêm ${remaining} khóa học`}
        </Button>
      ) : null}
    </section>
  );
}

