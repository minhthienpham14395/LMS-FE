import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, ChartNoAxesColumnIncreasing, GraduationCap } from "lucide-react";

import { AppBackground } from "@/components/layout/AppBackground";
import { PageMotion } from "@/components/layout/PageMotion";
import { Logo } from "@/components/shared";

const highlights = [
  {
    icon: BookOpen,
    label: "Bài học có lộ trình",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    label: "Tiến độ rõ ràng",
  },
  {
    icon: GraduationCap,
    label: "Giáo viên hỗ trợ",
  },
];

export default function AuthLayout() {
  const location = useLocation();

  return (
    <div className="relative isolate grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.76fr)]">
      <AppBackground />

      <aside className="relative z-10 hidden min-h-dvh overflow-hidden border-r border-border bg-background-secondary/80 p-10 text-foreground backdrop-blur-xl lg:flex">
        <div className="flex h-full flex-col justify-between">
          <Logo />

          <div className="max-w-xl">
            <p className="text-4xl font-bold leading-tight">
              Học đều đặn. Theo dõi tiến bộ thật rõ ràng.
            </p>
            <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
              Tiếp tục hành trình học tiếng Anh trên mọi thiết bị, với không gian
              học tập gọn gàng cho bài học, ôn tập và luyện tập hằng ngày.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm backdrop-blur"
              >
                <Icon className="mb-3 size-5 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="relative z-10 flex min-h-dvh items-start justify-center overflow-y-auto px-4 py-8 xs:px-5 sm:px-6 md:items-center lg:px-10 [@media_(max-height:640px)]:items-start">
        <PageMotion key={location.pathname} className="auth-page-enter w-full max-w-md">
          <div className="mb-7 flex items-center justify-between gap-4 lg:hidden">
            <Logo className="text-foreground" />
            <Link
              to="/"
              className="rounded-md text-sm font-semibold text-muted-foreground hover:text-primary focus-visible:outline-primary"
            >
              Trang chủ
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card/96 p-6 shadow-lg backdrop-blur-md sm:p-8">
            <Outlet />
          </div>
        </PageMotion>
      </main>
    </div>
  );
}
