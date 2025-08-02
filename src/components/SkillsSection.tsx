import React from "react";
import { motion } from "framer-motion";

// CSS-based Skill Visualization
const SkillsAnimation = () => {
  const skills = [
    { name: "React", color: "bg-blue-400", position: "top-1/4 left-1/4" },
    { name: "Three.js", color: "bg-gray-800", position: "top-1/3 right-1/4" },
    { name: "TypeScript", color: "bg-blue-600", position: "top-1/2 left-1/6" },
    { name: "Node.js", color: "bg-green-500", position: "bottom-1/3 right-1/3" },
    { name: "Python", color: "bg-yellow-500", position: "bottom-1/4 left-1/3" },
    { name: "PostgreSQL", color: "bg-blue-700", position: "top-2/3 center" },
  ];

  return (
    <div className="relative h-96 bg-gradient-to-br from-background to-secondary/20 rounded-2xl overflow-hidden">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`absolute w-16 h-16 ${skill.color} ${skill.position} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            type: "spring",
            stiffness: 200 
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            transition: {
              y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 10 + index * 2, repeat: Infinity, ease: "linear" },
            }
          }}
          whileHover={{ scale: 1.2, z: 10 }}
        >
          <span className="text-center leading-none">
            {skill.name.split('').slice(0, 2).join('')}
          </span>
        </motion.div>
      ))}
      
      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-instagram-gradient rounded-full opacity-20 blur-2xl animate-pulse" />
    </div>
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

        {/* CSS-based Skills Visualization */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <SkillsAnimation />
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