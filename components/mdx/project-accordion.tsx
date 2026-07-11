"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

interface ProjectAccordionItemProps {
  title: string;
  children?: React.ReactNode;
}

export function ProjectAccordionItem({ title, children }: ProjectAccordionItemProps) {
  return (
    <AccordionItem value={slugify(title)}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
}

interface ProjectAccordionProps {
  children?: React.ReactNode;
}

export function ProjectAccordion({ children }: ProjectAccordionProps) {
  const items = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<ProjectAccordionItemProps> =>
      React.isValidElement(child) && typeof (child.props as ProjectAccordionItemProps).title === "string"
  );
  const defaultValue = items.length > 0 ? [slugify(items[0].props.title)] : undefined;

  return (
    <Accordion type="multiple" defaultValue={defaultValue} className="border rounded-lg px-3">
      {children}
    </Accordion>
  );
}
