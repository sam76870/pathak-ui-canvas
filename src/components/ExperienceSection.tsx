import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "Jan 2022 - Present",
      type: "Full-time",
      description: [
        "Led development of real-time dashboard applications serving 10,000+ users daily",
        "Architected and implemented microservices using Node.js and MongoDB",
        "Optimized application performance resulting in 40% reduction in load times",
        "Mentored junior developers and established coding standards across the team"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "TypeScript", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      location: "Mumbai, India",
      duration: "Jun 2020 - Dec 2021",
      type: "Full-time",
      description: [
        "Built responsive web applications using Vue.js and Express.js",
        "Integrated RESTful APIs and implemented real-time features using WebSockets",
        "Collaborated with design team to deliver pixel-perfect UI implementations",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["Vue.js", "Express.js", "MySQL", "CSS3", "JavaScript", "Git"]
    },
    {
      title: "Junior Software Developer",
      company: "StartupTech",
      location: "Bangalore, India", 
      duration: "Aug 2019 - May 2020",
      type: "Full-time",
      description: [
        "Developed and maintained web applications using React.js",
        "Worked on database design and optimization for better performance",
        "Implemented responsive designs and cross-browser compatibility",
        "Gained experience in full software development lifecycle"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "HTML5", "CSS3", "JavaScript"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Delhi, India",
      duration: "2015 - 2019",
      gpa: "8.2/10",
      description: "Specialized in Software Engineering and Database Systems"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      location: "Delhi, India",
      duration: "2013 - 2015",
      gpa: "92%",
      description: "Science Stream with Mathematics, Physics, and Chemistry"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-foreground">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h4 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h4>
                      <div className="flex items-center text-primary font-semibold mb-2">
                        <span className="text-lg">{exp.company}</span>
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.duration}</span>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center text-foreground">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                  <div className="flex items-center text-primary font-semibold mb-2">
                    <span className="text-lg">{edu.institution}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {edu.gpa}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;