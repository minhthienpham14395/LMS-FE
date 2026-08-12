import { AppBackground } from "./components/layout/AppBackground";
import { AppRouter } from "./routes/router";

export default function App() {
  return (
    <div className="relative isolate min-h-dvh text-slate-950">
      <AppBackground />
      <div className="relative z-10">
        <AppRouter />
      </div>
    </div>
  );
}
