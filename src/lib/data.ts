export const HERO = {
  name: "Sugumaran S",
  role: "Full Stack Developer & AI/ML Enthusiast",
  tagline: "Builder of clean and interactive user experiences.",
  bio: "Final-year MCA student crafting end-to-end web applications — from ML-powered backends to polished React frontends. I turn ideas into deployed, working products.",
  email: "sugumarankugan@gmail.com",
  github: "https://github.com/an0nl",
  linkedin: "https://linkedin.com/in/sugumaran0333",
  resume: "/resume.pdf",
};

export const ABOUT = {
  paragraphs: [
    "I'm a final-year MCA student at Sri Venkateshwara College of Computer Applications and Management (Anna University, Coimbatore), specialising in Full Stack Development with a strong lean toward AI-powered applications.",
    "I enjoy the full journey — designing the architecture, wiring up the backend, building the UI, and shipping something that actually works. My comfort zone is Python + FastAPI on the server and React on the client, but I'm always picking up new tools when the problem calls for it.",
    "Outside code I'm thinking about design, developer experience, and how to make software genuinely useful rather than just functional.",
  ],
  facts: [
    { label: "Degree", value: "MCA — Full Stack (2024–2026)" },
    { label: "Score", value: "80% (current)" },
    { label: "Based in", value: "Coimbatore, Tamil Nadu" },
    { label: "Open to", value: "Internships & Entry-level roles" },
  ],
};

export type Skill = { name: string; level: number };
export type SkillCategory = { category: string; items: Skill[] };

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "REST API Design", level: 82 },
      { name: "Express.js", level: 60 },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "Scikit-learn", level: 78 },
      { name: "Hugging Face", level: 75 },
      { name: "NLP / TF-IDF", level: 80 },
      { name: "LLM Prompt Eng.", level: 72 },
    ],
  },
  {
    category: "Data & Tools",
    items: [
      { name: "MySQL / PostgreSQL", level: 78 },
      { name: "MongoDB", level: 70 },
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 45 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  github: string;
  live?: string;
  highlight?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "AI Fake News Detection Platform",
    description:
      "Real-time fake news & misinformation classifier powered by fine-tuned transformer models.",
    longDescription:
      "A full-stack platform that analyses text and URLs for misinformation in real time. Built a FastAPI backend serving fine-tuned Hugging Face models, a React dashboard with confidence-score visualisation, and a modular ML pipeline with TF-IDF + NLP preprocessing.",
    stack: ["React.js", "FastAPI", "Python", "Hugging Face", "REST API"],
    github: "https://github.com/an0nl/fake-news-detector",
    highlight: "90%+ classification accuracy · <800ms API response",
  },
  {
    title: "AI Study Planner & Learning Assistant",
    description:
      "Smart timetable manager with AI-generated study recommendations and note summarisation.",
    longDescription:
      "A mobile-first productivity app integrating OpenAI/Gemini APIs for personalised study plans, weak-topic detection, and note summarisation. Features drag-and-drop uploads, real-time analytics, and cross-browser responsive layouts across 10+ interactive components.",
    stack: ["React.js", "Node.js", "OpenAI API", "Gemini API", "JavaScript"],
    github: "https://github.com/an0nl/ai-study-planner",
    highlight: "~40% reduction in note-review time",
  },
  {
    title: "Fake Job Posting Prediction",
    description:
      "ML framework that detects fraudulent job listings using multi-model ensemble and NLP.",
    longDescription:
      "Final-year MCA thesis project. A Flask web app combining Random Forest, SVM, and Logistic Regression with TF-IDF features, SMOTE for class imbalance, URL fraud detection, and an explainability module surfacing model reasoning to end users.",
    stack: ["Python", "Flask", "Scikit-learn", "NLP", "SMOTE", "TF-IDF"],
    github: "https://github.com/an0nl",
    highlight: "Multi-model ensemble · Explainability module",
  },
  {
    title: "Developer Portfolio Website",
    description:
      "Responsive personal portfolio with smooth animations — the one you're looking at right now.",
    longDescription:
      "Designed and built from scratch using Next.js, Tailwind CSS, and Framer Motion. Deployed via Vercel with a static export, scoring high on Lighthouse for performance, accessibility, and best practices.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/an0nl",
    live: "#",
    highlight: "Lighthouse 95+ · Vercel deployed",
  },
];

export const CERTIFICATIONS = [
  "Web Development Fundamentals — IBM SkillsBuild",
  "Introduction to Generative AI — Google Cloud",
  "Foundation of LLMs — Hugging Face",
  "Prompt Engineering for Everyone — CognitiveClass.ai (IBM)",
  "SQL (Basic) — HackerRank",
  "Foundation Course on Generative AI — Edunet Foundation",
  "Foundation on Cloud — IBM SkillsBuild",
];
