import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-28 md:py-36 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-16"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-semibold text-gradient leading-[1.05]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-lg text-white/60 max-w-2xl">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
