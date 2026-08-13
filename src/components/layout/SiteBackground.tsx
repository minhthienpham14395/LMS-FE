export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-58"
        style={{ backgroundImage: "url('/app-lms-non-auth-background.png')" }}
      />
      <div className="absolute inset-0 bg-white/44 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary-light)/0.14)_0%,hsl(var(--background-secondary)/0.16)_34%,transparent_70%)]" />
    </div>
  );
}
