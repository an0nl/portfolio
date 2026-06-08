"use client";
import { motion } from "framer-motion";
import { RiExternalLinkLine, RiGithubLine, RiFlashlightLine } from "react-icons/ri";
import { PROJECTS, type Project } from "@/lib/data";
import { useInView } from "@/lib/useInView";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-mono text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <RiGithubLine size={17} />
          </a>
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Live demo"
            >
              <RiExternalLinkLine size={17} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-xl text-foreground mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {project.longDescription}
      </p>

      {project.highlight && (
        <div className="flex items-center gap-1.5 text-xs font-mono text-accent mb-4">
          <RiFlashlightLine size={11} />
          {project.highlight}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Projects</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground">
            Things I've Built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/an0nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <RiGithubLine size={16} />
            See more on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
