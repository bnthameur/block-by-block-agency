import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero-section";
import AboutPreview from "@/components/sections/about-preview";
import ServicesPreview from "@/components/sections/services-preview";
import ClientsSection from "@/components/sections/clients-section";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ClientsSection />
    </motion.div>
  );
}
