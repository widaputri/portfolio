'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GithubIcon, LinkedInIcon, MailIcon, MediumIcon } from './svg-assets';

const socials = [
  ['GitHub', 'https://github.com/widaputri', GithubIcon],
  ['LinkedIn', 'https://linkedin.com/in/widaputri', LinkedInIcon],
  ['Medium', 'https://medium.com/@widaputri', MediumIcon],
  ['Email', 'mailto:widapk2709@gmail.com', MailIcon],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const formatWibTime = () => new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());

    const updateTime = () => setCurrentTime(formatWibTime());
    updateTime();
    const timer = window.setInterval(updateTime, 30_000);

    fetch('/portfolio-meta.json')
      .then((response) => {
        if (!response.ok) throw new Error(`Portfolio metadata request failed: ${response.status}`);
        return response.json() as Promise<{ updatedAt?: string }>;
      })
      .then(({ updatedAt }) => {
        if (!updatedAt) throw new Error('Portfolio metadata did not include updatedAt');
        setLastUpdated(new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Jakarta',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date(updatedAt)));
      })
      .catch((error: unknown) => {
        console.error(error);
      });

    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="portfolio-rail flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4">
        <Link href="#top" className="flex items-center gap-5" onClick={() => setOpen(false)}>
          <Image src="/figma-assets/portfolio-mark.svg" alt="" width={80} height={80} className="h-20 w-20 max-[900px]:h-10 max-[900px]:w-10" />
          <span className="mono-font text-4xl leading-[.9] max-[900px]:text-xl">Wida<br />Putri</span>
        </Link>
        <button
          type="button"
          className="design-font hidden rounded border border-[#363636] p-2 max-[900px]:block"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="flex w-5 flex-col gap-1" aria-hidden="true">
            <span className="h-px w-full bg-[#363636]" />
            <span className="h-px w-full bg-[#363636]" />
            <span className="h-px w-full bg-[#363636]" />
          </span>
        </button>
        </div>
        <div className={`${open ? 'block' : 'hidden'} mt-10 border-t border-[#d9d9d9] pt-8 min-[901px]:block`}>
          <nav className="mono-font flex flex-col gap-0 text-xl leading-[2] text-[#201e3e]">
            {([['CASE STUDIES', '#works'], ['RESUME', '#resume'], ['EDUCATION', '#education']] as const).map(([label, href], index) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="transition-opacity hover:opacity-50">
                {index + 1}. {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div id="mobile-navigation" className={`${open ? 'block' : 'hidden'} border-t border-[#d9d9d9] pt-10 min-[901px]:block`}>
        <div className="flex flex-col gap-10">
          <p className="mono-font text-xl leading-none">
            It&apos;s {currentTime || '—'} WIB where I live. Leave a message and I&apos;ll get back to you soon!
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:widapk2709@gmail.com" className="flex items-center gap-3 hover:opacity-50">
              <MailIcon />
              <span className="mono-font text-base">widapk2709@gmail.com</span>
            </a>
            <div className="flex gap-3">
            {socials.filter(([label]) => label !== 'Email').map(([label, href, Icon]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="h-6 w-6 hover:opacity-50">
                <Icon />
              </a>
            ))}
            </div>
          </div>
          <p className="mono-font text-xs text-[#8e8e8e]">Portfolio last updated: {lastUpdated || '—'} WIB</p>
        </div>
      </div>
    </aside>
  );
}
