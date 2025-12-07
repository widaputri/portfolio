'use client';

import { motion } from 'framer-motion';
import WorkCard, { WorkItem } from './WorkCard';
import Ornament from './Ornament';

// Easy to modify - just add/remove/edit projects here
const projects: WorkItem[] = [
  {
    title: 'SPUN Smart Upload Case Study',
    subtitle: 'INTERNSHIP PROJECT',
    thumbnail: '/project-1.jpg', // Replace with your actual image path
    link: 'https://example.com/spun-case-study',
    cta: 'Read my thought process'
  },
  {
    title: 'E-Commerce Platform Redesign',
    subtitle: 'CLIENT PROJECT',
    thumbnail: '/project-2.jpg', // Replace with your actual image path
    link: 'https://example.com/ecommerce-redesign',
    cta: 'View the transformation'
  },
  {
    title: 'Mobile Banking App',
    subtitle: 'PERSONAL PROJECT',
    thumbnail: '/project-3.jpg', // Replace with your actual image path
    link: 'https://example.com/banking-app',
    cta: 'Explore the design'
  },
  {
    title: 'AI-Powered Dashboard',
    subtitle: 'FREELANCE WORK',
    thumbnail: '/project-4.jpg', // Replace with your actual image path
    link: 'https://example.com/ai-dashboard',
    cta: 'See how it works'
  }
];

export default function Works() {
  return (
    <section id="works" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 md:gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="scale-75 md:scale-100"
          >
            <Ornament />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center"
            style={{ 
              fontFamily: 'var(--font-caveat)',
              textShadow: '0px 4px 13.6px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Selected Works
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/80 text-center max-w-2xl"
            style={{ fontFamily: 'var(--font-instrument)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A curated collection of projects that showcase my problem-solving approach and design thinking
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <WorkCard key={index} work={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
