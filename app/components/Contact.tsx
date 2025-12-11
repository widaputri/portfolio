'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, MailIcon, MediumIcon } from './svg-assets';
import Ornament from './Ornament';

interface SocialLink {
  name: string;
  icon: typeof GithubIcon;
  url: string;
  handle: string;
}

const socials: SocialLink[] = [
  {
    name: 'GitHub',
    icon: GithubIcon,
    url: 'https://github.com/widaputri',
    handle: 'widaputri'
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://linkedin.com/in/widaputri',
    handle: 'widaputri'
  },
  {
    name: 'Medium',
    icon: MediumIcon,
    url: 'https://medium.com/@widaputri',
    handle: 'widaputri'
  },
  {
    name: 'Email',
    icon: MailIcon,
    url: 'mailto:widapk2709@gmail.com',
    handle: 'widapk2709@gmail.com'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-32 bg-[#f4fbff]">
      <div className="max-w-[1440px] mx-auto px-0 lg:px-[60px]">
        {/* Section Header */}
        <motion.h2
          className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-none font-normal text-[#1d1d1d] mb-6 md:mb-8 lg:mb-12"
          style={{ 
            fontFamily: 'var(--font-dream-cottage)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Interested?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed md:leading-7 lg:leading-[30px] text-[#898989] max-w-full lg:max-w-[1200px] mb-10 md:mb-[50px] lg:mb-[60px]"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I&apos;m always excited to collaborate on innovative projects and tackle new challenges. 
          Whether you have an idea or just want to say hi, feel free to reach out!
        </motion.p>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-full lg:max-w-[1200px]">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 md:gap-4 px-4 py-4 md:px-6 md:py-6 border border-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white transition-colors group overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(29, 29, 29, 0.12)",
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#1d1d1d] group-hover:text-white transition-colors"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon />
                </motion.div>
                <motion.span 
                  className="text-[16px] md:text-[18px] lg:text-[20px] leading-tight text-[#1d1d1d] font-medium group-hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {social.handle}
                </motion.span>
              </motion.a>
            );
          })}
        </div>
        <div className="mt-12 md:mt-16 lg:mt-24">
          <Ornament />
        </div>
      </div>
    </section>
  );
}
