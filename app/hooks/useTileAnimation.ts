import { useEffect, useRef } from 'react';

export const useTileAnimation = () => {
  const tileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tile = tileRef.current;
    if (!tile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = tile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const relX = (x - centerX) / centerX;
      const relY = (y - centerY) / centerY;
      
      tile.style.setProperty('--rotate-x', `${relY * 15}deg`);
      tile.style.setProperty('--rotate-y', `${-relX * 15}deg`);
    };
    
    const handleMouseLeave = () => {
      tile.style.setProperty('--rotate-x', '0deg');
      tile.style.setProperty('--rotate-y', '0deg');
    };
    
    tile.addEventListener('mousemove', handleMouseMove);
    tile.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      tile.removeEventListener('mousemove', handleMouseMove);
      tile.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return tileRef;
}; 