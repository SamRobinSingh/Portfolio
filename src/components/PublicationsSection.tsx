import { motion } from "framer-motion";
import { FileText, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Research" title="Publications & Patent" />

        {/* Patent — featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            boxShadow: "0 0 40px hsl(var(--glow) / 0.2), 0 10px 40px hsl(220 20% 0% / 0.3)",
          }}
          className="glass-hover rounded-xl p-6 mb-6 relative overflow-hidden"
        >
          {/* Animated glow border */}
          <motion.div
            className="absolute inset-0 rounded-xl border border-primary/30"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Award className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider">Patent</span>
            </div>
            <h4 className="text-foreground font-semibold text-lg mb-2">AI Driven Autonomous Wheelchair</h4>
            <p className="text-muted-foreground text-sm mb-2">Application No.: 202541066899 A · Published: 25/07/2025</p>
            <p className="text-muted-foreground text-sm">
              AI-enabled autonomous wheelchair system using ML, sensor fusion, and computer vision for intelligent navigation and obstacle avoidance.
            </p>
          </div>
        </motion.div>

        {/* Publications */}
        <div className="space-y-4">
          {[
            {
              title: "Financial Forecasting using Time Series Analysis, ARIMA and GARCH",
              venue: "MI-IRICT 2024",
              detail: "ARIMA, GARCH, and ML techniques for financial time series forecasting and volatility estimation.",
            },
            {
              title: "XR Education",
              venue: "TIJER – Impact Factor: 8.57",
              detail: "Extended Reality (XR) advancements in education for immersive learning environments.",
            },
          ].map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 4 }}
              className="glass-hover rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{pub.venue}</span>
              </div>
              <h4 className="text-foreground font-semibold mb-1">{pub.title}</h4>
              <p className="text-muted-foreground text-sm">{pub.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
