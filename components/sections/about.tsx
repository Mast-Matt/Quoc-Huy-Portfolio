import { Section } from "@/components/ui/section";

const facts = [
  { label: "Based in", value: "Ho Chi Minh City, VN" },
  { label: "Studying at", value: "RMIT University Vietnam" },
  { label: "Graduating", value: "April 2026" },
  { label: "Current focus", value: "Full-stack web + AI agents" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            I&apos;m a software engineer with a soft spot for the parts of the
            stack that users actually touch — front-end systems, design tokens,
            and the surface where AI meets a real interface.
          </p>
          <p>
            Most recently I interned at{" "}
            <span className="text-foreground">NashTech Vietnam</span>, where I
            built the front-end of a multi-agent enterprise chatbot in Next.js
            and React, wired into a FastAPI backend and the OpenAI Agent SDK
            over a 10,000+ document corpus. I shipped the handoff workflow that
            cut misrouted escalations by roughly 40%.
          </p>
          <p>
            Before that I shipped production marketing pages at{" "}
            <span className="text-foreground">HR1 Vietnam</span>, and outside of
            internships I&apos;ve built a quadtree-backed POI engine (Map2D),
            and a full-stack e-commerce platform for the Vietnamese motorcycle
            parts market (Viet Motor Parts).
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-4 self-start rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 md:grid-cols-1">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground md:text-base">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
