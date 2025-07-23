
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "SDE-1 (Consultant)",
      company: "Fynd (via Deqode)",
      location: "Mumbai, India",
      duration: "Mar 2025 - Present",
      type: "Full-time",
      description: "Contributing to key e-commerce products (AJIO, TIRA, Netmeds) on the Jio Commerce Platform, developing scalable frontends and implementing robust solutions.",
      achievements: [
        "Contributed to key e-commerce products (AJIO, TIRA, Netmeds) on the Jio Commerce Platform",
        "Developed scalable frontends using React, Vue 2, and custom theme engines (Jetfire, Skyfire)",
        "Implemented reusable UI components and advanced caching strategies",
        "Built microservice modules for payment gateways, store management, and API integrations",
        "Worked on backend/API layer integrations using Node.js and MongoDB"
      ],
      technologies: ["React.js", "Vue 2", "Node.js", "MongoDB", "Jetfire", "Skyfire"]
    },
    {
      title: "Software Engineer",
      company: "AVL India Pvt. Ltd.",
      location: "Pune, India",
      duration: "Nov 2021 - Dec 2024",
      type: "Full-time",
      description: "Designed and developed real-time monitoring systems, automation solutions, and enterprise applications using modern web technologies and IoT platforms.",
      achievements: [
        "Designed real-time dashboards for DAKSHIIOT using Angular, React, and Node.js",
        "Developed a Control Tower for system monitoring leveraging JavaScript, JCR, MQTT, and InfluxDB",
        "Implemented Digital Maintenance automation for engine reports with QR-based scanning",
        "Built SPAs with robust UI/UX principles and integrated cloud databases (MS SQL Server, JCR)"
      ],
      technologies: ["Angular", "React.js", "Node.js", "JavaScript", "JCR", "MQTT", "InfluxDB", "MS SQL Server"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3.6+ years of professional experience in software development, working with modern technologies and delivering impactful solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Timeline */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <CalendarDays className="w-4 h-4" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
