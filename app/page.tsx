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
              <p className="font-normal text-primary">Maksim Anisimov. Product and Interface Designer.</p>
              <p className="text-primary/40">Chicago, Illinois, United States.</p>
            </div>
            <p className="text-primary/60">I design interfaces, where every interaction is considered and nothing is accidental. The kind of product that's hard to explain but immediately right to use.</p>
            <p className="text-primary/60">Write me an <a data-cuelume-hover="tick" data-cuelume-press="bloom" href="mailto:hello@bbetperf.com" target="_blank" className="text-primary hover:underline">Email</a> and check my <a data-cuelume-hover="tick" data-cuelume-press="bloom" href="https://twitter.com/bbetperf" target="_blank" className="text-primary hover:underline">Tweets</a>, <a data-cuelume-hover="tick" data-cuelume-press="bloom" href="https://instagram.com/bebetterthanperfect" target="_blank" className="text-primary hover:underline">Shots</a>.</p>
          </div>

          <div className="flex flex-col flex items-left gap-5">
            <p className="font-normal text-primary px-3">Projects</p>
            <div className="flex flex-col flex items-left">
              {projects.map((entry) => (
                <Item key={entry.slug} asChild>
                  <Link href={entry.href ?? `/projects/${entry.slug}`}>
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
            <p className="font-normal text-primary px-3">Nuggets</p>
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
            <p className="font-normal text-primary px-3">Readings</p>
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
