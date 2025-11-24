import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "John Anderson",
      role: "Chairman & CEO",
      initials: "JA",
      bio: "Visionary leader with over 25 years of experience in building successful enterprises.",
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Operating Officer",
      initials: "SM",
      bio: "Operations expert driving efficiency and excellence across all business units.",
    },
    {
      name: "David Chen",
      role: "Chief Financial Officer",
      initials: "DC",
      bio: "Financial strategist ensuring sustainable growth and fiscal responsibility.",
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Strategy Officer",
      initials: "ER",
      bio: "Strategic thinker guiding corporate vision and long-term planning initiatives.",
    },
  ];

  return (
    <section id="leadership" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries steering Morningstar Limited toward continued excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-gold-start/50 transition-all duration-500 hover:shadow-gold group text-center"
            >
              <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-gold-start/20 group-hover:ring-gold-start transition-all">
                <AvatarFallback className="text-2xl font-bold bg-gradient-gold text-primary-foreground">
                  {leader.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-gold-start transition-colors">
                {leader.name}
              </h3>
              <p className="text-sm text-gold-start mb-3 font-medium">{leader.role}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {leader.bio}
              </p>
              <button className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gradient-gold-subtle transition-colors">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-gold-start transition-colors" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
