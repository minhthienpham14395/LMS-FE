export function AppBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#f5f8fc]" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/app-lms-background.png')" }}
      />
      <div className="absolute inset-0 bg-white/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0)_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.64)_44%,rgba(248,250,252,0.9)_100%)]" />
    </div>
  );
}
