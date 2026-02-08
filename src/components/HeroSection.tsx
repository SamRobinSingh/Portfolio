import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary tracking-widest uppercase text-sm mb-4">
            AI & Machine Learning Engineer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Sam Robin</span>
            <br />
            <span className="text-foreground">Singh E</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Building end-to-end AI solutions — from deep learning & computer vision
            to edge deployment & intelligent automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <a href="mailto:samrobinsinghe303@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> samrobinsinghe303@gmail.com
          </a>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +91 9360877226
          </span>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Tirunelveli, India
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow-border transition-all">
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:glow-border transition-all">
            <Github className="w-5 h-5 text-foreground" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="animate-float block">
            <ChevronDown className="w-6 h-6 text-primary animate-pulse-glow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
