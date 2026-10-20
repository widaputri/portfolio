'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GithubIcon, LinkedInIcon, MailIcon, MediumIcon } from './svg-assets';

const links = [
  ['WORKS', '#works'],
  ['RESUME', '#resume'],
  ['CONTACT', '#contact'],
] as const;

const socials = [
  ['GitHub', 'https://github.com/widaputri', GithubIcon],
  ['LinkedIn', 'https://linkedin.com/in/widaputri', LinkedInIcon],
  ['Medium', 'https://medium.com/@widaputri', MediumIcon],
  ['Email', 'mailto:widapk2709@gmail.com', MailIcon],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="portfolio-rail">
      <div className="flex items-start justify-between gap-4">
        <Link href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/icon.svg" alt="" width={32} height={32} className="h-8 w-8" />
          <span className="design-font text-[13px] leading-[.9]">Wida<br />Putri</span>
        </Link>
        <button
          type="button"
          className="design-font rounded border border-[#363636] px-2 py-1 text-xs md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          MENU
        </button>
      </div>

      <div id="mobile-navigation" className={`${open ? 'block' : 'hidden'} mt-6 md:block`}>
        <nav className="design-font flex flex-col gap-3 text-[10px] uppercase">
          {links.map(([label, href], index) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="transition-opacity hover:opacity-50">
              {index + 1}. {label}
            </Link>
          ))}
        </nav>

        <div className="mt-[calc(100vh-250px)] flex flex-col gap-3 md:mt-[calc(100vh-250px)]">
          <p className="mono-font text-[10px] leading-[1.15] text-[#8f8f8f]">
            Let&apos;s connect and make<br />something meaningful.
          </p>
          <div className="flex gap-3">
            {socials.map(([label, href, Icon]) => (
              <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={label} className="h-3.5 w-3.5 hover:opacity-50">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
