import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Box, Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/company/block-by-block-solutions/", icon: "linkedin" },
    { href: "https://x.com/byblocksolution?s=21&t=IUCNKsJfyLq74I2sbCxdHg", icon: "twitter" },
    { href: "https://t.me/blockbyblocksolutions", icon: "telegram" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-20 border-b border-border/30" 
          : "glass-effect"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Box className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Block by Block</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-muted-foreground hover:text-foreground transition-colors duration-300 ${
                  location === item.href ? "text-foreground font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <i className={`fab fa-${social.icon} text-sm text-muted-foreground hover:text-white`}></i>
                </a>
              ))}
            </div>
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-muted-foreground hover:text-white" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground hover:text-white" />
              )}
            </button>
            
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Free Consultation
              </Button>
            </Link>

            <button
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-muted-foreground hover:text-foreground transition-colors duration-300 ${
                    location === item.href ? "text-foreground font-medium" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <i className={`fab fa-${social.icon} text-sm text-muted-foreground hover:text-white`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
