import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Work History</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />

                <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <div>
                      <h4 className="text-foreground font-semibold text-lg flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {exp.company}
                      </h4>
                      <p className="text-primary font-mono text-sm">{exp.role}</p>
                    </div>
                    <span className="text-muted-foreground text-xs font-mono shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
