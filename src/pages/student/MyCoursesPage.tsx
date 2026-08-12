import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/shared";
import { Button } from "@/components/ui/Button";
import { StudentCourseCard, useMyCourses } from "@/features/student";
import { cn } from "@/utils/cn";

const tabs = [
  { label: "Đang học", value: "active" },
  { label: "Hoàn thành", value: "completed" },
] as const;

type CourseTab = (typeof tabs)[number]["value"];

export default function MyCoursesPage() {
  const [selectedTab, setSelectedTab] = useState<CourseTab>("active");
  const courses = useMyCourses();

  const visibleCourses = useMemo(
    () =>
      (courses.data ?? []).filter((course) => course.status === selectedTab),
    [courses.data, selectedTab]
  );

  return (
    <Container className="py-6 sm:py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Khóa học của tôi
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Tiếp tục khóa đang học hoặc ôn lại khóa đã hoàn thành.
          </p>
        </div>

        <div className="grid grid-cols-2 rounded-xl border bg-white p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setSelectedTab(tab.value)}
              className={cn(
                "min-h-10 rounded-lg px-4 text-sm font-semibold text-slate-600 transition",
                selectedTab === tab.value && "bg-brand-50 text-brand-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {courses.isLoading && (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <div className="aspect-video animate-pulse bg-slate-100" />
              <div className="space-y-3 p-5">
                <div className="h-4 w-28 animate-pulse rounded bg-slate-100" />
                <div className="h-5 w-4/5 animate-pulse rounded bg-slate-100" />
                <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
                <div className="h-11 w-full animate-pulse rounded-xl bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!courses.isLoading && visibleCourses.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <StudentCourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      {!courses.isLoading && visibleCourses.length === 0 && (
        <div className="mt-6">
          <EmptyState
            title="Chưa có khóa học ở đây"
            description="Khóa học đã hoàn thành sẽ xuất hiện khi bạn hoàn tất một lộ trình."
            action={
              <Button variant="outline" onClick={() => setSelectedTab("active")}>
                Xem khóa đang học
              </Button>
            }
          />
        </div>
      )}
    </Container>
  );
}
