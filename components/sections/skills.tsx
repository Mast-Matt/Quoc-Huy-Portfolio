import { Section } from "@/components/ui/section";
import { skillGroups } from "@/lib/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for"
      description="The stack I use daily and the languages I&rsquo;ve shipped real things with."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-foreground/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
