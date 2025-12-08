'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, MailIcon } from './svg-assets';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const navLinks = [
    { name: 'BACKGROUND', href: '#background' },
    { name: 'WORKS', href: '#works' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: MailIcon, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-50 h-[150px] md:h-[204px] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(112,193,237,0.8)] to-transparent" />
      
      <div className="relative w-full h-full pointer-events-auto px-6 md:px-0">
        {/* Logo and Navigation */}
        <div className="absolute left-6 md:left-[120px] top-[30px] md:top-[58px] flex items-center gap-6 md:gap-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          {/* Logo */}
          <motion.div
            className="w-9 h-9 relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/2773115ed71be222a84a64b3349711007958585e.png"
              alt="Logo"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-[84px]">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="text-white text-sm xl:text-[16px] font-bold tracking-[1.6px] hover:opacity-70 transition-opacity whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-bricolage)', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <motion.div
          className="absolute right-6 md:right-[121px] top-[30px] md:top-[66px] flex items-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white hover:opacity-70 transition-opacity w-5 h-5 md:w-6 md:h-6"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.header>
  );
}
