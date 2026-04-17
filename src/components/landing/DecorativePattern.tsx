

interface DecorativePatternProps {
  accentColor?: string;
}

export default function DecorativePattern({
  accentColor = "#3085c7",
}: DecorativePatternProps) {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.25;
          }
        }
      `}</style>

      <div className="relative w-full overflow-hidden bg-white py-16">
        {/* SVG Wave and Dots Pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Wave 1 */}
          <path
            d="M0,100 Q360,50 720,100 T1440,100 L1440,200 L0,200 Z"
            fill={accentColor}
            opacity="0.08"
          />
          {/* Wave 2 */}
          <path
            d="M0,130 Q360,80 720,130 T1440,130 L1440,250 L0,250 Z"
            fill={accentColor}
            opacity="0.05"
          />
          {/* Wave 3 */}
          <path
            d="M0,160 Q360,120 720,160 T1440,160 L1440,300 L0,300 Z"
            fill={accentColor}
            opacity="0.03"
          />

          {/* Decorative dots */}
          <circle cx="100" cy="80" r="2" fill={accentColor} opacity="0.2" />
          <circle cx="200" cy="120" r="1.5" fill={accentColor} opacity="0.15" />
          <circle cx="350" cy="100" r="2" fill={accentColor} opacity="0.2" />
          <circle cx="500" cy="150" r="1" fill={accentColor} opacity="0.1" />
          <circle cx="700" cy="90" r="2" fill={accentColor} opacity="0.2" />
          <circle cx="900" cy="140" r="1.5" fill={accentColor} opacity="0.15" />
          <circle cx="1100" cy="110" r="2" fill={accentColor} opacity="0.2" />
          <circle cx="1250" cy="160" r="1" fill={accentColor} opacity="0.1" />
          <circle
            cx="1350"
            cy="100"
            r="1.5"
            fill={accentColor}
            opacity="0.15"
          />
        </svg>

        {/* Floating Blob Shapes */}
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-3"
          style={{
            background: `radial-gradient(circle, rgba(48, 133, 199, 0.3) 0%, transparent 70%)`,
            animation: "pulse 8s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-2"
          style={{
            background: `radial-gradient(circle, rgba(48, 133, 199, 0.2) 0%, transparent 70%)`,
            animation: "pulse 10s ease-in-out infinite 0.5s",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-2"
          style={{
            background: `radial-gradient(circle, rgba(48, 133, 199, 0.15) 0%, transparent 70%)`,
            animation: "pulse 12s ease-in-out infinite 1s",
          }}
        ></div>
      </div>
    </>
  );
}
