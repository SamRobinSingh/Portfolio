import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import projectRailway from "@/assets/project-railway.jpg";
import projectSpeech from "@/assets/project-speech.jpg";
import projectFincortex from "@/assets/project-fincortex.jpg";
import projectAgrisense from "@/assets/project-agrisense.jpg";

const projects = [
  {
    title: "Railway Grievance Management System",
    tech: ["Python", "JavaScript", "FastAPI", "Grafana", "Gemini AI"],
    description: "AI-powered grievance classification platform to automatically categorize railway complaints in real time with Gemini AI chatbot and Power BI dashboards.",
    accent: "primary" as const,
    image: projectRailway,
  },
  {
    title: "Speech Synthesis AI Framework",
    tech: ["Whisper", "LLaMA 3.2", "Kokoro TTS", "Python"],
    description: "Real-time conversational AI framework with voice-based interaction — Speech-to-Text via Whisper, context-aware generation with LLaMA, and speech synthesis via Kokoro TTS.",
    accent: "accent" as const,
    image: projectSpeech,
  },
  {
    title: "FinCortex",
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    description: "Fraud detection model using 6.3M-transaction dataset achieving 96% precision, 80% recall, and 87% F1-score for TRANSFER and CASH_OUT fraud patterns.",
    accent: "warm" as const,
    image: projectFincortex,
  },
  {
    title: "AgriSense",
    tech: ["Python", "TensorFlow", "PyTorch", "Keras"],
    description: "CNN-based plant disease classification system to detect leaf diseases and recommend solutions with real-time inference pipelines.",
    accent: "primary" as const,
    image: projectAgrisense,
  },
];

const accentMap = {
  primary: {
    gradient: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--card) / 0.5))",
    border: "hsl(var(--primary) / 0.2)",
    shimmer: "hsl(var(--primary) / 0.5)",
    pill: "hsl(var(--primary) / 0.12)",
    pillText: "hsl(var(--primary))",
    overlay: "hsl(var(--primary) / 0.15)",
  },
  accent: {
    gradient: "linear-gradient(135deg, hsl(var(--accent) / 0.08), hsl(var(--card) / 0.5))",
    border: "hsl(var(--accent) / 0.2)",
    shimmer: "hsl(var(--accent) / 0.5)",
    pill: "hsl(var(--accent) / 0.12)",
    pillText: "hsl(var(--accent))",
    overlay: "hsl(var(--accent) / 0.15)",
  },
  warm: {
    gradient: "linear-gradient(135deg, hsl(var(--warm) / 0.08), hsl(var(--card) / 0.5))",
    border: "hsl(var(--warm) / 0.2)",
    shimmer: "hsl(var(--warm) / 0.5)",
    pill: "hsl(var(--warm) / 0.12)",
    pillText: "hsl(var(--warm))",
    overlay: "hsl(var(--warm) / 0.15)",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading label="Projects" title="Featured Work" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => {
            const colors = accentMap[project.accent];
            return (
              <motion.div
                key={project.title}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="group rounded-xl flex flex-col relative overflow-hidden backdrop-blur-xl transition-all duration-500 cursor-pointer"
                style={{
                  background: colors.gradient,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {/* Top shimmer line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px z-10"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.shimmer}, transparent)`,
                  }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                {/* Project Image */}
                <div className="relative h-44 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, hsl(var(--card)) 0%, ${colors.overlay} 50%, transparent 100%)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-foreground font-semibold text-lg leading-tight">
                      {project.title}
                    </h4>
                    <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1" />
                    </motion.div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <motion.span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full font-mono border transition-all"
                        style={{
                          background: colors.pill,
                          color: colors.pillText,
                          borderColor: `${colors.pillText}20`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
