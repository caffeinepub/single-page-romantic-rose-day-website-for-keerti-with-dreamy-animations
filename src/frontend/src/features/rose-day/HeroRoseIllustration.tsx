import { PetalsLayer } from './PetalsLayer';

export function HeroRoseIllustration() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Floating petals around hero */}
      <PetalsLayer />
      
      {/* Hero image with glow effect */}
      <div className="relative">
        {/* Glow effect behind image */}
        <div className="absolute inset-0 -m-8 animate-glow-pulse rounded-full bg-romantic-glow blur-3xl opacity-60" />
        
        {/* Main hero image */}
        <div className="relative z-10">
          <img
            src="/assets/generated/hero-rose-day.dim_1600x900.png"
            alt="A loving hand offering a red rose to Keerti"
            className="h-auto w-full rounded-3xl shadow-2xl"
          />
        </div>
        
        {/* Additional glow around hands/rose area (center-bottom) */}
        <div className="absolute bottom-1/4 left-1/2 h-48 w-48 -translate-x-1/2 animate-glow-pulse rounded-full bg-romantic-rose-glow blur-2xl opacity-70" />
      </div>
    </div>
  );
}
