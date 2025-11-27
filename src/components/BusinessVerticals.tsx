import { Card } from "@/components/ui/card";
import { Store, Briefcase, Plane, Building2, Shirt, Package } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const BusinessVerticals = () => {
  const verticals = [
    {
      icon: Store,
      title: "E-Commerce",
      description: "Digital retail platforms delivering seamless shopping experiences with curated product selections.",
    },
    {
      icon: Briefcase,
      title: "Consulting",
      description: "Strategic business advisory services helping organizations achieve their growth objectives.",
    },
    {
      icon: Plane,
      title: "Import/Export",
      description: "International trade facilitation connecting global markets with reliable logistics solutions.",
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property development and investment services creating value in prime locations.",
    },
    {
      icon: Shirt,
      title: "Fashion & Apparel",
      description: "Trendsetting clothing brands combining style, quality, and contemporary design.",
    },
    {
      icon: Package,
      title: "Distribution",
      description: "Efficient supply chain management ensuring products reach customers reliably.",
    },
  ];

  return (
    <section id="business-verticals" className="py-12 md:py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              Business Verticals
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-justify">
              Diverse sectors unified by our commitment to excellence and innovation
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <StaggerItem key={index}>
                <Card
                  className="p-5 md:p-6 bg-card border-border hover:border-gold-start/50 transition-all duration-300 hover:shadow-gold group h-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-gold-subtle flex-shrink-0">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-gold-start group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground group-hover:text-gold-start transition-colors">
                        {vertical.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {vertical.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BusinessVerticals;
