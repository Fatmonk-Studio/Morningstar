import { Target, Eye, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To drive sustainable growth and innovation across diverse industries, creating value for stakeholders while maintaining the highest standards of excellence and integrity.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a leading conglomerate recognized globally for exceptional business leadership, fostering prosperity through strategic investments and operational excellence.",
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description:
        "Integrity, Innovation, Excellence, Collaboration, and Sustainability form the cornerstone of everything we do, guiding our decisions and relationships.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SlideUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              About Morningstar Limited
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Morningstar Limited stands as a beacon of excellence in the corporate landscape, 
              serving as the parent company to a distinguished portfolio of sister concerns. 
              With a strategic vision and commitment to innovation, we orchestrate success across 
              multiple sectors, from e-commerce and fashion to international trade and real estate.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={index}>
                <Card
                  className="p-8 bg-card border-border hover:border-gold-start/50 transition-all duration-500 hover:shadow-gold group h-full"
                >
                  <div className="mb-6 inline-flex p-4 rounded-lg bg-gradient-gold-subtle">
                    <Icon className="h-8 w-8 text-gold-start group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-gold-start transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
