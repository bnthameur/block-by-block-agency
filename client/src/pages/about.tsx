import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search, ServerCog, Rocket, BarChart } from "lucide-react";

export default function About() {
  const processSteps = [
    {
      icon: Search,
      title: "We Get to Know You",
      subtitle: "No Cookie-Cutter BS",
      description: "Every project is different. That's why we listen first. We dive deep into your vision & goals, what makes your project unique, your target audience & competitors.",
      outcome: "A strategy that fits you—not just another copy-paste marketing plan."
    },
    {
      icon: ServerCog,
      title: "We Build a Strategy",
      subtitle: "Hype + Long-Term Growth", 
      description: "We don't just chase trends. We create a roadmap that drives real engagement, real conversions, and real community. Branding that makes you unforgettable, social & PR strategies that put you on the map, growth campaigns that actually move the needle.",
      outcome: "A clear, high-impact plan—customized to get you results."
    },
    {
      icon: Rocket,
      title: "We Execute & Go Hard",
      subtitle: "This is where the magic happens",
      description: "Our team launches your campaigns, handles the engagement, and builds serious momentum for your project. Daily social media management & growth, PR outreach & influencer collaborations, community hype & activation campaigns.",
      outcome: "You sit back while we make sure people see, engage, and invest in your project."
    },
    {
      icon: BarChart,
      title: "We Analyze, Optimize & Scale",
      subtitle: "Marketing without data is just guessing",
      description: "We track everything. What's working? We double down. What's not? We tweak & improve. What's next? We scale the hell out of it.",
      outcome: "A marketing engine that keeps growing block by block."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                <span className="text-sm font-medium text-blue-400">About Block by Block Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6">
                <span className="text-white">Build Your Blockchain Project</span><br />
                <span className="gradient-text">The Right Way</span>
              </h1>
              
              <div className="text-lg text-blue-400 font-semibold mb-4">5 Years of experience</div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The blockchain space is flooded with empty promises, fake engagement, and momentary hype. 
                But where's the real growth? The real impact?
              </p>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                That's where we come in.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                At <strong className="gradient-text">Block by Block Solutions</strong>, we don't just market—we build brands that matter. 
                We craft high-converting campaigns, engineer genuine engagement, and position your project for long-term success.
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                  KNOW MORE
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office workspace with cutting-edge technology" 
                className="rounded-3xl shadow-2xl shadow-blue-500/20 w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
              <span className="text-sm font-medium text-blue-400">How We Work</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-white">No guesswork. No generic marketing.</span><br />
              <span className="gradient-text">Just a proven, battle-tested process that gets results.</span>
            </h2>
          </motion.div>

          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="glass-effect rounded-3xl p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="text-cyan-400 font-semibold">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="bg-blue-600/10 rounded-xl p-4 border border-blue-500/20">
                      <p className="text-blue-300 font-semibold">
                        <strong>Outcome:</strong> {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      "1507003211169-0a1dd7228f2d", // Professional business meeting
                      "1553484771-371a605b060b", // Content creation
                      "1552664730-d307ca884978", // Team collaboration
                      "1460925895917-afdab827c52f"  // Analytics dashboard
                    ][index]}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600`}
                    alt={step.title}
                    className="rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              <span className="text-white">Ready to build your project</span><br />
              <span className="gradient-text">the right way?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our proven process can transform your blockchain project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-gray-600 hover:bg-white/5">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
