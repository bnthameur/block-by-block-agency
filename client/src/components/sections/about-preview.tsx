import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Rocket, TrendingUp, Zap } from "lucide-react";

export default function AboutPreview() {
  const features = [
    {
      icon: Target,
      title: "Branding That Sticks",
      description: "Your identity, story, and message—refined to perfection."
    },
    {
      icon: Rocket,
      title: "Hype That Converts", 
      description: "Not just trending. Not just views. Actual community, real demand."
    },
    {
      icon: TrendingUp,
      title: "Growth That's Sustainable",
      description: "Social media, listings, influencers, and beyond."
    },
    {
      icon: Zap,
      title: "Launches That Hit Hard",
      description: "Because the first impression changes everything."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Unified Background */}
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
            <span className="text-sm font-medium text-blue-400">About Block by Block Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Build Your Blockchain Project</span><br />
            <span className="gradient-text">The Right Way</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The blockchain space is flooded with empty promises, fake engagement, and momentary hype. 
            But where's the real growth? The real impact? That's where we come in.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At <strong className="gradient-text">Block by Block Solutions</strong>, we don't just market—we build brands that matter. 
              We craft high-converting campaigns, engineer genuine engagement, and position your project for long-term success.
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Modern office workspace with cutting-edge technology" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link href="/about">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
              Learn More About Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
