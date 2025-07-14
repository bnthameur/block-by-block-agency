import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/animated-counter";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: "-3s"}}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">5+ Years of Proven Excellence</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-black leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Hype Fizzles.</span><br />
              <span className="gradient-text">Real Marketing Lasts.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your Crypto Project Deserves More Than Just Noise. We build brands that matter, craft high-converting campaigns, and position your project for long-term success.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="https://calendly.com/admin-blockbyblocksolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 animate-pulse-glow text-center inline-block"
              >
                Get Free Consultation
              </a>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-gray-600 hover:bg-white/5">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
            

          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional blockchain marketing team collaborating" 
              className="rounded-3xl shadow-2xl shadow-blue-500/20 w-full h-auto"
            />
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Crafting Strategies</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <div className="flex items-center space-x-3">
                <i className="fas fa-chart-line text-cyan-400"></i>
                <span className="text-sm font-semibold">Real Growth</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div 
              className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedCounter target={500} className="text-5xl font-black gradient-text mb-2" />
              <div className="text-lg font-semibold text-gray-400">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedCounter target={150} className="text-5xl font-black gradient-text mb-2" />
              <div className="text-lg font-semibold text-gray-400">Satisfied Clients</div>
            </motion.div>
            
            <motion.div 
              className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedCounter target={25} className="text-5xl font-black gradient-text mb-2" />
              <div className="text-lg font-semibold text-gray-400">Team Members</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
