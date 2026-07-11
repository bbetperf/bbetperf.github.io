import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
}

const VIDEO_EXTENSIONS = [".mov", ".mp4", ".webm"];

export function Figure({ src, alt, caption, description }: FigureProps) {
  const isVideo = VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));

  return (
    <figure className="flex flex-col gap-3">
      <div className="flex flex-col">
        {description && (
          <div className="flex flex-col gap-3 overflow-hidden rounded-t-lg bg-card p-3 pb-6 text-base ring-border border border-b-0"><p>{description}</p></div>
        )}
        <AspectRatio ratio={16 / 9} className={cn("overflow-hidden rounded-lg bg-secondary border", description && "-mt-3")}>
          {isVideo ? (
            <video
              src={src}
              aria-label={alt}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
            />
          )}
        </AspectRatio>
      </div>
      {caption && (
        <figcaption className="text-base text-primary/40 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
