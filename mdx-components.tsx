import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { ProjectCard } from "@/components/mdx/project-card";
import { ProjectTabs, ProjectTab } from "@/components/mdx/project-tabs";
import { ProjectAccordion, ProjectAccordionItem } from "@/components/mdx/project-accordion";
import { Callout } from "@/components/mdx/callout";
import { Stat, StatGroup } from "@/components/mdx/stat";
import { Figure } from "@/components/mdx/figure";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Sections from remark-sectionize: each ## and its content → <section>
    // gap-6 (24px) between h2 and content within a section
    // gap-24 (96px) between sections comes from content-layout.tsx container
    section: ({ children }: { children?: React.ReactNode }) => (
      <section className="flex flex-col gap-8">{children}</section>
    ),
    img: ({ src, alt }) => (
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={1280}
        height={720}
        className="w-full h-auto rounded-lg ring-1 ring-border my-2"
      />
    ),
    h2: (props) => (
      <h2 className="text-primary" {...props} />
    ),
    p: (props) => (
      <p className="text-primary/60" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc pl-6 space-y-2 text-primary/60" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-6 space-y-2 text-primary/60" {...props} />
    ),
    li: (props) => (
      <li className="leading-relaxed pl-1 marker:text-primary/40" {...props} />
    ),
    strong: (props) => (
      <strong className="font-semibold text-primary" {...props} />
    ),
    em: (props) => (
      <em className="italic" {...props} />
    ),
    a: (props) => (
      <a className="underline underline-offset-4 hover:text-primary transition-colors" {...props} />
    ),
    hr: (props) => (
      <hr className="border-border" {...props} />
    ),
    ProjectCard,
    ProjectTabs,
    ProjectTab,
    ProjectAccordion,
    ProjectAccordionItem,
    Callout,
    Stat,
    StatGroup,
    Figure,
  };
}
