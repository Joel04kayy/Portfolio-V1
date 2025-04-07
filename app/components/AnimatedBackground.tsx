'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          '--size': '500px',
          '--speed': '50s',
          '--easing': 'cubic-bezier(0.8, 0.2, 0.2, 0.8)',
        } as React.CSSProperties}
      />
    </div>
  );
} 