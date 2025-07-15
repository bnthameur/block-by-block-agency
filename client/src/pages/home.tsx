import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero-section";
import StatisticsSection from "@/components/sections/statistics-section";
import AboutPreview from "@/components/sections/about-preview";
import ServicesPreview from "@/components/sections/services-preview";
import ClientsSection from "@/components/sections/clients-section";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-x-hidden pt-20"
    >
      <HeroSection />
      <StatisticsSection />
      <ServicesPreview />
      <AboutPreview />
      <ClientsSection />
      <ContactForm />
    </motion.div>
  );
}
