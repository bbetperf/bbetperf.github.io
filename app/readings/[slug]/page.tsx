import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ContentLayout from "@/components/content-layout";

export const dynamicParams = false;

const CONTENT_DIR = path.join(process.cwd(), "content/readings");

export function generateStaticParams() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
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
  const { default: Post } = await import(`@/content/readings/${slug}.mdx`);

  return (
    <ContentLayout
      title={data.title}
      description={data.description}
      backHref="/"
    >
      <Post />
    </ContentLayout>
  );
}
