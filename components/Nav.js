'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { driver } from '../data/content';

const links = [
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Results' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#video', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-[#060D1F]/70 border-b border-[#E8005A]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" data-hover>
          <span className="font-display text-2xl tracking-wider">{driver.monogram}</span>
          <span className="font-mono-label" style={{ color: 'var(--pink)' }}>
            #{driver.carNumber}
          </span>
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-label hover:text-[#E8005A] transition-colors"
                data-hover
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={driver.instagram}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="font-mono-label px-4 py-2 border border-[#E8005A] text-[#E8005A] hover:bg-[#E8005A] hover:text-white transition-all duration-300"
          >
            Follow
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
