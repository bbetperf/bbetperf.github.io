import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <div className={cn("bg-card rounded-lg border border-border px-3 py-3 text-base [&_p]:not-last:mb-3 [&_ul]:not-last:mb-3 [&_ol]:not-last:mb-3")}>
      {children}
    </div>
  );
}