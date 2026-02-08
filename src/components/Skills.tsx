import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile",
    color: "text-violet-400",
    borderColor: "border-violet-500/20",
    skills: ["React Native", "Expo", "iOS", "Android", "Cross-Platform", "Reanimated"],
  },
  {
    title: "Backend & Data",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    skills: ["Node.js", "tRPC", "PostgreSQL", "Prisma", "Supabase", "Firebase"],
  },
  {
    title: "State & APIs",
    color: "text-amber-400",
    borderColor: "border-amber-500/20",
    skills: ["Redux Toolkit", "Zustand", "TanStack Query", "GraphQL", "REST", "WebSockets"],
  },
];

const tools = [
  "React Native", "Next.js 15", "React 19", "TypeScript",
  "Node.js", "tRPC", "PostgreSQL", "Prisma",
  "Supabase", "Firebase", "Git", "Docker",
  "Vercel", "Tailwind CSS", "Shadcn/ui", "Radix UI",
  "Framer Motion", "Redux Toolkit", "Zustand", "TanStack Query",
  "GitHub Actions", "Bun", "AI SDKs", "LangChain",
];

const Skills = () => {
  const { ref, isInView } = useInView(0.05);
  const { ref: toolsRef, isInView: toolsInView } = useInView(0.05);

  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div ref={ref} className={cn("reveal mb-14", isInView && "visible")}>
            <p className="text-primary text-sm font-medium font-heading tracking-wide uppercase mb-4">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Technical{" "}
              <span className="text-gradient-blue">arsenal</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              The technologies and tools I use to build production systems at scale.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className={cn(
                  "reveal p-6 rounded-2xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-400",
                  isInView && "visible"
                )}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <h3 className={cn("text-sm font-heading font-semibold mb-4 uppercase tracking-wide", cat.color)}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm font-medium bg-white/[0.03] text-foreground/80 border transition-all duration-300 hover:bg-white/[0.06] hover:text-foreground",
                        cat.borderColor
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Full Tools Grid */}
          <div ref={toolsRef}>
            <p className={cn("reveal text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6", toolsInView && "visible")}>
              Full stack
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span
                  key={tool}
                  className={cn(
                    "reveal px-3 py-1.5 rounded-lg text-sm text-muted-foreground bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:text-foreground hover:border-white/[0.08] transition-all duration-300 cursor-default",
                    toolsInView && "visible"
                  )}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className={cn("reveal grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/[0.04]", toolsInView && "visible")} style={{ transitionDelay: "0.6s" }}>
            {[
              { value: "25+", label: "Technologies" },
              { value: "4+", label: "Years Experience" },
              { value: "50+", label: "Projects Built" },
              { value: "2M+", label: "Daily Users" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

export default Skills;
