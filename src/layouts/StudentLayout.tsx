import { Outlet } from "react-router-dom";

import {
  StudentBottomNav,
  StudentSidebar,
  StudentTopbar,
} from "@/features/profile/components";

export default function StudentLayout() {
  return (
    <div className="min-h-dvh bg-slate-50">
      <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden min-h-dvh border-r bg-white lg:sticky lg:top-0 lg:block lg:h-dvh">
          <StudentSidebar />
        </aside>

        <div className="min-w-0 pb-20 lg:pb-0">
          <StudentTopbar />
          <main className="min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
      <StudentBottomNav />
    </div>
  );
}
