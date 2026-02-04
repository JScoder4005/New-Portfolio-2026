'use client';

export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
      <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
      <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
        <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse-glow" />
      </div>
    </div>
  );
};
