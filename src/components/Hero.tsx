import { Button } from "@/components/ui/button";
import { PlayCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-hero-gradient flex items-center justify-center text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Trusted by 50,000+ families nationwide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Future of
              <span className="block text-accent-foreground">K-12 Education</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg">
              Personalized online learning that adapts to your child's pace. 
              Accredited curriculum, certified teachers, and flexible scheduling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline-hero">
                <PlayCircle className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm">
              <div>
                <div className="font-semibold text-lg">98%</div>
                <div className="text-primary-foreground/80">Graduation Rate</div>
              </div>
              <div>
                <div className="font-semibold text-lg">24/7</div>
                <div className="text-primary-foreground/80">Support</div>
              </div>
              <div>
                <div className="font-semibold text-lg">K-12</div>
                <div className="text-primary-foreground/80">All Grades</div>
              </div>
            </div>
          </div>
          
          <div className="lg:block hidden">
            <img 
              src={heroImage} 
              alt="Students learning online" 
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover animate-slide-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};