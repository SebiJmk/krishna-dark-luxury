import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-hookah.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={heroImg}
          alt="Krishna Caffe atmosphere"
          className="w-full h-[130%] object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/60" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial-magenta)" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider text-foreground leading-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Evadează în<br />
          <span className="text-gradient-magenta">Ritmul Orientului</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-sm md:text-lg tracking-widest text-muted-foreground max-w-xl uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Narghilea Premium · Freakshakes · Vibe Inconfundabil
        </motion.p>

        <motion.button
          onClick={scrollToContact}
          className="mt-10 px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase rounded-sm
                     hover:shadow-[var(--glow-gold)] hover:bg-accent hover:text-accent-foreground
                     transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          data-cursor-hover
        >
          Rezervă o Masă
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
