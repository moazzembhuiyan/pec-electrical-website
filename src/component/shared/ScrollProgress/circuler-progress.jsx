'use client';

export function CircularProgressBar({
  progress,
  size = 120,
  strokeWidth = 8,
  color = 'hsl(var(--primary))',
  backgroundColor = 'hsl(var(--muted))',
  showLabel = true,
  label,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="scroll-progress-container flex flex-col items-center justify-center gap-2">
      <svg width={size} height={size} className="scroll-progress-circle transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.35s ease',
          }}
        />
      </svg>
      {showLabel && (
        <div className="scroll-progress-label flex items-center justify-center rounded-full bg-gray-100 !p-5 shadow-[0_0_25px_8px_rgba(255,140,0,0.5)] animate-pulse">
          <p className="text-base font-semibold text-gray-800">{label || `${progress}%`}</p>
        </div>
      )}
    </div>
  );
}
