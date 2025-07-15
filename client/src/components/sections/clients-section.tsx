import { motion } from "framer-motion";

export default function ClientsSection() {
  const majorClients = [
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f0556801499c0c2790641_Near.webp",
      alt: "NEAR Protocol"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f0558c454e328edacea48_Uniswap.webp",
      alt: "Uniswap"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f05567f093f807ffff6ee_Bybit.webp",
      alt: "Bybit"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/66a39f76826d78276ab3ab9a_ChainGPT.webp",
      alt: "ChainGPT"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f055686ba3b95b1d338fe_DAO-Maker.webp",
      alt: "DAO Maker"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/Pudgy_Penguins_Logo.jpg",
      alt: "Pudgy Penguins"
    }
  ];

  const additionalClients = [
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/66a39fe1d586e7081591b8f4_Waves.webp",
      alt: "Waves"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f0556a732dc2770d396a4_Cheelee.webp",
      alt: "Cheelee"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f05563d4fbf0bcfd4d71c_LayerAI.webp",
      alt: "LayerAI"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/66a3a02b5b4e8fec7ebe9302_Tenet.webp",
      alt: "Tenet"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/66a3a056bcb5af902231b0f5_Bull-Perks.webp",
      alt: "Bull Perks"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f0556605184c97f4aa838_Huobi.webp",
      alt: "Huobi"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/667f055695ee27b7da0952a8_Dexcheck.webp",
      alt: "Dexcheck"
    },
    {
      src: "https://blockbyblocksolutions.xyz/wp-content/uploads/2025/06/66a3a0c64aa01bedb256dff5_Patex.webp",
      alt: "Patex"
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
            <span className="text-sm font-medium text-blue-400">Trusted Partners</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Our Clients &</span><br />
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've helped some of the biggest names in crypto achieve their marketing goals and build lasting communities.
          </p>
        </motion.div>
        
        {/* Infinite Scrolling Client Logos - First Row (Left to Right) */}
        <div className="overflow-hidden mb-12">
          <motion.div 
            className="flex space-x-8 animate-scroll-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[...majorClients, ...majorClients, ...majorClients].map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                className="glass-effect rounded-xl p-6 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group flex-shrink-0 w-48"
              >
                <img 
                  src={client.src} 
                  alt={client.alt} 
                  className="max-w-full h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Infinite Scrolling Client Logos - Second Row (Right to Left) */}
        <div className="overflow-hidden mb-20">
          <motion.div 
            className="flex space-x-6 animate-scroll-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[...additionalClients, ...additionalClients, ...additionalClients].map((client, index) => (
              <div
                key={`${client.alt}-additional-${index}`}
                className="glass-effect rounded-lg p-4 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group flex-shrink-0 w-36"
              >
                <img 
                  src={client.src} 
                  alt={client.alt} 
                  className="max-w-full h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Testimonial */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8">What Our Clients Say</h3>
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
              "Block by Block Solutions transformed our marketing strategy completely. 
              Their data-driven approach and genuine understanding of the blockchain space 
              helped us achieve 300% growth in community engagement within just 3 months."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-gray-400 text-sm">Marketing Director, DeFi Protocol</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
