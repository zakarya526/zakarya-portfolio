import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Smartphone, Globe, Zap, X } from "lucide-react";

const Projects = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const projects = [
    {
      id: "tripo",
      title: "Tripo",
      description: "A travel planning app for discovering and organizing trips with friends.",
      videoUrl: "https://player.vimeo.com/video/1126779222",
      tech: ["React Native", "TypeScript", "Supabase"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/Zakarya526/tripo",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "taste-of-peshawar",
      title: "Taste of Peshawar OMS - PRIVATE APP",
      description:
        "A beautifully designed restaurant app focused on real-time order management.",
      videoUrl: "https://player.vimeo.com/video/1102725533",
      tech: ["React Native", "TypeScript", "Supabase", "Stripe"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/Zakarya525/",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "mr-split",
      title: "Mr. Split",
      description:
        "A React Native app for splitting bills and managing expenses with friends.",
      videoUrl: "https://player.vimeo.com/video/1102881091",
      tech: [
        "React Native",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Google Login",
        "Github Login",
        "Apple Login",
      ],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/Zakarya525/mrsplit",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "mattermost",
      title: "Mattermost Mobile App",
      description:
        "Next generation iOS and Android Chat app built in React Native",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["React Native", "TypeScript", "websocket"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/Zakarya525/mattermost-mobile",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "health-vault",
      title: "Health Vault",
      description: "An appointment app for Patients and doctors",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["React Native", "TypeScript", "Node Js"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/Zakarya525/HealthVault",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "operation-track",
      title: "Operation Track",
      description:
        "It is an app for doctors within organisation to track the patients per day Across team",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["React Native", "TypeScript", "Firebase"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/Zakarya525/operationTrack",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "saas-dashboard",
      title: "SaaS Dashboard",
      description:
        "Modern Next.js 15 dashboard with advanced analytics, real-time data visualization, and multi-tenant architecture.",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["Next.js 15", "TypeScript", "MongoDB", "TailwindCSS"],
      type: "Web",
      icon: Globe,
      gradient: "from-accent to-accent-glow",
      githubUrl: "https://github.com/your-repo",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "performance-optimizer",
      title: "Performance Optimizer",
      description:
        "Java-based enterprise application that optimizes system performance through intelligent resource management.",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      type: "Backend",
      icon: Zap,
      gradient: "from-honey to-honey-dark",
      githubUrl: "https://github.com/your-repo",
      demoUrl: "https://example.com/demo",
    },
  ];

  const categories = useMemo(() => {
    const cats = new Set<string>(["All"]);
    projects.forEach((p) => cats.add(p.type));
    return Array.from(cats);
  }, [projects]);

  const filtered = projects.filter((p) => {
    const matchesCategory = category === "All" || p.type === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.join(" ").toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured{" "}
              <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing some of my recent work across mobile, web, and backend
              development. Each project represents a unique challenge and
              innovative solution.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          

            <div className="flex items-center gap-2 overflow-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-md text-sm border ${category === cat ? "bg-primary text-white border-primary" : "bg-card/40 text-foreground/90 border-border/40"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filtered.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in hover:border-primary/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  {project.id === 'taste-of-peshawar' && (
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="/screenshots/tasteofpeshawar.PNG" 
                        alt="Taste of Peshawar" 
                        className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {project.id === 'tripo' && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src="/screenshots/tripo.png"
                        alt="Tripo"
                        className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {project.id === 'mr-split' && (
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="/screenshots/mrsplit.png" 
                        alt="Mr Split" 
                        className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {project.id === 'mattermost' && (
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="/screenshots/mattermost.webp" 
                        alt="Mattermost" 
                        className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {project.id === 'health-vault' && (
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="/screenshots/healthvault.png" 
                        alt="Health Vault" 
                        className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {project.id === 'operation-track' && (
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="/screenshots/operationtract.png" 
                        alt="Operation Track" 
                        className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {!['taste-of-peshawar', 'mr-split', 'mattermost', 'health-vault', 'operation-track', 'tripo'].includes(project.id) && (
                    <div className="relative h-64">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-16 h-16 text-foreground/60 group-hover:text-primary" />
                      </div>
                    </div>
                  )}
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-border/50 z-10 backdrop-blur-sm">
                    {project.type}
                  </Badge>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
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
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full" disabled>
                        <Github className="w-4 h-4 mr-2 opacity-60" />
                        Private
                      </Button>
                    )}

                    <Dialog open={openModal === project.id} onOpenChange={(open) => setOpenModal(open ? project.id : null)}>
                      <DialogTrigger asChild>
                        <Button variant="hero" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden">
                        <DialogHeader className="p-4 border-b">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <div className="flex items-center gap-2">
                              {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <Button variant="ghost" size="sm">Open Demo</Button>
                                </a>
                              )}
                              <Button variant="ghost" size="sm" onClick={() => setOpenModal(null)}>
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="p-6 space-y-4">
                          <p className="text-muted-foreground">{project.description}</p>
                          {project.videoUrl && (
                            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
                              <iframe
                                src={project.videoUrl}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                            </div>
                          )}

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Tech</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((t) => (
                                <Badge key={t} variant="secondary" className="text-xs">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div
            className="text-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/Zakarya526?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                View All Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
