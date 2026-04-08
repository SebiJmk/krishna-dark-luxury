import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/krishna-logo.png";

interface PreloaderProps {
  onComplete: () => void;
}

const letters = "Krishna".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 1.2 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<"logo" | "exit">("logo");

  // Logo pulse: 2s, then letters: 1.2s delay + 7 letters * 0.15s stagger + 0.4s last anim ≈ 2.65s total for letters
  // Exit starts after all letters are done: ~3.8s total
  useEffect(() => {
    const exitDelay = 3800;
    const t1 = setTimeout(() => setPhase("exit"), exitDelay);
    return () => clearTimeout(t1);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9998] flex flex-col items-center justify-center gap-6 bg-background"
        initial={{ y: 0 }}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          if (phase === "exit") onComplete();
        }}
      >
        <motion.img
          src={logoImg}
          alt="Krishna Caffe"
          className="h-40 md:h-48 w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0.8, 1], scale: [0.8, 1, 1.05, 1, 1.05] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.div
          className="flex"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="font-serif text-4xl md:text-5xl tracking-[0.25em] text-foreground font-medium"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
