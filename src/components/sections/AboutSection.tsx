"use client";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const paragraphs = [
  "I am a full-stack developer focused on building intelligent and efficient web applications. I enjoy working across the entire development process — from designing system architecture to building responsive user interfaces and robust backend services.",
  "I work primarily with React and FastAPI, and I am comfortable learning and adapting to new technologies as needed. My approach is to build software that is clean, scalable, and user-focused.",
  "Outside of development, I explore UI design, system optimisation, and improving user experience in every project I build.",
];

export default function AboutSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">About</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl text-foreground">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-[180px_1fr] gap-10 lg:gap-16 items-start">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-36 h-36 rounded-full border-2 border-accent/30 overflow-hidden bg-muted flex items-center justify-center shadow-md">
              <img
                src="/photo.jpg"
                alt="Sugumaran S"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    `<span style="font-family:var(--font-display);font-size:3rem;color:hsl(var(--accent))">S</span>`;
                }}
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground">Sugumaran S</p>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">Coimbatore, TN</p>
              <span className="inline-block mt-2 text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                MCA Final Year
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 + i * 0.09 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify"
              >
                {p}
              </motion.p>
            ))}

            {/* Quick facts strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                "React & Next.js",
                "FastAPI & Python",
                "AI / ML Integration",
                "REST API Design",
                "MySQL & MongoDB",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
