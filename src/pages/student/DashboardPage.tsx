import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui-shadcn/progress";

const stats = [
  { label: "Chuỗi học hiện tại", value: "6 ngày", icon: Trophy },
  { label: "Bài học đã xong", value: "24", icon: CheckCircle2 },
  { label: "Thời gian học", value: "8g 40p", icon: Clock3 },
  { label: "Điểm trung bình", value: "86%", icon: CalendarClock },
] as const;

const recentActivities = [
  "Đã hoàn thành bài luyện nghe trong Nền tảng tiếng Anh",
  "Đạt 88% ở mốc kiểm tra Tự tin giao tiếp",
  "Đã mở khóa bài ôn ngữ pháp tiếp theo",
] as const;

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
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
      <p className="mt-2 truncate text-2xl font-bold text-slate-950">{value}</p>
    </article>
  );
}

function ContinueLearning() {
  return (
    <section className="min-w-0 rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-950">
            Tiếp tục học
          </h2>
          <p className="mt-1 text-sm text-slate-500">Nền tảng tiếng Anh</p>
        </div>
        <Badge>Hoàn thành 72%</Badge>
      </div>

      <div className="mt-5 grid items-center gap-5 md:grid-cols-[180px_minmax(0,1fr)]">
        <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 md:aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt=""
            width="640"
            height="480"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-brand-600">
            Bài tiếp theo
          </p>
          <h3 className="mt-1 line-clamp-2 font-bold text-slate-950">
            Hội thoại hằng ngày: hỏi thông tin
          </h3>

          <Progress value={72} className="mt-4" />

          <Button asChild className="mt-5 w-full sm:w-auto">
            <Link to="/student/learn/1">Tiếp tục bài học</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WeeklyProgress() {
  const days = [
    ["T2", 35],
    ["T3", 70],
    ["T4", 50],
    ["T5", 90],
    ["T6", 60],
    ["T7", 20],
    ["CN", 0],
  ] as const;

  return (
    <section className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold text-slate-950">Tuần này</h2>

      <div className="mt-6 flex h-40 items-end gap-2">
        {days.map(([day, value]) => (
          <div
            key={day}
            className="flex min-w-0 flex-1 flex-col items-center gap-2"
          >
            <div className="flex h-28 w-full items-end rounded-lg bg-slate-100">
              <div
                className="w-full rounded-lg bg-brand-500"
                style={{ height: `${value}%` }}
                aria-label={`${day}: ${value}%`}
              />
            </div>
            <span className="text-[10px] text-slate-500 xs:text-xs">{day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecentActivity() {
  return (
    <section className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold text-slate-950">Hoạt động gần đây</h2>
      <div className="mt-4 grid gap-3">
        {recentActivities.map((activity) => (
          <div
            key={activity}
            className="rounded-xl border bg-slate-50 px-3 py-3 text-sm text-slate-700"
          >
            {activity}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function StudentDashboardPage() {
  return (
    <Container className="py-6 sm:py-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Tổng quan
        </h1>
        <p className="mt-1 text-sm text-slate-600 sm:text-base">
          Tiếp tục học và giữ nhịp tiến bộ trong tuần.
        </p>
      </div>

      <section className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)]">
        <ContinueLearning />
        <WeeklyProgress />
      </section>

      <div className="mt-6">
        <RecentActivity />
      </div>
    </Container>
  );
}
