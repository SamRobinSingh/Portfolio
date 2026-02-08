import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Featured Work</h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group glass rounded-xl p-6 hover:glow-border transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-foreground font-semibold text-lg leading-tight">{project.title}</h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono">
                    {t}
                  </span>
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
