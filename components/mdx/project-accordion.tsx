"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface ProjectAccordionItemProps {
  title: string;
  children?: React.ReactNode;
}

export function ProjectAccordionItem({ title, children }: ProjectAccordionItemProps) {
  const value = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
}

interface ProjectAccordionProps {
  children?: React.ReactNode;
}

export function ProjectAccordion({ children }: ProjectAccordionProps) {
  return (
    <Accordion type="multiple" className="border rounded-xl px-3">
      {children}
    </Accordion>
  );
}
