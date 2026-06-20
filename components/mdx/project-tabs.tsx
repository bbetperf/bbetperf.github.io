"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ProjectTabProps {
  label: string;
  children?: React.ReactNode;
}

// Data container only — rendered by ProjectTabs
export function ProjectTab(_props: ProjectTabProps) {
  return null;
}

interface ProjectTabsProps {
  children?: React.ReactNode;
}

export function ProjectTabs({ children }: ProjectTabsProps) {
  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<ProjectTabProps> =>
      React.isValidElement(child) && typeof (child.props as ProjectTabProps).label === "string"
  );

  if (tabs.length === 0) return null;

  return (
    <Tabs defaultValue="tab-0" className="gap-8">
      <TabsList className="w-full">
        {tabs.map((tab, i) => (
          <TabsTrigger key={i} value={`tab-${i}`}>
            {tab.props.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent key={i} value={`tab-${i}`} className="[&_p:not(:last-child)]:mb-4">
          {tab.props.children}
        </TabsContent>
      ))}
    </Tabs>
  );
}
