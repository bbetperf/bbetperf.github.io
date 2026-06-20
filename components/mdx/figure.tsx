import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-2 flex flex-col gap-2">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        className="w-full h-auto rounded-xl ring-1 ring-foreground/10"
      />
      {caption && (
        <figcaption className="text-base text-zinc-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
