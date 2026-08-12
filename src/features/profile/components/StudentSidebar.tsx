import { NavLink } from "react-router-dom";
import { BookOpen, Gauge, LineChart, UserRound } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { ROUTES } from "@/utils/constants";
import { cn } from "@/utils/cn";

const studentSidebarItems = [
  { label: "Tổng quan", href: ROUTES.student.dashboard, icon: Gauge, end: true },
  { label: "Khóa học của tôi", href: ROUTES.student.myCourses, icon: BookOpen, end: false },
  { label: "Tiến độ", href: ROUTES.student.progress, icon: LineChart, end: false },
  { label: "Hồ sơ", href: ROUTES.student.profile, icon: UserRound, end: false },
] as const;

interface StudentSidebarProps {
  onNavigate?: () => void;
}

export function StudentSidebar({ onNavigate }: StudentSidebarProps) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="px-2">
        <Logo />
      </div>

      <nav className="mt-7 grid gap-1" aria-label="Điều hướng học viên">
        {studentSidebarItems.map(({ label, href, icon: Icon, end }) => (
          <NavLink
            key={href}
            to={href}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "flex min-h-11 items-center gap-3 rounded-xl px-3",
                "text-sm font-medium text-slate-600 transition",
                "hover:bg-brand-50 hover:text-brand-700",
                isActive &&
                  "bg-brand-50 font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100"
              )
            }
          >
            <Icon className="size-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
