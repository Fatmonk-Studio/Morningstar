import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Morningstar Limited
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Illuminating Excellence Across Multiple Horizons
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          A distinguished parent company orchestrating success through our diverse portfolio of sister concerns
        </p>
        <Button
          onClick={() => scrollToSection("sister-concerns")}
          size="lg"
          className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
        >
          Explore Our Brands
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-start rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gradient-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
