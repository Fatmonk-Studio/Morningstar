import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import morningstarLogo from "@/assets/morningstar_logo.jpg";
import bojroLogo from "@/assets/bojro_logo.jpg";
import influencewearLogo from "@/assets/influencewear_logo.jpg";  

const SisterConcerns = () => {
  const concerns = [
    {
      name: "Bojro Store",
      url: "https://bojro.store",
      description: "Premium e-commerce platform delivering quality products with exceptional customer service.",
      icon: bojroLogo,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Influencewear Store",
      url: "https://influencewear.store",
      description: "Fashion-forward apparel and lifestyle brand inspired by modern influencer culture.",
      icon: influencewearLogo,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Morningstar International",
      url: "https://morningstar-international.com",
      description: "Global trade and consulting services connecting businesses across continents.",
      icon: morningstarLogo,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="sister-concerns" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              Our Sister Concerns
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse portfolio of companies united by excellence and innovation
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {concerns.map((concern, index) => {
            return (
              <StaggerItem key={index}>
                <Card
                  className="p-8 bg-card border-border hover:border-gold-start/50 transition-all duration-500 hover:shadow-gold group hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className={`mb-6 inline-flex p-1 rounded-lg bg-gradient-to-br ${concern.color} bg-opacity-10 w-fit`}>
                    <img 
                      src={concern.icon} 
                      alt={`${concern.name} logo`} 
                      className="h-24 w-24 object-contain group-hover:scale-110 transition-transform duration-300 rounded-md" 
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-gold-start transition-colors">
                    {concern.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed min-h-[60px] flex-grow">
                    {concern.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-gradient-gold group-hover:text-primary-foreground group-hover:border-transparent transition-all"
                    // onClick={() => window.open(concern.url, "_blank")}
                  >
                    {/* Visit Website */}
                    Coming Soon...
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SisterConcerns;
