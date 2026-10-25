'use client';

import { useEffect, useRef, useState } from 'react';
import WorkCard, { WorkItem } from './WorkCard';

const projects: WorkItem[] = [
  {
    title: 'How I Reduced a 100+ Click Flow to Just 3 Clicks',
    subtitle: 'SPUN | INTERNSHIP',
    description: 'Transforming a tedious, one-by-one upload process into a seamless, AI-classified drag-and-drop workflow to drastically reduce visa application time.',
    thumbnail: '/figma-assets/raw-3.png',
    link: 'https://medium.com/@widaputri/spun-smart-upload-case-study-7ae3eea5ef5f',
    accent: '#f552a6',
  },
  {
    title: 'Building an Internal Tool 0→1 that reduced TaT by 30%',
    subtitle: 'SPUN | INTERNSHIP',
    description: 'Gathered requirements for the platform, doing research through interviews and observations, and designed the core end-to-end flows.',
    thumbnail: '/figma-assets/internal-tool-2.png',
    accent: '#ca52f5',
    cta: 'Case study unavailable :) Ask me about it!',
    spunLogo: true,
  },
  {
    title: 'The Case Study That Got Me an Internship in My 4th Semester',
    subtitle: 'SPUN | RECRUITMENT ASSIGNMENT',
    description: 'A redesign of SPUN’s service detail page, detailing my approach to displaying complex visa information clearly and concisely, helping users make faster decisions.',
    thumbnail: '/figma-assets/raw-9.png',
    link: 'https://www.figma.com/design/Mbll4LfhyZUQ21hqtHLRHU/SPUN-Case-Study',
    accent: '#528ef5',
    scroll: true,
  },
  {
    title: 'glyph: CV Editor',
    subtitle: 'GLYPH | FREELANCE WORK',
    description: 'Landing page freelance design work for a CV editor product.',
    thumbnail: '/figma-assets/raw-7.png',
    link: 'https://www.figma.com/proto/gxLZlcFkdSOEEnxoYQHfGz/Resume-Forge',
    accent: '#f5d252',
    scroll: true,
    cta: 'Full prototype →',
  },
  {
    title: 'AI-powered study abroad prep platform',
    subtitle: 'BOUNDLESS | HACKATHON & STARTUP COURSE',
    description: 'Award-winning hackathon project that we iterated through in a startup software development course. I acted as the CEO, hustler, and scrum master leading the software development cycle from ideation to validation.',
    thumbnail: '/figma-assets/raw-16.png',
    accent: '#ca52f5',
    video: true,
  },
];

export default function Works() {
  const [videoOpen, setVideoOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (videoOpen && !dialog.open) dialog.showModal();
    if (!videoOpen && dialog.open) dialog.close();
  }, [videoOpen]);

  return (
    <section id="works" className="mt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        {projects.map((project) => <WorkCard key={project.title} work={project} onVideo={() => setVideoOpen(true)} />)}
      </div>
      <dialog ref={dialogRef} className="video-dialog w-[min(900px,calc(100%-32px))] rounded-2xl bg-[#363636] p-3 text-white" onClose={() => setVideoOpen(false)}>
        <div className="flex justify-end pb-2">
          <button type="button" onClick={() => setVideoOpen(false)} className="px-2 text-2xl" aria-label="Close video preview">×</button>
        </div>
        <div className="aspect-video">
          {videoOpen && (
            <video
              className="h-full w-full"
              src="/lv_0_20260603230844.mp4"
              title="Boundless project video"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </dialog>
    </section>
  );
}
