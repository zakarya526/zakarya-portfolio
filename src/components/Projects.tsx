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
      id: "taste-of-peshawar",
      title: "Taste of Peshawar OMS",
      description:
        "Designed and developed a real-time restaurant order management system with smooth UI/UX and live updates across the kitchen and delivery staff.",
      videoUrl: "https://player.vimeo.com/video/1102725533",
      tech: ["Next.js", "Supabase", "WebSockets"],
      type: "Web",
      icon: Globe,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/zakarya526/taste-of-peshawar",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "mr-split",
      title: "Mr. Split",
      description:
        "Built a mobile app to split bills and manage shared expenses among friends using React Native and Firebase with real-time syncing and notifications.",
      videoUrl: "https://player.vimeo.com/video/1102881091",
      tech: ["React Native", "Firebase", "Node.js"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/zakarya526/mrsplit",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "operation-track",
      title: "Operation Track",
      description:
        "Enterprise health-tracking web app for managing doctor workflows and reports, improving workflow visibility.",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      type: "Web",
      icon: Globe,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/zakarya526/operationtrack",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "weather-app",
      title: "Weather App",
      description:
        "Created a Real-Time Weather Application for any location in the World with beautiful UI and accurate forecasts.",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["React", "JavaScript", "Weather API"],
      type: "Web",
      icon: Globe,
      gradient: "from-accent to-accent-glow",
      githubUrl: "https://github.com/zakarya526/weather-app",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "mattermost",
      title: "Mattermost Mobile App",
      description:
        "Contributed to the next-generation React Native chat app for Mattermost, enhancing cross-platform performance.",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["React Native", "TypeScript", "WebSockets"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/zakarya526/mattermost-mobile",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "tripo",
      title: "Tripo",
      description: "Experimental exploration of a liquid-glass transition in React Native with React Native 0.82.",
      videoUrl: "https://player.vimeo.com/video/1126779222",
      tech: ["React Native 0.82", "TypeScript"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/zakarya526/tripo",
      demoUrl: "https://example.com/demo",
    },
    {
      id: "ai-product",
      title: "AI Product Development",
      description:
        "Delivered AI-driven solutions with improved scalability and reduced development time through automation and code generation.",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["Next.js", "LangChain", "OpenAI"],
      type: "Web",
      icon: Globe,
      gradient: "from-honey to-honey-dark",
      githubUrl: undefined,
      demoUrl: "https://example.com/demo",
    },
    {
      id: "health-vault",
      title: "Health Vault",
      description: "An appointment app for Patients and doctors with seamless booking and management.",
      videoUrl: "https://player.vimeo.com/video/ANOTHER_VIDEO_ID",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      type: "Mobile",
      icon: Smartphone,
      gradient: "from-primary to-primary-glow",
      githubUrl: "https://github.com/zakarya526/HealthVault",
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
                  {!['taste-of-peshawar', 'mr-split', 'operation-track', 'mattermost', 'tripo', 'health-vault'].includes(project.id) && (
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
