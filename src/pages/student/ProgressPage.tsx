import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout";
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
    <article className="min-w-0 rounded-xl border bg-card p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="truncate text-xs font-semibold text-muted-foreground sm:text-sm">
          {label}
        </p>
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary-active">
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-2 break-words text-2xl font-bold text-foreground">
        {value}
      </p>
    </article>
  );
}

function ProgressError() {
  return (
    <section className="mt-6 rounded-xl border border-destructive/25 bg-card p-5 shadow-sm">
      <h2 className="font-bold text-foreground">Không thể tải tiến độ</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
        <Reveal>
          <>
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Tiến độ
              </h1>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                Theo dõi quá trình học của bạn theo thời gian.
              </p>
            </div>
            <ProgressError />
          </>
        </Reveal>
      )}

      {!query.isLoading && !query.isError && overview && (
        <>
          <Reveal>
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Tiến độ
              </h1>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                Theo dõi quá trình học của bạn theo thời gian.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Reveal>
              <MetricCard
                icon={CheckCircle2}
                label="Bài học đã hoàn thành"
                value={overview.lessonsCompleted}
              />
            </Reveal>
            <Reveal delay={70}>
              <MetricCard
                icon={CalendarClock}
                label="Thời gian học"
                value={overview.studyTimeLabel}
              />
            </Reveal>
            <Reveal delay={140}>
              <MetricCard
                icon={BarChart3}
                label="Điểm quiz trung bình"
                value={`${overview.averageQuizScore}%`}
              />
            </Reveal>
            <Reveal delay={210}>
              <MetricCard
                icon={Trophy}
                label="Chuỗi học hiện tại"
                value={`${overview.streak} ngày`}
              />
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            <Reveal>
              <CourseProgressList courses={overview.courses} />
            </Reveal>
            <div className="grid gap-6">
              <Reveal delay={80}>
                <SkillProgress skills={overview.skills} />
              </Reveal>
              {overview.achievements && overview.achievements.length > 0 && (
                <Reveal delay={160}>
                  <RecentAchievements achievements={overview.achievements} />
                </Reveal>
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}


