import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skillCategories = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "DevOps",
    "Business",
  ];

  const skills = [
    {
      name: "React Native",
      category: "Mobile",
      level: 95,
      years: "4+ years",
      description:
        "Expert in cross-platform mobile development, performance optimization, and native module integration.",
      projects: 15,
    },
    {
      name: "JavaScript/TypeScript",
      category: "Frontend",
      level: 92,
      years: "5+ years",
      description:
        "Advanced proficiency in modern JS/TS, ES6+, async programming, and type safety.",
      projects: 25,
    },
    {
      name: "React.js",
      category: "Frontend",
      level: 88,
      years: "4+ years",
      description:
        "Extensive experience with hooks, context, state management, and modern React patterns.",
      projects: 20,
    },
    {
      name: "Node.js",
      category: "Backend",
      level: 85,
      years: "3+ years",
      description:
        "Building scalable APIs, microservices, and real-time applications with Express.js and Fastify.",
      projects: 18,
    },
    {
      name: "Next.js",
      category: "Frontend",
      level: 82,
      years: "3+ years",
      description:
        "Full-stack applications with SSR, API routes, and optimization for performance and SEO.",
      projects: 12,
    },
    {
      name: "MongoDB",
      category: "Database",
      level: 80,
      years: "3+ years",
      description:
        "Document database design, aggregation pipelines, and performance optimization.",
      projects: 16,
    },
    {
      name: "PostgreSQL",
      category: "Database",
      level: 75,
      years: "2+ years",
      description:
        "Relational database design, complex queries, and database optimization.",
      projects: 8,
    },
    {
      name: "Firebase",
      category: "Backend",
      level: 88,
      years: "4+ years",
      description:
        "Real-time databases, authentication, cloud functions, and push notifications.",
      projects: 22,
    },
    {
      name: "AWS",
      category: "DevOps",
      level: 70,
      years: "2+ years",
      description:
        "Cloud deployment, EC2, S3, Lambda functions, and CI/CD pipelines.",
      projects: 10,
    },
    {
      name: "Docker",
      category: "DevOps",
      level: 72,
      years: "2+ years",
      description:
        "Containerization, multi-stage builds, and Docker Compose for development environments.",
      projects: 8,
    },
    {
      name: "Business Strategy",
      category: "Business",
      level: 85,
      years: "3+ years",
      description:
        "Product roadmap, market analysis, team leadership, and startup growth strategies.",
      projects: 5,
    },
    {
      name: "Team Leadership",
      category: "Business",
      level: 80,
      years: "3+ years",
      description:
        "Managing development teams, mentoring developers, and project coordination.",
      projects: 8,
    },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-green-500";
    if (level >= 80) return "text-blue-500";
    if (level >= 70) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, business acumen,
            and the experience behind each expertise area.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {skillCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "hero" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Skills Overview Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Card className="text-center bg-gradient-hero text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-6">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-honey">12+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">
                Users Impacted
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {filteredSkills.map((skill, index) => (
            <Card
              key={skill.name}
              className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border-border/50 bg-gradient-card"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                    {skill.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Skill Level Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Proficiency
                    </span>
                    <span
                      className={`text-sm font-semibold ${getSkillColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-hero h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Experience & Projects */}
                <div className="flex justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium text-foreground">
                      {skill.years}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-muted-foreground">Projects:</span>
                    <span className="font-medium text-foreground">
                      {skill.projects}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack Visual */}
        <div
          className="mt-16 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <CardTitle className="text-primary">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "React.js",
                      "React Native",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center justify-between p-2 rounded bg-background/50"
                      >
                        <span className="text-sm">{tech}</span>
                        <Badge variant="outline" className="text-xs">
                          Expert
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Backend */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-primary">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Node.js",
                      "Express.js",
                      "Firebase",
                      "REST APIs",
                      "GraphQL",
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center justify-between p-2 rounded bg-background/50"
                      >
                        <span className="text-sm">{tech}</span>
                        <Badge variant="outline" className="text-xs">
                          Advanced
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools & DevOps */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <CardTitle className="text-primary">Tools & DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Git", "Docker", "AWS", "CI/CD", "Testing"].map(
                      (tech) => (
                        <div
                          key={tech}
                          className="flex items-center justify-between p-2 rounded bg-background/50"
                        >
                          <span className="text-sm">{tech}</span>
                          <Badge variant="outline" className="text-xs">
                            Proficient
                          </Badge>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-slide-up"
          style={{ animationDelay: "1s" }}
        >
          <Card className="bg-gradient-hero p-8 text-center border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Leverage These Skills?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Let's discuss how my expertise can help solve your technical
                challenges and drive your project forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="honey" size="lg" asChild>
                  <a href="/contact">Start a Project</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="/projects">View My Work</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
