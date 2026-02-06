import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function DreamyOverlays() {
  const [sparkles, setSparkles] = useState<Particle[]>([]);
  const [dust, setDust] = useState<Particle[]>([]);
  const [bokeh, setBokeh] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate sparkles
    const sparkleParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setSparkles(sparkleParticles);

    // Generate dust particles
    const dustParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setDust(dustParticles);

    // Generate bokeh circles
    const bokehParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 40,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 3,
    }));
    setBokeh(bokehParticles);
  }, []);

  return (
    <>
      {/* Bokeh layer - furthest back */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {bokeh.map((particle) => (
          <div
            key={`bokeh-${particle.id}`}
            className="absolute animate-float-slow rounded-full bg-romantic-bokeh blur-3xl"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Dust particles - middle layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {dust.map((particle) => (
          <div
            key={`dust-${particle.id}`}
            className="absolute animate-drift-slow rounded-full bg-romantic-dust"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Sparkles - front layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {sparkles.map((particle) => (
          <div
            key={`sparkle-${particle.id}`}
            className="absolute animate-twinkle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            <div className="h-full w-full rounded-full bg-romantic-sparkle shadow-sparkle" />
          </div>
        ))}
      </div>

      {/* Overlay texture from generated asset */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage: 'url(/assets/generated/overlay-bokeh-sparkles.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </>
  );
}
