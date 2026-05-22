import { Section } from "@/components/ui/section";
import { experience } from "@/lib/experience";
import { ExperienceItem } from "@/components/experience-item";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I&rsquo;ve worked"
      description="Two roles so far — both in Ho Chi Minh City, both front-of-house engineering."
    >
      <ol className="relative">
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} index={i} />
        ))}
      </ol>
    </Section>
  );
}
