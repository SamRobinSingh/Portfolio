import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // YOUR GOOGLE APPS SCRIPT WEB APP URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxSfCs3YQ-y36PJWq1QJC3Nsa75KX70-DBKr-3-zQnuwNbLhnPoQz2mXCzRabpDi4zw7A/exec";

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for cross-origin Apps Script execution
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Since mode is 'no-cors', we won't get a standard response object, 
      // but if the catch block isn't triggered, the request was sent.
      toast({
        title: "Message Sent!",
        description: "Your information has been saved to the spreadsheet and an email notification was sent.",
      });

      // Clear the form
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem connecting to the service. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariant = {
    hidden: { opacity: 0, x: -30, rotateY: -15 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

      {/* Ambient animated background blobs */}
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
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative rounded-2xl overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: mousePos.x * 0.5,
              rotateX: -mousePos.y * 0.5,
            }}
          >
            {/* Background Glow layer */}
            <div
              className="absolute inset-0 rounded-2xl opacity-50"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), hsl(var(--warm) / 0.15))",
              }}
            />

            <div className="relative glass rounded-2xl p-8 md:p-12">
              {/* Interactive Shimmer Effect */}
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
                {/* Left Side: Text and Contact Info */}
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Let's Build Something <span className="text-gradient-animated">Amazing</span>
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Your message will be sent directly to my private Google Sheet and I will receive an instant notification in my Gmail.
                  </motion.p>

                  <div className="space-y-3">
                    {[
                      { label: "Email", value: "samrobinsinghe303@gmail.com", color: "hsl(var(--primary))" },
                      { label: "Phone", value: "+91 9360877226", color: "hsl(var(--accent))" },
                      { label: "Location", value: "Tirunelveli, India", color: "hsl(var(--warm))" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                        <span className="text-muted-foreground font-mono text-xs">{item.label}:</span>
                        <span className="text-foreground">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Contact Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {/* Name Input */}
                  <motion.div variants={inputVariant} custom={0} className="relative group">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:ring-1 focus:ring-primary/50"
                        style={{
                          background: "hsl(var(--card) / 0.6)",
                          border: "1px solid hsl(var(--border) / 0.5)",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={inputVariant} custom={1} className="relative group">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:ring-1 focus:ring-primary/50"
                        style={{
                          background: "hsl(var(--card) / 0.6)",
                          border: "1px solid hsl(var(--border) / 0.5)",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div variants={inputVariant} custom={2} className="relative group">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5 block">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 resize-none focus:ring-1 focus:ring-primary/50"
                        style={{
                          background: "hsl(var(--card) / 0.6)",
                          border: "1px solid hsl(var(--border) / 0.5)",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    variants={inputVariant}
                    custom={3}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 30px hsl(var(--glow) / 0.4), 0 10px 40px hsl(var(--glow) / 0.2)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;