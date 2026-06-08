"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiMailLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMapPinLine,
  RiDownloadLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import { HERO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

export default function ContactSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${HERO.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/60 transition-all duration-200";

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Contact</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground">
            Let's Talk
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-lg">
            I'm actively looking for internship and entry-level roles. Have an opportunity
            or just want to connect? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl text-foreground">Get In Touch</h3>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                <RiMapPinLine size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-0.5">Location</p>
                <p className="text-sm font-medium text-foreground">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${HERO.email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                <RiMailLine size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-medium text-foreground truncate group-hover:text-accent transition-colors">
                  {HERO.email}
                </p>
              </div>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={HERO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-accent/40 hover:bg-accent/5 transition-all text-muted-foreground hover:text-foreground text-sm font-medium"
              >
                <RiGithubLine size={18} />
                GitHub
              </a>
              <a
                href={HERO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-accent/40 hover:bg-accent/5 transition-all text-muted-foreground hover:text-foreground text-sm font-medium"
              >
                <RiLinkedinBoxLine size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <textarea
                required
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/85 active:scale-[0.98] transition-all duration-200"
              >
                <RiSendPlaneLine size={16} />
                {sent ? "Opening mail client..." : "Send Message"}
              </button>
            </form>

            {/* Download Resume — below form */}
            <div className="mt-6 pt-6 border-t border-border text-center">
              <a
                href={HERO.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:bg-muted transition-colors duration-200"
              >
                <RiDownloadLine size={15} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
