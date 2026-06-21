import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ContentLayout from "@/components/content-layout";

const MDX_PATH = path.join(process.cwd(), "content/projects/cockpit.mdx");

export default async function CarDigitalCockpitPage() {
  const { data } = matter(fs.readFileSync(MDX_PATH, "utf-8"));
  const { default: Post } = await import("@/content/projects/cockpit.mdx");

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
