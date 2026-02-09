import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Pangun Technologies",
    role: "Programming Intern (Remote)",
    period: "June 2025 – Present",
    points: [
      "Architected modular frontend and backend components for a web-based ERP application.",
      "Engineered core business logic using Java and Groovy with dynamic Freemarker template UIs.",
      "Integrated LLMs and SLMs with query storage to automate intelligent workflows.",
      "Developed AI-driven modules for LCM, FEMA, and RAMS using RAG for context-aware accuracy.",
    ],
  },
  {
    company: "Edge Matrix Corporation",
    role: "Artificial Intelligence Intern (Hybrid)",
    period: "Jan 2024 – Mar 2024",
    points: [
      "Developed real-time object detection solutions using TensorFlow for edge AI applications.",
      "Deployed deep learning models on Raspberry Pi and Jetson Nano with low-latency inference.",
      "Leveraged TensorFlow Lite, OpenCV, and OCR for detection, text recognition, and video streaming.",
    ],
  },
  {
    company: "Quantanics TechServ Pvt Ltd",
    role: "AI and IoT Intern (Hybrid)",
    period: "Nov 2023 – Mar 2024",
    points: [
      "Developed IoT visualization dashboards using Grafana with MQTT for real-time monitoring.",
      "Integrated real-time SQL databases for efficient storage and retrieval of IoT sensor data.",
      "Simulated DoS attacks using sample bots to assess and improve system resilience.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Experience" title="Work History" />

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-[19px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--border)), hsl(var(--primary) / 0.5))" }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12"
              >
                {/* Animated timeline dot */}
                <motion.div
                  className="absolute left-2.5 top-1 w-4 h-4 rounded-full border-2 border-primary"
                  initial={{ scale: 0, backgroundColor: "hsl(var(--background))" }}
                  whileInView={{ scale: 1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                <motion.div
                  className="glass-hover rounded-xl p-6"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <div>
                      <h4 className="text-foreground font-semibold text-lg flex items-center gap-2">
                        <motion.div whileHover={{ rotate: 15 }}>
                          <Briefcase className="w-4 h-4 text-primary" />
                        </motion.div>
                        {exp.company}
                      </h4>
                      <p className="text-primary font-mono text-sm">{exp.role}</p>
                    </div>
                    <span className="text-muted-foreground text-xs font-mono shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground text-sm flex gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.08 }}
                      >
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
