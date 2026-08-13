import { Link } from "react-router-dom";
import { Clock3, Star } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface CourseCardCourse {
  category: string;
  description: string;
  duration: string;
  level: string;
  rating: number | string;
  slug: string;
  thumbnail: string;
  title: string;
}

interface CourseCardProps {
  course: CourseCardCourse;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        to={`/courses/${course.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-secondary"
      >
        <img
          src={course.thumbnail}
          alt=""
          width="640"
          height="400"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <Badge className="absolute left-3 top-3">{course.level}</Badge>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {course.category}
        </p>

        <h3 className="mt-2 line-clamp-2 text-base font-bold sm:text-lg">
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {course.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock3 className="size-4" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="size-4" />
            {course.rating}
          </span>
        </div>

        <div className="mt-auto pt-5">
          <Button asChild className="w-full">
            <Link to={`/courses/${course.slug}`}>Xem khóa học</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}


