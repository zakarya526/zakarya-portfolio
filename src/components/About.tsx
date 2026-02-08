import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const About = () => {
  const { ref: sectionRef, isInView } = useInView(0.1);
  const { ref: statsRef, isInView: statsVisible } = useInView(0.1);

  const stats = [
    { value: "4+", label: "Years of Experience", color: "text-primary" },
    { value: "50+", label: "Projects Shipped", color: "text-emerald-400" },
    { value: "2M+", label: "Users Impacted Daily", color: "text-violet-400" },
    { value: "25+", label: "Technologies Mastered", color: "text-amber-400" },
  ];

  const values = [
    {
      title: "Systems Thinking",
      description: "Designing architectures that scale from prototype to millions of users.",
    },
    {
      title: "Pixel-Perfect",
      description: "Obsessive attention to UI/UX detail and buttery-smooth interactions.",
    },
    {
      title: "Ship Fast",
      description: "Pragmatic engineering decisions that deliver real value, fast.",
    },
    {
      title: "Full Ownership",
      description: "End-to-end ownership from system design to production deployment.",
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div ref={sectionRef} className={cn("reveal", isInView && "visible")}>
            <p className="text-primary text-sm font-medium font-heading tracking-wide uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              Engineer who builds at{" "}
              <span className="text-gradient-blue">scale</span>
            </h2>
          </div>

          {/* Bio */}
          <div className={cn("reveal reveal-delay-1", isInView && "visible")}>
            <div className="max-w-3xl space-y-5 mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Senior Software Engineer</span> with
                4+ years of building production systems that serve millions of users daily. My
                expertise spans the full stack — from pixel-perfect React interfaces to robust
                Node.js backends and cross-platform React Native apps.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've architected scalable platforms using <span className="text-foreground">Next.js, tRPC, PostgreSQL, and Prisma</span>,
                built real-time systems with WebSockets, and led teams shipping AI-powered products.
                I care deeply about <span className="text-foreground">code quality, system design, and user experience</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm focused on building high-performance web platforms and exploring
                AI integration patterns. I'm always looking for opportunities to work on ambitious
                engineering challenges at scale.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "reveal text-center sm:text-left p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]",
                  statsVisible && "visible"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={cn("text-3xl sm:text-4xl font-heading font-bold mb-1", stat.color)}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className={cn("reveal reveal-delay-3", isInView && "visible")}>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">
              What I bring
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((val, i) => (
              <div
                key={val.title}
                className={cn(
                  "reveal group p-5 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300",
                  statsVisible && "visible"
                )}
                style={{ transitionDelay: `${(i + 4) * 100}ms` }}
              >
                <h3 className="text-foreground font-heading font-semibold mb-1.5">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
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

export default About;
