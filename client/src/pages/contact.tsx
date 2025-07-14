import { motion } from "framer-motion";
import ContactForm from "@/components/sections/contact-form";

export default function Contact() {
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
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      <ContactForm />
    </motion.div>
  );
}
