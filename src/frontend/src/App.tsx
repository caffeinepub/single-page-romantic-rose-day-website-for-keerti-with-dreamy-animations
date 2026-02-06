import { DreamyOverlays } from './features/rose-day/DreamyOverlays';
import { HeroRoseIllustration } from './features/rose-day/HeroRoseIllustration';
import { RomanticCopy } from './features/rose-day/RomanticCopy';
import { ScrollHeartsLayer } from './features/rose-day/ScrollHeartsLayer';
import { FooterMessage } from './features/rose-day/FooterMessage';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-romantic-gradient">
      {/* Animated background overlays */}
      <DreamyOverlays />
      
      {/* Scroll-reactive hearts */}
      <ScrollHeartsLayer />
      
      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          {/* Hero illustration with rose */}
          <div className="mb-8 animate-fade-in-up md:mb-12">
            <HeroRoseIllustration />
          </div>
          
          {/* Romantic text content */}
          <div className="animate-fade-in-up-delayed">
            <RomanticCopy />
          </div>
        </div>
      </main>
      
      {/* Footer message */}
      <FooterMessage />
    </div>
  );
}

export default App;
