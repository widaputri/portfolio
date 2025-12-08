'use client';

import { motion } from 'framer-motion';
import Header from './components/Header';
import Ornament from './components/Ornament';
import Works from './components/Works';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Animated Lava Lamp Background */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: `
          radial-gradient(ellipse 1400px 1100px at 0% 0%, #38bdf8 0%, transparent 55%),
          radial-gradient(ellipse 1200px 1000px at 100% 0%, #ff8844 0%, transparent 60%),
          radial-gradient(ellipse 1600px 1200px at 45% 30%, #ffc933 0%, transparent 65%),
          radial-gradient(ellipse 900px 700px at 90% 50%, #ff99cc 0%, transparent 55%),
          radial-gradient(ellipse 1300px 1000px at 0% 100%, #5fd4f4 0%, transparent 60%),
          radial-gradient(ellipse 1100px 900px at 100% 100%, #ff8844 0%, transparent 60%),
          radial-gradient(ellipse 1500px 1100px at 50% 130%, #ffc933 0%, transparent 65%),
          radial-gradient(ellipse 800px 600px at 10% 120%, #c084fc 0%, transparent 55%),
          linear-gradient(180deg, #bae6fd 0%, #fde68a 50%, #ddd6fe 100%)
          `,
          backgroundSize: '100% 100%'
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 100% 0%, 45% 30%, 90% 50%, 0% 100%, 100% 100%, 50% 130%, 10% 120%, 0% 0%',
            '10% 10%, 90% 10%, 55% 40%, 80% 60%, 10% 90%, 90% 90%, 60% 120%, 20% 110%, 0% 0%',
            '0% 0%, 100% 0%, 45% 30%, 90% 50%, 0% 100%, 100% 100%, 50% 130%, 10% 120%, 0% 0%'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-0">
        <div className="w-full max-w-[935.642px] mx-auto flex flex-col items-center gap-6 md:gap-9 mt-[200px] md:mt-0">
          {/* Top Ornament */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="scale-75 md:scale-100"
          >
            <Ornament flipped />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-bold text-white leading-none text-center w-full px-4"
            style={{ 
              fontFamily: 'var(--font-caveat)',
              textShadow: '0px 4px 13.6px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Problem-Solver,
            </motion.span>{' '}
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Product-Thinker,
            </motion.span>{' '}
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Challenge-Taker
            </motion.span>
          </motion.h1>

          {/* Name */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-50 tracking-[0.15em] md:tracking-[2.4px] text-center"
            style={{ 
              fontFamily: 'var(--font-instrument)',
              textShadow: '0px 4px 6.2px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            WIDA PUTRI
          </motion.p>

          {/* Bottom Ornament */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="scale-75 md:scale-100"
          >
            <Ornament />
          </motion.div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 md:right-12 z-10"
        style={{ filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.3))' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Works Section */}
      <Works />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
