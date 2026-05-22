import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  description?: string;
  containerClassName?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20 md:py-28", className)}
      {...props}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-2xl md:mb-16">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
