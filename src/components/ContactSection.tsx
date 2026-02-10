import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "samrobinsinghe303@gmail.com",
    href: "mailto:samrobinsinghe303@gmail.com",
    color: "hsl(var(--primary))",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9360877226",
    href: "tel:+919360877226",
    color: "hsl(var(--accent))",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tirunelveli, India",
    href: "https://maps.google.com/?q=Tirunelveli,India",
    color: "hsl(var(--warm))",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sam Robin Singh",
    href: "https://linkedin.com",
    color: "hsl(210, 80%, 55%)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com",
    color: "hsl(var(--accent))",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -30, rotateY: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ContactSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: "hsl(var(--primary))" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "hsl(var(--accent))" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading label="Contact" title="Get In Touch" />

        <div
          className="relative"
          style={{ perspective: "1200px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateY: mousePos.x * 0.5,
              rotateX: -mousePos.y * 0.5,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            {/* Card glow border */}
            <div
              className="absolute inset-0 rounded-2xl opacity-50"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), hsl(var(--warm) / 0.15))`,
                padding: "1px",
              }}
            />

            <div className="relative glass rounded-2xl p-8 md:p-12">
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.05) 45%, hsl(var(--accent) / 0.05) 50%, transparent 55%)",
                  backgroundSize: "250% 100%",
                }}
                animate={{ backgroundPosition: ["-100% 0", "200% 0"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10 grid md:grid-cols-2 gap-10">
                {/* Left: Message */}
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Let's Build Something{" "}
                    <span className="text-gradient-animated">Amazing</span>
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    I'm always open to discussing AI/ML projects, research collaborations,
                    or opportunities to build intelligent solutions. Feel free to reach out!
                  </motion.p>

                  {/* CTA Button */}
                  <motion.a
                    href="mailto:samrobinsinghe303@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px hsl(var(--glow) / 0.4), 0 10px 40px hsl(var(--glow) / 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Send className="w-4 h-4" />
                    Send a Message
                  </motion.a>
                </div>

                {/* Right: Contact links */}
                <motion.div
                  className="space-y-3"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {contactLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300"
                      style={{
                        background: "hsl(var(--card) / 0.5)",
                        border: "1px solid hsl(var(--border) / 0.5)",
                        perspective: "600px",
                      }}
                      variants={itemVariant}
                      custom={i}
                      whileHover={{
                        scale: 1.03,
                        rotateY: 5,
                        x: 8,
                        borderColor: link.color,
                        boxShadow: `0 0 20px ${link.color}25`,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="p-2.5 rounded-lg flex-shrink-0"
                        style={{
                          background: `${link.color}15`,
                          border: `1px solid ${link.color}25`,
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <link.icon className="w-4 h-4" style={{ color: link.color }} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{link.label}</p>
                        <p className="text-sm text-foreground truncate">{link.value}</p>
                      </div>
                      <ExternalLink
                        className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
