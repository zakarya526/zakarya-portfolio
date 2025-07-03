import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", isSection: false },
    { name: "About", path: "/#about", isSection: true },
    { name: "Projects", path: "/#projects", isSection: true },
    { name: "Experience", path: "/#experience", isSection: true },
    { name: "Skills", path: "/#skills", isSection: true },
    { name: "Contact", path: "/#contact", isSection: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path.includes("#")) {
      return location.pathname === "/" && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.isSection) {
      const sectionId = item.path.substring(2); // Remove "/#"
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", item.path);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-elegant border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-lg">
                MZ
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Muhammad Zakarya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.isSection ? (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group",
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-hero rounded-full" />
                  )}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group",
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-hero rounded-full" />
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Let's Connect</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) =>
                item.isSection ? (
                  <button
                    key={item.path}
                    onClick={() => {
                      handleNavClick(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-300",
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "block px-4 py-3 rounded-md text-base font-medium transition-all duration-300",
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let's Connect
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
