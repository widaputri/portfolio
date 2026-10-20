'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export interface WorkItem {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  link?: string;
  cta?: string;
  accent: string;
  scroll?: boolean;
  video?: boolean;
}

interface WorkCardProps {
  work: WorkItem;
  onVideo: () => void;
}

export default function WorkCard({ work, onVideo }: WorkCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const isInteractive = Boolean(work.link || work.video);

  const visual = (
    <div className="screenshot-window w-full rounded-[9px]" style={{ backgroundColor: work.accent, ['--scroll-distance' as string]: '-54%' }}>
      <Image
        ref={imageRef}
        src={work.thumbnail}
        alt=""
        width={640}
        height={480}
        className={`absolute left-1/2 top-3 w-[82%] -translate-x-1/2 object-contain ${work.scroll ? 'h-auto' : 'h-full'}`}
      />
      {work.video && (
        <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#363636] shadow">
          ▶
        </span>
      )}
    </div>
  );

  return (
    <article className="grid min-h-[300px] grid-cols-[320px_1fr] gap-10 rounded-3xl border border-[#d9d9d9] bg-[#f1f1f5] p-5 max-[700px]:grid-cols-1 max-[700px]:gap-5">
      {isInteractive ? (
        work.video ? (
          <button type="button" onClick={onVideo} className="block text-left" aria-label={`Preview ${work.title}`}>
            {visual}
          </button>
        ) : (
          <Link href={work.link!} target="_blank" rel="noreferrer" className="block">{visual}</Link>
        )
      ) : visual}
      <div className="flex min-w-0 flex-col justify-between gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="mono-font text-[clamp(24px,2.3vw,32px)] leading-none">{work.title}</h3>
          <p className="mono-font text-xl leading-none text-[#8f8f8f]">{work.subtitle}</p>
          <p className="design-font text-xl leading-[1.2]">{work.description}</p>
        </div>
        {work.link && (
          <Link href={work.link} target="_blank" rel="noreferrer" className="mono-font text-2xl underline underline-offset-4">
            {work.cta ?? 'Full case study →'}
          </Link>
        )}
        {work.video && <button type="button" onClick={onVideo} className="mono-font text-left text-2xl underline underline-offset-4">Watch video →</button>}
      </div>
    </article>
  );
}
