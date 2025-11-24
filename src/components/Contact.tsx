import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });


    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how Morningstar Limited can add value to your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-card border-border hover:border-gold-start/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-gold-subtle">
                  <Mail className="h-6 w-6 text-gold-start" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@morningstar.limited</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-gold-start/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-gold-subtle">
                  <Phone className="h-6 w-6 text-gold-start" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-gold-start/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-gold-subtle">
                  <MapPin className="h-6 w-6 text-gold-start" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    123 Corporate Plaza<br />
                    Business District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </Card>


            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784492346429!3d40.748817471428226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704809516789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>


          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-gold-start"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border focus:border-gold-start"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border focus:border-gold-start resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
