import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ContentLayout from "@/components/content-layout";
import { getPublishedSlugs } from "@/lib/content";

export const dynamicParams = false;

const CONTENT_DIR = path.join(process.cwd(), "content/projects");

export function generateStaticParams() {
  return getPublishedSlugs("projects").map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = matter(
    fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf-8")
  );
  const { default: Post } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      date={data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "")}
      backHref="/"
    >
      <Post />
    </ContentLayout>
  );
}
