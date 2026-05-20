import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
  Palette,
  Database,
  Search,
  Wrench,
  Gauge,
  Shield,
  Compass,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Check,
  Star,
  Zap,
  Rocket,
  Heart,
  TrendingUp,
  Plus,
  Minus,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Section } from "@/components/site/Section";
import { Background } from "@/components/site/Background";
import { Cursor } from "@/components/site/Cursor";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div id="top" className="relative min-h-screen text-black">
      <Background />
      <Cursor />
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-amber-500 via-amber-500 to-amber-500 z-[60]"
      />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Values />
      <Services />
      <Process />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
      <div className="aurora" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-black/70 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now accepting Q3 2026 projects
            <ArrowUpRight className="h-3 w-3" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[0.98] tracking-tight">
            <span className="text-gradient">Building Digital</span>
            <br />
            <span className="text-gradient-neon">Experiences</span>{" "}
            <span className="text-gradient">That Drive</span>
            <br />
            <span className="text-gradient">Growth.</span>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-black/60 leading-relaxed">
            OREN Website Development Services helps startups, businesses, and
            creators build modern websites, CRM systems, booking platforms, and
            digital brands that scale.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-6 py-3 text-sm font-semibold text-black"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-black hover:bg-black/10 transition-colors"
            >
              View Projects
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-black/50">
            <div className="h-px w-12 bg-black/20" />
            Founded by <span className="text-black/90">Ansh Vishwakarma</span> —
            Front-End Developer &amp; Startup Builder
            <div className="h-px w-12 bg-black/20" />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { v: "3", l: "Live Projects" },
            { v: "3", l: "Demo Products" },
            { v: "2026", l: "Founded" },
            { v: "India", l: "Serving Across" },
          ].map((s) => (
            <div
              key={s.l}
              className="glass rounded-2xl p-6 text-center hover:bg-black/[0.06] transition-colors"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-gradient-neon">
                {s.v}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-black/50">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============== MARQUEE ============== */
function Marquee() {
  const items = [
    "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL",
    "Odoo", "ERPNext", "Figma", "Photoshop", "SEMrush", "Google Analytics",
    "Tailwind CSS", "GSAP",
  ];
  return (
    <div className="relative py-10 border-y border-black/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-8 text-xl md:text-2xl font-display font-medium text-black/30 hover:text-black/80 transition-colors"
          >
            {t} <span className="text-amber-400/40 mx-3">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============== ABOUT ============== */
function About() {
  const timeline = [
    { y: "Early 2026", t: "The Spark", d: "Started freelancing while pursuing BCA, building websites for local businesses." },
    { y: "Mid 2026", t: "OREN is Born", d: "Founded OREN Website Development Services with a vision to help startups grow online." },
    { y: "2026", t: "First Live Projects", d: "Shipped 3 production websites and 3 demo products across hospitality and e-commerce." },
    { y: "Next", t: "Scaling the Empire", d: "Expanding into CRM, ERP, and full digital growth solutions for SMEs across India." },
  ];
  return (
    <Section
      id="about"
      eyebrow="About OREN"
      title={<>A young agency.<br />Built with startup energy.</>}
      subtitle="OREN Website Development Services started in 2026 from freelancing experiences and a vision to help startups grow online. We build websites, CRM systems, booking platforms, branding, SEO and digital growth solutions."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl font-display font-bold">
                AV
              </div>
              <div>
                <div className="font-display text-xl font-semibold">Ansh Vishwakarma</div>
                <div className="text-sm text-black/50">Founder &amp; Front-End Developer</div>
              </div>
            </div>
            <p className="text-black/60 leading-relaxed mb-6">
              A BCA student entrepreneur turning freelance hustle into a
              digital empire — obsessed with shipping fast, building trust,
              and creating products that move the needle for clients.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Full-Stack Dev", "Deployment", "Branding", "Graphic Design",
                "SEO", "Digital Marketing", "Client Strategy", "Social Media",
                "Analytics", "Local Growth",
              ].map((s) => (
                <span key={s} className="text-xs rounded-full glass px-3 py-1 text-black/70">{s}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/Ansh-vibe" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-full glass px-4 py-2 hover:bg-black/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/v-ansh/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-full glass px-4 py-2 hover:bg-black/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          {timeline.map((t, i) => (
            <motion.div
              key={t.t}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-5 group hover:bg-black/[0.06] transition-colors"
            >
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-sm font-display font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-amber-500/50 to-transparent mt-2" />}
              </div>
              <div className="flex-1 pb-2">
                <div className="text-xs uppercase tracking-widest text-amber-300 mb-1">{t.y}</div>
                <div className="font-display text-xl font-semibold mb-1">{t.t}</div>
                <div className="text-black/60">{t.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============== VALUES ============== */
function Values() {
  const values = [
    { icon: Sparkles, t: "Innovation", d: "We chase the cutting edge so your brand never feels dated.", c: "from-amber-500 to-amber-500" },
    { icon: Shield, t: "Trust", d: "Transparent process, honest pricing, code you actually own.", c: "from-amber-500 to-amber-500" },
    { icon: Heart, t: "Affordability", d: "Startup-friendly pricing without compromising craft.", c: "from-amber-500 to-amber-500" },
    { icon: TrendingUp, t: "Growth", d: "Every pixel and line of code is built to convert.", c: "from-emerald-500 to-amber-500" },
  ];
  return (
    <Section eyebrow="Our Values" title="What we stand for.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v, i) => (
          <motion.div
            key={v.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative glass rounded-3xl p-7 overflow-hidden hover:-translate-y-1 transition-all"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${v.c} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
            <div className={`relative h-12 w-12 rounded-2xl bg-gradient-to-br ${v.c} flex items-center justify-center mb-5`}>
              <v.icon className="h-6 w-6 text-black" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">{v.t}</h3>
            <p className="text-black/60 text-sm">{v.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============== SERVICES ============== */
function Services() {
  const services = [
    { icon: Code2, t: "Website Development", d: "Custom, scalable websites that load fast and convert.", tech: ["React", "Next.js", "Node.js"] },
    { icon: Palette, t: "Branding & Graphic Design", d: "Identity systems that tell your story with clarity.", tech: ["Figma", "Photoshop"] },
    { icon: Database, t: "CRM & ERP Solutions", d: "Streamline operations with Odoo and ERPNext.", tech: ["Odoo", "ERPNext", "PostgreSQL"] },
    { icon: Search, t: "SEO & Online Visibility", d: "Rank higher and get found by the right people.", tech: ["SEMrush", "GA4"] },
    { icon: Wrench, t: "Website Maintenance", d: "We keep it fast, secure, and always up to date.", tech: ["Monitoring", "Backups"] },
    { icon: Gauge, t: "Performance Optimization", d: "Lighthouse-perfect speed and core web vitals.", tech: ["Edge", "CDN"] },
    { icon: Shield, t: "Security Audits", d: "Lock down vulnerabilities before they bite.", tech: ["OWASP", "SSL"] },
    { icon: Compass, t: "Digital Strategy", d: "Roadmaps that align tech with business growth.", tech: ["Analytics"] },
    { icon: GraduationCap, t: "Training & Support", d: "Empower your team to run with what we build.", tech: ["Docs", "1:1"] },
  ];
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Everything you need to ship."
      subtitle="From the first sketch to long-term growth — one team, one workflow."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group glass rounded-3xl p-7 hover:bg-black/[0.06] hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-amber-500/10 transition-all" />
            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600 group-hover:border-transparent transition-all">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-black/30 group-hover:text-black group-hover:rotate-45 transition-all" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-black/60 text-sm mb-5">{s.d}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider rounded-full bg-black/5 border border-black/10 px-2.5 py-1 text-black/60">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============== PROCESS ============== */
function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "We listen, audit and define the metrics that matter.", icon: Compass },
    { n: "02", t: "Design", d: "Cinematic mockups, prototypes, and a brand that sings.", icon: Palette },
    { n: "03", t: "Develop", d: "Production-grade code, shipped in sprints with full transparency.", icon: Code2 },
    { n: "04", t: "Launch & Support", d: "Go live confidently — we monitor, iterate and grow with you.", icon: Rocket },
  ];
  return (
    <Section id="process" eyebrow="Process" title="From idea to launch in 4 moves.">
      <div className="relative">
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="grid lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 h-24 w-24 mx-auto rounded-3xl glass-strong flex items-center justify-center mb-6 group hover:scale-110 transition-transform">
                <s.icon className="h-9 w-9 text-amber-300" />
                <span className="absolute -top-2 -right-2 text-xs font-display font-bold bg-gradient-to-br from-amber-500 to-amber-600 rounded-full h-7 w-7 flex items-center justify-center">{s.n}</span>
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
                <p className="text-black/60 text-sm">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============== PROJECTS ============== */
import projectRooftop from "@/assets/project-rooftop.jpg";
import projectFeast from "@/assets/project-feast.jpg";
import projectKhadak from "@/assets/project-khadak.jpg";

function Projects() {
  const projects = [
    {
      n: "Rooftop Reserve",
      d: "Premium rooftop restaurant booking experience.",
      tags: ["React", "Booking", "UI/UX"],
      url: "https://rooftop-reserve-4.preview.emergentagent.com/",
      img: projectRooftop,
    },
    {
      n: "Intimate Feast",
      d: "Boutique dining platform with refined storytelling.",
      tags: ["Next.js", "Brand", "Web"],
      url: "https://intimate-feast.preview.emergentagent.com/",
      img: projectFeast,
    },
    {
      n: "Khadak Dining Portal",
      d: "Full dining management portal with smart workflows.",
      tags: ["Portal", "CRM", "Design"],
      url: "https://khadak-dining-portal.preview.emergentagent.com/",
      img: projectKhadak,
    },
  ];
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Recently shipped."
      subtitle="Real projects, real clients, real outcomes."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.n}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group block glass rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-amber-400/30 transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <img
                src={p.img}
                alt={`${p.n} — live website by OREN`}
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3 flex gap-1.5 rounded-full bg-black/50 backdrop-blur px-2.5 py-1.5 border border-black/10">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>
              <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-amber-400/95 text-black text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                Live <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-1">{p.n}</h3>
              <p className="text-black/60 text-sm mb-4">{p.d}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider rounded-full bg-black/5 border border-black/10 px-2.5 py-1 text-black/60">{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ============== WHY US ============== */
function WhyUs() {
  const reasons = [
    { icon: Heart, t: "Affordable Pricing", d: "Plans designed for startups and SMEs.", v: "₹", l: "Startup friendly" },
    { icon: Sparkles, t: "Full Customization", d: "Zero templates. Every pixel made for you.", v: "100%", l: "Bespoke" },
    { icon: Zap, t: "Latest Tech Expertise", d: "Built on the modern stack you'd expect at scale.", v: "2026", l: "Stack" },
    { icon: Rocket, t: "Real Project Experience", d: "Live products, paying clients, shipped fast.", v: "3+", l: "Live sites" },
  ];
  return (
    <Section eyebrow="Why Choose Us" title="Premium craft. Startup pace.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-3xl p-7 hover:bg-black/[0.06] transition-all"
          >
            <r.icon className="h-7 w-7 text-amber-300 mb-4" />
            <div className="text-4xl font-display font-semibold text-gradient-neon">{r.v}</div>
            <div className="text-xs uppercase tracking-widest text-black/50 mt-1">{r.l}</div>
            <h3 className="font-display text-lg font-semibold mt-5">{r.t}</h3>
            <p className="text-black/60 text-sm mt-1">{r.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ============== TESTIMONIALS ============== */
function Testimonials() {
  const items = [
    { q: "OREN turned our booking flow around in two weeks. Bookings doubled.", n: "Rooftop Lounge", r: "Hospitality" },
    { q: "Ansh feels like an in-house team. Fast, transparent, and creative.", n: "Local Boutique", r: "Retail" },
    { q: "Our brand finally matches our ambition. Total upgrade.", n: "Coaching Brand", r: "Personal" },
    { q: "Cleanest CRM rollout we've ever had. No fluff, just results.", n: "Service SME", r: "Operations" },
    { q: "Site loads instantly. SEO got us on page one in a month.", n: "Restaurant Group", r: "F&B" },
    { q: "These are the kind of devs you keep on speed dial.", n: "Instagram Seller", r: "E-commerce" },
  ];
  const row = [...items, ...items];
  return (
    <Section eyebrow="Testimonials" title="Loved by founders and operators.">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
        <div className="flex gap-5 animate-marquee">
          {row.map((t, i) => (
            <div key={i} className="min-w-[340px] max-w-[340px] glass rounded-3xl p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-black/80 leading-relaxed">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-xs font-bold">
                  {t.n[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-black/50">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============== BLOG ============== */
function Blog() {
  const posts = [
    { t: "Why Every Startup Needs a Professional Website in 2025", c: "Strategy", g: "from-amber-500 to-amber-600" },
    { t: "Top 5 SEO Strategies for Small Businesses", c: "SEO", g: "from-emerald-500 to-amber-600" },
    { t: "How Instagram Sellers Can Boost Sales with E-commerce", c: "E-commerce", g: "from-amber-500 to-amber-600" },
    { t: "The Future of Digital Marketing in 2025", c: "Marketing", g: "from-amber-500 to-amber-600" },
    { t: "Why Branding Matters More Than Ever", c: "Brand", g: "from-amber-500 to-amber-600" },
    { t: "E-commerce Trends Every Business Should Watch", c: "Trends", g: "from-amber-500 to-amber-600" },
  ];
  return (
    <Section eyebrow="Insights" title="Ideas worth shipping." subtitle="Fresh perspectives on building, growing, and shipping in 2026.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <motion.a
            key={p.t}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all"
          >
            <div className={`aspect-[16/9] bg-gradient-to-br ${p.g} relative overflow-hidden`}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest rounded-full bg-black/40 backdrop-blur px-3 py-1">{p.c}</div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-amber-300 transition-colors">{p.t}</h3>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-black/60">
                Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ============== FAQ ============== */
function FAQ() {
  const items = [
    { q: "How long does it take to build a website?", a: "Most marketing sites ship in 2–4 weeks. Complex platforms with CRM/booking systems typically take 4–8 weeks depending on scope." },
    { q: "Do you provide SEO?", a: "Yes — we handle on-page SEO, technical SEO, Google Analytics setup, and ongoing growth strategy." },
    { q: "Do you provide support?", a: "Absolutely. All projects come with launch support, and we offer monthly maintenance plans for the long run." },
    { q: "Do you work internationally?", a: "Yes. We're based in Kanpur, India and work with clients across India and globally — async-friendly, English-fluent." },
    { q: "Can you maintain websites?", a: "We maintain sites we build and inherit existing codebases too — security patches, performance audits, content updates, the works." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title="Questions, answered.">
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={it.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-black/[0.04] transition-colors"
              >
                <span className="font-display text-lg font-medium">{it.q}</span>
                <span className="h-8 w-8 shrink-0 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-black/60">{it.a}</div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============== CONTACT ============== */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title={<>Let&apos;s build something<br />unforgettable.</>}
      subtitle="Tell us about your project. We typically respond within 24 hours."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, l: "Email", v: "info.oren01@gmail.com", href: "mailto:info.oren01@gmail.com" },
            { icon: Phone, l: "Phone", v: "+91 84003 85071", href: "tel:+918400385071" },
            { icon: MapPin, l: "Location", v: "Kanpur, Uttar Pradesh, India" },
          ].map((c) => (
            <a
              key={c.l}
              href={c.href}
              className="block glass rounded-2xl p-5 hover:bg-black/[0.06] transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-black/50">{c.l}</div>
                  <div className="font-medium group-hover:text-amber-300 transition-colors">{c.v}</div>
                </div>
              </div>
            </a>
          ))}
          <a
            href="https://wa.me/918400385071"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl p-5 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-emerald-300">Fast lane</div>
                <div className="font-display font-semibold mt-1">Message on WhatsApp</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-emerald-300" />
            </div>
          </a>
          <div className="text-xs text-black/40 px-2">⚡ Response within 24 hours</div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Your name" placeholder="Jane Doe" />
            <Input label="Email" type="email" placeholder="jane@brand.com" />
          </div>
          <Input label="Project type" placeholder="Website / CRM / Branding…" />
          <div>
            <label className="text-xs uppercase tracking-widest text-black/50 mb-2 block">Project details</label>
            <textarea
              rows={5}
              placeholder="Tell us about your vision, timeline, and budget…"
              className="w-full rounded-xl bg-black/5 border border-black/10 px-4 py-3 text-black placeholder:text-black/30 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
            />
          </div>
          <button
            type="submit"
            className="btn-glow w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-black font-semibold py-3.5"
          >
            {sent ? (<><Check className="h-4 w-4" /> We&apos;ll be in touch shortly</>) : (<>Send Message <ArrowRight className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-black/50 mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-black/5 border border-black/10 px-4 py-3 text-black placeholder:text-black/30 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
      />
    </div>
  );
}

/* ============== FOOTER ============== */
function Footer() {
  return (
    <footer className="relative border-t border-black/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-500 via-amber-500 to-amber-500 flex items-center justify-center font-bold">O</span>
              <span className="font-display text-xl font-semibold">OREN<span className="text-amber-400">.</span></span>
            </div>
            <p className="text-black/60 max-w-md">
              Building digital experiences that drive growth — for startups,
              businesses, and creators ready to scale.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/Ansh-vibe" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-black/10 transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/v-ansh/" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-black/10 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:info.oren01@gmail.com" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-black/10 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-black/40 mb-4">Navigate</div>
            <ul className="space-y-2 text-black/70">
              <li><a href="#about" className="hover:text-black">About</a></li>
              <li><a href="#services" className="hover:text-black">Services</a></li>
              <li><a href="#projects" className="hover:text-black">Projects</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-black/40 mb-4">Founder</div>
            <div className="text-black/80 font-medium">Ansh Vishwakarma</div>
            <div className="text-black/50 text-sm">Founder &amp; Front-End Developer</div>
            <div className="text-black/50 text-sm mt-3">Kanpur, UP, India</div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-black/40">
          <div>© 2026 OREN Website Development Services. All rights reserved.</div>
          <div>Crafted with passion in India.</div>
        </div>
      </div>
    </footer>
  );
}
