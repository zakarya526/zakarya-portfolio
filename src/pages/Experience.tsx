import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Al Sarih Organics",
      position: "CEO & Founder",
      period: "2022 - Present",
      location: "Pakistan",
      type: "Entrepreneurship",
      description:
        "Founded and scaled organic food business from concept to 50+ product lines. Built complete digital ecosystem including e-commerce platform, inventory management, and customer analytics.",
      achievements: [
        "Grew company to $500K+ annual revenue",
        "Established distribution network across 3 cities",
        "Built custom ERP system using Next.js and PostgreSQL",
        "Achieved 95% customer satisfaction rate",
      ],
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Stripe",
        "AWS",
        "Digital Marketing",
      ],
    },
    {
      company: "TechCorp Solutions",
      position: "Senior React Native Developer",
      period: "2021 - 2022",
      location: "Remote",
      type: "Full-time",
      description:
        "Led development of cross-platform mobile applications serving 100K+ users. Mentored junior developers and established mobile development best practices.",
      achievements: [
        "Delivered 3 major mobile apps on time and under budget",
        "Reduced app crash rate by 85% through optimization",
        "Mentored 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Jest"],
    },
    {
      company: "Digital Innovations Inc",
      position: "CTO",
      period: "2020 - 2021",
      location: "Lahore, Pakistan",
      type: "Leadership",
      description:
        "Led technical strategy and development team for B2B SaaS platform. Responsible for architecture decisions, team management, and product roadmap.",
      achievements: [
        "Built and managed team of 8 developers",
        "Architected scalable microservices infrastructure",
        "Increased platform performance by 200%",
        "Secured $100K seed funding",
      ],
      technologies: ["Node.js", "MongoDB", "Docker", "AWS", "React"],
    },
    {
      company: "Freelance Consulting",
      position: "Mobile App Developer",
      period: "2019 - 2020",
      location: "Remote",
      type: "Freelance",
      description:
        "Delivered custom mobile solutions for startups and established businesses. Specialized in React Native development and cross-platform solutions.",
      achievements: [
        "Completed 15+ mobile app projects",
        "Maintained 5-star rating on freelance platforms",
        "Generated $80K+ in freelance revenue",
        "Built long-term relationships with 10+ clients",
      ],
      technologies: [
        "React Native",
        "JavaScript",
        "Firebase",
        "Expo",
        "REST APIs",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Product Manager, TechCorp",
      content:
        "Muhammad's technical expertise and leadership skills are exceptional. He delivered our mobile app ahead of schedule and exceeded all performance expectations.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      position: "CEO, Digital Innovations",
      content:
        "As our CTO, Muhammad transformed our technical infrastructure and built an amazing team. His strategic thinking and execution are world-class.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      position: "Startup Founder",
      content:
        "Muhammad built our MVP in record time and helped us secure our first round of funding. His React Native skills are top-notch.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">
              Experience
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through leadership roles, technical challenges, and
            successful project deliveries across startups and established
            companies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-honey md:block hidden" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow z-10 md:block hidden">
                  <div className="w-6 h-6 bg-primary-foreground rounded-full" />
                </div>

                {/* Content Card */}
                <Card className="md:ml-24 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-primary">
                          {exp.position}
                        </CardTitle>
                        <p className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge variant="secondary" className="w-fit">
                          {exp.period}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`w-fit ${
                            exp.type === "Entrepreneurship"
                              ? "border-honey text-honey"
                              : exp.type === "Leadership"
                              ? "border-accent text-accent"
                              : exp.type === "Full-time"
                              ? "border-primary text-primary"
                              : "border-muted-foreground text-muted-foreground"
                          }`}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-muted-foreground"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-card/50 border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-honey text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-slide-up"
          style={{ animationDelay: "1.2s" }}
        >
          <Card className="bg-gradient-hero p-8 text-center border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Ready to add my expertise to your team? Let's discuss how I can
                help drive your next project to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-honey text-foreground rounded-md font-medium hover:bg-honey-dark transition-colors"
                >
                  Hire Me
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background/20 text-primary-foreground rounded-md font-medium hover:bg-background/30 transition-colors border border-primary-foreground/20"
                >
                  Download Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
