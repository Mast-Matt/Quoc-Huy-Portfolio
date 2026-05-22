import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-border py-12 text-sm text-muted-foreground">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-1">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>
            &copy; {year} · Built with Next.js & TailwindCSS · Deployed on
            Vercel
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.links.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-accent hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-accent hover:text-foreground"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.email}
            aria-label="Email"
            className="rounded-full p-2 transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
