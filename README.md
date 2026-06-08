# Sugumaran S — Developer Portfolio

A clean, minimal, and fully responsive personal portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**.

## ✨ Features

- **Hero** — Name, tagline, CTA buttons (View Projects / Download Resume / Contact Me), social links
- **About** — Short bio + quick-facts card
- **Skills** — Animated skill bars grouped by category
- **Projects** — Cards with description, tech stack, GitHub and live links
- **Contact** — Email, GitHub, LinkedIn links + certifications panel
- Smooth scroll-triggered Framer Motion animations
- Fully responsive (mobile, tablet, desktop)
- Static export — deploy anywhere (Vercel, GitHub Pages, Netlify)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Build & Deploy

```bash
npm run build
```

Generates the `out/` directory — upload to any static host.

### Deploy to Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel auto-detects Next.js — click **Deploy**

Done. Your portfolio is live. 🎉

## 🗂 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles sections)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       └── ContactSection.tsx
└── lib/
    ├── data.ts           # ← Edit all your content here
    ├── utils.ts
    └── useInView.ts
```

## ✏️ Customising Content

**All content lives in `src/lib/data.ts`** — edit your name, bio, projects, skills, and links there. No other files need changing for content updates.

To add your resume, place `resume.pdf` inside the `public/` folder.

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| DM Sans / DM Serif | Typography |
| Lucide React | Icons |

## 📄 License

MIT — use freely, attribution appreciated.
