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
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-sm text-muted-foreground mb-2">MY CLIENT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projects
            </h2>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="w-12 h-12 bg-primary/10 hover:bg-primary/20">
              <span className="text-primary">←</span>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90">
              <span>→</span>
            </Button>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description.slice(0, 120)}...
                </p>
                
                <div className="flex gap-2 mb-4">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-3 py-1 h-7 rounded-none">
                    VIEW PROJECT
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Happy Clients Says</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border/50 p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Martha Suthland</h4>
                    <p className="text-sm text-muted-foreground mb-3">Tech Director</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "We are amazed by the dedication of your teams. All your hard work is paid and we really appreciate your efforts to improve the project and appreciate you providing clear and concise solutions..."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 p-6">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Minhiel Meyer</h4>
                    <p className="text-sm text-muted-foreground mb-3">Product Manager</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "We are amazed by the dedication of your teams. All your hard work is paid and we really appreciate your efforts to improve the project and appreciate you providing clear and concise solutions..."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Clients</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Decisive", logo: "D" },
              { name: "BigFish", logo: "BF" },
              { name: "Loyalist", logo: "L" },
              { name: "Subscription", logo: "S" },
              { name: "Symphony", logo: "♪" },
              { name: "BeGX", logo: "B" }
            ].map((client, index) => (
              <Card key={index} className="bg-card border-border/50 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="font-bold text-lg text-foreground">{client.logo}</div>
                  <div className="text-xs text-muted-foreground">{client.name}</div>
                </div>
              </Card>
            ))}
          </div>
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
