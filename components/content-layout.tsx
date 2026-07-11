import Link from "next/link";
import { Button } from "./ui/button";

interface ContentLayoutProps {
  title: string;
  description: string;
  date: string;
  backHref: string;
  children: React.ReactNode;
}

export default function ContentLayout({
  title,
  description,
  date,
  backHref,
  children,
}: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex max-w-[640px] w-full min-h-screen flex-col gap-24 py-24 px-6">
        <div className="flex flex-col gap-24">
          <Button asChild variant="link" size="link">
            <Link href={backHref}>Back</Link>
          </Button>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <p className="font-normal text-primary">{title}</p>
              <p className="text-primary/40">{date}</p>
            </div>
            <p className="text-primary/60">{description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-24 text-base text-primary/60 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
