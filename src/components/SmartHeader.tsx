import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import logoImg from "@/assets/krishna-logo.png";

const navLinks = [
  { label: "Acasă", href: "#hero" },
  { label: "Experiențe", href: "#experiences" },
  { label: "Meniu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

const SmartHeader = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    if (latest < lastY || latest < 50) {
      setVisible(true);
    } else if (latest > lastY && latest > 100) {
      setVisible(false);
      setMobileOpen(false);
    }
    setLastY(latest);
  });

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "glass-header" : "bg-transparent"
      }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
          <img src={logoImg} alt="Krishna Caffe" className="h-14 md:h-16 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 text-sm tracking-wider uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
          >
            Rezervă
          </button>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-header px-4 pb-6 pt-2"
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default SmartHeader;
