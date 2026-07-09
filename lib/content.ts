import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  href?: string;
  published: boolean;
}

export type ContentType = "projects" | "nuggets" | "readings";

// A page is visible unless its frontmatter explicitly sets `published: false`.
export function isPublished(type: ContentType, slug: string): boolean {
  const file = path.join(process.cwd(), "content", type, `${slug}.mdx`);
  const { data } = matter(fs.readFileSync(file, "utf-8"));
  return data.published !== false;
}

export function getPublishedSlugs(type: ContentType): string[] {
  const dir = path.join(process.cwd(), "content", type);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .filter((slug) => isPublished(type, slug));
}

export function getEntries(type: ContentType): ContentEntry[] {
  const dir = path.join(process.cwd(), "content", type);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf-8"));
      return {
        slug: f.replace(/\.mdx$/, ""),
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : data.date ? String(data.date) : "",
        href: data.href ?? undefined,
        published: data.published !== false,
      };
    })
    .filter((entry) => entry.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
