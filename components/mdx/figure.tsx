import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

const VIDEO_EXTENSIONS = [".mov", ".mp4", ".webm"];

export function Figure({ src, alt, caption }: FigureProps) {
  const isVideo = VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));

  return (
    <figure className="flex flex-col gap-3">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-secondary ring-1 ring-border sm:shadow-sm sm:dark:shadow-inset-border">
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
      {caption && (
        <figcaption className="text-base text-primary/40 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
