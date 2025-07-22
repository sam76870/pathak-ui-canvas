
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
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "HTML5/CSS3", level: 90, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "MongoDB", level: 75, color: "bg-green-700" },
        { name: "PostgreSQL", level: 70, color: "bg-blue-700" },
        { name: "REST APIs", level: 85, color: "bg-purple-500" },
        { name: "GraphQL", level: 65, color: "bg-pink-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-700" },
        { name: "Docker", level: 70, color: "bg-blue-600" },
        { name: "Jenkins", level: 65, color: "bg-red-600" },
        { name: "Jest", level: 75, color: "bg-red-500" },
        { name: "Webpack", level: 70, color: "bg-blue-400" },
        { name: "Vite", level: 80, color: "bg-purple-600" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 70, color: "bg-orange-600" },
        { name: "Redis", level: 65, color: "bg-red-700" },
        { name: "Socket.io", level: 80, color: "bg-gray-800" },
        { name: "CI/CD", level: 70, color: "bg-indigo-500" },
        { name: "Nginx", level: 60, color: "bg-green-800" },
        { name: "PM2", level: 65, color: "bg-blue-800" }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "MongoDB Certified Developer",
    "React.js Professional Certificate",
    "Node.js Application Developer"
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

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
