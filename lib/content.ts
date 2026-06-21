import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  href?: string;
}

export function getEntries(type: "projects" | "nuggets" | "readings"): ContentEntry[] {
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
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
