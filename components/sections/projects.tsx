import { Section } from "@/components/ui/section";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export async function Projects() {
  const projects = await getAllProjects();

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I&rsquo;ve built"
      description="A handful of projects I&rsquo;m happy to talk through in detail — click any card for the full case study."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            frontmatter={project.frontmatter}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}
