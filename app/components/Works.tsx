'use client';

import { motion } from 'framer-motion';
import WorkCard, { WorkItem } from './WorkCard';

const projects: WorkItem[] = [
  {
    title: 'SPUN: Smart Upload Case Study',
    subtitle: 'INTERNSHIP PROJECT',
    thumbnail: '/spun_smart.png', // Frame 43
    link: 'https://medium.com/@widaputri/spun-smart-upload-case-study-7ae3eea5ef5f',
    cta: 'READ THE CASE STUDY',
    number: 1
  },
  {
    title: 'SPUN: Service Detail Case Study',
    subtitle: 'RECRUITMENT ASSIGNMENT',
    thumbnail: '/spun_recr.png', // Frame 44
    link: 'https://www.figma.com/design/Mbll4LfhyZUQ21hqtHLRHU/SPUN-Case-Study?node-id=0-1&t=Wat6oYKNrMeKVxCX-1',
    cta: 'READ THE CASE STUDY',
    number: 2
  },
  {
    title: 'Glyph',
    subtitle: 'FREELANCE WORK',
    thumbnail: '/glyph.png', // Frame 42
    link: 'https://www.figma.com/proto/gxLZlcFkdSOEEnxoYQHfGz/Resume-Forge?page-id=159%3A49&node-id=207-347&node-type=frame&viewport=-417%2C545%2C0.26&t=dgvi6ehfpf2geLuQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=207%3A347&show-proto-sidebar=1',
    cta: 'SEE THE HI-FI',
    number: 3
  }
];

export default function Works() {
  return (
    <section id="works" className="relative px-6 md:px-12 lg:px-[120px] bg-[#f4fbff]">
      <div className="max-w-[1440px] mx-auto px-0 lg:px-[60px]">
        {/* Section Header */}
        <motion.div
          className="border-b border-[#1d1d1d] h-20 md:h-[100px] lg:h-[120px] flex items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-none text-[#1d1d1d]"
            style={{ 
              fontFamily: 'var(--font-dream-cottage)',
            }}
          >
            Works
          </h2>
        </motion.div>

        {/* Projects Stack */}
        <div className="pt-8 md:pt-12 lg:pt-16 flex flex-col">
          {projects.map((project, index) => (
            <div key={index}>
              <WorkCard work={project} index={index} />
              {index < projects.length - 1 && (
                <div className="h-px bg-[#1d1d1d] my-8 md:my-12 lg:my-16" />
              )}
            </div>
          ))}
        </div>

        {/* See More Button - Only show if more than 3 projects */}
        {projects.length > 3 && (
          <motion.div
            className="flex justify-center py-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button
              className="px-6 py-3 border border-[#1d1d1d] text-[20px] leading-5 font-bold text-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-plus-jakarta)', letterSpacing: '0.05em' }}
            >
              SEE MORE
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
