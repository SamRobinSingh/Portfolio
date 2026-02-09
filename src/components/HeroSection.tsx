import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>

      {/* Colored ambient blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px]"
          style={{ background: "hsl(var(--primary))" }}
        />
        <div
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: "hsl(var(--accent))" }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full opacity-[0.04] blur-[80px]"
          style={{ background: "hsl(var(--warm))" }}
        />
      </div>

      {/* Animated particles */}
      <ParticleField count={50} />

      {/* Radial glow behind text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--accent) / 0.03) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <motion.p
            className="font-mono tracking-widest uppercase text-sm mb-4"
            style={{ color: "hsl(var(--accent))" }}
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            AI & Machine Learning Engineer
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <motion.span
              className="text-gradient-animated inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sam Robin
            </motion.span>
            <br />
            <motion.span
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Singh E
            </motion.span>
          </h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Building end-to-end AI solutions — from deep learning & computer vision
            to edge deployment & intelligent automation.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <motion.a
            href="mailto:samrobinsinghe303@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" /> samrobinsinghe303@gmail.com
          </motion.a>
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          {[
            { href: "https://linkedin.com", icon: Linkedin, color: "hsl(var(--primary))" },
            { href: "https://github.com", icon: Github, color: "hsl(var(--accent))" },
          ].map((social, i) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary transition-all duration-300"
              whileHover={{
                scale: 1.15,
                boxShadow: `0 0 20px ${social.color}40`,
                borderColor: social.color,
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <social.icon className="w-5 h-5 text-foreground" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
