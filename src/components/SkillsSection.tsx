import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: ["Python", "R", "Julia", "SQL", "C", "Java", "Groovy", "Git", "Flask", "FastAPI", "HTML", "CSS"],
    icon: "⚡",
    accent: "primary" as const,
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "NLTK", "SpaCy", "Deep Learning", "Computer Vision", "NLP"],
    icon: "🧠",
    accent: "accent" as const,
  },
  {
    title: "Data & Big Data",
    skills: ["Pandas", "NumPy", "Apache Spark", "Apache Kafka", "PostgreSQL", "MongoDB"],
    icon: "📊",
    accent: "warm" as const,
  },
  {
    title: "Cloud & MLOps",
    skills: ["AWS", "GCP", "Docker", "MLflow", "DVC", "CI/CD", "Model Monitoring"],
    icon: "☁️",
    accent: "primary" as const,
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Grafana", "Tableau", "Google Data Studio", "Google Analytics"],
    icon: "📈",
    accent: "accent" as const,
  },
];

const accentColors = {
  primary: {
    text: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/15",
    hover: "hsl(var(--primary) / 0.2)",
    pillBg: "hsl(var(--primary) / 0.1)",
    pillText: "hsl(var(--primary))",
  },
  accent: {
    text: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/15",
    hover: "hsl(var(--accent) / 0.2)",
    pillBg: "hsl(var(--accent) / 0.1)",
    pillText: "hsl(var(--accent))",
  },
  warm: {
    text: "text-warm",
    bg: "bg-warm/10",
    border: "border-warm/15",
    hover: "hsl(var(--warm) / 0.2)",
    pillBg: "hsl(var(--warm) / 0.1)",
    pillText: "hsl(var(--warm))",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const skillPill = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      {/* Multi-color ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "hsl(var(--primary))" }}
        />
        <div
          className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "hsl(var(--accent))" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading label="Skills" title="Tech Arsenal" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const colors = accentColors[category.accent];
            return (
              <motion.div
                key={category.title}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="glass-hover rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{category.icon}</span>
                  <h4 className={`font-mono text-xs tracking-wider uppercase ${colors.text}`}>{category.title}</h4>
                </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.04 } },
                  }}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillPill}
                      className="text-xs px-3 py-1.5 rounded-full font-mono cursor-default transition-all duration-300 border"
                      style={{
                        background: colors.pillBg,
                        color: colors.pillText,
                        borderColor: `${colors.pillText}20`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: colors.hover,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
