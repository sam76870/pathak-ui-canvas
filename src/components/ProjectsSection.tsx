
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: "Food Web App",
      description: "Engineered a full-stack food ordering platform with user review features, diverse meal plans, and intuitive login/signup for streamlined user account management. Focused on optimizing UX through thoughtful design and smooth navigation.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      challenges: "User experience optimization and meal plan curation",
      impact: "Curated diverse meal plans to accommodate various culinary preferences",
      liveUrl: "https://food-web-app-demo.netlify.app",
      githubUrl: "https://github.com/shubhampathak/food-web-app",
      featured: true
    },
    {
      title: "Reels Web App",
      description: "Designed and developed a video-sharing app with features for upload, likes, and comments. Implemented Firebase for real-time database syncing and management with seamless user interaction.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Material UI"],
      challenges: "Real-time video streaming and user engagement features",
      impact: "Real-time database syncing with smooth video upload experience",
      liveUrl: "https://reels-web-app-demo.netlify.app",
      githubUrl: "https://github.com/shubhampathak/reels-web-app",
      featured: true
    },
    {
      title: "DAKSHIIOT Dashboard",
      description: "Real-time IoT monitoring dashboard with data visualization, system alerts, and comprehensive analytics for industrial applications. Built for enterprise-level monitoring and control.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      technologies: ["Angular", "React", "Node.js", "MQTT", "InfluxDB"],
      challenges: "Real-time IoT data processing and visualization",
      impact: "Enhanced industrial monitoring with real-time data insights",
      liveUrl: "https://dakshiiot-dashboard-demo.netlify.app",
      githubUrl: "https://github.com/shubhampathak/dakshiiot-dashboard",
      featured: false
    },
    {
      title: "Control Tower System",
      description: "System monitoring platform leveraging JavaScript, JCR, MQTT, and InfluxDB for real-time industrial equipment tracking and maintenance with comprehensive reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      technologies: ["JavaScript", "JCR", "MQTT", "InfluxDB", "Node.js"],
      challenges: "Industrial equipment monitoring and maintenance automation",
      impact: "Streamlined industrial maintenance with automated reporting",
      liveUrl: "https://control-tower-demo.netlify.app",
      githubUrl: "https://github.com/shubhampathak/control-tower",
      featured: false
    },
    {
      title: "Digital Maintenance System",
      description: "QR-based scanning automation system for engine reports and digital maintenance workflows with comprehensive reporting features and automated data collection.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop&crop=center",
      technologies: ["JavaScript", "QR Scanner", "Node.js", "MS SQL Server"],
      challenges: "QR-based automation and digital workflow management",
      impact: "Automated engine report generation with QR-based scanning",
      liveUrl: "https://digital-maintenance-demo.netlify.app",
      githubUrl: "https://github.com/shubhampathak/digital-maintenance",
      featured: false
    },
    {
      title: "E-Commerce Platform Components",
      description: "Scalable frontend components and microservice modules for payment gateways, store management, and API integrations on Jio Commerce Platform (AJIO, TIRA, Netmeds).",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Vue 2", "Jetfire", "Skyfire", "Node.js", "MongoDB"],
      challenges: "Scalable e-commerce components and microservice architecture",
      impact: "Enhanced e-commerce platform performance with reusable components",
      liveUrl: "https://ecommerce-components-demo.netlify.app",
      githubUrl: "https://github.com/shubhampathak/ecommerce-components",
      featured: false
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = [
    projects[currentProjectIndex],
    projects[(currentProjectIndex + 1) % projects.length],
    projects[(currentProjectIndex + 2) % projects.length]
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-sm text-muted-foreground mb-2">MY CLIENT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projects
            </h2>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={prevProject}
              className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={nextProject}
              className="w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visibleProjects.map((project, index) => (
            <Card key={`${currentProjectIndex}-${index}`} className="group hover:shadow-lg transition-all duration-300 bg-card border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-primary-foreground" />
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description.slice(0, 120)}...
                </p>
                
                <div className="flex gap-2 mb-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3 py-1 h-7 rounded-none">
                      <Github className="w-3 h-3 mr-1" />
                      VIEW PROJECT
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
