"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-accent/50 via-background to-background"
      />
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to grad SWE roles · 2026
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
              Hi, I&apos;m {siteConfig.shortName}.
              <br />
              <span className="text-muted-foreground">
                I build thoughtful web and AI products.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Final-year IT student at RMIT University Vietnam, graduating
              April 2026. Currently focused on full-stack web with Next.js and
              integrating AI agents into real user experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#projects">
                  View projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={siteConfig.resumeUrl} target="_blank" download>
                  <Download className="h-4 w-4" /> Résumé
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{siteConfig.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-[280px] md:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-square"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent via-muted to-card blur-2xl"
              />
              <Image
                src="/avatar.png"
                alt={`${siteConfig.name} avatar`}
                width={480}
                height={480}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
