export function AppBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/app-lms-background.png')" }}
      />
      <div className="absolute inset-0 bg-white/42 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary-light)/0.16)_0%,hsl(var(--background-soft)/0.1)_60%,transparent_100%),linear-gradient(90deg,hsl(var(--background-secondary)/0.06)_0%,transparent_45%,hsl(var(--background-secondary)/0.06)_100%)]" />
    </div>
  );
}
