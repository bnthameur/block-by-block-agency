import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, PenTool, Newspaper } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      icon: BarChart3,
      title: "Exchange Listings & Trending",
      description: "CEX & DEX listings, trending strategies, market making & liquidity boosting.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: Target,
      title: "Funneled & Targeted Ads",
      description: "Hyper-targeted social & search ads, retargeting & conversion funnels, data-driven analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Written, video, and audio content across all formats with strategic distribution.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: Newspaper,
      title: "PR & Media",
      description: "Guaranteed features on top crypto media, influencer marketing, and press releases.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Unified Background - Transparent to show body background */}
      <div className="absolute inset-0 bg-slate-950/30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
            <span className="text-sm font-medium text-blue-400">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Services That Actually</span><br />
            <span className="gradient-text">Get You Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We know what works. We know what doesn't. And we make sure your project gets the attention it deserves.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group card-3d shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 8;
                const rotateY = (centerX - x) / 8;
                
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
              }}
            >
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start space-x-6 mb-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-700/80 border border-slate-600/50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 font-medium leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-xl w-full h-48 object-cover border border-slate-600/30 group-hover:border-blue-500/30 transition-colors duration-300"
                  />
                </div>
                
                {/* Modern CTA */}
                <div className="relative z-10 pt-6">
                  <Link href="/services">
                    <Button className="group/btn relative bg-slate-700/50 hover:bg-blue-600/80 border border-slate-600/50 hover:border-blue-500 text-slate-200 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full">
                      <span className="relative z-10 flex items-center justify-center">
                        Explore Service 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Dominate Your Market?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
            Don't let your crypto project get lost in the noise. Partner with the agency that delivers results, not promises.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/services">
              <Button className="group relative bg-slate-700/50 hover:bg-slate-600/50 border-2 border-slate-600/50 hover:border-blue-500/50 text-slate-200 hover:text-white px-8 py-4 text-lg font-bold rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.02] min-w-[200px] h-[56px] inline-flex items-center justify-center">
                <span className="relative z-10">View Case Studies</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </Button>
            </Link>
            
            <a 
              href="https://calendly.com/admin-blockbyblocksolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-500 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] border border-blue-400/20 inline-flex items-center justify-center min-w-[200px] h-[56px]"
            >
              <span className="relative z-10 mr-2">Start Your Empire</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
