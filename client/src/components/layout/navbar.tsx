import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Home, User, Briefcase, MessageSquare } from "lucide-react";

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
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/services", label: "Work", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      {/* Compact Navbar Container */}
      <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl shadow-black/50">
        <div className="flex items-center px-6 py-3 space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img 
              src="attached_assets/image_1752535909469.png" 
              alt="Block by Block Solutions"
              className="h-8 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                    location === item.href 
                      ? "bg-gray-800/80 text-white" 
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pl-4 border-l border-gray-800">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-[1.02]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      
      {/* Mobile Menu - Hidden for now, compact design doesn't need it */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl shadow-black/50 px-4 py-3">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-300 ${
                    location === item.href 
                      ? "bg-gray-800/80 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
