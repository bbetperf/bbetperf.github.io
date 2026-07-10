import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Callout } from "@/components/mdx/callout";
import { Figure } from "@/components/mdx/figure";
import { Placeholder } from "@/components/mdx/placeholder";
import { ProjectCard } from "@/components/mdx/project-card";
import { ProjectAccordion, ProjectAccordionItem } from "@/components/mdx/project-accordion";
import { ProjectTabs, ProjectTab } from "@/components/mdx/project-tabs";
import { Stat, StatGroup } from "@/components/mdx/stat";

const BUTTON_VARIANTS = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const;
const BUTTON_SIZES = ["xs", "sm", "default", "lg"] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-base text-primary px-3">{title}.</p>
      <div className="flex flex-col gap-4 px-3">{children}</div>
    </div>
  );
}

export default function TestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex max-w-[640px] w-full min-h-screen flex-col gap-24 py-24 px-6">
        <div className="flex flex-col gap-8 px-3">
          <Button asChild variant="link" size="link">
            <Link href="/">Back.</Link>
          </Button>
          <div className="flex flex-col gap-1">
            <p className="text-base text-primary">Elements.</p>
            <p className="text-base text-primary/40">Every UI primitive and content block used in this project.</p>
          </div>
        </div>

        <Section title="Buttons">
          {BUTTON_VARIANTS.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-2">
              <span className="w-20 shrink-0 text-base text-primary/40">{variant}</span>
              {BUTTON_SIZES.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  Button
                </Button>
              ))}
            </div>
          ))}
        </Section>

        <Section title="Card">
          <Card>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
              <CardAction>
                <Button variant="ghost" size="sm">
                  Action
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Card content area. Any element can live here.</p>
            </CardContent>
            <CardFooter>
              <p className="text-base text-primary/60">Card footer</p>
            </CardFooter>
          </Card>
        </Section>

        <Section title="Item">
          <ItemGroup>
            <Item variant="outline">
              <ItemMedia variant="icon">
                <div className="size-4 rounded-full bg-primary/60" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Item title</ItemTitle>
                <ItemDescription>Supporting description text for this item.</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Action
                </Button>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item variant="muted">
              <ItemContent>
                <ItemTitle>Second item</ItemTitle>
                <ItemDescription>Muted variant, no media.</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Section>

        <Section title="Accordion">
          <Accordion type="multiple" className="border border-border rounded-lg px-3">
            <AccordionItem value="one">
              <AccordionTrigger>First item</AccordionTrigger>
              <AccordionContent>Content revealed for the first accordion item.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="two">
              <AccordionTrigger>Second item</AccordionTrigger>
              <AccordionContent>Content revealed for the second accordion item.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section title="Tabs">
          <Tabs defaultValue="tab-1">
            <TabsList>
              <TabsTrigger value="tab-1">Tab one</TabsTrigger>
              <TabsTrigger value="tab-2">Tab two</TabsTrigger>
            </TabsList>
            <TabsContent value="tab-1">Content for the first tab.</TabsContent>
            <TabsContent value="tab-2">Content for the second tab.</TabsContent>
          </Tabs>
        </Section>

        <Section title="Separator">
          <p className="text-base text-primary/60">Above the line.</p>
          <Separator />
          <p className="text-base text-primary/60">Below the line.</p>
        </Section>

        <Section title="Aspect ratio">
          <AspectRatio ratio={16 / 9} className="rounded-lg bg-card ring-1 ring-border" />
        </Section>

        <Section title="Figure & placeholder">
          <Figure src="/assets/projects/noque/image-1.png" alt="Sample figure image" caption="Figure with caption" />
          <Placeholder caption="Placeholder with caption" />
        </Section>

        <Section title="Callout">
          <Callout>
            <p>This is a callout block, used to highlight a note inside MDX content.</p>
          </Callout>
        </Section>

        <Section title="Stat group">
          <StatGroup>
            <Stat value="12" label="Projects" />
            <Stat value="48" label="Nuggets" />
            <Stat value="3" label="Readings" />
            <Stat value="100%" label="Considered" />
          </StatGroup>
        </Section>

        <Section title="Project card">
          <ProjectCard title="Project card title" description="Project card description.">
            <p>Content passed as children of the project card.</p>
          </ProjectCard>
        </Section>

        <Section title="Project accordion">
          <ProjectAccordion>
            <ProjectAccordionItem title="Overview">
              <p>Overview content for the project accordion item.</p>
            </ProjectAccordionItem>
            <ProjectAccordionItem title="Process">
              <p>Process content for the project accordion item.</p>
            </ProjectAccordionItem>
          </ProjectAccordion>
        </Section>

        <Section title="Project tabs">
          <ProjectTabs>
            <ProjectTab label="Problem">
              <p>Problem statement content.</p>
            </ProjectTab>
            <ProjectTab label="Solution">
              <p>Solution content.</p>
            </ProjectTab>
          </ProjectTabs>
        </Section>
      </div>
    </div>
  );
}
