import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Sister Concerns", id: "sister-concerns" },
    { label: "Business", id: "business-verticals" },
    // { label: "Leadership", id: "leadership" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Morningstar Logo" className="h-14 w-auto object-contain" />
          </button>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-gold-start transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold"
            >
              Get In Touch
            </Button>
          </div>


          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-[80%] md:w-72">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="mb-4">
                  <img src={logo} alt="Morningstar Logo" className="h-14 w-auto object-contain" />
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-lg text-foreground/80 hover:text-gold-start transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold w-full"
                >
                  Get In Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
