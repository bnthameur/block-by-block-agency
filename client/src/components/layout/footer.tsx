import { Link } from "wouter";
import { Box } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Exchange Listings & Trending",
    "Funneled & Targeted Ads",
    "Content Marketing",
    "PR & Media",
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/company/block-by-block-solutions/", icon: "linkedin" },
    { href: "https://x.com/byblocksolution?s=21&t=IUCNKsJfyLq74I2sbCxdHg", icon: "twitter" },
    { href: "https://www.instagram.com/byblocksolutions?igsh=MXY0dXV0dTNpYzR1dw==", icon: "instagram" },
    { href: "https://t.me/blockbyblocksolutions", icon: "telegram" },
  ];

  return (
    <footer className="py-16 bg-slate-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Box className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Block by Block</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building blockchain brands that matter. We craft high-converting campaigns and engineer genuine engagement for long-term success.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <i className={`fab fa-${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-white transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-blue-400 w-4"></i>
                <span>admin@blockbyblocksolutions.xyz</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-blue-400 w-4"></i>
                <span>India | UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fab fa-telegram text-blue-400 w-4"></i>
                <span>@blockbyblocksolutions</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 <strong className="text-white">Block by Block Solutions</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
