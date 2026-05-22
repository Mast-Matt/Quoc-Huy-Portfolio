import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  period: string;
  stack: string[];
  github?: string;
  demo?: string;
  cover?: string;
  featured?: boolean;
  order?: number;
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};

async function readProjectFile(filename: string): Promise<Project | null> {
  const fullPath = path.join(PROJECTS_DIR, filename);
  const raw = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(raw);
  const slug = (data.slug ?? filename.replace(/\.mdx?$/, "")) as string;
  return {
    slug,
    frontmatter: { ...(data as ProjectFrontmatter), slug },
    content,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  let files: string[];
  try {
    files = await fs.readdir(PROJECTS_DIR);
  } catch {
    return [];
  }
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));
  const projects = await Promise.all(mdxFiles.map(readProjectFile));
  return projects
    .filter((p): p is Project => p !== null)
    .sort((a, b) => {
      const ao = a.frontmatter.order ?? 999;
      const bo = b.frontmatter.order ?? 999;
      return ao - bo;
    });
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    return await readProjectFile(`${slug}.mdx`);
  } catch {
    return null;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(PROJECTS_DIR);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}
