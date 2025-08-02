import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

// 3D Floating Orbs Component
const FloatingOrbs = () => {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#f09433" />
        </Sphere>
      </Float>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.3, 32, 32]} position={[2, -1, 0]}>
          <meshStandardMaterial color="#e6683c" />
        </Sphere>
      </Float>
      <Float speed={1.2} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[0.4, 32, 32]} position={[0, 2, -1]}>
          <meshStandardMaterial color="#dc2743" />
        </Sphere>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2.5}>
        <Sphere args={[0.6, 32, 32]} position={[1.5, 0, 1]}>
          <meshStandardMaterial color="#cc2366" />
        </Sphere>
      </Float>
      <Float speed={1.6} rotationIntensity={1.8} floatIntensity={1.8}>
        <Sphere args={[0.35, 32, 32]} position={[-1, -2, 0.5]}>
          <meshStandardMaterial color="#bc1888" />
        </Sphere>
      </Float>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
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

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
          }}
        >
          <Suspense fallback={null}>
            <FloatingOrbs />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              enableDamping
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      </div>

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