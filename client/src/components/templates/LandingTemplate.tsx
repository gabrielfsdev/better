import { Navbar } from '../organisms/Navbar';
import { HeroSection } from '../organisms/HeroSection';
import { CtaSection } from '../organisms/CtaSection';
import { Footer } from '../organisms/Footer';

export function LandingTemplate() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-void overflow-x-hidden antialiased">
      <Navbar />
      <HeroSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
