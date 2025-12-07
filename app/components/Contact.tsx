'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, MailIcon } from './svg-assets';
import Ornament from './Ornament';

const socials = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://linkedin.com/in/widaputri',
    handle: '@widaputri'
  },
  {
    name: 'GitHub',
    icon: GithubIcon,
    url: 'https://github.com/widaputri',
    handle: '@widaputri'
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
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[935.642px] mx-auto">
        {/* Section Content */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Top Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="scale-75 md:scale-100"
          >
            <Ornament />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight"
            style={{ 
              fontFamily: 'var(--font-caveat)',
              textShadow: '0px 4px 13.6px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let's Create Something Amazing Together
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 text-center max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-instrument)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm always excited to collaborate on innovative projects and tackle new challenges. 
            Whether you have an idea or just want to say hi, feel free to reach out!
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full justify-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 w-full sm:w-auto min-w-[250px]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>
                  <div className="flex flex-col items-start">
                    <span 
                      className="text-white/70 text-xs font-semibold uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-bricolage)' }}
                    >
                      {social.name}
                    </span>
                    <span 
                      className="text-white font-medium"
                      style={{ fontFamily: 'var(--font-instrument)' }}
                    >
                      {social.handle}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-4"
          >
            <motion.a
              href="mailto:widapk2709@gmail.com"
              className="inline-block px-10 py-5 bg-white text-[#b1e4ff] font-bold text-lg rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
              style={{ fontFamily: 'var(--font-bricolage)' }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>

          {/* Bottom Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="scale-75 md:scale-100 mt-8"
          >
            <Ornament />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
