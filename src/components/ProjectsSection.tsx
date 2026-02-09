import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Railway Grievance Management System",
    tech: ["Python", "JavaScript", "FastAPI", "Grafana", "Gemini AI"],
    description: "AI-powered grievance classification platform to automatically categorize railway complaints in real time with Gemini AI chatbot and Power BI dashboards.",
  },
  {
    title: "Speech Synthesis AI Framework",
    tech: ["Whisper", "LLaMA 3.2", "Kokoro TTS", "Python"],
    description: "Real-time conversational AI framework with voice-based interaction — Speech-to-Text via Whisper, context-aware generation with LLaMA, and speech synthesis via Kokoro TTS.",
  },
  {
    title: "FinCortex",
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    description: "Fraud detection model using 6.3M-transaction dataset achieving 96% precision, 80% recall, and 87% F1-score for TRANSFER and CASH_OUT fraud patterns.",
  },
  {
    title: "AgriSense",
    tech: ["Python", "TensorFlow", "PyTorch", "Keras"],
    description: "CNN-based plant disease classification system to detect leaf diseases and recommend solutions with real-time inference pipelines.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, rotateX: 5 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 70% 50%, hsl(var(--primary) / 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading label="Projects" title="Featured Work" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
          style={{ perspective: 1000 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              whileHover={{
                y: -6,
                boxShadow: "0 0 30px hsl(var(--glow) / 0.15), 0 15px 50px hsl(220 20% 0% / 0.4)",
              }}
              className="group glass-hover rounded-xl p-6 flex flex-col relative overflow-hidden"
            >
              {/* Shimmer line on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
                }}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />

              <div className="flex items-start justify-between mb-3">
                <h4 className="text-foreground font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </motion.div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <motion.span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + idx * 0.05 }}
                    whileHover={{ backgroundColor: "hsl(var(--primary) / 0.25)" }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
