import { Bell } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { StudentMobileNav } from "./StudentMobileNav";

export function StudentTopbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/66 shadow-sm backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-3 px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <StudentMobileNav />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold sm:text-base">
            Chào mừng bạn quay lại
          </p>
        </div>

        <Button variant="ghost" size="icon" aria-label="Thông báo">
          <Bell className="size-5" />
        </Button>
      </div>
    </header>
  );
}
