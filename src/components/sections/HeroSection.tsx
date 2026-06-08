"use client";
import { motion } from "framer-motion";
import { RiGithubLine, RiLinkedinBoxLine, RiMailLine, RiDownloadLine } from "react-icons/ri";
import { HERO } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, hsl(var(--background)) 75%)",
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(213 94% 52% / 0.06) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-4xl mx-auto w-full">
        {/* Status badge */}
        <motion.div {...fadeUp(0.05)} className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border bg-card px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to internship & entry-level opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.1)} className="text-base font-mono text-accent mb-3">
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.18)}
          className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1] tracking-tight text-foreground mb-4"
        >
          Sugumaran S
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.26)}
          className="text-xl sm:text-2xl font-display italic text-accent mb-8"
        >
          Full Stack Developer &amp; AI Enthusiast
        </motion.p>

        {/* Body text — justified */}
        <motion.div
          {...fadeUp(0.34)}
          className="space-y-4 max-w-2xl mb-10 text-justify"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I build modern, scalable web applications that combine clean UI with strong backend
            systems. I enjoy turning ideas into real-world products that are fast, reliable,
            and user-focused.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I specialise in <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">FastAPI</span>, and{" "}
            <span className="text-foreground font-medium">Python</span>, and I enjoy working
            across the full stack — from UI design to backend architecture.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Currently, I am focused on building AI-powered applications and improving
            performance, usability, and developer experience in every project I build.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.42)} className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href={HERO.resume}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:bg-muted transition-colors duration-200"
          >
            <RiDownloadLine size={15} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:bg-muted transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div {...fadeUp(0.5)} className="flex items-center gap-3">
          <div className="h-px w-10 bg-border" />
          <a
            href={HERO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <RiGithubLine size={18} />
          </a>
          <a
            href={HERO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <RiLinkedinBoxLine size={18} />
          </a>
          <a
            href={`mailto:${HERO.email}`}
            aria-label="Email"
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <RiMailLine size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
