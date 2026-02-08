import { useState, useMemo, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowUpRight, X, Star, Sparkles } from "lucide-react";

const projects = [
  {
    id: "taste-of-peshawar",
    title: "Taste of Peshawar OMS",
    description:
      "Real-time restaurant order management system with live kitchen-to-delivery tracking, WebSocket updates, and an optimized ordering flow handling 500+ daily orders.",
    longDescription:
      "Built a full-stack order management system for a restaurant chain. Features include real-time kitchen display, delivery tracking with map integration, automated order routing, and comprehensive analytics dashboard.",
    image: "/screenshots/tasteofpeshawar.PNG",
    videoUrl: "https://player.vimeo.com/video/1102725533",
    tech: ["Next.js", "Supabase", "WebSockets", "Tailwind CSS"],
    type: "Web",
    color: "blue",
    githubUrl: "https://github.com/zakarya526/taste-of-peshawar",
    demoUrl: "https://example.com/demo",
    featured: true,
  },
  {
    id: "mr-split",
    title: "Mr. Split",
    description:
      "Cross-platform expense splitting app with real-time syncing, push notifications, and intelligent bill parsing. Built for seamless group expense management.",
    longDescription:
      "A polished mobile app that makes splitting bills effortless. Uses OCR for receipt scanning, supports multiple currencies, and features smart settlement algorithms to minimize transactions.",
    image: "/screenshots/mrsplit.png",
    videoUrl: "https://player.vimeo.com/video/1102881091",
    tech: ["React Native", "Firebase", "Node.js"],
    type: "Mobile",
    color: "violet",
    githubUrl: "https://github.com/zakarya526/mrsplit",
    demoUrl: "https://example.com/demo",
    featured: true,
  },
  {
    id: "tripo",
    title: "Tripo",
    description:
      "Experimental liquid-glass morphism transitions built with React Native 0.82's new architecture. Pushing the boundaries of mobile animation.",
    longDescription:
      "An experimental playground showcasing the new React Native architecture capabilities. Features 120fps glass morphism transitions, shared element animations, and gesture-driven fluid interactions.",
    image: "/screenshots/tripo.png",
    videoUrl: "https://player.vimeo.com/video/1126779222",
    tech: ["React Native 0.82", "TypeScript", "Reanimated"],
    type: "Mobile",
    color: "pink",
    githubUrl: "https://github.com/zakarya526/tripo",
    demoUrl: "https://example.com/demo",
  },
  {
    id: "operation-track",
    title: "Operation Track",
    description:
      "Enterprise health-tracking platform managing doctor workflows, surgical reports, and patient data with role-based access and real-time dashboards.",
    longDescription:
      "A HIPAA-aware enterprise platform for hospital operations management. Tracks surgical workflows end-to-end, from pre-op assessments through post-op monitoring, with multi-role access control.",
    image: "/screenshots/operationtract.png",
    videoUrl: "",
    tech: ["Next.js", "Prisma", "PostgreSQL", "tRPC"],
    type: "Web",
    color: "emerald",
    githubUrl: "https://github.com/zakarya526/operationtrack",
    demoUrl: "https://example.com/demo",
  },
  {
    id: "mattermost",
    title: "Mattermost Mobile",
    description:
      "Contributed to the open-source Mattermost React Native app — performance optimization, WebSocket reliability, and cross-platform UI consistency for 2M+ users.",
    longDescription:
      "Open-source contributions to the Mattermost mobile client used by 2M+ users. Focused on WebSocket connection reliability, message rendering performance, and unified cross-platform UI behaviors.",
    image: "/screenshots/mattermost.webp",
    videoUrl: "",
    tech: ["React Native", "TypeScript", "WebSockets"],
    type: "Mobile",
    color: "indigo",
    githubUrl: "https://github.com/zakarya526/mattermost-mobile",
    demoUrl: "https://example.com/demo",
  },
  {
    id: "health-vault",
    title: "Health Vault",
    description:
      "Patient-doctor appointment platform with real-time booking, medical record management, and push notification reminders.",
    longDescription:
      "A comprehensive healthcare appointment platform. Features intelligent scheduling, secure medical record storage, prescription tracking, and automated appointment reminders via push notifications.",
    image: "/screenshots/healthvault.png",
    videoUrl: "",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    type: "Mobile",
    color: "amber",
    githubUrl: "https://github.com/zakarya526/HealthVault",
    demoUrl: "https://example.com/demo",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Beautiful weather application with dynamic backgrounds, 7-day forecasts, location-based alerts, and smooth animated transitions between weather states.",
    longDescription:
      "A visually rich weather app featuring dynamic gradient backgrounds that change with weather conditions, location-based forecasts, severe weather alerts, and buttery-smooth animated transitions.",
    image: "/screenshots/weatherapp.PNG",
    videoUrl: "",
    tech: ["React Native", "Weather API", "Reanimated"],
    type: "Mobile",
    color: "cyan",
    githubUrl: "https://github.com/zakarya526/weather-app",
    demoUrl: "https://example.com/demo",
  },
  {
    id: "chatly",
    title: "Chatly",
    description:
      "Real-time messaging app with end-to-end encryption, typing indicators, read receipts, and media sharing — supporting 1-on-1 and group conversations.",
    longDescription:
      "A full-featured chat application built from scratch. Implements end-to-end encryption using the Signal protocol, supports image/video sharing with compression, voice messages, and real-time presence indicators via WebSockets.",
    image: "",
    videoUrl: "",
    tech: ["React Native", "Firebase", "WebSockets", "TypeScript"],
    type: "Mobile",
    color: "blue",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "invoice-hub",
    title: "Invoice Hub",
    description:
      "SaaS invoicing platform with PDF generation, recurring billing, Stripe integration, and a client portal for payment tracking.",
    longDescription:
      "A complete invoicing solution for freelancers and small businesses. Automates recurring invoices, generates branded PDFs, integrates with Stripe for payments, and provides a client-facing portal with payment history and downloadable receipts.",
    image: "",
    videoUrl: "",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    type: "Web",
    color: "emerald",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "fitlog",
    title: "FitLog",
    description:
      "Fitness tracking app with workout logging, progress charts, custom routines, and Apple Health / Google Fit sync for holistic health data.",
    longDescription:
      "A comprehensive fitness companion app with custom workout builder, exercise library with animations, progress tracking with interactive charts, body measurement logs, and native health kit integration for syncing steps, calories, and heart rate data.",
    image: "",
    videoUrl: "",
    tech: ["React Native", "Reanimated", "SQLite", "HealthKit"],
    type: "Mobile",
    color: "pink",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "devboard",
    title: "DevBoard",
    description:
      "Developer analytics dashboard aggregating GitHub, Jira, and Slack data into unified productivity metrics with team leaderboards.",
    longDescription:
      "An internal tool that pulls data from GitHub (commits, PRs, reviews), Jira (sprint velocity, ticket throughput), and Slack (response times) to generate unified developer productivity dashboards. Features team comparisons, trend analysis, and weekly digest emails.",
    image: "",
    videoUrl: "",
    tech: ["Next.js", "tRPC", "Chart.js", "GitHub API"],
    type: "Web",
    color: "indigo",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "quicknote",
    title: "QuickNote",
    description:
      "Minimal note-taking app with markdown support, offline-first sync, folder organization, and lightning-fast full-text search.",
    longDescription:
      "A distraction-free notes app designed for speed. Supports full markdown with live preview, organizes notes into nested folders with tags, works completely offline with background sync via CRDTs for conflict-free multi-device usage, and features instant full-text search powered by SQLite FTS.",
    image: "",
    videoUrl: "",
    tech: ["React Native", "SQLite", "TypeScript", "CRDT"],
    type: "Mobile",
    color: "amber",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description:
      "The site you're viewing — a performance-first dark portfolio with scroll-driven animations, glass morphism, and obsidian-grade visual polish.",
    longDescription:
      "A meticulously crafted portfolio site built for speed and visual impact. Features custom scroll-driven animations, noise textures, gradient mesh backgrounds, and a fully responsive obsidian dark theme.",
    image: "",
    videoUrl: "",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    type: "Web",
    color: "purple",
    githubUrl: "https://github.com/zakarya526/zakarya-portfolio",
    demoUrl: "",
  },
];

const colorMap: Record<string, { gradient: string; border: string; glow: string; badge: string; text: string }> = {
  blue: {
    gradient: "from-blue-500/20 via-blue-400/5 to-cyan-500/10",
    border: "group-hover:border-blue-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    text: "group-hover:text-blue-400",
  },
  violet: {
    gradient: "from-violet-500/20 via-violet-400/5 to-purple-500/10",
    border: "group-hover:border-violet-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    text: "group-hover:text-violet-400",
  },
  pink: {
    gradient: "from-pink-500/20 via-pink-400/5 to-rose-500/10",
    border: "group-hover:border-pink-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.08)]",
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    text: "group-hover:text-pink-400",
  },
  emerald: {
    gradient: "from-emerald-500/20 via-emerald-400/5 to-teal-500/10",
    border: "group-hover:border-emerald-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    text: "group-hover:text-emerald-400",
  },
  indigo: {
    gradient: "from-indigo-500/20 via-indigo-400/5 to-blue-500/10",
    border: "group-hover:border-indigo-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    text: "group-hover:text-indigo-400",
  },
  amber: {
    gradient: "from-amber-500/20 via-amber-400/5 to-orange-500/10",
    border: "group-hover:border-amber-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    text: "group-hover:text-amber-400",
  },
  cyan: {
    gradient: "from-cyan-500/20 via-cyan-400/5 to-teal-500/10",
    border: "group-hover:border-cyan-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    text: "group-hover:text-cyan-400",
  },
  purple: {
    gradient: "from-purple-500/20 via-purple-400/5 to-violet-500/10",
    border: "group-hover:border-purple-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    text: "group-hover:text-purple-400",
  },
};

const Projects = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [category, setCategory] = useState("All");
  const { ref, isInView } = useInView(0.05);

  const categories = useMemo(() => {
    const cats = new Set<string>(["All"]);
    projects.forEach((p) => cats.add(p.type));
    return Array.from(cats);
  }, []);

  const filtered = projects.filter(
    (p) => category === "All" || p.type === category
  );

  const featuredProjects = filtered.filter((p) => p.featured);
  const regularProjects = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={ref} className={cn("reveal mb-14", isInView && "visible")}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-primary text-sm font-medium font-heading tracking-wide uppercase">
                Work
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                  Featured{" "}
                  <span className="text-gradient-blue">Projects</span>
                </h2>
                <p className="text-muted-foreground text-sm mt-3 max-w-md">
                  A selection of projects I've built — from production apps serving thousands to experimental prototypes.
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 relative",
                      category === cat
                        ? "bg-primary/10 text-primary shadow-[0_0_12px_rgba(59,130,246,0.1)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                    )}
                  >
                    {cat}
                    {category === cat && (
                      <span className="absolute inset-0 rounded-lg border border-primary/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects — Hero Cards */}
          {featuredProjects.length > 0 && (
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {featuredProjects.map((project, index) => {
                const colors = colorMap[project.color];
                return (
                  <div
                    key={project.id}
                    className={cn("reveal group", isInView && "visible")}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div
                      className={cn(
                        "relative h-full rounded-2xl border border-white/[0.04] bg-white/[0.02] overflow-hidden transition-all duration-500",
                        colors.border,
                        colors.glow
                      )}
                    >
                      {/* Featured badge */}
                      <div className="absolute top-3 left-3 z-20">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 backdrop-blur-sm border border-primary/20">
                          <Star className="w-3 h-3 text-primary fill-primary" />
                          <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40", colors.gradient)} />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(228,14%,3%)] via-[hsl(228,14%,3%)/0.2] to-transparent" />

                        {/* Type badge */}
                        <div className="absolute top-3 right-3 z-20">
                          <Badge className={cn("text-[11px] border backdrop-blur-sm", colors.badge)}>
                            {project.type}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-3">
                        <h3
                          className={cn(
                            "text-lg font-heading font-semibold text-foreground transition-colors duration-300",
                            colors.text
                          )}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] text-muted-foreground border border-white/[0.04]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          {project.githubUrl ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button variant="outline" size="sm" className="w-full text-xs">
                                <Github className="w-3.5 h-3.5 mr-1.5" />
                                Source
                              </Button>
                            </a>
                          ) : (
                            <Button variant="outline" size="sm" className="flex-1 text-xs" disabled>
                              <Github className="w-3.5 h-3.5 mr-1.5 opacity-50" />
                              Private
                            </Button>
                          )}
                          <Dialog
                            open={openModal === project.id}
                            onOpenChange={(open) => setOpenModal(open ? project.id : null)}
                          >
                            <DialogTrigger asChild>
                              <Button variant="hero" size="sm" className="flex-1 text-xs">
                                <ArrowUpRight className="w-3.5 h-3.5 mr-1.5" />
                                Preview
                              </Button>
                            </DialogTrigger>
                            <ProjectModal project={project} onClose={() => setOpenModal(null)} />
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Regular Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularProjects.map((project, index) => {
              const colors = colorMap[project.color];
              return (
                <div
                  key={project.id}
                  className={cn("reveal group", isInView && "visible")}
                  style={{
                    transitionDelay: `${(index + featuredProjects.length + 1) * 100}ms`,
                  }}
                >
                  <ProjectCard
                    project={project}
                    colors={colors}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                </div>
              );
            })}
          </div>

          {/* Stats + CTA */}
          <div
            className={cn(
              "reveal reveal-delay-4 mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-5 rounded-2xl border border-white/[0.04] bg-white/[0.015]",
              isInView && "visible"
            )}
          >
            <div className="flex items-center gap-8">
              <div className="text-center sm:text-left">
                <p className="text-2xl font-heading font-bold text-foreground">{projects.length}+</p>
                <p className="text-xs text-muted-foreground">Projects Built</p>
              </div>
              <div className="w-px h-8 bg-white/[0.06]" />
              <div className="text-center sm:text-left">
                <p className="text-2xl font-heading font-bold text-foreground">
                  {new Set(projects.flatMap((p) => p.tech)).size}+
                </p>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>
              <div className="w-px h-8 bg-white/[0.06] hidden sm:block" />
              <div className="text-center sm:text-left hidden sm:block">
                <p className="text-2xl font-heading font-bold text-foreground">2M+</p>
                <p className="text-xs text-muted-foreground">Users Impacted</p>
              </div>
            </div>
            <a
              href="https://github.com/Zakarya526?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group/btn">
                View All on GitHub
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

/* ─── Project Card (regular) ─── */
const ProjectCard = ({
  project,
  colors,
  openModal,
  setOpenModal,
}: {
  project: (typeof projects)[number];
  colors: (typeof colorMap)[string];
  openModal: string | null;
  setOpenModal: (id: string | null) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative h-full rounded-2xl border border-white/[0.04] bg-white/[0.02] overflow-hidden transition-all duration-500",
        colors.border,
        colors.glow
      )}
    >
      {/* Spotlight follow effect */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 60%)`,
          }}
        />
      )}

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", colors.gradient)} />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(228,14%,3%)] via-transparent to-transparent" />

        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <Badge className={cn("text-[11px] border backdrop-blur-sm", colors.badge)}>
            {project.type}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 space-y-2.5">
        <h3
          className={cn(
            "text-base font-heading font-semibold text-foreground transition-colors duration-300",
            colors.text
          )}
        >
          {project.title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] text-muted-foreground border border-white/[0.04]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium text-muted-foreground/60">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1.5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" size="sm" className="w-full text-xs h-8">
                <Github className="w-3 h-3 mr-1.5" />
                Source
              </Button>
            </a>
          ) : (
            <Button variant="outline" size="sm" className="flex-1 text-xs h-8" disabled>
              <Github className="w-3 h-3 mr-1.5 opacity-50" />
              Private
            </Button>
          )}
          {project.videoUrl || project.image ? (
            <Dialog
              open={openModal === project.id}
              onOpenChange={(open) => setOpenModal(open ? project.id : null)}
            >
              <DialogTrigger asChild>
                <Button variant="hero" size="sm" className="flex-1 text-xs h-8">
                  <ArrowUpRight className="w-3 h-3 mr-1.5" />
                  Preview
                </Button>
              </DialogTrigger>
              <ProjectModal project={project} onClose={() => setOpenModal(null)} />
            </Dialog>
          ) : (
            <Button variant="hero" size="sm" className="flex-1 text-xs h-8" disabled>
              <ArrowUpRight className="w-3 h-3 mr-1.5 opacity-50" />
              Preview
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Project Modal ─── */
const ProjectModal = ({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) => {
  const colors = colorMap[project.color];
  return (
    <DialogContent className="max-w-3xl p-0 bg-card border-white/[0.06] overflow-hidden">
      <DialogHeader className="p-5 border-b border-white/[0.06]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center border",
                colors.badge
              )}
            >
              {project.type === "Mobile" ? (
                <span className="text-sm">📱</span>
              ) : (
                <span className="text-sm">🌐</span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.type} Application
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </DialogHeader>
      <div className="p-5 space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.longDescription || project.description}
        </p>
        {project.videoUrl && (
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-white/[0.06]">
            <iframe
              src={project.videoUrl}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
            />
          </div>
        )}
        {!project.videoUrl && project.image && (
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        )}
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge
                key={t}
                className="bg-white/5 text-foreground border-white/10 text-xs"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
        {project.githubUrl && (
          <div className="pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="text-xs">
                <Github className="w-3.5 h-3.5 mr-1.5" />
                View on GitHub
                <ExternalLink className="w-3 h-3 ml-1.5" />
              </Button>
            </a>
          </div>
        )}
      </div>
    </DialogContent>
  );
};

export default Projects;
