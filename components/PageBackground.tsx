const BEANS = Array.from({ length: 44 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 8 + ((i * 5) % 9),
  duration: 6 + ((i * 3) % 6),
  delay: -((i * 1.7) % 20),
  opacity: 0.12 + (i % 5) * 0.035,
  rotate: (i * 47) % 360,
}));

/** ambient background */
export function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="animate-mesh absolute -left-24 top-[-12%] h-72 w-72 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-mesh absolute right-[-15%] top-[28%] h-80 w-80 rounded-full opacity-45"
        style={{
          animationDelay: "-7s",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-mesh absolute bottom-[-12%] left-[18%] h-72 w-72 rounded-full opacity-40"
        style={{
          animationDelay: "-13s",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-x) 18%, transparent), transparent 70%)",
        }}
      />

      {BEANS.map((b, i) => (
        <span
          key={i}
          className="animate-particle absolute"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            opacity: b.opacity,
            color: "color-mix(in srgb, var(--color-primary) 70%, transparent)",
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-full w-full"
            style={{ transform: `rotate(${b.rotate}deg)` }}
            fill="none"
            aria-hidden
          >
            <g transform="rotate(32 12 12)">
              <ellipse cx="12" cy="12" rx="6.4" ry="9.6" fill="currentColor" />
              <path
                d="M12 3.6C9 7.2 15 16.8 12 20.4"
                stroke="var(--color-on-primary)"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.7"
              />
            </g>
          </svg>
        </span>
      ))}
    </div>
  );
}
