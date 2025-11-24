import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sisterConcerns = [
    { name: "Bojro Store", url: "https://bojro.store" },
    { name: "Influencewear Store", url: "https://influencewear.store" },
    { name: "Morningstar International", url: "https://morningstar-international.com" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Linkedin, url: "#" },
    { icon: Instagram, url: "#" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              Morningstar Limited
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Illuminating excellence across multiple horizons through strategic investments and operational excellence.
            </p>
          </div>


          {/* Sister Concerns */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Sister Concerns</h4>
            <ul className="space-y-2">
              {sisterConcerns.map((concern, index) => (
                <li key={index}>
                  <a
                    href={concern.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold-start transition-colors text-sm"
                  >
                    {concern.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2 rounded-full bg-card border border-border hover:border-gold-start hover:bg-gradient-gold-subtle transition-all"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground hover:text-gold-start transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-sm">
              info@morningstar.limited
            </p>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Morningstar Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-gold-start transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold-start transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold-start transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
