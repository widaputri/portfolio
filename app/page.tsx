'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div id="top" className="relative bg-[#f4fbff] space-y-60 overflow-x-hidden w-full">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Works Section */}
      <Works />

      {/* Resume Section */}
      <Resume />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
