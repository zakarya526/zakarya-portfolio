import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-white/[0.04]">
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-sm">MZ</span>
            </div>
            <div>
              <p className="text-sm font-heading font-semibold text-foreground">
                Muhammad Zakarya
              </p>
              <p className="text-xs text-muted-foreground">
                Senior Software Engineer
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/zakarya526", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/muhammad-zakarya", label: "LinkedIn" },
              { icon: Mail, href: "mailto:zakaryakhan525@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Muhammad Zakarya. Crafted with precision.
          </p>
          <div className="flex items-center gap-6">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background noise">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
