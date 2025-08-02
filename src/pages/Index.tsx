import React from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="particles-bg">
        {/* Particle system would go here */}
      </div>

      {/* Page Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </motion.div>

      {/* Fixed Navigation Dots */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="space-y-4">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" }
          ].map((item, index) => (
            <motion.button
              key={item.id}
              className="group flex items-center"
              onClick={() => {
                const element = item.id === "hero" 
                  ? document.body 
                  : document.getElementById(item.id);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ x: -10 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.3 }}
            >
              <span className="hidden group-hover:block text-sm text-muted-foreground mr-3 bg-card/80 backdrop-blur-sm px-2 py-1 rounded">
                {item.label}
              </span>
              <div className="w-3 h-3 rounded-full border-2 border-instagram-purple group-hover:bg-instagram-purple transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-instagram-gradient text-white shadow-instagram hover:shadow-glow transition-all duration-300 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Index;
