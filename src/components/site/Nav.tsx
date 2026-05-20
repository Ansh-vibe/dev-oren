import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1180px,94vw)] rounded-2xl transition-all ${
        scrolled ? "glass-strong" : "glass"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 via-amber-500 to-amber-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            O
          </span>
          <span className="font-display font-semibold tracking-tight text-white">
            OREN<span className="text-amber-400">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-glow rounded-full bg-white text-black text-sm font-medium px-4 py-2"
        >
          Get Started
        </a>
      </div>
    </motion.header>
  );
}
