import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { mdxComponents } from "@/components/mdx-components";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
    openGraph: {
      title: `${project.frontmatter.title} — ${siteConfig.name}`,
      description: project.frontmatter.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <>
      <Nav />
      <main>
        <Container className="pt-16 md:pt-24">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to projects
          </Link>

          <header className="mt-8 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {frontmatter.period}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {frontmatter.summary}
            </p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {frontmatter.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {frontmatter.github && (
                <a
                  href={frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm transition-colors hover:bg-accent"
                >
                  <GithubIcon className="h-4 w-4" /> View source
                </a>
              )}
              {frontmatter.demo && (
                <a
                  href={frontmatter.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm transition-colors hover:bg-accent"
                >
                  Live demo
                </a>
              )}
            </div>
          </header>

          <article className="mx-auto mt-12 max-w-3xl pb-24">
            <MDXRemote source={content} components={mdxComponents} />
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
