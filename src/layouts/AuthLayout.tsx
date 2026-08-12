import { Link, Outlet } from "react-router-dom";
import { BookOpen, ChartNoAxesColumnIncreasing, GraduationCap } from "lucide-react";

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
  return (
    <div className="grid min-h-dvh bg-white lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.76fr)]">
      <aside className="relative hidden min-h-dvh overflow-hidden border-r border-brand-100 bg-brand-50 p-10 text-slate-950 lg:flex lg:flex-col lg:justify-between">
        <Logo />

        <div className="max-w-xl">
          <p className="text-4xl font-bold leading-tight">
            Học đều đặn. Theo dõi tiến bộ thật rõ ràng.
          </p>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
            Tiếp tục hành trình học tiếng Anh trên mọi thiết bị, với không gian
            học tập gọn gàng cho bài học, ôn tập và luyện tập hằng ngày.
          </p>
        </div>

        <div className="grid max-w-2xl grid-cols-3 gap-3">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl border border-brand-100 bg-white/80 p-4 text-sm font-semibold text-slate-700 shadow-sm"
            >
              <Icon className="mb-3 size-5 text-accent-500" />
              {label}
            </div>
          ))}
        </div>
      </aside>

      <main className="flex min-h-dvh items-start justify-center overflow-y-auto px-4 py-8 xs:px-5 sm:px-6 md:items-center lg:px-10 [@media_(max-height:640px)]:items-start">
        <div className="w-full max-w-md">
          <div className="mb-7 flex items-center justify-between gap-4 lg:hidden">
            <Logo />
            <Link
              to="/"
              className="rounded-md text-sm font-semibold text-slate-600 hover:text-brand-600 focus-visible:outline-brand-500"
            >
              Trang chủ
            </Link>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
