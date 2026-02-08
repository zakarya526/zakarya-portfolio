import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const scrollToSection = (path: string, setActiveHash?: (h: string) => void) => {
  if (path === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    setActiveHash?.("");
  } else if (path.includes("#")) {
    const id = path.split("#")[1];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", path);
      setActiveHash?.("#" + id);
    }
  }
};

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(location.hash || "");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Experience", path: "/#experience" },
    { name: "Skills", path: "/#skills" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ["contact", "skills", "experience", "projects", "about"];
    const onScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveHash("#" + id);
          return;
        }
      }
      setActiveHash("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !activeHash;
    if (path.includes("#")) {
      return location.pathname === "/" && activeHash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    scrollToSection(path, setActiveHash);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick("/")}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
              <span className="text-primary font-heading font-bold text-sm">
                MZ
              </span>
            </div>
            <span className="text-foreground font-heading font-semibold text-sm hidden sm:block">
              Muhammad Zakarya
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-300 relative",
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("/#contact")}
              className="px-4 py-1.5 text-[13px] font-medium rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={cn(
                  "block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center",
                  isMobileMenuOpen && "rotate-45 translate-y-[7px]"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-[1.5px] bg-current transition-all duration-300",
                  isMobileMenuOpen && "opacity-0 scale-0"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[7px]"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/[0.06] transition-all duration-300 overflow-hidden",
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                  isActive(item.path)
                    ? "text-foreground bg-white/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 px-4">
              <button
                onClick={() => handleNavClick("/#contact")}
                className="w-full py-3 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
