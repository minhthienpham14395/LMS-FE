import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageMotion } from "@/components/layout/PageMotion";

export default function PublicLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="relative">
        <PageMotion key={location.pathname}>
          <Outlet />
        </PageMotion>
      </main>
      <Footer />
    </div>
  );
}
