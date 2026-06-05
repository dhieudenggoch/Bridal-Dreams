import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarqueeStrip from '@/components/MarqueeStrip';
import AboutSection from '@/components/AboutSection';
import CollectionsSection from '@/components/CollectionsSection';
import ExperienceSection from '@/components/ExperienceSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import RevealObserver from '@/components/RevealObserver';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <RevealObserver />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <CollectionsSection />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
