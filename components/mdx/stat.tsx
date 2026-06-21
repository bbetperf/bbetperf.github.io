interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-base font-base text-primary">{value}</span>
      <span className="text-base text-primary/60">{label}</span>
    </div>
  );
}

interface StatGroupProps {
  children?: React.ReactNode;
}

export function StatGroup({ children }: StatGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-3 bg-card rounded-lg border border-border p-3 sm:grid-cols-4">
      {children}
    </div>
  );
}
