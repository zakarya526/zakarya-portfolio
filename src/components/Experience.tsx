import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCreator",
      position: "Senior Full Stack Developer",
      duration: "Dec 2023 - Present",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      companyDesc: "A company focused on e-commerce solutions",
      description:
        "Architecting and deploying scalable web platforms using React, Next.js, and Node.js with a focus on real-time systems and AI-powered solutions.",
      achievements: [
        "Architected and deployed scalable web platforms using React, Next.js, and Node.js",
        "Integrated tRPC APIs for efficient real-time data exchange",
        "Led frontend and backend development for AI-powered and e-commerce products",
        "Automated deployments and testing pipelines with GitHub Actions and Docker",
      ],
      tech: ["React", "Next.js", "Node.js", "tRPC", "PostgreSQL", "Prisma", "Docker", "GitHub Actions"],
    },
    {
      company: "Uetm Inc",
      position: "Full Stack Engineer",
      duration: "Sep 2022 - Jul 2023",
      location: "Mississauga, Ontario (Remote)",
      type: "Full-time",
      companyDesc: "A software company specializing in mobile applications",
      description:
        "Spearheaded development of Team Management application with over 2 million daily users, leading cross-functional teams.",
      achievements: [
        "Architected and deployed scalable React + Next.js applications",
        "Built reusable component libraries and integrated tRPC APIs for high-speed data flow",
        "Collaborated with cross-functional teams to deliver AI-powered and e-commerce products",
        "Enhanced system reliability and developer efficiency through CI/CD automation",
      ],
      tech: ["React", "Next.js", "React Native", "tRPC", "Prisma", "PostgreSQL"],
    },
    {
      company: "Federal Government PolyClinic (FGPC)",
      position: "Software Engineer",
      duration: "Feb 2022 - May 2022",
      location: "Islamabad, Pakistan",
      type: "Contract",
      companyDesc: "A public health service offering medical care",
      description:
        "Developed a complete Hospital Management System (HMS) for web and mobile with 99.9% data accuracy.",
      achievements: [
        "Developed a complete Hospital Management System (HMS) for web and mobile",
        "Improved data accuracy to 99.9% through centralized PostgreSQL database design",
        "Enabled real-time doctor-patient scheduling and lab system integration",
      ],
      tech: ["React", "React Native", "Node.js", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional{" "}
              <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">
                Experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My journey through various roles and technologies, building
              expertise in mobile development and leading innovative projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-honey hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-hero rounded-full border-4 border-background shadow-glow hidden md:block z-10" />

                  {/* Content Card */}
                  <Card className="ml-0 md:ml-20 p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Building className="w-5 h-5 text-primary" />
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                        </div>
                        <p className="text-xl text-accent font-semibold mb-1">
                          {exp.company}
                        </p>
                        {exp.companyDesc && (
                          <p className="text-sm text-muted-foreground mb-3 italic">
                            {exp.companyDesc}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-muted/30 border-border/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
