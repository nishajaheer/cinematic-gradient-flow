import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

// CSS-based Floating Orbs Component
const FloatingOrbs = () => {
  const orbs = [
    { color: "bg-instagram-orange", size: "w-16 h-16", position: "top-1/4 left-1/4", delay: "0s" },
    { color: "bg-instagram-red", size: "w-12 h-12", position: "top-1/3 right-1/4", delay: "1s" },
    { color: "bg-instagram-pink", size: "w-20 h-20", position: "top-1/2 left-1/6", delay: "2s" },
    { color: "bg-instagram-purple", size: "w-14 h-14", position: "bottom-1/3 right-1/3", delay: "1.5s" },
    { color: "bg-instagram-deep-purple", size: "w-18 h-18", position: "bottom-1/4 left-1/3", delay: "0.5s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.color} ${orb.size} ${orb.position} rounded-full blur-sm`}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: parseFloat(orb.delay),
          }}
          style={{
            background: `radial-gradient(circle, ${orb.color.replace('bg-', 'hsl(var(--')} / 0.8), transparent)`,
          }}
        />
      ))}
    </div>
  );
};

// Social Icons with Glow Effect
const SocialIcons = () => {
  const socials = [
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Youtube, url: "#", label: "YouTube" },
    { icon: Twitter, url: "#", label: "Twitter" },
  ];

  return (
    <motion.div 
      className="flex gap-6 justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {socials.map(({ icon: Icon, url, label }, index) => (
        <motion.a
          key={label}
          href={url}
          className="social-glow p-3 rounded-full bg-secondary/20 border border-instagram-purple/30 backdrop-blur-sm"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
        >
          <Icon className="w-6 h-6 text-instagram-pink" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
      </div>

      {/* CSS-based Floating Background */}
      <FloatingOrbs />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="text-instagram block animate-gradient-shift">Creative</span>
            <span className="text-white">Developer</span>
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Crafting immersive digital experiences with cutting-edge technology and creative passion
        </motion.p>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-12"
        >
          <Button 
            variant="hero" 
            size="xl"
            className="animate-float"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Portfolio
          </Button>
        </motion.div>

        {/* Social Icons */}
        <SocialIcons />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-instagram-purple rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-instagram-gradient rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};