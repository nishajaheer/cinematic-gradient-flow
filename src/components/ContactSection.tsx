import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle, Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const socials = [
    { icon: Github, url: "#", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, url: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Instagram, url: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Youtube, url: "#", label: "YouTube", color: "hover:text-red-400" },
    { icon: Twitter, url: "#", label: "Twitter", color: "hover:text-blue-300" },
  ];

  return (
    <section id="contact" className="relative py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-blob" style={{ 
          top: '10%', 
          left: '10%', 
          animationDelay: '-18s',
          width: '350px',
          height: '350px'
        }}></div>
        <div className="gradient-blob" style={{ 
          bottom: '10%', 
          right: '10%', 
          animationDelay: '-25s',
          width: '300px',
          height: '300px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="text-instagram">Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card/50 border-instagram-purple/30 focus:border-instagram-purple transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card/50 border-instagram-purple/30 focus:border-instagram-purple transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card/50 border-instagram-purple/30 focus:border-instagram-purple transition-colors resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  type="submit"
                  variant="instagram"
                  size="lg"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full group relative overflow-hidden"
                >
                  <motion.div
                    className="flex items-center justify-center"
                    animate={{
                      scale: isSubmitted ? 0 : 1,
                      opacity: isSubmitted ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isSubmitted ? 1 : 0,
                      opacity: isSubmitted ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </motion.div>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-instagram-purple/30">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-instagram-gradient mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Me</h3>
                  <p className="text-muted-foreground">hello@yourportfolio.com</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. Let's discuss your project!
              </p>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-instagram-purple/30">
              <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
              <div className="grid grid-cols-5 gap-4">
                {socials.map(({ icon: Icon, url, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary/50 border border-instagram-purple/20 hover:border-instagram-purple/50 transition-colors ${color} group`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-instagram-purple/30">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                <span className="font-bold text-green-400">Available for Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new client work and exciting collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};