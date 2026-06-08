import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

export const metadata: Metadata = {
  title: "Sugumaran S — Full Stack Developer",
  description:
    "Full Stack Developer & AI/ML enthusiast building clean, scalable web applications with React, FastAPI, and Python.",
  keywords: ["portfolio", "full stack developer", "react", "fastapi", "python", "AI", "internship"],
  authors: [{ name: "Sugumaran S" }],
  openGraph: {
    title: "Sugumaran S — Full Stack Developer",
    description: "Full Stack Developer & AI enthusiast.",
    type: "website",
  },
};

// Inline script to set theme before paint — prevents flash
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var theme = stored || preferred;
      if (theme === 'dark') document.documentElement.classList.add('dark');
    } catch(e) {}
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
