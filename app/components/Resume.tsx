'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    date: 'Jan-Aug 2025',
    title: 'Product Design Intern',
    company: 'SPUN',
    achievements: [
      'Contributed to website revamp, directly contributing to 3x growth in MAU from xxK to xxxK',
      'Redesigned and simplified user login and checkout flows, resulting in 40% increase in CVR',
      'Led design of internal tools, leading to 30% MoM decrease in operational TAT'
    ]
  },
  {
    date: 'June-Sept 2024',
    title: 'Design Intern',
    company: 'GlobalDeel',
    achievements: [
      'Designed complete UI/UX for globalhack.co website',
      'Developed comprehensive brand guidelines and promotional materials for GlobalHack'
    ]
  }
];

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <section id="resume" className="relative px-6 md:px-12 lg:px-[120px] bg-[#f4fbff]">
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
            Resume
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="pt-8 md:pt-12 lg:pt-16 flex flex-col">
          {experiences.map((exp, index) => (
            <div key={index}>
              <motion.div
                className="flex flex-col md:grid md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr] gap-4 md:gap-8 lg:gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
              {/* Date Column */}
              <motion.div 
                className="pt-0 md:pt-2"
                variants={itemVariants}
              >
                <p 
                  className="text-[16px] md:text-[18px] lg:text-[20px] leading-tight text-[#898989] font-semibold"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {exp.date}
                </p>
              </motion.div>

              {/* Content Column */}
              <div className="space-y-6 md:space-y-8 lg:space-y-12">
                {/* Title and Company */}
                <motion.div variants={itemVariants}>
                  <motion.h3 
                    className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-tight md:leading-none font-bold text-[#1d1d1d] mb-2"
                    style={{ fontFamily: 'var(--font-dream-cottage)' }}
                    whileHover={{ 
                      x: 10, 
                      color: '#898989',
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p 
                    className="text-[18px] md:text-[20px] lg:text-[24px] leading-tight text-[#898989] font-medium mt-2 md:mt-4"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    {exp.company}
                  </p>
                </motion.div>

                {/* Achievements */}
                <motion.ul className="space-y-4 md:space-y-6 lg:space-y-8" variants={itemVariants}>
                  {exp.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i}
                      className="flex gap-4 md:gap-6 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed md:leading-[30px] text-[#1d1d1d]"
                      style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                      custom={i}
                      variants={achievementVariants}
                      whileHover={{ 
                        x: 10,
                        transition: { type: "spring", stiffness: 300, damping: 15 }
                      }}
                    >
                      <motion.span 
                        className="text-[24px] md:text-[28px] lg:text-[30px] leading-none text-[#898989]"
                        whileHover={{ 
                          scale: 1.3, 
                          color: '#1d1d1d',
                          transition: { duration: 0.2 }
                        }}
                      >
                        —
                      </motion.span>
                      <span className="flex-1">{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
            {index < experiences.length - 1 && (
              <div className="h-px bg-[#1d1d1d] my-8 md:my-12 lg:my-16" />
            )}
          </div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          className="flex justify-center py-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            href="https://ristek.link/ResumeWida"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#1d1d1d] text-[20px] leading-5 font-bold text-[#1d1d1d] hover:bg-[#1d1d1d] hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-plus-jakarta)', letterSpacing: '0.05em' }}
          >
            SEE MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
