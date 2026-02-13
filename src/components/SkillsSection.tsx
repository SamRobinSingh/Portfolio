import { motion, useMotionValue, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Skill logo URLs from devicon CDN
const skillLogos: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  R: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  Julia: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Groovy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  PyTorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  "Apache Spark": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  "Apache Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
};

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
    hover: "hsl(var(--primary) / 0.2)",
    pillBg: "hsl(var(--primary) / 0.1)",
    pillText: "hsl(var(--primary))",
    glow: "hsl(var(--primary) / 0.15)",
  },
  accent: {
    text: "text-accent",
    hover: "hsl(var(--accent) / 0.2)",
    pillBg: "hsl(var(--accent) / 0.1)",
    pillText: "hsl(var(--accent))",
    glow: "hsl(var(--accent) / 0.15)",
  },
  warm: {
    text: "text-warm",
    hover: "hsl(var(--warm) / 0.2)",
    pillBg: "hsl(var(--warm) / 0.1)",
    pillText: "hsl(var(--warm))",
    glow: "hsl(var(--warm) / 0.15)",
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
  hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: 8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const skillPill = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
  show: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
};

const SkillCard = ({ category }: { category: typeof skillCategories[0] }) => {
  const colors = accentColors[category.accent];
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [5, -5]);
  const rotateY = useTransform(x, [-80, 80], [-5, 5]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardVariant}
      className="glass-hover rounded-xl p-6"
      style={{
        perspective: "600px",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{
        boxShadow: `0 15px 50px ${colors.glow}`,
        y: -4,
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <motion.span
          className="text-lg"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        >
          {category.icon}
        </motion.span>
        <h4 className={`font-mono text-xs tracking-wider uppercase ${colors.text}`}>
          {category.title}
        </h4>
      </div>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {category.skills.map((skill) => {
          const logo = skillLogos[skill];
          return (
            <motion.span
              key={skill}
              variants={skillPill}
              className="group relative flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-mono cursor-default border"
              style={{
                background: colors.pillBg,
                color: colors.pillText,
                borderColor: `${colors.pillText}20`,
                perspective: "400px",
              }}
              whileHover={{
                scale: 1.15,
                backgroundColor: colors.hover,
                rotateY: 10,
                rotateX: -6,
                boxShadow: `0 6px 25px ${colors.pillText}30`,
                transition: { duration: 0.3 },
              }}
            >
              {logo && (
                <motion.img
                  src={logo}
                  alt={skill}
                  className="w-4 h-4 flex-shrink-0"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              {skill}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

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
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;