import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Scroll helper with active hash tracking
const scrollToSection = (
  path: string,
  setActiveHash?: (hash: string) => void
) => {
  if (path === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    setActiveHash?.("");
  } else if (path.includes("#")) {
    const sectionId = path.split("#")[1];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", path);
      setActiveHash?.("#" + sectionId);
    }
  }
};

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(location.hash || "");

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
    if (path === "/") return location.pathname === "/" && !activeHash;
    if (path.includes("#")) {
      return location.pathname === "/" && activeHash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleNavClick = (item: (typeof navItems)[0]) => {
    scrollToSection(item.path, setActiveHash);
  };

  return (
    <nav
      className={cn(
        "w-full transition-all duration-300 bg-gradient-to-br from-gray-900 via-cyan-500/10 to-blue-900/30",
        isScrolled
          ? "backdrop-blur-md shadow-elegant border-b border-border/50"
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
            <span className="text-xl font-bold text-black">
              Muhammad Zakarya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group",
                  isActive(item.path)
                    ? "text-black bg-black/10"
                    : "text-black/70 hover:text-black hover:bg-black/10"
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-hero rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("/#contact", setActiveHash)}
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-white/70 transition-colors"
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
          <div className="md:hidden absolute top-16 left-0 right-0 z-50 bg-white border-t border-gray-300 shadow-2xl rounded-b-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    handleNavClick(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-300",
                    isActive(item.path)
                      ? "text-black bg-black/10"
                      : "text-black/70 hover:text-black hover:bg-black/10"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    scrollToSection("/#contact", setActiveHash);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Let's Connect
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
