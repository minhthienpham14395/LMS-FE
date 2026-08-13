import { useLocation } from "react-router-dom";

import { SiteBackground } from "@/components/layout/SiteBackground";

import { AppRouter } from "./routes/router";

const AUTH_ROUTE_PATTERN = /^\/(?:login|register|forgot-password)(?:\/|$)/;

export default function App() {
  const { pathname } = useLocation();
  const isAuthRoute = AUTH_ROUTE_PATTERN.test(pathname);

  return (
    <div className="relative isolate min-h-dvh bg-background text-foreground">
      {!isAuthRoute ? <SiteBackground /> : null}
      <div className="relative z-10">
        <AppRouter />
      </div>
    </div>
  );
}
