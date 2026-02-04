export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* U Shape */}
      <path
        d="M20 20 L20 60 Q20 80 40 80 L60 80 Q80 80 80 60 L80 20 L70 20 L70 60 Q70 70 60 70 L40 70 Q30 70 30 60 L30 20 Z"
        fill="url(#logoGradient)"
        filter="url(#glow)"
        strokeWidth="2"
        stroke="url(#logoGradient)"
      />
    </svg>
  );
};
