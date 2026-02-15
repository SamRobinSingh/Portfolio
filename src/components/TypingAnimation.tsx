import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "AI Engineer",
  "ML Researcher",
  "Data Scientist",
  "Deep Learning Specialist",
  "Computer Vision Expert",
];

const TypingAnimation = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient">{text}</span>
      <motion.span
        className="inline-block w-[3px] h-[1em] ml-1 rounded-full"
        style={{ background: "hsl(var(--primary))" }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

export default TypingAnimation;