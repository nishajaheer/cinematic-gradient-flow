import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-blob" style={{ 
          top: '10%', 
          left: '80%', 
          animationDelay: '-5s',
          width: '400px',
          height: '400px'
        }}></div>
        <div className="gradient-blob" style={{ 
          top: '70%', 
          left: '20%', 
          animationDelay: '-15s',
          width: '300px',
          height: '300px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Portrait/Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-instagram-gradient p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full bg-background rounded-2xl"></div>
            </motion.div>
            
            {/* Profile Image Placeholder */}
            <div className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-instagram-purple/20 to-instagram-orange/20 backdrop-blur-sm border border-instagram-purple/30 flex items-center justify-center">
              <motion.div
                className="text-8xl text-instagram text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                👨‍💻
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            About <span className="text-instagram">Me</span>
          </motion.h2>

          <motion.div
            className="space-y-4 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              My journey in tech spans over <span className="text-instagram-pink font-semibold">5 years</span>, 
              during which I've crafted innovative solutions for startups and enterprises alike.
            </p>
            
            <p>
              I specialize in creating <span className="text-instagram-orange font-semibold">immersive user experiences</span> 
              using React, Three.js, and modern animation libraries. My approach combines technical excellence 
              with creative design thinking to deliver products that not only function flawlessly but also 
              captivate users.
            </p>

            <p>
              When I'm not coding, you'll find me exploring the latest in <span className="text-instagram-purple font-semibold">3D web development</span>, 
              contributing to open-source projects, or sharing knowledge through technical writing and mentoring.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 py-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { number: "50+", label: "Projects" },
              { number: "5+", label: "Years Exp" },
              { number: "100+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-instagram mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
          >
            <Button variant="instagram" size="lg" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};