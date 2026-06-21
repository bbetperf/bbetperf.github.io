import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="flex flex-col gap-3">
      <AspectRatio ratio={16 / 9} className="rounded-lg bg-card ring-1 ring-border">
        <Image
          src={src}
          alt={alt}
          fill
        />
      </AspectRatio>
      {caption && (
        <figcaption className="text-base text-primary/40 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
