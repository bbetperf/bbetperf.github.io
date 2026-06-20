import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  type?: "note" | "insight" | "warning";
}

const styles = {
  note: "border-border bg-muted/40 text-foreground",
  insight: "border-foreground/20 bg-foreground/5 text-foreground",
  warning: "border-destructive/30 bg-destructive/5 text-foreground",
};

const labels = {
  note: "Note.",
  insight: "Insight.",
  warning: "Warning.",
};

export function Callout({ children, type = "note" }: CalloutProps) {
  return (
    <div className={cn("rounded-xl border px-3 py-3 text-base [&_p:not(:last-child)]:mb-4", styles[type])}>
      <span className="mb-1.5 block font-base text-base">
        {labels[type]}
      </span>
      {children}
    </div>
  );
}
