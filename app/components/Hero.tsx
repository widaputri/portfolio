'use client';

import { motion } from 'framer-motion';
import Ornament from './Ornament';

export default function Hero() {
  const words = [
    { text: 'Growth-Driver,', color: '#898989' },
    { text: 'Product-Obsessed,', color: '#1d1d1d' },
    { text: 'Solution-Crafter.', color: '#898989' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-[120px] pt-24 md:pt-32 lg:pt-[221px] pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-[1440px] mx-auto w-full px-0 lg:px-[60px]">
        <div className="flex flex-col gap-6 md:gap-9">
          <motion.h1 
            className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] leading-none text-[#1d1d1d] max-w-full lg:max-w-[936px]"
            style={{ 
              fontFamily: 'var(--font-dream-cottage)',
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} style={{ color: word.color, display: 'inline-block', whiteSpace: 'nowrap' }} className="mr-2">
                {word.text.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    variants={charVariants}
                    style={{ display: 'inline-block' }}
                    whileHover={{ 
                      scale: 1.2, 
                      color: word.color === '#898989' ? '#1d1d1d' : '#898989',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          
          {/* Decorative arrow element */}
          <motion.div 
            className="relative w-20 h-[55px] md:w-[100px] md:h-[68px] lg:w-[120px] lg:h-[82px]"
            initial={{ opacity: 0, x: -50, rotate: -45 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotate: 0,
              transition: {
                delay: 1.5,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <Ornament />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
