import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "RealTime Analytics Dashboard",
      description: "A comprehensive real-time analytics platform built for enterprise clients, featuring interactive charts, live data streaming, and customizable widgets. Handles over 10,000 concurrent users with sub-second response times.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Chart.js", "Redis"],
      challenges: "Real-time data synchronization across multiple clients",
      impact: "Improved decision-making speed by 60% for client operations",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features including product recommendations, payment integration, inventory management, and admin dashboard. Built with modern UI/UX principles.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Stripe API", "JWT", "AWS S3"],
      challenges: "Scalable product catalog and secure payment processing",
      impact: "Increased client sales by 40% within first quarter",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management application with task tracking, team communication, file sharing, and progress visualization. Designed for remote teams and agile workflows.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Cloudinary", "JWT"],
      challenges: "Real-time collaboration and file management",
      impact: "Improved team productivity by 35% across multiple organizations",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Analytics App",
      description: "Modern weather application with detailed forecasts, interactive maps, and historical data analysis. Features beautiful animations and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
      technologies: ["React.js", "OpenWeather API", "Chart.js", "Tailwind CSS", "PWA"],
      challenges: "Data visualization and offline functionality",
      impact: "10,000+ monthly active users with 4.8-star rating",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of impactful applications I've built using modern technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-card-gradient border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-primary/90 hover:bg-primary text-primary-foreground">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="bg-background/90 hover:bg-background">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{project.challenges}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-accent mb-2">Impact:</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-foreground">Other Notable Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-xs text-accent font-medium">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
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
