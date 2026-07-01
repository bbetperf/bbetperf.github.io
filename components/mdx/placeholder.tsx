import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PlaceholderProps {
  caption?: string;
}

export function Placeholder({ caption }: PlaceholderProps) {
  return (
    <figure className="flex flex-col gap-3">
      <AspectRatio ratio={16 / 9} className="rounded-lg bg-card ring-1 ring-border" />
      {caption && (
        <figcaption className="text-base text-primary/40 text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
