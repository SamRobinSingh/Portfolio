import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Send, X, Bot } from "lucide-react";

const CHAT_RESPONSES = [
  "Hey! I'm Sam's AI assistant 🤖 Ask me anything about his work!",
  "Sam specializes in AI/ML, Deep Learning, and Data Science.",
  "Check out the Projects section for Sam's latest work!",
  "Sam has published research in NLP and Computer Vision.",
  "Feel free to reach out via the Contact section below!",
  "Sam is open to collaborations and new opportunities!",
  "I'm just a portfolio bot, but Sam would love to chat with you directly! 😊",
];

const FloatingRobot = () => {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm Sam's robot assistant. Click to chat! 🤖", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const robotY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [80, 200, 350, 500, 650]);
  const robotRotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 5, -5]);
  const eyeGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth - 60;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) * 0.03);
      mouseY.set((e.clientY - centerY) * 0.03);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);

    setTimeout(() => {
      const response = CHAT_RESPONSES[Math.floor(Math.random() * CHAT_RESPONSES.length)];
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    }, 800);
  };

  return (
    <>
      {/* Robot */}
      <motion.div
        className="fixed right-4 z-40 pointer-events-auto cursor-pointer hidden lg:block"
        style={{ top: robotY, x: springX, rotateZ: robotRotateZ }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setChatOpen(!chatOpen)}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow aura */}
          <motion.div
            className="absolute -inset-6 rounded-full blur-2xl"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.1), transparent 70%)",
            }}
            animate={{ scale: isHovered ? 1.6 : 1, opacity: isHovered ? 0.9 : 0.5 }}
            transition={{ duration: 0.4 }}
          />

          {/* Robot SVG - Sleek mech design */}
          <motion.svg
            width="80"
            height="100"
            viewBox="0 0 80 100"
            fill="none"
            style={{ y: springY }}
            animate={{ scale: isHovered ? 1.12 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Antenna base */}
            <motion.line
              x1="40" y1="10" x2="40" y2="2"
              stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"
            />
            {/* Antenna orb */}
            <motion.circle
              cx="40" cy="2" r="3.5"
              fill="hsl(var(--primary))"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.7, 1.3, 0.7], filter: ["drop-shadow(0 0 2px hsl(var(--primary)))", "drop-shadow(0 0 8px hsl(var(--primary)))", "drop-shadow(0 0 2px hsl(var(--primary)))"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Head - rounded helmet */}
            <motion.rect
              x="14" y="10" width="52" height="34" rx="14"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary) / 0.6)" strokeWidth="2"
            />
            {/* Head inner glow line */}
            <rect x="18" y="12" width="44" height="2" rx="1" fill="hsl(var(--primary) / 0.2)" />

            {/* Visor */}
            <rect x="19" y="17" width="42" height="20" rx="8" fill="hsl(var(--background))" opacity="0.9" />
            {/* Visor glare */}
            <rect x="22" y="18" width="16" height="3" rx="1.5" fill="hsl(var(--primary) / 0.15)" />

            {/* Left Eye */}
            <motion.circle
              cx="30" cy="27" r="5"
              fill="hsl(var(--primary))"
              style={{ opacity: eyeGlow }}
              animate={isHovered ? { scale: [1, 1.4, 1], filter: ["drop-shadow(0 0 3px hsl(var(--primary)))", "drop-shadow(0 0 10px hsl(var(--primary)))", "drop-shadow(0 0 3px hsl(var(--primary)))"] } : {}}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
            />
            {/* Right Eye */}
            <motion.circle
              cx="50" cy="27" r="5"
              fill="hsl(var(--accent))"
              style={{ opacity: eyeGlow }}
              animate={isHovered ? { scale: [1, 1.4, 1], filter: ["drop-shadow(0 0 3px hsl(var(--accent)))", "drop-shadow(0 0 10px hsl(var(--accent)))", "drop-shadow(0 0 3px hsl(var(--accent)))"] } : {}}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0, delay: 0.15 }}
            />
            {/* Eye highlights */}
            <circle cx="28" cy="25" r="2" fill="white" opacity="0.6" />
            <circle cx="48" cy="25" r="2" fill="white" opacity="0.6" />

            {/* Mouth - LED bar */}
            <motion.rect
              x="32" y="33" width="16" height="2.5" rx="1.25"
              fill="hsl(var(--primary) / 0.7)"
              animate={isHovered ? { width: [16, 22, 16], x: [32, 29, 32] } : {}}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
            />

            {/* Neck */}
            <rect x="34" y="44" width="12" height="6" rx="3" fill="hsl(var(--muted))" />
            <rect x="36" y="45" width="8" height="1.5" rx="0.75" fill="hsl(var(--primary) / 0.2)" />

            {/* Body - armored torso */}
            <motion.rect
              x="16" y="50" width="48" height="32" rx="10"
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary) / 0.4)" strokeWidth="2"
            />
            {/* Chest panel */}
            <rect x="24" y="55" width="32" height="14" rx="5" fill="hsl(var(--background))" opacity="0.6" />
            
            {/* Core reactor */}
            <motion.circle
              cx="40" cy="62" r="4.5"
              fill="hsl(var(--primary))"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.85, 1.15, 0.85],
                filter: ["drop-shadow(0 0 4px hsl(var(--primary)))", "drop-shadow(0 0 12px hsl(var(--primary)))", "drop-shadow(0 0 4px hsl(var(--primary)))"],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <circle cx="40" cy="62" r="2" fill="white" opacity="0.4" />

            {/* Status LEDs */}
            <motion.circle cx="30" cy="76" r="2" fill="hsl(var(--primary) / 0.6)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} />
            <motion.circle cx="40" cy="76" r="2" fill="hsl(var(--accent) / 0.6)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} />
            <motion.circle cx="50" cy="76" r="2" fill="hsl(var(--warm) / 0.6)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }} />

            {/* Left arm */}
            <motion.rect
              x="5" y="52" width="9" height="24" rx="4.5"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5"
              animate={isHovered ? { rotate: [0, -20, 0], y: [0, -6, 0] } : {}}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
              style={{ transformOrigin: "9px 52px" }}
            />
            {/* Left hand */}
            <circle cx="9" cy="78" r="4" fill="hsl(var(--muted))" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" />

            {/* Right arm */}
            <motion.rect
              x="66" y="52" width="9" height="24" rx="4.5"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--primary) / 0.3)" strokeWidth="1.5"
              animate={isHovered ? { rotate: [0, 20, 0], y: [0, -6, 0] } : {}}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0, delay: 0.2 }}
              style={{ transformOrigin: "71px 52px" }}
            />
            {/* Right hand */}
            <circle cx="71" cy="78" r="4" fill="hsl(var(--muted))" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" />

            {/* Feet */}
            <rect x="22" y="82" width="14" height="7" rx="3.5" fill="hsl(var(--muted))" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" />
            <rect x="44" y="82" width="14" height="7" rx="3.5" fill="hsl(var(--muted))" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" />

            {/* Jet thrusters */}
            <motion.ellipse
              cx="29" cy="92" rx="6" ry="3"
              fill="hsl(var(--primary) / 0.2)"
              animate={{ opacity: [0.1, 0.5, 0.1], ry: [2, 4, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.ellipse
              cx="51" cy="92" rx="6" ry="3"
              fill="hsl(var(--accent) / 0.2)"
              animate={{ opacity: [0.1, 0.5, 0.1], ry: [2, 4, 2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
          </motion.svg>

          {/* Hover tooltip */}
          <AnimatePresence>
            {isHovered && !chatOpen && (
              <motion.div
                className="absolute -left-36 top-2 px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--primary) / 0.4)",
                  color: "hsl(var(--primary))",
                  boxShadow: "0 4px 20px hsl(var(--primary) / 0.15)",
                }}
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                Click to chat! 💬
                <div
                  className="absolute top-1/2 -right-1 w-2 h-2 rotate-45 -translate-y-1/2"
                  style={{ background: "hsl(var(--card))", borderRight: "1px solid hsl(var(--primary) / 0.4)", borderBottom: "1px solid hsl(var(--primary) / 0.4)" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed right-6 bottom-6 z-50 hidden lg:flex flex-col"
            style={{
              width: 340,
              height: 440,
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--primary) / 0.3)",
              borderRadius: 16,
              boxShadow: "0 8px 40px hsl(var(--primary) / 0.15), 0 0 0 1px hsl(var(--primary) / 0.05)",
            }}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 rounded-t-2xl"
              style={{ borderBottom: "1px solid hsl(var(--border))" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.15)" }}>
                  <Bot size={16} style={{ color: "hsl(var(--primary))" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Sam's Bot</p>
                  <p className="text-[10px] text-muted-foreground">Always online</p>
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setChatOpen(false); }}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X size={14} className="text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: "none" }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <div
                    className="max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed"
                    style={{
                      background: msg.isBot ? "hsl(var(--muted))" : "hsl(var(--primary) / 0.15)",
                      color: msg.isBot ? "hsl(var(--foreground))" : "hsl(var(--primary))",
                      borderBottomLeftRadius: msg.isBot ? 4 : 12,
                      borderBottomRightRadius: msg.isBot ? 12 : 4,
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3" style={{ borderTop: "1px solid hsl(var(--border))" }}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Sam..."
                  className="flex-1 bg-muted text-foreground text-xs px-3 py-2.5 rounded-xl outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-primary/30"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={(e) => { e.stopPropagation(); handleSend(); }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: "hsl(var(--primary) / 0.15)" }}
                >
                  <Send size={14} style={{ color: "hsl(var(--primary))" }} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingRobot;