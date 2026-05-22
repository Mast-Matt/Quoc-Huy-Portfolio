"use client";

import { motion } from "motion/react";
import type { ExperienceItem as Item } from "@/lib/experience";

export function ExperienceItem({ item, index }: { item: Item; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <span
        aria-hidden
        className="absolute left-0 top-2 inline-flex h-3 w-3 rounded-full border-2 border-background bg-foreground ring-4 ring-border"
      />
      <span
        aria-hidden
        className="absolute left-[5px] top-5 -ml-px h-[calc(100%-1rem)] w-px bg-border last:hidden"
      />
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {item.role}{" "}
            <span className="font-normal text-muted-foreground">@</span>{" "}
            <span className="text-foreground">{item.company}</span>
          </h3>
          <p className="text-sm text-muted-foreground">{item.location}</p>
        </div>
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {item.period}
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.li>
  );
}
