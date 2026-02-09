import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const awards = [
  { title: "DataVista YUKTI '25 - Third Position", issuer: "Thiagarajar School of Management", date: "Feb 2025", color: "primary" as const },
  { title: "Best Research Paper Award - MI-IRICT 2024", issuer: "MAHSA University, Malaysia", date: "Nov 2024", color: "warm" as const },
  { title: "IEEE International Innovation Challenge – Honorable Mention", issuer: "IEEE YESIST'12, Tunisia", date: "Sep 2024", color: "accent" as const },
  { title: "30-Hours Hackathon - First Position", issuer: "Hack The Mountain 5.0", date: "Sep 2024", color: "primary" as const },
  { title: "AI/ML Project Presentation - III Prize", issuer: "APOGEE 2024 - BITS Pilani", date: "Apr 2024", color: "accent" as const },
  { title: "Project Presentation - First Position", issuer: "SKIT - YESIST'12", date: "Mar 2024", color: "warm" as const },
];

const colorVars = {
  primary: { css: "--primary", text: "text-primary" },
  accent: { css: "--accent", text: "text-accent" },
  warm: { css: "--warm", text: "text-warm" },
};

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
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-[20%] left-[20%] w-[350px] h-[350px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "hsl(var(--warm))" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading label="Recognition" title="Awards & Achievements" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {awards.map((award, i) => {
            const colors = colorVars[award.color];
            return (
              <motion.div
                key={award.title}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="rounded-xl p-5 group relative overflow-hidden backdrop-blur-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, hsl(var(${colors.css}) / 0.06), hsl(var(--card) / 0.5))`,
                  border: `1px solid hsl(var(${colors.css}) / 0.15)`,
                }}
              >
                {/* Background number */}
                <span
                  className="absolute top-2 right-3 text-6xl font-bold font-mono select-none"
                  style={{ color: `hsl(var(${colors.css}) / 0.04)` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Trophy className="w-5 h-5 mb-3" style={{ color: `hsl(var(${colors.css}))` }} />
                  </motion.div>
                  <h4 className={`text-foreground font-semibold text-sm mb-1 group-hover:${colors.text} transition-colors duration-300`}>
                    {award.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">{award.issuer}</p>
                  <p className="text-muted-foreground text-xs font-mono mt-1">{award.date}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.08))",
              border: "1px solid hsl(var(--primary) / 0.15)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-warm" />
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
