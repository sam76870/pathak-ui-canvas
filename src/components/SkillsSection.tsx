import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe,
  GitBranch,
  Settings
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 78 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 72 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Webpack", level: 80 },
        { name: "Jest/Testing", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "Agile/Scrum", level: 88 }
      ]
    }
  ];

  const expertise = [
    {
      icon: Globe,
      title: "Realtime Applications",
      description: "Building interactive dashboards with real-time data synchronization"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating responsive, user-centric interfaces with modern design principles"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Developing responsive applications that work seamlessly across all devices"
    },
    {
      icon: GitBranch,
      title: "System Architecture",
      description: "Designing scalable, maintainable system architectures for large-scale applications"
    }
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
            Technologies and methodologies I use to build exceptional products
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Areas of Expertise */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-8 text-foreground">Areas of Expertise</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((area, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <area.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">{area.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;