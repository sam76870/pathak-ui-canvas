import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Zap, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern technologies like React.js, Vue.js, Node.js, and MongoDB.",
      features: [
        "Custom web application development",
        "RESTful API design and implementation", 
        "Database architecture and optimization",
        "Code review and optimization"
      ],
      color: "bg-blue-500/10 text-blue-600",
      borderColor: "border-blue-500/20"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with live data visualization, perfect for analytics and monitoring applications.",
      features: [
        "Real-time data synchronization",
        "Interactive charts and visualizations",
        "Custom dashboard widgets",
        "Performance monitoring tools"
      ],
      color: "bg-purple-500/10 text-purple-600",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Palette,
      title: "UI/UX Design & Implementation",
      description: "Modern, responsive user interfaces with focus on user experience and accessibility principles.",
      features: [
        "Responsive design implementation",
        "UI component libraries",
        "Cross-browser compatibility",
        "Accessibility optimization"
      ],
      color: "bg-pink-500/10 text-pink-600",
      borderColor: "border-pink-500/20"
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description: "Robust API development with Node.js and seamless integration with third-party services.",
      features: [
        "RESTful API development",
        "GraphQL implementation",
        "Third-party API integration",
        "API documentation and testing"
      ],
      color: "bg-green-500/10 text-green-600",
      borderColor: "border-green-500/20"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "System performance analysis and optimization for faster, more efficient applications.",
      features: [
        "Code optimization and refactoring",
        "Database query optimization",
        "Load time reduction strategies",
        "Performance monitoring setup"
      ],
      color: "bg-yellow-500/10 text-yellow-600",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Responsive web applications that work seamlessly across all devices and screen sizes.",
      features: [
        "Progressive Web Apps (PWA)",
        "Mobile-responsive design",
        "Touch-friendly interfaces",
        "Offline functionality"
      ],
      color: "bg-indigo-500/10 text-indigo-600",
      borderColor: "border-indigo-500/20"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and technical specifications"
    },
    {
      number: "02", 
      title: "Design & Architecture",
      description: "Creating wireframes, system architecture, and technical roadmap"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance"
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Production deployment with ongoing maintenance and support"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 bg-card-gradient border-border/50 ${service.borderColor} hover:border-opacity-50`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-foreground">My Development Process</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to deliver high-quality solutions on time and within budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Project?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with modern, scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;