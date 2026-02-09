import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const awards = [
  { title: "DataVista YUKTI '25 - Third Position", issuer: "Thiagarajar School of Management", date: "Feb 2025" },
  { title: "Best Research Paper Award - MI-IRICT 2024", issuer: "MAHSA University, Malaysia", date: "Nov 2024" },
  { title: "IEEE International Innovation Challenge – Honorable Mention", issuer: "IEEE YESIST'12, Tunisia", date: "Sep 2024" },
  { title: "30-Hours Hackathon - First Position", issuer: "Hack The Mountain 5.0", date: "Sep 2024" },
  { title: "AI/ML Project Presentation - III Prize", issuer: "APOGEE 2024 - BITS Pilani", date: "Apr 2024" },
  { title: "Project Presentation - First Position", issuer: "SKIT - YESIST'12", date: "Mar 2024" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding relative">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 30% 60%, hsl(var(--primary) / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading label="Recognition" title="Awards & Achievements" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              variants={cardVariant}
              whileHover={{
                y: -4,
                boxShadow: "0 0 25px hsl(var(--glow) / 0.15), 0 10px 30px hsl(220 20% 0% / 0.3)",
              }}
              className="glass-hover rounded-xl p-5 group relative overflow-hidden"
            >
              {/* Subtle background number */}
              <span className="absolute top-2 right-3 text-6xl font-bold text-primary/[0.03] font-mono select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 20, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Trophy className="w-5 h-5 text-primary mb-3" />
                </motion.div>
                <h4 className="text-foreground font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                  {award.title}
                </h4>
                <p className="text-muted-foreground text-xs">{award.issuer}</p>
                <p className="text-muted-foreground text-xs font-mono mt-1">{award.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-hover rounded-full px-6 py-3"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground text-sm font-mono">
              750+ problems solved on LeetCode, CodeChef & HackerRank
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
