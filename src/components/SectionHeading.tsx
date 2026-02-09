import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, align = "left" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className={align === "center" ? "text-center" : ""}
    >
      <motion.h2
        className="font-mono text-sm tracking-widest uppercase mb-3 inline-flex items-center gap-3"
        style={{ color: "hsl(var(--accent))" }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.span
          className="h-px inline-block"
          style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        {label}
      </motion.h2>
      <motion.h3
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <span className="text-gradient">{title}</span>
      </motion.h3>
    </motion.div>
  );
};

export default SectionHeading;
