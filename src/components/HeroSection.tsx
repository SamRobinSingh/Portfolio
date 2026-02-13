import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown, Download, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import resumePdf from "./Sam Robin Singh_CV.pdf";
import ParticleField from "./ParticleField";
import CodingProfileIcon from "./CodingProfileIcon";

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.007 0c-.787.031-1.515.37-2.222.685a12.27 12.27 0 0 1-1.864.703c-.635.182-1.303.252-1.95.352-.588.092-1.196.154-1.735.418a2.39 2.39 0 0 0-1.066.957c-.348.586-.392 1.29-.378 1.967.014.665.073 1.337.243 1.982.17.642.441 1.252.757 1.832.607 1.12 1.42 2.098 2.26 3.03a17.2 17.2 0 0 0 2.901 2.684c.467.337.952.644 1.467.895.39.19.794.352 1.216.432h.001c.104-.758.206-1.517.308-2.275l-.064-.052c-.346-.281-.684-.576-1.001-.895-.596-.6-1.142-1.257-1.576-1.988-.36-.607-.636-1.262-.796-1.954-.08-.347-.125-.704-.125-1.06 0-.194.012-.388.05-.578a1.77 1.77 0 0 1 .218-.57c.185-.31.461-.54.778-.669.253-.102.521-.151.79-.183a9.4 9.4 0 0 1 1.281-.055 8.06 8.06 0 0 1 1.185.112c.268.05.532.12.783.228.26.112.504.274.692.49.183.21.312.467.38.744.073.297.089.605.075.91a5.3 5.3 0 0 1-.199 1.215c-.155.49-.372.953-.635 1.386a8.82 8.82 0 0 1-1.268 1.596c-.26.26-.533.506-.82.728l.312 2.304c.639-.436 1.225-.94 1.759-1.5a11.1 11.1 0 0 0 2.073-3.014c.353-.72.637-1.478.815-2.264.143-.634.216-1.285.195-1.934-.02-.615-.127-1.24-.389-1.8a2.93 2.93 0 0 0-1.06-1.16c-.465-.296-1-.45-1.541-.527-.696-.099-1.4-.108-2.098-.189a12.698 12.698 0 0 1-1.962-.396C12.521.987 11.793.074 11.007 0zM8.31 18.876l-.065.48a7.3 7.3 0 0 0-.056.594c-.009.313.012.631.091.936.079.304.221.59.423.828.165.195.37.35.595.467.307.16.647.24.987.268.425.037.853-.002 1.267-.1a5.18 5.18 0 0 0 1.588-.68c.16-.111.31-.235.44-.377a1.55 1.55 0 0 0 .321-.516c.07-.192.09-.4.073-.603a1.95 1.95 0 0 0-.112-.48l-.064-.18c-.205.195-.432.367-.68.504a4.4 4.4 0 0 1-1.27.494 3.95 3.95 0 0 1-1.22.107 2.36 2.36 0 0 1-.754-.165 1.63 1.63 0 0 1-.53-.343 1.54 1.54 0 0 1-.323-.489 2.18 2.18 0 0 1-.145-.578l-.021-.213-.065-.48z" />
  </svg>
);

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701a.257.257 0 0 0 .172-.452L9.075 4.695a.257.257 0 0 0-.344 0L6.97 6.456a.257.257 0 0 0 .172.452h.7v10.185a.258.258 0 0 0 .258.258h2.168a.258.258 0 0 0 .258-.258v-3.876h4.074v3.876h-.7a.257.257 0 0 0-.173.453l1.761 1.76a.257.257 0 0 0 .344 0l1.761-1.76a.257.257 0 0 0-.172-.453h-.701V7.057a.258.258 0 0 0-.258-.258z" />
  </svg>
);

const codingProfiles = [
  { href: "https://leetcode.com/u/Sam_Robin_Singh", label: "LeetCode", icon: <LeetCodeIcon />, color: "hsl(37, 100%, 50%)" },
  { href: "https://www.codechef.com/users/sam_robin", label: "CodeChef", icon: <CodeChefIcon />, color: "hsl(16, 80%, 55%)" },
  { href: "https://www.hackerrank.com/profile/samrobinsinghe30", label: "HackerRank", icon: <HackerRankIcon />, color: "hsl(145, 70%, 45%)" },
];

// Floating 3D geometric shapes component
const FloatingShape = ({ delay, x, y, size, rotation }: { delay: number; x: string; y: string; size: number; rotation: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      border: "1px solid hsl(var(--primary) / 0.15)",
      borderRadius: size > 30 ? "12px" : "50%",
    }}
    initial={{ opacity: 0, rotate: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.4, 0],
      rotate: [0, rotation, rotation * 2],
      scale: [0.5, 1, 0.5],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>

      {/* Colored ambient blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px]"
          style={{ background: "hsl(var(--primary))" }}
        />
        <div
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: "hsl(var(--accent))" }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full opacity-[0.04] blur-[80px]"
          style={{ background: "hsl(var(--warm))" }}
        />
      </div>

      {/* Floating 3D shapes */}
      <FloatingShape delay={0} x="15%" y="20%" size={40} rotation={180} />
      <FloatingShape delay={2} x="80%" y="25%" size={25} rotation={-120} />
      <FloatingShape delay={4} x="70%" y="70%" size={35} rotation={90} />
      <FloatingShape delay={1} x="10%" y="65%" size={20} rotation={-180} />
      <FloatingShape delay={3} x="85%" y="55%" size={30} rotation={150} />

      {/* Animated particles */}
      <ParticleField count={50} />

      {/* Radial glow behind text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--accent) / 0.03) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
            style={{
              background: "hsl(var(--primary) / 0.08)",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs tracking-wider uppercase text-primary">
              AI & Machine Learning Engineer
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <motion.span
              className="text-gradient-animated inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sam Robin
            </motion.span>
            <br />
            <motion.span
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Singh E
            </motion.span>
          </h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Building end-to-end AI solutions — from deep learning & computer vision
            to edge deployment & intelligent automation.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          {/* Resume Download */}
          <motion.a
            href={resumePdf}
            download
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-sm overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
              color: "hsl(var(--primary-foreground))",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px hsl(var(--glow) / 0.4), 0 10px 50px hsl(var(--glow) / 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect on button */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.15) 50%, transparent 55%)",
                backgroundSize: "250% 100%",
              }}
              animate={{ backgroundPosition: ["-100% 0", "250% 0"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
            <Download className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>

          {/* Contact button */}
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border transition-all"
            style={{
              borderColor: "hsl(var(--primary) / 0.3)",
              color: "hsl(var(--primary))",
              background: "hsl(var(--primary) / 0.05)",
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "hsl(var(--primary) / 0.6)",
              boxShadow: "0 0 25px hsl(var(--glow) / 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <motion.a
            href="mailto:samrobinsinghe303@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" /> samrobinsinghe303@gmail.com
          </motion.a>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +91 9360877226
          </span>
          <span className="hidden md:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Tirunelveli, India
          </span>
        </motion.div>

        {/* Social and Coding Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          {[
            { href: "https://www.linkedin.com/in/sam-robin-singh-e-17a76324a/", icon: Linkedin, color: "hsl(var(--primary))" },
            { href: "https://github.com/SamRobinSingh", icon: Github, color: "hsl(var(--accent))" },
          ].map((social, i) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary transition-all duration-300"
              whileHover={{
                scale: 1.15,
                boxShadow: `0 0 20px ${social.color}40`,
                borderColor: social.color,
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <social.icon className="w-5 h-5 text-foreground" />
            </motion.a>
          ))}

          {/* Divider */}
          <div className="w-px h-8 mx-1" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--border)), transparent)" }} />

          {/* Coding profiles with 3D animation from your profiles array */}
          {codingProfiles.map((profile, i) => (
            <CodingProfileIcon
              key={profile.label}
              href={profile.href}
              label={profile.label}
              icon={profile.icon}
              color={profile.color}
              delay={1.4 + i * 0.12}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
