export function Wallpaper() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a1628]">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, #1e90ff 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 80% 20%, #00c2a8 0%, transparent 50%),
            radial-gradient(ellipse 60% 70% at 70% 80%, #0d4f8b 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 10% 85%, #2dd4bf 0%, transparent 45%),
            linear-gradient(160deg, #071525 0%, #0c3d6e 45%, #0a6b7a 100%)
          `,
        }}
      />
      <svg
        className="absolute inset-0 size-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="waveA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="waveB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.35" />
          </linearGradient>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <path
          d="M-100 520 C 220 380, 420 680, 720 520 S 1180 300, 1540 480 L 1540 980 L -100 980 Z"
          fill="url(#waveA)"
          filter="url(#softBlur)"
        />
        <path
          d="M-80 180 C 260 40, 480 280, 760 160 S 1220 40, 1520 200 L 1520 -40 L -80 -40 Z"
          fill="url(#waveB)"
          filter="url(#softBlur)"
        />
        <ellipse
          cx="1100"
          cy="620"
          rx="280"
          ry="160"
          fill="#5eead4"
          opacity="0.22"
          filter="url(#softBlur)"
        />
      </svg>
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
