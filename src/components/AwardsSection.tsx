import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  { title: "DataVista YUKTI '25 - Third Position", issuer: "Thiagarajar School of Management", date: "Feb 2025" },
  { title: "Best Research Paper Award - MI-IRICT 2024", issuer: "MAHSA University, Malaysia", date: "Nov 2024" },
  { title: "IEEE International Innovation Challenge – Honorable Mention", issuer: "IEEE YESIST'12, Tunisia", date: "Sep 2024" },
  { title: "30-Hours Hackathon - First Position", issuer: "Hack The Mountain 5.0", date: "Sep 2024" },
  { title: "AI/ML Project Presentation - III Prize", issuer: "APOGEE 2024 - BITS Pilani", date: "Apr 2024" },
  { title: "Project Presentation - First Position", issuer: "SKIT - YESIST'12", date: "Mar 2024" },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Recognition</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Awards & Achievements</h3>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-5 hover:glow-border transition-all group"
            >
              <Trophy className="w-4 h-4 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-foreground font-semibold text-sm mb-1">{award.title}</h4>
              <p className="text-muted-foreground text-xs">{award.issuer}</p>
              <p className="text-muted-foreground text-xs font-mono mt-1">{award.date}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-muted-foreground text-sm font-mono"
        >
          750+ problems solved on LeetCode, CodeChef & HackerRank
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
