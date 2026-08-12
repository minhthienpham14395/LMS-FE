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
    <div className="grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.76fr)]">
      <aside className="relative hidden min-h-dvh overflow-hidden border-r border-white/60 bg-white/44 p-10 text-slate-950 backdrop-blur-xl lg:flex">
        <div className="flex h-full flex-col justify-between">
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
                className="rounded-xl border border-white/70 bg-white/72 p-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
              >
                <Icon className="mb-3 size-5 text-accent-500" />
                {label}
              </div>
            ))}
          </div>
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
          <div className="rounded-[1.75rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
