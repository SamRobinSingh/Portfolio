import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 750, suffix: "+", label: "Problems Solved", color: "primary" as const },
  { value: 3, suffix: "+", label: "Internships", color: "accent" as const },
  { value: 6, suffix: "+", label: "Awards", color: "warm" as const },
  { value: 4, suffix: "+", label: "Projects", color: "primary" as const },
];

const colorMap = {
  primary: "text-primary",
  accent: "text-accent",
  warm: "text-warm",
};

const bgColorMap = {
  primary: "hsl(var(--primary) / 0.06)",
  accent: "hsl(var(--accent) / 0.06)",
  warm: "hsl(var(--warm) / 0.06)",
};

const borderColorMap = {
  primary: "hsl(var(--primary) / 0.15)",
  accent: "hsl(var(--accent) / 0.15)",
  warm: "hsl(var(--warm) / 0.15)",
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading label="About" title="Building Intelligence" />

        <motion.p
          className="text-muted-foreground text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          AI & Machine Learning Engineer with strong expertise in Deep Learning, Computer Vision, NLP, and Data Analytics.
          Skilled in building end-to-end AI solutions from data preprocessing and model training to deployment and monitoring.
          Experienced in developing scalable enterprise applications using Java, Groovy, FastAPI, and integrating LLMs/SLMs
          with Retrieval-Augmented Generation (RAG) for intelligent automation. Proven ability in deploying optimized models
          on edge devices (Jetson Nano, Raspberry Pi) using TensorFlow Lite, OpenCV, and OCR.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-xl p-5 text-center backdrop-blur-xl transition-all duration-500"
              style={{
                background: bgColorMap[stat.color],
                border: `1px solid ${borderColorMap[stat.color]}`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${colorMap[stat.color]}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-accent rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: "hsl(var(--accent))" }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-sm" style={{ color: "hsl(var(--accent))" }}>Education</span>
          </div>
          <h4 className="text-foreground font-semibold text-lg">B.Tech in AI & Data Science</h4>
          <p className="text-muted-foreground text-sm">Francis Xavier Engineering College, Tirunelveli</p>
          <p className="text-muted-foreground text-sm mt-1">Minor in Business Analytics · Nov 2022 — May 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
