"use client";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Full Stack Development",
    institution: "Sri Venkateshwara College of Computer Applications and Management",
    university: "Anna University",
    period: "2024 – 2026",
    score: "80%",
    status: "In Progress",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "",
    institution: "Government Arts & Science College, Gudalur",
    university: "Bharathiar University",
    period: "2021 – 2024",
    score: "83.71%",
    status: "Completed",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    specialization: "",
    institution: "Government Higher Secondary School, Ambalamoola, Gudalur, The Nilgiris",
    university: "",
    period: "2019 – 2021",
    score: "81.66%",
    status: "Completed",
  },
  {
    degree: "Secondary School (SSLC)",
    specialization: "",
    institution: "Sree Saraswathy Vivekananda Maha Vidhyalaya School, Gudalur, The Nilgiris",
    university: "",
    period: "2019",
    score: "82%",
    status: "Completed",
  },
];

export default function EducationSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="education" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">
            Education
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-foreground">
            Academic background
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.1,
                }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[13px] md:left-[21px] top-5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background shadow" />

                <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-accent/30 transition-colors duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display text-lg text-foreground leading-tight">
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className="text-sm text-accent font-medium mt-0.5">
                          {edu.specialization}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg ${
                          edu.status === "In Progress"
                            ? "bg-accent/10 text-accent"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  {edu.university && (
                    <p className="text-xs text-muted-foreground mt-0.5">{edu.university}</p>
                  )}

                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs font-mono text-muted-foreground">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono font-medium text-foreground">
                      Score: {edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
