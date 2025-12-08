'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface WorkItem {
  title: string;
  subtitle: string;
  thumbnail: string;
  link: string;
  cta: string;
}

interface WorkCardProps {
  work: WorkItem;
  index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Thumbnail Container */}
      <motion.div
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#B1E4FF]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href={work.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Subtitle */}
        <motion.p
          className="text-sm font-bold text-white/70 tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-instrument)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
        >
          {work.subtitle}
        </motion.p>

        {/* Title */}
        <motion.h3
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
          style={{ 
            fontFamily: 'var(--font-caveat)',
            textShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
        >
          {work.title}
        </motion.h3>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        >
          <Link
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300"
              style={{ fontFamily: 'var(--font-bricolage)' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {work.cta}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
