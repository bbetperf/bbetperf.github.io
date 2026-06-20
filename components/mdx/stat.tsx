interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-base font-base text-zinc-950 leading-none">{value}</span>
      <span className="text-base text-zinc-600">{label}</span>
    </div>
  );
}

interface StatGroupProps {
  children?: React.ReactNode;
}

export function StatGroup({ children }: StatGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-6 rounded-xl border border-border p-4 sm:grid-cols-4">
      {children}
    </div>
  );
}
