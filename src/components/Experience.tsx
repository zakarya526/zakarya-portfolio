import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Algorithm",
    position: "Senior Full Stack Engineer",
    duration: "Dec 2025 — Present",
    location: "Peshawar, Pakistan",
    type: "Full-time · Hybrid",
    description:
      "Designing and developing scalable production-grade systems across both backend and frontend stacks, collaborating with cross-functional teams to enhance performance and user experience.",
    achievements: [
      "Designed and developed scalable production-grade systems across both backend and frontend stacks",
      "Collaborated with cross-functional teams to enhance system performance and user experience",
      "Utilized modern frameworks and technologies to ensure robust application architecture",
    ],
    tech: ["Software Development", "Software Infrastructure", "Full Stack", "System Architecture"],
    current: true,
  },
  {
    company: "TechCreator",
    position: "Senior Full Stack Developer",
    duration: "Dec 2023 — Nov 2025",
    location: "Ontario, Canada (Remote)",
    type: "Full-time",
    description:
      "Led architecture and development of scalable web platforms with React, Next.js, and Node.js. Built real-time systems and AI-powered products for enterprise clients.",
    achievements: [
      "Architected scalable web platforms serving 10K+ concurrent users with React, Next.js, and Node.js",
      "Designed and integrated tRPC API layer reducing client-server round trips by 40%",
      "Led frontend and backend development of 3 AI-powered SaaS products from 0 to production",
      "Automated CI/CD pipelines with GitHub Actions and Docker, cutting deployment time by 60%",
    ],
    tech: ["React", "Next.js", "Node.js", "tRPC", "PostgreSQL", "Prisma", "Docker"],
    current: false,
  },
  {
    company: "Uetm Inc",
    position: "Full Stack Engineer",
    duration: "Sep 2022 — Jul 2023",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    description:
      "Spearheaded development of Team Management platform with 2M+ daily active users, leading cross-functional teams across time zones.",
    achievements: [
      "Built and shipped features for a platform serving 2M+ daily active users",
      "Architected reusable component library cutting feature delivery time by 35%",
      "Integrated tRPC APIs achieving sub-100ms response times for critical data flows",
      "Collaborated with design and product teams to ship 12+ features per quarter",
    ],
    tech: ["React", "Next.js", "React Native", "tRPC", "Prisma", "PostgreSQL"],
    current: false,
  },
  {
    company: "Federal Government PolyClinic",
    position: "Software Engineer",
    duration: "Feb 2022 — May 2022",
    location: "Islamabad, Pakistan",
    type: "Contract",
    description:
      "Developed a Hospital Management System (HMS) serving 500+ medical staff with 99.9% data accuracy.",
    achievements: [
      "Built end-to-end Hospital Management System for web and React Native mobile",
      "Achieved 99.9% data accuracy through centralized PostgreSQL database architecture",
      "Enabled real-time scheduling system handling 200+ daily appointments",
    ],
    tech: ["React", "React Native", "Node.js", "PostgreSQL"],
    current: false,
  },
];

const Experience = () => {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div ref={ref} className={cn("reveal mb-14", isInView && "visible")}>
            <p className="text-primary text-sm font-medium font-heading tracking-wide uppercase mb-4">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Where I've{" "}
              <span className="text-gradient-blue">worked</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-white/[0.06] to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={cn("reveal relative", isInView && "visible")}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-3 hidden sm:block">
                    <div className={cn(
                      "w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center",
                      exp.current
                        ? "border-primary bg-primary/20"
                        : "border-white/10 bg-background"
                    )}>
                      {exp.current && (
                        <div className="w-2 h-2 rounded-full bg-primary animate-status-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="sm:ml-12 p-6 rounded-2xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-400 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] text-muted-foreground border border-white/[0.04]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

export default Experience;
