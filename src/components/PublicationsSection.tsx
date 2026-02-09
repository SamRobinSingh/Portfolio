import { motion } from "framer-motion";
import { FileText, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding relative">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Research" title="Publications & Patent" />

        {/* Patent — featured with accent glow */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          whileHover={{ y: -3 }}
          className="rounded-xl p-6 mb-6 relative overflow-hidden backdrop-blur-xl transition-all duration-500"
          style={{
            background: "linear-gradient(135deg, hsl(var(--warm) / 0.1), hsl(var(--accent) / 0.05), hsl(var(--card) / 0.6))",
            border: "1px solid hsl(var(--warm) / 0.25)",
          }}
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{ border: "1px solid hsl(var(--warm) / 0.3)" }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Award className="w-5 h-5 text-warm" />
              </motion.div>
              <span className="font-mono text-xs uppercase tracking-wider text-warm">Patent</span>
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
              color: "primary" as const,
            },
            {
              title: "XR Education",
              venue: "TIJER – Impact Factor: 8.57",
              detail: "Extended Reality (XR) advancements in education for immersive learning environments.",
              color: "accent" as const,
            },
          ].map((pub, i) => {
            const colorVar = pub.color === "primary" ? "--primary" : "--accent";
            return (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                whileHover={{ x: 4 }}
                className="glass-hover rounded-xl p-6 relative overflow-hidden"
              >
                {/* Left color accent line */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full"
                  style={{ background: `hsl(var(${colorVar}))` }}
                />
                <div className="pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4" style={{ color: `hsl(var(${colorVar}))` }} />
                    <span className="font-mono text-xs text-muted-foreground">{pub.venue}</span>
                  </div>
                  <h4 className="text-foreground font-semibold mb-1">{pub.title}</h4>
                  <p className="text-muted-foreground text-sm">{pub.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
