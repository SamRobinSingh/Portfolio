import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Navbar = () => {
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
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-bold text-foreground text-lg">
          SRS<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:samrobinsinghe303@gmail.com"
          className="text-sm px-4 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm font-mono">
          © 2025 Sam Robin Singh E. Built with passion for AI.
        </p>
      </div>
    </footer>
  );
};

export { Navbar, FooterSection };
