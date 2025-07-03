import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Mobile Apps", "Web Apps", "Business", "Open Source"];
  
  const projects = [
    {
      title: "E-Commerce Mobile App",
      category: "Mobile Apps",
      description: "Complete React Native e-commerce solution with payment integration, real-time inventory, and push notifications. Serving 50K+ active users.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase"],
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Al Sarih Organics Platform",
      category: "Business", 
      description: "Complete digital ecosystem for organic food business including inventory management, customer portal, and analytics dashboard.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS", "TypeScript"],
      image: "/api/placeholder/400/250",
      demo: "https://alsarih.com",
      featured: true
    },
    {
      title: "Healthcare Management System",
      category: "Mobile Apps",
      description: "HIPAA-compliant mobile app for patient management, appointment scheduling, and telemedicine integration.",
      technologies: ["React Native", "Express.js", "MongoDB", "Socket.io", "JWT"],
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real Estate CRM",
      category: "Web Apps",
      description: "Comprehensive CRM solution for real estate professionals with lead management, property listings, and automated workflows.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      image: "/api/placeholder/400/250",
      demo: "https://demo.com"
    },
    {
      title: "React Native UI Kit",
      category: "Open Source",
      description: "Comprehensive UI component library for React Native with 50+ customizable components and dark mode support.",
      technologies: ["React Native", "TypeScript", "Storybook", "Jest"],
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://storybook.com"
    },
    {
      title: "Food Delivery App",
      category: "Mobile Apps", 
      description: "Full-stack food delivery platform with real-time tracking, payment integration, and restaurant management dashboard.",
      technologies: ["React Native", "Express.js", "MongoDB", "Socket.io", "Stripe"],
      image: "/api/placeholder/400/250",
      github: "https://github.com"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, from mobile apps that scale to business platforms that drive growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "hero" : "outline"}
              onClick={() => setFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {filter === "All" && (
          <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Featured Work</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <Card 
                  key={project.title}
                  className="group hover:shadow-glow transition-all duration-500 border-border/50 bg-gradient-card overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-hero opacity-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📱</div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-honey text-foreground">Featured</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="accent" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {filter !== "All" && (
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-hero bg-clip-text text-transparent">{filter}</span>
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border/50 bg-card/50"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-hero opacity-5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-30">
                      {project.category === "Mobile Apps" ? "📱" : 
                       project.category === "Web Apps" ? "💻" :
                       project.category === "Business" ? "🏢" : "🔧"}
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-honey text-foreground text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="accent" size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-hero p-8 text-center border-0 shadow-glow">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Let's discuss your next project and create something that makes a real impact.
              </p>
              <Button variant="honey" size="lg" asChild>
                <a href="/contact">Start a Project</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;