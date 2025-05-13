
import HeroSection from '@/components/landing/hero-section';
import MenuSection from '@/components/landing/menu-section';
import FaqSection from '@/components/landing/faq-section';
import ContactFooter from '@/components/landing/contact-footer';
import ScrollAnimationWrapper from '@/components/animations/scroll-animation-wrapper';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrollAnimationWrapper>
        <HeroSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={100}>
        <MenuSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={200}>
        <FaqSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={300}>
        <ContactFooter />
      </ScrollAnimationWrapper>
    </div>
  );
}
