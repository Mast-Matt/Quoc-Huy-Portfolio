"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { ProjectFrontmatter } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({
  frontmatter,
  index,
}: {
  frontmatter: ProjectFrontmatter;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden hover:border-foreground/30">
        <Link
          href={`/projects/${frontmatter.slug}`}
          className="flex h-full flex-col"
        >
          <div
            aria-hidden
            className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-gradient-to-br from-accent via-muted to-card"
          >
            {frontmatter.cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={frontmatter.cover}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {frontmatter.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {frontmatter.title}
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>

            <p className="mt-3 flex-1 text-sm text-muted-foreground">
              {frontmatter.summary}
            </p>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {frontmatter.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Link>

        {frontmatter.github && (
          <div className="border-t border-border px-6 py-3">
            <a
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              View source
            </a>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
