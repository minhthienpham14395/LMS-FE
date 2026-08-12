import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import {
  CourseProgressList,
  ProgressPageSkeleton,
  RecentAchievements,
  SkillProgress,
} from "@/features/progress/components";
import { useProgressOverview } from "@/features/progress";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
}

function MetricCard({ icon: Icon, label, value }: MetricCardProps) {
  return (
    <article className="min-w-0 rounded-2xl border bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="truncate text-xs font-semibold text-slate-500 sm:text-sm">
          {label}
        </p>
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-2 break-words text-2xl font-bold text-slate-950">
        {value}
      </p>
    </article>
  );
}

function ProgressError() {
  return (
    <section className="mt-6 rounded-2xl border border-destructive/25 bg-white p-5 shadow-sm">
      <h2 className="font-bold text-slate-950">Không thể tải tiến độ</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Hãy tải lại trang hoặc thử lại sau khi phiên học được kết nối lại.
      </p>
    </section>
  );
}

export default function ProgressPage() {
  const query = useProgressOverview();
  const overview = query.data;

  return (
    <Container className="py-6 sm:py-8">
      {query.isLoading && <ProgressPageSkeleton />}

      {!query.isLoading && query.isError && (
        <>
          <div>
            <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Tiến độ
            </h1>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              Theo dõi quá trình học của bạn theo thời gian.
            </p>
          </div>
          <ProgressError />
        </>
      )}

      {!query.isLoading && !query.isError && overview && (
        <>
          <div>
            <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Tiến độ
            </h1>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              Theo dõi quá trình học của bạn theo thời gian.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              icon={CheckCircle2}
              label="Bài học đã hoàn thành"
              value={overview.lessonsCompleted}
            />
            <MetricCard
              icon={CalendarClock}
              label="Thời gian học"
              value={overview.studyTimeLabel}
            />
            <MetricCard
              icon={BarChart3}
              label="Điểm quiz trung bình"
              value={`${overview.averageQuizScore}%`}
            />
            <MetricCard
              icon={Trophy}
              label="Chuỗi học hiện tại"
              value={`${overview.streak} ngày`}
            />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            <CourseProgressList courses={overview.courses} />
            <div className="grid gap-6">
              <SkillProgress skills={overview.skills} />
              {overview.achievements && overview.achievements.length > 0 && (
                <RecentAchievements achievements={overview.achievements} />
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
