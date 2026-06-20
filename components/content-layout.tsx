import Link from "next/link";

interface ContentLayoutProps {
  title: string;
  description: string;
  backHref: string;
  children: React.ReactNode;
}

export default function ContentLayout({
  title,
  description,
  backHref,
  children,
}: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex max-w-[640px] w-full min-h-screen flex-col gap-24 py-24 px-6">
        <div className="flex flex-col gap-8">
          <Link href={backHref} className="text-base text-zinc-600 hover:text-zinc-950 transition-colors w-fit">
            Back
          </Link>
          <div className="flex flex-col gap-1">
            <p className="text-base text-zinc-950">{title}</p>
            <p className="text-base text-zinc-600">{description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-24 text-base text-zinc-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
