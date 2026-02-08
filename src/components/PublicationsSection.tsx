import { motion } from "framer-motion";
import { FileText, Award, Trophy } from "lucide-react";

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Research</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Publications & Patent</h3>
        </motion.div>

        {/* Patent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 mb-6 glow-border"
        >
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary uppercase tracking-wider">Patent</span>
          </div>
          <h4 className="text-foreground font-semibold text-lg mb-2">AI Driven Autonomous Wheelchair</h4>
          <p className="text-muted-foreground text-sm mb-2">Application No.: 202541066899 A · Published: 25/07/2025</p>
          <p className="text-muted-foreground text-sm">
            AI-enabled autonomous wheelchair system using ML, sensor fusion, and computer vision for intelligent navigation and obstacle avoidance.
          </p>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all"
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
