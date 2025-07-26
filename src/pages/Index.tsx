import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;