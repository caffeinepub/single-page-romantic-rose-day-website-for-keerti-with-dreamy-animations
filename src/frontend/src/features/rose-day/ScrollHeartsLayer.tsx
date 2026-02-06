import { useEffect, useState } from 'react';
import { useScrollIntensity } from './useScrollIntensity';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export function ScrollHeartsLayer() {
  const scrollIntensity = useScrollIntensity();
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate more hearts as scroll intensity increases
    const heartCount = Math.floor(5 + scrollIntensity * 10);
    const heartParticles: FloatingHeart[] = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 15,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
    setHearts(heartParticles);
  }, [scrollIntensity]);

  return (
    <div className="pointer-events-none fixed inset-0 z-5 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute animate-heart-float"
          style={{
            left: `${heart.x}%`,
            bottom: '-10%',
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: Math.min(0.3 + scrollIntensity * 0.5, 0.7),
          }}
        >
          <Heart
            size={heart.size}
            className="fill-romantic-heart text-romantic-heart"
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
}
