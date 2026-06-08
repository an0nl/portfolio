"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { useInView } from "@/lib/useInView";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Skills</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 + ci * 0.07 }}
              className="bg-card rounded-2xl border border-border p-5 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-250"
            >
              <h3 className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-4">
                {cat.category}
              </h3>
              <div className="space-y-3.5">
                {cat.items.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.12 + si * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
