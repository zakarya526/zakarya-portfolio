import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading development of enterprise-level applications using React Native and Next.js. Mentoring junior developers and architecting scalable solutions.",
      achievements: [
        "Increased app performance by 40% through optimization techniques",
        "Led a team of 5 developers on multiple successful projects",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      tech: ["React Native", "Next.js", "TypeScript", "AWS", "Docker"]
    },
    {
      company: "Digital Innovations Ltd.",
      position: "Mobile App Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      type: "Full-time",
      description: "Specialized in cross-platform mobile app development with React Native. Collaborated with design teams to create intuitive user experiences.",
      achievements: [
        "Delivered 8 mobile apps with 4.8+ star ratings",
        "Reduced development time by 30% through reusable components",
        "Integrated complex APIs and third-party services"
      ],
      tech: ["React Native", "JavaScript", "Firebase", "GraphQL"]
    },
    {
      company: "StartupCo",
      position: "Junior Java Developer",
      duration: "2019 - 2020",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Developed backend services and APIs using Java and Spring Boot. Gained experience in microservices architecture and database optimization.",
      achievements: [
        "Built RESTful APIs serving 10K+ daily requests",
        "Optimized database queries improving response time by 50%",
        "Contributed to microservices migration project"
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="bg-gradient-hero bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My journey through various roles and technologies, building expertise in 
              full-stack development and leading innovative projects.
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
                        <p className="text-xl text-accent font-semibold mb-3">{exp.company}</p>
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
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
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