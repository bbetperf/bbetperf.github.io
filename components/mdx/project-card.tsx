import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export function ProjectCard({ title, description, action, footer, children }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      {children && <CardContent className="[&_p]:not-last:mb-3 [&_ul]:not-last:mb-3 [&_ol]:not-last:mb-3">{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
