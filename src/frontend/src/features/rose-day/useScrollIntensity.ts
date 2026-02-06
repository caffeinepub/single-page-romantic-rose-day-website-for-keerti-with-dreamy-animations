import { useEffect, useState } from 'react';

export function useScrollIntensity(): number {
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const updateIntensity = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
      
      // Smooth intensity between 0 and 1
      setIntensity(Math.min(scrollProgress, 1));
      
      lastScrollY = scrollY;
    };

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateIntensity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateIntensity(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return intensity;
}
