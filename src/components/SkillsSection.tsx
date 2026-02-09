import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: ["Python", "R", "Julia", "SQL", "C", "Java", "Groovy", "Git", "Flask", "FastAPI", "HTML", "CSS"],
    icon: "⚡",
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "NLTK", "SpaCy", "Deep Learning", "Computer Vision", "NLP"],
    icon: "🧠",
  },
  {
    title: "Data & Big Data",
    skills: ["Pandas", "NumPy", "Apache Spark", "Apache Kafka", "PostgreSQL", "MongoDB"],
    icon: "📊",
  },
  {
    title: "Cloud & MLOps",
    skills: ["AWS", "GCP", "Docker", "MLflow", "DVC", "CI/CD", "Model Monitoring"],
    icon: "☁️",
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Grafana", "Tableau", "Google Data Studio", "Google Analytics"],
    icon: "📈",
  },
];

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
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, hsl(var(--primary) / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading label="Skills" title="Tech Arsenal" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariant}
              whileHover={{
                y: -4,
                boxShadow: "0 0 25px hsl(var(--glow) / 0.15), 0 10px 40px hsl(220 20% 0% / 0.3)",
              }}
              className="glass-hover rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{category.icon}</span>
                <h4 className="font-mono text-primary text-xs tracking-wider uppercase">{category.title}</h4>
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
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-mono cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
