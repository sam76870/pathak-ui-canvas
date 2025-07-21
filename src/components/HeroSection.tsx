import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-primary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                Shubham
                <br />
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Pathak
                </span>
              </h1>
              
              <p className="text-muted-foreground text-xl">
                Software Engineer
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Motivated Software Engineer with 3.6+ years of experience in full-stack web development, specializing in realtime dashboards and modern UI applications.
              </p>
            </div>

            {/* Tab-like navigation */}
            <div className="flex gap-8 border-b border-border overflow-x-auto">
              <button className="pb-4 border-b-2 border-primary text-primary font-medium whitespace-nowrap">
                ABOUT
              </button>
              <button className="pb-4 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                MY SERVICES
              </button>
              <button className="pb-4 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                INTERVIEWS
              </button>
              <button className="pb-4 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                AWARDS
              </button>
              <button className="pb-4 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                EXHIBITIONS
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Why hire me for your next project?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about driving innovation and continuously improving system performance. I work with technologies such as React.js, VUE 2, Node.js, and MongoDB, always seeking opportunities to deliver scalable solutions within dynamic, growth-driven teams.
              </p>
              
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-none"
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={profilePhoto}
                alt="Shubham Pathak"
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Floating illustration */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('projects')}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;