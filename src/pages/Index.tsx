import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SisterConcerns from "@/components/SisterConcerns";
import BusinessVerticals from "@/components/BusinessVerticals";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <SisterConcerns />
      <BusinessVerticals />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
