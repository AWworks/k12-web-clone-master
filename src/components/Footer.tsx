import { GraduationCap, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">K12 Online Schools</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering students through innovative online education, 
              flexible learning, and personalized support.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Elementary School</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Middle School</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">High School</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Summer School</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Test Prep</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Academic Support</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Parent Resources</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Student Portal</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 K12 Online Schools. All rights reserved. Accredited by the Middle States Association of Colleges and Schools.</p>
        </div>
      </div>
    </footer>
  );
};