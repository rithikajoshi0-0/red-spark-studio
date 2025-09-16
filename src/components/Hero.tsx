import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-freelancing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden page-transition">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in stagger-animation">
            <div className="inline-flex items-center bg-background border border-border rounded-full px-4 py-2 mb-6 shadow-card bounce-in">
              <Star className="w-4 h-4 text-primary mr-2" fill="currentColor" />
              <span className="text-sm font-medium text-foreground">Trusted by 500+ Students & Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Affordable Freelance Services for 
              <span className="text-primary floating-element"> Students & Small Businesses</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get professional design, development, and marketing services starting at just ₹500. 
              Perfect for college projects, startups, and growing businesses in India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-hero px-8 py-4 text-lg rounded-xl bounce-in">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="btn-outline-red px-8 py-4 text-lg rounded-xl">
                View Portfolio
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 stagger-animation">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-primary mr-2" fill="currentColor" />
                  <span className="text-2xl font-bold text-foreground">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-hero-gradient opacity-20 blur-xl rounded-2xl"></div>
              <img 
                src={heroImage} 
                alt="Professional freelancing services workspace"
                className="relative w-full h-auto rounded-2xl shadow-elegant"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-elegant border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Quality Guaranteed</p>
                    <p className="text-sm text-muted-foreground">100% satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;