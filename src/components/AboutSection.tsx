import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Building Intelligence</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AI & Machine Learning Engineer with strong expertise in Deep Learning, Computer Vision, NLP, and Data Analytics. 
            Skilled in building end-to-end AI solutions from data preprocessing and model training to deployment and monitoring. 
            Experienced in developing scalable enterprise applications using Java, Groovy, FastAPI, and integrating LLMs/SLMs 
            with Retrieval-Augmented Generation (RAG) for intelligent automation. Proven ability in deploying optimized models 
            on edge devices (Jetson Nano, Raspberry Pi) using TensorFlow Lite, OpenCV, and OCR.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 glass rounded-xl p-6 glow-border"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-sm text-primary">Education</span>
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
