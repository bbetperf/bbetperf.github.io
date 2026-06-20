import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function ProjectCard({ title, description, children }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent className="[&_p:not(:last-child)]:mb-4">{children}</CardContent>}
    </Card>
  );
}
