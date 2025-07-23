
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Angular", level: 85 },
        { name: "Vue 2", level: 80 },
        { name: "Material UI", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 70 },
        { name: "Next.js", level: 75 },
        { name: "Redux", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "SQL Server", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/Version Control", level: 90 },
        { name: "JCR", level: 75 },
        { name: "MQTT", level: 80 },
        { name: "InfluxDB", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Jio Commerce Platform", level: 85 }
      ]
    }
  ];

  const coreCompetencies = [
    "Responsive Design",
    "Front-End Frameworks", 
    "UI/UX Design",
    "Version Control Systems (Git)",
    "API Integration",
    "Web Performance Optimization",
    "Testing Frameworks",
    "Agile/Scrum Methodologies",
    "Progressive Web Applications (PWA)"
  ];

  const highlights = [
    "Awarded for top position in academic qualifications at the university level",
    "Qualified for CODEKAZE 2019 (national coding event by Coding Ninjas)",
    "Participated in a website design competition organized by DEVSTART"
  ];

  const softSkills = [
    "Strong Communication",
    "Problem Solving", 
    "Negotiation",
    "Collaboration",
    "Leadership"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skills acquired through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {competency}
              </Badge>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Highlights</h3>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
