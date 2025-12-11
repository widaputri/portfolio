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
  number: number;
}

interface WorkCardProps {
  work: WorkItem;
  index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: index * 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-8 md:gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header: Number + Title + CTA Button */}
      <motion.div 
        className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0"
        variants={itemVariants}
      >
        {/* Left: Number + Title + Subtitle */}
        <div className="flex gap-6 md:gap-12">
          {/* Number */}
          <motion.span 
            className="text-[32px] md:text-[40px] lg:text-[48px] leading-none font-normal text-[#1d1d1d]" 
            style={{ fontFamily: 'var(--font-dream-cottage)' }}
            whileHover={{ scale: 1.1, color: '#898989' }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {work.number}
          </motion.span>
          
          {/* Title + Subtitle */}
          <motion.div 
            className="flex flex-col gap-2"
            variants={itemVariants}
          >
            <h3 
              className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-tight md:leading-none font-normal text-[#1d1d1d]"
              style={{ fontFamily: 'var(--font-dream-cottage)' }}
            >
              {work.title}
            </h3>
            <p 
              className="text-[16px] md:text-[20px] lg:text-[24px] leading-tight text-[#898989]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              {work.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Right: CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="self-start md:self-auto"
        >
          <Link
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 px-3 py-2.5 border border-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white transition-colors group"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            <span className="text-[14px] md:text-[16px] lg:text-[20px] leading-tight font-bold tracking-[0.05em] whitespace-nowrap">
              {work.cta}
            </span>
            <motion.svg 
              width="20" 
              height="20"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:w-6 md:h-6"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </motion.svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Thumbnail Container */}
      <motion.div
        className="relative w-full max-w-full md:max-w-[640px] aspect-4/3 bg-[#e3f5ff] rounded-lg overflow-hidden group"
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link href={work.link} target="_blank" rel="noopener noreferrer">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              className="object-contain"
            />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
