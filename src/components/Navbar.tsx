"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/ThemeProvider";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
      ([entry]) => {
         if (entry.isIntersecting) setActiveSection(id);
      },
        { threshold: 0.1, rootMargin: "-60px 0px -20% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-0.5 group">
          <span className="font-display text-2xl text-foreground leading-none">𝕊</span>
          <span className="text-accent text-xl leading-none font-display">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const sectionId = l.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors duration-200 block",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="text-sm px-4 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200 font-medium"
          >
            Resume
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {theme === "light" ? <RiMoonLine size={17} /> : <RiSunLine size={17} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-border text-muted-foreground"
          >
            {theme === "light" ? <RiMoonLine size={17} /> : <RiSunLine size={17} />}
          </button>
          <button
            className="p-1.5 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => {
                const sectionId = l.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-2.5 text-sm font-medium transition-colors border-l-2 pl-3",
                        isActive
                          ? "text-foreground border-accent"
                          : "text-muted-foreground border-transparent hover:text-foreground"
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block text-sm px-4 py-2 rounded-lg bg-foreground text-background font-medium"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
