import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/animations";
import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Animation */}
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background pointer-events-none"></div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <SlideUp delay={0.2}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Morningstar Limited
          </h1>
        </SlideUp>
        
        <SlideUp delay={0.4}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
            Illuminating Excellence Across Multiple Horizons
          </p>
        </SlideUp>

        <SlideUp delay={0.6}>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A distinguished parent company orchestrating success through our diverse portfolio of sister concerns
          </p>
        </SlideUp>

        <SlideUp delay={0.8}>
          <Button
            onClick={() => scrollToSection("sister-concerns")}
            size="lg"
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold text-lg px-8 py-6"
          >
            Explore Our Brands
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </SlideUp>
      </div>


      {/* Scroll Indicator */}
      <FadeIn delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-start rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-gradient-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
