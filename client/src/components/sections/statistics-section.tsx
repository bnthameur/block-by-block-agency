import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/animated-counter";

export default function StatisticsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Unified Background */}
      <div className="absolute inset-0 bg-slate-950/30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
            }}
          >
            <div className="relative">
              <AnimatedCounter target={500} className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3" suffix="+" />
              <div className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors">Projects Completed</div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
            }}
          >
            <div className="relative">
              <AnimatedCounter target={150} className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3" suffix="+" />
              <div className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors">Satisfied Clients</div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
            }}
          >
            <div className="relative">
              <AnimatedCounter target={25} className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3" suffix="+" />
              <div className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors">Expert Team Members</div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}