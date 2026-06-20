import Link from "next/link";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { getEntries } from "@/lib/content";

export default function Home() {
  const projects = getEntries("projects");
  const nuggets = getEntries("nuggets");
  const readings = getEntries("readings");

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex max-w-[640px] min-h-screen flex-col items-center justify-between py-24 px-3">
        <div className="flex flex-col flex items-left gap-24">
          <div className="flex flex-col flex items-left gap-8 px-3">
            <div className="flex flex-col flex items-left gap-1">
              <p className="text-base text-zinc-950">Maksim Anisimov. Product and Interface Designer.</p>
              <p className="text-base text-zinc-500">Chicago, Illinois, United States.</p>
            </div>
            <p className="text-base text-zinc-600">Crafting digital experiences at the intersection of innovative design systems, bold branding, and intuitive interfaces.</p>
          </div>

          <div className="flex flex-col flex items-left gap-5">
            <p className="text-base text-zinc-950 px-3">Projects.</p>
            <div className="flex flex-col flex items-left">
              {projects.map((entry) => (
                <Item key={entry.slug} asChild>
                  <Link href={`/projects/${entry.slug}`}>
                    <ItemContent>
                      <ItemTitle>{entry.title}</ItemTitle>
                      <ItemDescription>{entry.description}</ItemDescription>
                    </ItemContent>
                  </Link>
                </Item>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex items-left gap-5">
            <p className="text-base text-zinc-950 px-3">Nuggets.</p>
            <div className="flex flex-col flex items-left">
              {nuggets.map((entry) => (
                <Item key={entry.slug} asChild>
                  <Link href={`/nuggets/${entry.slug}`}>
                    <ItemContent>
                      <ItemTitle>{entry.title}</ItemTitle>
                      <ItemDescription>{entry.description}</ItemDescription>
                    </ItemContent>
                  </Link>
                </Item>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex items-left gap-5">
            <p className="text-base text-zinc-950 px-3">Readings.</p>
            <div className="flex flex-col flex items-left">
              {readings.map((entry) => (
                <Item key={entry.slug} asChild>
                  <Link href={`/readings/${entry.slug}`}>
                    <ItemContent>
                      <ItemTitle>{entry.title}</ItemTitle>
                      <ItemDescription>{entry.description}</ItemDescription>
                    </ItemContent>
                  </Link>
                </Item>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
