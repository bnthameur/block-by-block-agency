import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, PenTool, Newspaper, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Exchange Listings & Trending",
      subtitle: "Get Seen, Get Trusted",
      description: "Getting listed is one thing—getting noticed is another. We make sure your project doesn't just exist, but actually thrives.",
      features: [
        "CEX & DEX Listings—From Tier 1 to emerging exchanges, we get you where it matters",
        "Trending Strategies—Top spots on CMC, CG, DEXTools & Twitter trends",
        "Market Making & Liquidity Boosting—For a seamless trading experience",
        "Reputation Management—Because trust is everything"
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Target,
      title: "Funneled & Targeted Ads",
      subtitle: "Precision Growth That Converts",
      description: "Forget generic ads that drain your budget. We drive laser-targeted traffic that actually turns into investors & users.",
      features: [
        "Hyper-targeted social & search ads—Google, Twitter, Meta, YouTube, Reddit",
        "Retargeting & conversion funnels—Turn cold leads into loyal backers",
        "Data-driven analytics & A/B testing—Maximize ROI, eliminate waste"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      subtitle: "Own the Narrative, Build Authority",
      description: "Good content doesn't just inform—it sells. We craft high-impact content across all formats to make sure your project is heard, seen, and remembered.",
      features: [
        "Written Content—Website copy, blogs, whitepapers, email sequences",
        "Video Content—Explainer videos, project updates, YouTube reviews",
        "Audio Content—Twitter Spaces, podcasts, and expert interviews",
        "Content Distribution—Ensuring your message reaches the right audience"
      ],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Newspaper,
      title: "PR & Media",
      subtitle: "Get Featured Where It Matters",
      description: "If no one's talking about you, do you even exist? We make sure you're in the headlines, not just the sidelines.",
      features: [
        "Guaranteed Features—Top crypto media (Cointelegraph, Decrypt, CoinDesk & more)",
        "Influencer & KOL Marketing—Strategic placements that build credibility",
        "Press Releases That Get Picked Up—Not just published, but actually read"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20"
    >
      {/* Breadcrumb */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-2 text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
              <span className="text-sm font-medium text-blue-400">Our Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-white">Services That Actually</span><br />
              <span className="gradient-text">Get You Results</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We know what works. We know what doesn't. And we make sure your project gets the attention it deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="grid lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{service.title}</h3>
                        <p className="text-cyan-400 font-semibold text-lg">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl shadow-blue-500/20 w-full h-auto"
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
              <span className="text-white">We know what works. We know what doesn't.</span><br />
              <span className="gradient-text">And we make sure your project gets the attention it deserves.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-4 font-bold">Ready to Blow Up?</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                  Let's Make It Happen <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a 
                href="https://calendly.com/admin-blockbyblocksolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-gray-600 hover:bg-white/5">
                  Schedule Free Call
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
