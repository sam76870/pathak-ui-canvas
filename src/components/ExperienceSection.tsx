
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "Mumbai, India",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React.js and Node.js. Mentoring junior developers and architecting solutions for enterprise clients.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Delivered projects serving 10,000+ users"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "TypeScript"]
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations Ltd",
      location: "Mumbai, India", 
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Developed full-stack applications using Vue.js and Express.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 15+ production applications",
        "Reduced deployment time by 60%",
        "Implemented CI/CD pipelines"
      ],
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker", "Jenkins"]
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      location: "Mumbai, India",
      duration: "2019 - 2020",
      type: "Full-time",
      description: "Started career focusing on frontend development with React.js. Gained experience in modern web development practices and agile methodologies.",
      achievements: [
        "Successfully completed 8 projects",
        "Learned full-stack development",
        "Contributed to open-source projects"
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"]
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
