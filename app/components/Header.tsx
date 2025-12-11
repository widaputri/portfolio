'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, MailIcon, MediumIcon } from './svg-assets';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'WORKS', href: '#works', hasBackground: false },
    { name: 'RESUME', href: '#resume', hasBackground: false },
    { name: 'CONTACT', href: '#contact', hasBackground: true },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/widaputri', label: 'GitHub' },
    { icon: MediumIcon, href: 'https://medium.com/@widaputri', label: 'Medium' },
    { icon: LinkedInIcon, href: 'https://linkedin.com/in/widaputri', label: 'LinkedIn' },
    { icon: MailIcon, href: 'mailto:widapk2709@gmail.com', label: 'Email' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: 'linear-gradient(180deg, #F4FBFF 50%, rgba(244, 251, 255, 0) 100%)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] h-16 md:h-20 lg:h-[120px] flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-3 md:gap-4 lg:gap-[19px]">
          {/* Logo */}
          <Link href="#top">
            <motion.div
              className="w-8 h-8 md:w-9 md:h-9 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/icon.png"
                alt="Logo"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`text-[#1d1d1d] text-xs md:text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity ${
                    link.hasBackground ? 'px-2 py-1.5 md:px-3 md:py-2 border border-[#1d1d1d] rounded-md' : ''
                  }`}
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Desktop Social Links */}
        <motion.div
          className="hidden md:flex items-center gap-4 lg:gap-6"
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
                className="text-[#1d1d1d] hover:opacity-70 transition-opacity w-5 h-5 md:w-6 md:h-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-5 h-0.5 bg-[#1d1d1d]"
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-[#1d1d1d]"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-[#1d1d1d]"
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden bg-[#f4fbff]"
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-6 py-4 border-t border-[#1d1d1d]/10">
          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-[#1d1d1d] text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity ${
                  link.hasBackground ? 'px-3 py-2 border border-[#1d1d1d] rounded-md text-center' : ''
                }`}
                style={{ fontFamily: 'var(--font-plus-jakarta)' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Social Links */}
          <div className="flex items-center gap-6 justify-center pt-4 border-t border-[#1d1d1d]/10">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#1d1d1d] hover:opacity-70 transition-opacity w-5 h-5"
                  onClick={handleLinkClick}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
