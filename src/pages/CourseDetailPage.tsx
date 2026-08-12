import { Link, useParams } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  Check,
  Clock3,
  PlayCircle,
  Star,
} from "lucide-react";
import { toast } from "sonner";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useCourse, useEnrollCourse } from "@/features/courses";

function CourseDetailSkeleton() {
  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
        <main className="min-w-0 space-y-5">
          <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
          <div className="h-12 w-4/5 animate-pulse rounded bg-slate-100" />
          <div className="h-24 w-full max-w-3xl animate-pulse rounded bg-slate-100" />
          <div className="aspect-video w-full animate-pulse rounded-2xl bg-slate-100" />
        </main>
        <aside className="h-52 animate-pulse rounded-2xl border bg-slate-100" />
      </div>
    </Container>
  );
}

interface CourseDetailErrorProps {
  onRetry: () => void;
}

function CourseDetailError({ onRetry }: CourseDetailErrorProps) {
  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 px-5 py-10 text-center">
        <AlertCircle className="mx-auto size-8 text-destructive" />
        <h1 className="mt-3 text-xl font-bold text-slate-950">
          Không thể tải khóa học này
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
          Khóa học có thể đã được chuyển hoặc danh mục đang tạm thời không khả dụng.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button onClick={onRetry}>Thử lại</Button>
          <Button variant="outline" asChild>
            <Link to="/courses">Quay lại khóa học</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default function CourseDetailPage() {
  const { slug } = useParams();
  const courseQuery = useCourse(slug);
  const enrollMutation = useEnrollCourse();

  if (courseQuery.isLoading) {
    return <CourseDetailSkeleton />;
  }

  if (courseQuery.isError) {
    return <CourseDetailError onRetry={() => void courseQuery.refetch()} />;
  }

  if (!courseQuery.data) {
    return null;
  }

  const course = courseQuery.data;
  const outcomes =
    course.outcomes && course.outcomes.length > 0
      ? course.outcomes
      : [
          "Xây dựng sự tự tin qua các bài luyện tiếng Anh có hướng dẫn.",
          "Nắm vững từ vựng và ngữ pháp cốt lõi cho trình độ này.",
          "Hoàn thành bài luyện tập trọng tâm với tiến độ đo lường được.",
          "Chuẩn bị bước học tiếp theo thật rõ ràng.",
        ];

  const handleEnroll = () => {
    enrollMutation.mutate(course.id, {
      onSuccess: () => toast.success("Đã bắt đầu ghi danh."),
      onError: () => toast.error("Không thể ghi danh khóa học này."),
    });
  };

  return (
    <Container className="pb-24 pt-8 sm:py-10 lg:pb-12 lg:pt-12">
      <Button
        variant="ghost"
        asChild
        className="mb-6 min-h-0 px-0 py-0 text-slate-700 hover:bg-transparent hover:text-brand-600"
      >
        <Link to="/courses">
          <ArrowLeft className="size-4" />
          Quay lại khóa học
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,1fr)_380px]">
        <main className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{course.level}</Badge>
            <span className="text-sm font-bold text-brand-600">
              {course.category}
            </span>
          </div>

          <h1 className="mt-3 break-words text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
            {course.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {course.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-4" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-4" />
              {course.rating}
            </span>
            {course.lessonsCount ? (
              <span className="inline-flex items-center gap-1.5">
                <PlayCircle className="size-4" />
                {course.lessonsCount} bài học
              </span>
            ) : null}
          </div>

          <div className="mt-8 aspect-video overflow-hidden rounded-2xl bg-slate-100">
            <img
              src={course.thumbnail}
              alt=""
              width="960"
              height="540"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-slate-950">
              Bạn sẽ học được gì
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2 text-sm leading-6">
                  <Check className="mt-1 size-4 shrink-0 text-brand-600" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="font-bold text-slate-950">Truy cập khóa học</span>
              <span className="text-sm text-slate-500">{course.duration}</span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between gap-3">
                <span>Trình độ</span>
                <span className="font-semibold text-slate-950">
                  {course.level}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Danh mục</span>
                <span className="text-right font-semibold text-slate-950">
                  {course.category}
                </span>
              </div>
              {course.instructor ? (
                <div className="flex items-center justify-between gap-3">
                  <span>Giảng viên</span>
                  <span className="text-right font-semibold text-slate-950">
                    {course.instructor}
                  </span>
                </div>
              ) : null}
            </div>

            <Button
              className="mt-5 w-full"
              disabled={enrollMutation.isPending}
              onClick={handleEnroll}
            >
              {enrollMutation.isPending ? "Đang ghi danh..." : "Ghi danh ngay"}
            </Button>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 p-3 backdrop-blur lg:hidden pb-[max(.75rem,env(safe-area-inset-bottom))]">
        <Button
          className="w-full"
          disabled={enrollMutation.isPending}
          onClick={handleEnroll}
        >
          {enrollMutation.isPending ? "Đang ghi danh..." : "Ghi danh ngay"}
        </Button>
      </div>
    </Container>
  );
}
