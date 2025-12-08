'use client';

import { motion } from 'framer-motion';
import WorkCard, { WorkItem } from './WorkCard';
import Ornament from './Ornament';

const projects: WorkItem[] = [
  {
    title: 'SPUN Smart Upload Case Study',
    subtitle: 'INTERNSHIP PROJECT',
    thumbnail: '/spun_smart.png',
    link: 'https://medium.com/@widaputri/spun-smart-upload-case-study-7ae3eea5ef5f',
    cta: 'Read my thought process'
  },
  {
    title: 'Glyph: CV generator landing page',
    subtitle: 'FREELANCE WORK',
    thumbnail: '/glyph.png',
    link: 'https://www.figma.com/proto/gxLZlcFkdSOEEnxoYQHfGz/Resume-Forge?page-id=159%3A49&node-id=207-347&node-type=frame&viewport=-417%2C545%2C0.26&t=dgvi6ehfpf2geLuQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=207%3A347&show-proto-sidebar=1',
    cta: 'Explore the design'
  },
  {
    title: 'SPUN Service Detail Page Case Study',
    subtitle: 'RECRUITMENT ASSIGNMENT',
    thumbnail: '/spun_recr.png',
    link: 'https://www.figma.com/design/Mbll4LfhyZUQ21hqtHLRHU/SPUN-Case-Study?node-id=0-1&t=Wat6oYKNrMeKVxCX-1',
    cta: 'See my case study'
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
            <Ornament flipped />
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
