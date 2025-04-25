'use client';

import { useEffect, useRef } from 'react';

export default function GradientBackground() {
  const gradientRef = useRef(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    // Add mouse move effect
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      gradient.style.setProperty('--x', `${x * 100}%`);
      gradient.style.setProperty('--y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        ref={gradientRef}
        className="gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          '--size': '575px',
          '--speed': '50s',
          '--easing': 'cubic-bezier(0.8, 0.2, 0.2, 0.8)',
        }}
      />
    </div>
  );
} 