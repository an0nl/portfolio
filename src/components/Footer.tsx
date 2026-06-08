import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";
import { HERO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Sugumaran S — Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-3">
          <a href={HERO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <RiGithubLine size={16} />
          </a>
          <a href={HERO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <RiLinkedinBoxLine size={16} />
          </a>
          <a href={`mailto:${HERO.email}`} aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <RiMailLine size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
