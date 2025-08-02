import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

// Simplified 3D Skill Icons Component
const SkillOrb = ({ position, color, delay }: { 
  position: [number, number, number]; 
  color: string;
  delay: number;
}) => {
  return (
    <Float speed={1 + delay} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const Skills3D = () => {
  const skills = [
    { color: "#61DAFB", position: [-3, 2, 0] as [number, number, number] },
    { color: "#000000", position: [3, 1, 0] as [number, number, number] },
    { color: "#3178C6", position: [0, 3, -2] as [number, number, number] },
    { color: "#339933", position: [-2, -1, 1] as [number, number, number] },
    { color: "#3776AB", position: [2, -2, 0] as [number, number, number] },
    { color: "#336791", position: [0, 0, 2] as [number, number, number] },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <SkillOrb
          key={index}
          position={skill.position}
          color={skill.color}
          delay={index * 0.2}
        />
      ))}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#dc2743" />
    </>
  );
};

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
      color: "from-instagram-orange to-instagram-red"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      color: "from-instagram-pink to-instagram-purple"
    },
    {
      title: "Tools & DevOps",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Webpack", "Vite"],
      color: "from-instagram-purple to-instagram-deep-purple"
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-blob" style={{ 
          top: '20%', 
          right: '10%', 
          animationDelay: '-8s',
          width: '350px',
          height: '350px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-instagram">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          className="h-96 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Canvas 
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => {
              gl.setClearColor('#000000', 0);
            }}
          >
            <Suspense fallback={null}>
              <Skills3D />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                autoRotate 
                autoRotateSpeed={2}
                enableDamping
                dampingFactor={0.05}
              />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-instagram-purple/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Category Title */}
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-bold mb-4`}>
                {category.title}
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-instagram-purple/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                    <div className="w-2 h-2 rounded-full bg-instagram-gradient"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};