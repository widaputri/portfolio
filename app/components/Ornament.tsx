'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface OrnamentProps {
  flipped?: boolean;
}

export default function Ornament({ flipped = false }: OrnamentProps) {
  return (
    <motion.div
      className="relative w-[120px] h-[75px] sm:w-[150px] sm:h-[93px] md:w-[175.816px] md:h-[109.62px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
      >
        <Image
          src="/58e4725ebb7af99ca02bd8f91c20e2a83a0f59d0.svg"
          alt=""
          fill
          className={`object-contain ${flipped ? 'scale-y-[-1]' : ''}`}
        />
      </motion.div>
    </motion.div>
  );
}
