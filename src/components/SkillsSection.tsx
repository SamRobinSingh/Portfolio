import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: ["Python", "R", "Julia", "SQL", "C", "Java", "Groovy", "Git", "Flask", "FastAPI", "HTML", "CSS"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "NLTK", "SpaCy", "Deep Learning", "Computer Vision", "NLP"],
  },
  {
    title: "Data & Big Data",
    skills: ["Pandas", "NumPy", "Apache Spark", "Apache Kafka", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & MLOps",
    skills: ["AWS", "GCP", "Docker", "MLflow", "DVC", "CI/CD", "Model Monitoring"],
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Grafana", "Tableau", "Google Data Studio", "Google Analytics"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Tech Arsenal</h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-300"
            >
              <h4 className="font-mono text-primary text-xs tracking-wider uppercase mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-mono"
                  >
                    {skill}
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

export default SkillsSection;
