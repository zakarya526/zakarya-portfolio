import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured React Native e-commerce app with real-time inventory, secure payments, and seamless user experience.",
      image: "/placeholder.svg",
      tech: ["React Native", "TypeScript", "Firebase", "Stripe"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "SaaS Dashboard",
      description: "Modern Next.js 15 dashboard with advanced analytics, real-time data visualization, and multi-tenant architecture.",
      image: "/placeholder.svg", 
      tech: ["Next.js 15", "TypeScript", "MongoDB", "TailwindCSS"],
      type: "Web",
      icon: Globe,
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "Performance Optimizer",
      description: "Java-based enterprise application that optimizes system performance through intelligent resource management.",
      image: "/placeholder.svg",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      type: "Backend",
      icon: Zap,
      gradient: "from-honey to-honey-dark"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing some of my recent work across mobile, web, and backend development.
              Each project represents a unique challenge and innovative solution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-foreground/60" />
                  </div>
                  <Badge 
                    className="absolute top-4 right-4 bg-background/90 text-foreground border-border/50"
                  >
                    {project.type}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="hero" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
            <Button variant="hero" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;