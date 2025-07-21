import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow relative">
            <img 
              src={profilePhoto} 
              alt="Shubham Pathak" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-md -z-10"></div>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Shubham Pathak
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Building Scalable, UI-Centric Apps with Modern Tech Stacks
        </p>

        {/* Quick Bio */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Motivated Software Engineer with 3.6+ years of experience in full-stack web development, 
          specializing in realtime dashboards and modern UI applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            <Github className="w-5 h-5 mr-2" />
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors">
            <Mail className="w-6 h-6" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <Button 
          variant="ghost" 
          size="icon"
          className="animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;