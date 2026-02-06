import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  duration: number;
  delay: number;
  size: number;
}

export function PetalsLayer() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalParticles: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 - 20,
      rotation: Math.random() * 360,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 3,
      size: Math.random() * 20 + 15,
    }));
    setPetals(petalParticles);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -m-12 overflow-visible">
      {petals.map((petal) => (
        <div
          key={`petal-${petal.id}`}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.2}
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${petal.rotation}deg)` }}
          >
            <path
              d="M10 0C10 0 15 5 15 10C15 15 12.5 18 10 24C7.5 18 5 15 5 10C5 5 10 0 10 0Z"
              fill="url(#petalGradient)"
              opacity="0.8"
            />
            <defs>
              <linearGradient id="petalGradient" x1="10" y1="0" x2="10" y2="24">
                <stop offset="0%" stopColor="oklch(0.75 0.15 15)" />
                <stop offset="100%" stopColor="oklch(0.55 0.20 10)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
