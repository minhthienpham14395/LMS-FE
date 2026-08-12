import { NavLink } from "react-router-dom";
import { BookOpen, Gauge, LineChart } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import { cn } from "@/utils/cn";

const bottomItems = [
  { label: "Tổng quan", href: ROUTES.student.dashboard, icon: Gauge, end: true },
  { label: "Khóa học", href: ROUTES.student.myCourses, icon: BookOpen, end: false },
  { label: "Tiến độ", href: ROUTES.student.progress, icon: LineChart, end: false },
] as const;

export function StudentBottomNav() {
  return (
    <nav
      aria-label="Điều hướng nhanh của học viên"
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-1">
        {bottomItems.map(({ label, href, icon: Icon, end }) => (
          <NavLink
            key={href}
            to={href}
            end={end}
            className={({ isActive }) =>
              cn(
                "flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl px-2 text-[11px] font-semibold transition",
                "text-slate-500 hover:bg-brand-50 hover:text-brand-700",
                isActive && "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
              )
            }
          >
            <Icon className="size-4" />
            <span className="truncate">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
