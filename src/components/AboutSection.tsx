import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Zap, Target, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in end-to-end web application development with modern frameworks"
    },
    {
      icon: Zap,
      title: "Performance Optimization", 
      description: "Passionate about improving system performance and scalability"
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Always seeking opportunities to innovate and deliver impactful solutions"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Thrives in dynamic, growth-driven teams and collaborative environments"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a <strong className="text-foreground">motivated Software Engineer</strong> with over 
                <strong className="text-primary"> 3.6 years of experience</strong> specializing in full-stack 
                web development, realtime dashboards, and modern UI applications.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My passion lies in building <strong className="text-foreground">impactful, large-scale products</strong> 
                that drive innovation and deliver value. I work with cutting-edge technologies like 
                <strong className="text-primary"> React.js, Vue.js, Node.js, and MongoDB</strong>, always 
                seeking opportunities to optimize systems and create scalable solutions.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I thrive in <strong className="text-foreground">dynamic, growth-driven teams</strong> where 
                collaboration and continuous learning are valued. My goal is to contribute to products that 
                make a real difference while staying at the forefront of technological advancement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Code className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React.js', 'Vue.js', 'Node.js', 'MongoDB', 'TypeScript', 'JavaScript', 'CSS3', 'HTML5'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;