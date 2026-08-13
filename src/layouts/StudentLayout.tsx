import { Outlet, useLocation } from "react-router-dom";

import { PageMotion } from "@/components/layout/PageMotion";
import {
  StudentBottomNav,
  StudentSidebar,
  StudentTopbar,
} from "@/features/profile/components";

export default function StudentLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh">
      <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden min-h-dvh border-r border-border bg-card/90 backdrop-blur-xl lg:sticky lg:top-0 lg:block lg:h-dvh">
          <StudentSidebar />
        </aside>

        <div className="min-w-0 pb-20 lg:pb-0">
          <StudentTopbar />
          <main className="min-w-0">
            <PageMotion key={location.pathname} className="min-w-0">
              <Outlet />
            </PageMotion>
          </main>
        </div>
      </div>
      <StudentBottomNav />
    </div>
  );
}
