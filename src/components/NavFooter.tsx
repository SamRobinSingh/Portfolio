import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#publications", label: "Research" },
    { href: "#awards", label: "Awards" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/50 shadow-lg shadow-background/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-bold text-foreground text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SRS<span className="text-primary">.</span>
        </motion.a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
        <motion.a
          href="mailto:samrobinsinghe303@gmail.com"
          className="text-sm px-4 py-1.5 rounded-lg font-semibold transition-all"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            color: "hsl(var(--primary-foreground))",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--glow) / 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </div>
    </motion.nav>
  );
};

const FooterSection = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative py-12 px-4">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { href: "https://linkedin.com", icon: Linkedin, color: "hsl(var(--primary))" },
            { href: "https://github.com", icon: Github, color: "hsl(var(--accent))" },
            { href: "mailto:samrobinsinghe303@gmail.com", icon: Mail, color: "hsl(var(--warm))" },
          ].map((s) => (
            <motion.a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground transition-colors"
              whileHover={{ scale: 1.2, y: -2, color: s.color }}
            >
              <s.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
        <p className="text-muted-foreground text-sm font-mono">
          © 2025 Sam Robin Singh E. Built with passion for AI.
        </p>
      </div>

      {/* Gradient back to top */}
      <motion.a
        href="#"
        className="fixed bottom-6 right-6 p-3 rounded-full z-40 transition-all"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.15))",
          border: "1px solid hsl(var(--primary) / 0.3)",
          backdropFilter: "blur(12px)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(var(--glow) / 0.3)" }}
      >
        <ArrowUp className="w-4 h-4 text-primary" />
      </motion.a>
    </footer>
  );
};

export { Navbar, FooterSection };
