import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const LeetCodeIconSmall = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const CodeChefIconSmall = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.007 0c-.787.031-1.515.37-2.222.685a12.27 12.27 0 0 1-1.864.703c-.635.182-1.303.252-1.95.352-.588.092-1.196.154-1.735.418a2.39 2.39 0 0 0-1.066.957c-.348.586-.392 1.29-.378 1.967.014.665.073 1.337.243 1.982.17.642.441 1.252.757 1.832.607 1.12 1.42 2.098 2.26 3.03a17.2 17.2 0 0 0 2.901 2.684c.467.337.952.644 1.467.895.39.19.794.352 1.216.432h.001c.104-.758.206-1.517.308-2.275l-.064-.052c-.346-.281-.684-.576-1.001-.895-.596-.6-1.142-1.257-1.576-1.988-.36-.607-.636-1.262-.796-1.954-.08-.347-.125-.704-.125-1.06 0-.194.012-.388.05-.578a1.77 1.77 0 0 1 .218-.57c.185-.31.461-.54.778-.669.253-.102.521-.151.79-.183a9.4 9.4 0 0 1 1.281-.055 8.06 8.06 0 0 1 1.185.112c.268.05.532.12.783.228.26.112.504.274.692.49.183.21.312.467.38.744.073.297.089.605.075.91a5.3 5.3 0 0 1-.199 1.215c-.155.49-.372.953-.635 1.386a8.82 8.82 0 0 1-1.268 1.596c-.26.26-.533.506-.82.728l.312 2.304c.639-.436 1.225-.94 1.759-1.5a11.1 11.1 0 0 0 2.073-3.014c.353-.72.637-1.478.815-2.264.143-.634.216-1.285.195-1.934-.02-.615-.127-1.24-.389-1.8a2.93 2.93 0 0 0-1.06-1.16c-.465-.296-1-.45-1.541-.527-.696-.099-1.4-.108-2.098-.189a12.698 12.698 0 0 1-1.962-.396C12.521.987 11.793.074 11.007 0zM8.31 18.876l-.065.48a7.3 7.3 0 0 0-.056.594c-.009.313.012.631.091.936.079.304.221.59.423.828.165.195.37.35.595.467.307.16.647.24.987.268.425.037.853-.002 1.267-.1a5.18 5.18 0 0 0 1.588-.68c.16-.111.31-.235.44-.377a1.55 1.55 0 0 0 .321-.516c.07-.192.09-.4.073-.603a1.95 1.95 0 0 0-.112-.48l-.064-.18c-.205.195-.432.367-.68.504a4.4 4.4 0 0 1-1.27.494 3.95 3.95 0 0 1-1.22.107 2.36 2.36 0 0 1-.754-.165 1.63 1.63 0 0 1-.53-.343 1.54 1.54 0 0 1-.323-.489 2.18 2.18 0 0 1-.145-.578l-.021-.213-.065-.48z" />
  </svg>
);

const HackerRankIconSmall = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701a.257.257 0 0 0 .172-.452L9.075 4.695a.257.257 0 0 0-.344 0L6.97 6.456a.257.257 0 0 0 .172.452h.7v10.185a.258.258 0 0 0 .258.258h2.168a.258.258 0 0 0 .258-.258v-3.876h4.074v3.876h-.7a.257.257 0 0 0-.173.453l1.761 1.76a.257.257 0 0 0 .344 0l1.761-1.76a.257.257 0 0 0-.172-.453h-.701V7.057a.258.258 0 0 0-.258-.258z" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileOpen) {
      const close = () => setMobileOpen(false);
      window.addEventListener("scroll", close);
      return () => window.removeEventListener("scroll", close);
    }
  }, [mobileOpen]);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#publications", label: "Research" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
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

        {/* Desktop links */}
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

        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Resume download in nav */}
          <motion.a
            href="components/Sam Robin Singh_CV.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 text-sm px-3.5 py-1.5 rounded-lg font-medium transition-all border"
            style={{
              borderColor: "hsl(var(--primary) / 0.3)",
              color: "hsl(var(--primary))",
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "hsl(var(--primary) / 0.6)",
              boxShadow: "0 0 20px hsl(var(--glow) / 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </motion.a>

          {/* Contact CTA */}
          <motion.a
            href="mailto:samrobinsinghe303@gmail.com"
            className="hidden md:inline-flex text-sm px-4 py-1.5 rounded-lg font-semibold transition-all"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
              color: "hsl(var(--primary-foreground))",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--glow) / 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="components/Sam Robin Singh_CV.pdf"
                download
                className="flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold text-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <footer className="relative py-16 px-4">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SRS<span className="text-primary">.</span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { href: "https://www.linkedin.com/in/sam-robin-singh-e-17a76324a/", icon: Linkedin, color: "hsl(var(--primary))" },
            { href: "https://github.com/SamRobinSingh", icon: Github, color: "hsl(var(--accent))" },
            { href: "mailto:samrobinsinghe303@gmail.com", icon: Mail, color: "hsl(var(--warm))" },
          ].map((s) => (
            <motion.a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-muted-foreground transition-all border"
              style={{ borderColor: "hsl(var(--border) / 0.5)" }}
              whileHover={{
                scale: 1.15,
                y: -3,
                color: s.color,
                borderColor: s.color,
                boxShadow: `0 0 20px ${s.color}30`,
              }}
            >
              <s.icon className="w-5 h-5" />
            </motion.a>
          ))}
          {/* Coding profiles */}
          {[
            { href: "https://leetcode.com/u/ss8764628/", icon: LeetCodeIconSmall, color: "hsl(37, 100%, 50%)" },
            { href: "https://www.codechef.com/users/samss8764628", icon: CodeChefIconSmall, color: "hsl(16, 80%, 55%)" },
            { href: "https://www.hackerrank.com/profile/ss8764628", icon: HackerRankIconSmall, color: "hsl(145, 70%, 45%)" },
          ].map((s) => (
            <motion.a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-muted-foreground transition-all border"
              style={{ borderColor: "hsl(var(--border) / 0.5)" }}
              whileHover={{
                scale: 1.15,
                y: -3,
                color: s.color,
                borderColor: s.color,
                boxShadow: `0 0 20px ${s.color}30`,
              }}
            >
              <s.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Resume link in footer */}
        <motion.a
          href="components/Sam Robin Singh_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-mono text-primary border mb-8 transition-all"
          style={{ borderColor: "hsl(var(--primary) / 0.25)" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px hsl(var(--glow) / 0.2)",
            borderColor: "hsl(var(--primary) / 0.5)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>

        <p className="text-muted-foreground text-sm font-mono">
          © {new Date().getFullYear()} Sam Robin Singh E.
        </p>
      </div>

      {/* Back to top */}
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