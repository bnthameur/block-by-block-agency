import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-10 min-h-fit flex items-center justify-center relative overflow-hidden">
      
      
      <div className="max-w-10xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 ">
        <motion.div
          className="space-y-7"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              #1 Blockchain Marketing Agency
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">Build Crypto</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">Empires</span>
            <br />
            <span className="text-slate-300">That Last</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transform your crypto project from noise to industry leader. We create explosive marketing campaigns, build unshakeable communities, and deliver results that matter.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="">
              <Button className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-500 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] border border-blue-400/20 inline-flex items-center justify-center">
                <span className="relative z-10 mr-2">Start Your Empire</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </Button>
            </Link>
            <Link href="/services">
              <Button className="group relative bg-slate-800/50 hover:bg-slate-700/50 border-2 border-slate-600/50 hover:border-blue-500/50 text-slate-200 hover:text-white px-10 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.02]">
                <span className="relative z-10">View Case Studies</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </Button>
            </Link>
          </motion.div>
          
         
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* Modern Dashboard Mockup */}
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl backdrop-blur-xl border border-slate-700/50 p-8 shadow-2xl">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-400 text-sm font-mono">analytics.dashboard</div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Campaign Performance</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400 font-medium">Live</span>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-cyan-400">+247%</div>
                      <div className="text-sm text-slate-300">Engagement Rate</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-400">$2.4M</div>
                      <div className="text-sm text-slate-300">Revenue Generated</div>
                    </div>
                  </div>
                  
                  {/* Chart Visualization */}
                  <div className="bg-slate-700/30 rounded-xl h-32 flex items-end justify-between px-4 py-3">
                    {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                      <div 
                        key={i}
                        className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm animate-pulse"
                        style={{ height: `${height}%`, width: '12px' }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-4 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5" />
                <div className="font-bold">+500% ROI</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center space-x-2 text-white">
                <Zap className="w-5 h-5" />
                <div className="font-bold">24/7 Growth</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -left-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-4 shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5" />
                <div className="font-bold">10K+ Community</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}