import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description: "An immersive portfolio experience with Three.js",
    longDescription: "A cutting-edge portfolio website featuring 3D animations, particle systems, and smooth transitions. Built with React, Three.js, and Framer Motion to create an engaging user experience that showcases projects in a unique, interactive way.",
    technologies: ["React", "Three.js", "TypeScript", "Framer Motion"],
    imageUrl: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Real-time analytics dashboard for online stores",
    longDescription: "A comprehensive dashboard for e-commerce businesses featuring real-time analytics, inventory management, and customer insights. Built with modern technologies for optimal performance and user experience.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Chart.js"],
    imageUrl: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "GPT-powered content creation platform",
    longDescription: "An intelligent content generation platform that helps users create high-quality content using advanced AI models. Features include template customization, real-time editing, and export capabilities.",
    technologies: ["Vue.js", "OpenAI API", "Node.js", "MongoDB"],
    imageUrl: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application",
    longDescription: "A comprehensive fitness tracking app with workout planning, progress monitoring, and social features. Includes wearable device integration and personalized coaching recommendations.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    imageUrl: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-2xl w-full bg-card rounded-2xl border border-instagram-purple/30 overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-instagram-purple/30 hover:bg-instagram-purple/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-instagram-purple/20 to-instagram-orange/20">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            🚀
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-instagram">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-instagram-gradient text-white font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <Button variant="instagram" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.div
        className="project-card p-6 rounded-2xl cursor-pointer group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Image */}
        <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-instagram-purple/20 to-instagram-orange/20">
          <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
            🚀
          </div>
          {project.featured && (
            <div className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-instagram-gradient text-white font-bold">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold group-hover:text-instagram transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-instagram-purple/20 text-instagram-purple">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" asChild onClick={(e) => e.stopPropagation()}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild onClick={(e) => e.stopPropagation()}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-blob" style={{ 
          top: '30%', 
          left: '5%', 
          animationDelay: '-12s',
          width: '400px',
          height: '400px'
        }}></div>
        <div className="gradient-blob" style={{ 
          top: '60%', 
          right: '5%', 
          animationDelay: '-6s',
          width: '300px',
          height: '300px'
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
            Featured <span className="text-instagram">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="outline" size="lg" className="border-instagram-purple text-instagram-purple hover:bg-instagram-purple hover:text-white">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};